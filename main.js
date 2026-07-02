/* ============================================================
   DIGITAL SAHAYAM — main.js  (v3 — No Play Store Redirects)
   Balance  : Missed Call / SMS Banking / USSD / ATM
   Bills    : Official Websites / WhatsApp Pay / Mee Seva
   NO intent:// links anywhere in this file
   ============================================================ */


/* ---------------------------------------------------------------
   BOTTOM SHEET — Open / Close
--------------------------------------------------------------- */
function openSheet(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeSheet(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Tap outside sheet-box → close
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('sheet-overlay')) {
    closeSheet(e.target.id);
  }
});


/* ---------------------------------------------------------------
   WHATSAPP LOCATION
--------------------------------------------------------------- */
const locationBtn = document.getElementById('btn-location');
if (locationBtn) {
  locationBtn.addEventListener('click', function () {
    if (!navigator.geolocation) {
      window.open('https://wa.me/?text=నా%20location%20share%20చేయండి', '_blank');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      function (pos) {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const msg = encodeURIComponent(
          '📍 నా location:\nhttps://maps.google.com/?q=' + lat + ',' + lon +
          '\n\nPlease come help me! / దయచేసి నాకు సహాయం చేయండి!'
        );
        window.location.href = 'whatsapp://send?text=' + msg;
        setTimeout(function () {
          const toast = document.getElementById('location-toast');
          if (toast) {
            toast.style.display = 'block';
            setTimeout(function () { toast.style.display = 'none'; }, 3500);
          }
        }, 800);
      },
      function () {
        window.location.href = 'whatsapp://send?text=' +
          encodeURIComponent('📍 నా location share చేయండి!');
      }
    );
  });
}


/* ---------------------------------------------------------------
   BILL PAYMENT — Pay Guide Configuration
   All options use official websites, WhatsApp, or Mee Seva.
   Zero intent:// links — Zero Play Store redirects.
--------------------------------------------------------------- */
const PAY_GUIDE = {

  electricity_ap: {
    title: '⚡ AP Electricity Bill Pay',
    sub: 'మీ District DISCOM official website లో pay చేయండి',
    options: [
      {
        icon: '🌐',
        name: 'APEPDCL — AP North',
        sub: 'Vizag, Srikakulam, Vizianagaram, East & West Godavari జిల్లాలు',
        href: 'https://www.apepdcl.in/eservices',
        cls: 'pay-website',
        external: true
      },
      {
        icon: '🌐',
        name: 'APSPDCL — AP South',
        sub: 'Guntur, Krishna, Nellore, Kurnool, Kadapa, Chittoor జిల్లాలు',
        href: 'https://www.apspdcl.in/quickpay',
        cls: 'pay-website',
        external: true
      },
      {
        icon: '💚',
        name: 'WhatsApp Pay',
        sub: 'WhatsApp తెరవండి → Pay → Bills → Electricity',
        href: 'whatsapp://',
        cls: 'pay-whatsapp',
        external: false
      },
      {
        icon: '🏪',
        name: 'Mee Seva Center',
        sub: 'దగ్గర Mee Seva కేంద్రంలో pay చేయండి — సహాయం అందుతుంది',
        href: 'https://www.google.com/maps/search/Mee+Seva+center+near+me',
        cls: 'pay-meeseva',
        external: true
      }
    ]
  },

  electricity_ts: {
    title: '⚡ Telangana Electricity Bill Pay',
    sub: 'మీ District DISCOM official website లో pay చేయండి',
    options: [
      {
        icon: '🌐',
        name: 'TSSPDCL — TS South',
        sub: 'Hyderabad, Rangareddy, Nalgonda, Mahbubnagar, Khammam జిల్లాలు',
        href: 'https://www.tssouthernpower.com/',
        cls: 'pay-website',
        external: true
      },
      {
        icon: '🌐',
        name: 'TSNPDCL — TS North',
        sub: 'Warangal, Karimnagar, Nizamabad, Adilabad జిల్లాలు',
        href: 'https://www.tsnpdcl.in/',
        cls: 'pay-website',
        external: true
      },
      {
        icon: '💚',
        name: 'WhatsApp Pay',
        sub: 'WhatsApp తెరవండి → Pay → Bills → Electricity',
        href: 'whatsapp://',
        cls: 'pay-whatsapp',
        external: false
      },
      {
        icon: '🏪',
        name: 'Mee Seva Center',
        sub: 'దగ్గర Mee Seva / CSC కేంద్రంలో pay చేయండి',
        href: 'https://www.google.com/maps/search/Mee+Seva+center+near+me',
        cls: 'pay-meeseva',
        external: true
      }
    ]
  },

  scan: {
    title: '📷 QR Code Scan చేసి Pay చేయండి',
    sub: 'మీ UPI app తెరిచి Scan చేయండి',
    options: [
      {
        icon: '💚',
        name: 'WhatsApp Pay — Scan',
        sub: 'WhatsApp తెరవండి → Pay → Scan QR code',
        href: 'whatsapp://',
        cls: 'pay-whatsapp',
        external: false
      },
      {
        icon: '📲',
        name: 'UPI App లో Scan చేయండి',
        sub: 'మీ Phone Pay / Google Pay app తెరవండి → Scan (📷) button నొక్కండి → QR code scan చేయండి',
        href: null,
        cls: 'pay-info',
        external: false
      },
      {
        icon: '🏪',
        name: 'Mee Seva Center',
        sub: 'QR bill printout తీసుకుని దగ్గర Mee Seva వద్దకు వెళ్ళండి',
        href: 'https://www.google.com/maps/search/Mee+Seva+center+near+me',
        cls: 'pay-meeseva',
        external: true
      }
    ]
  },

  other: {
    title: '💳 Payment చేయండి',
    sub: 'మీకు అనువైన పద్ధతి ఎంచుకోండి',
    options: [
      {
        icon: '💚',
        name: 'WhatsApp Pay',
        sub: 'WhatsApp తెరవండి → Pay → చెల్లించండి',
        href: 'whatsapp://',
        cls: 'pay-whatsapp',
        external: false
      },
      {
        icon: '🏪',
        name: 'Mee Seva Center',
        sub: 'దగ్గర Mee Seva కేంద్రంలో payment చేయండి — సహాయం అందుతుంది',
        href: 'https://www.google.com/maps/search/Mee+Seva+center+near+me',
        cls: 'pay-meeseva',
        external: true
      },
      {
        icon: '🏧',
        name: 'Bank Branch / ATM',
        sub: 'దగ్గర Bank Branch లేదా ATM వద్ద payment చేయండి',
        href: 'https://www.google.com/maps/search/bank+near+me',
        cls: 'pay-website',
        external: true
      }
    ]
  }

};


/* ---------------------------------------------------------------
   OPEN PAY GUIDE SHEET — Inject dynamic content
--------------------------------------------------------------- */
function openPayGuide(key) {
  const cfg = PAY_GUIDE[key];
  if (!cfg) return;

  document.getElementById('pgs-title').textContent = cfg.title;
  document.getElementById('pgs-sub').textContent   = cfg.sub;

  const grid = document.getElementById('pgs-options');
  grid.innerHTML = cfg.options.map(function (opt) {
    // pay-info cards are non-clickable instruction cards
    if (!opt.href) {
      return '<div class="pay-option ' + opt.cls + '">' +
               '<span class="pay-opt-icon">' + opt.icon + '</span>' +
               '<div class="pay-opt-info">' +
                 '<div class="pay-opt-name">' + opt.name + '</div>' +
                 '<div class="pay-opt-sub">'  + opt.sub  + '</div>' +
               '</div>' +
             '</div>';
    }
    const target = opt.external ? 'target="_blank" rel="noopener"' : '';
    return '<a class="pay-option ' + opt.cls + '" href="' + opt.href + '" ' + target + '>' +
             '<span class="pay-opt-icon">' + opt.icon + '</span>' +
             '<div class="pay-opt-info">' +
               '<div class="pay-opt-name">' + opt.name + '</div>' +
               '<div class="pay-opt-sub">'  + opt.sub  + '</div>' +
             '</div>' +
           '</a>';
  }).join('');

  openSheet('pay-guide-sheet');
}


/* ---------------------------------------------------------------
   BILL TYPE SELECTION
--------------------------------------------------------------- */
document.querySelectorAll('.bill-trigger').forEach(function (btn) {
  btn.addEventListener('click', function () {
    const type = this.getAttribute('data-type');
    closeSheet('bill-sheet');

    if (type === 'electricity') {
      // Go to state selector first
      setTimeout(function () { openSheet('state-sheet'); }, 160);

    } else if (type === 'mobile') {
      // Show telecom website selector
      setTimeout(function () { openSheet('telecom-sheet'); }, 160);

    } else if (type === 'scan') {
      // Show scan instructions
      setTimeout(function () { openPayGuide('scan'); }, 160);

    } else {
      // Other — WhatsApp Pay + Mee Seva
      setTimeout(function () { openPayGuide('other'); }, 160);
    }
  });
});


/* ---------------------------------------------------------------
   STATE SELECTION — Electricity Bills
--------------------------------------------------------------- */
document.querySelectorAll('.state-trigger').forEach(function (btn) {
  btn.addEventListener('click', function () {
    const state = this.getAttribute('data-state'); // 'ap' or 'ts'
    closeSheet('state-sheet');
    setTimeout(function () {
      openPayGuide('electricity_' + state);
    }, 160);
  });
});


/* ---------------------------------------------------------------
   VIDEO PAGE — YouTube Lazy Load & Category Filter
--------------------------------------------------------------- */
document.querySelectorAll('.video-thumb').forEach(function (thumb) {
  thumb.addEventListener('click', function () {
    const videoId = this.getAttribute('data-vid');
    const wrapper = this.parentElement;
    const iframe  = document.createElement('iframe');
    iframe.src    = 'https://www.youtube-nocookie.com/embed/' + videoId + '?autoplay=1&rel=0';
    iframe.allow  = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.cssText   = 'position:absolute;inset:0;width:100%;height:100%;border:none';
    wrapper.innerHTML = '';
    wrapper.appendChild(iframe);
  });
});

document.querySelectorAll('.tab-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    const filterTarget = this.getAttribute('data-filter');

    document.querySelectorAll('.tab-btn').forEach(function (b) {
      b.classList.remove('active');
    });
    this.classList.add('active');

    document.querySelectorAll('.cat-sec').forEach(function (sec) {
      if (filterTarget === 'all' || sec.getAttribute('data-cat') === filterTarget) {
        sec.classList.add('visible');
      } else {
        sec.classList.remove('visible');
      }
    });
  });
});
