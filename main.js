/* ============================================================
   DIGITAL SAHAYAM — main.js
   Core logic for Sheets, Deep Links, and Video handling
   ============================================================ */

/* ---- Bottom Sheet UI Logic ---- */
function openSheet(id) {
    const sheet = document.getElementById(id);
    if(sheet) {
        sheet.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeSheet(id) {
    const sheet = document.getElementById(id);
    if(sheet) {
        sheet.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// Close sheet if clicking outside the white box
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('sheet-overlay')) {
        closeSheet(e.target.id);
    }
});


/* ---- WhatsApp Location Logic ---- */
const locationBtn = document.getElementById('btn-location');
if (locationBtn) {
    locationBtn.addEventListener('click', function() {
        if (!navigator.geolocation) {
            window.open('https://wa.me/?text=మీ%20location%20share%20చేయండి', '_blank');
            return;
        }
        navigator.geolocation.getCurrentPosition(
            function(pos) {
                const lat = pos.coords.latitude;
                const lon = pos.coords.longitude;
                const msg = encodeURIComponent(
                    '📍 నా location:\nhttps://maps.google.com/?q=' + lat + ',' + lon +
                    '\n\nPlease come help me! / దయచేసి నాకు సహాయం చేయండి!'
                );
                // Try WhatsApp deep link
                window.location.href = 'whatsapp://send?text=' + msg;
                // Fallback UI Toast
                setTimeout(() => {
                    const toast = document.getElementById('location-toast');
                    if (toast) {
                        toast.style.display = 'block';
                        setTimeout(() => { toast.style.display = 'none'; }, 3500);
                    }
                }, 800);
            },
            function() {
                // Permission denied fallback
                window.location.href = 'whatsapp://send?text=' + encodeURIComponent('📍 నా location share చేయండి!');
            }
        );
    });
}


/* ---- Bill UPI Routing (Direct Deep Links) ---- */
// These links will attempt to jump directly to specific app sections
// without ever falling back to the Google Play Store.

const billLinks = {
    electricity: { 
        title: '⚡ Electricity Bill', 
        gpay:    'gpay://upi/pay?pa=TSSPDCL@ybl&pn=TSSPDCL', 
        phonepe: 'phonepe://pay?pa=TSSPDCL@ybl', 
        paytm:   'paytmmp://pay?pa=TSSPDCL@ybl' 
    },
    mobile: { 
        title: '📱 Mobile Recharge', 
        gpay:    'gpay://upi/recharge', 
        phonepe: 'phonepe://recharge', 
        paytm:   'paytmmp://recharge' 
    },
    water: { 
        title: '🚰 Water Bill', 
        gpay:    'gpay://', 
        phonepe: 'phonepe://', 
        paytm:   'paytmmp://' 
    },
    ott: { 
        title: '🎬 OTT / DTH', 
        gpay:    'gpay://upi/recharge', 
        phonepe: 'phonepe://recharge', 
        paytm:   'paytmmp://recharge' 
    },
    gas: { 
        title: '🔥 Gas Booking', 
        gpay:    'gpay://', 
        phonepe: 'phonepe://', 
        paytm:   'paytmmp://' 
    },
    other: { 
        title: '💳 Other Payment', 
        gpay:    'gpay://', 
        phonepe: 'phonepe://', 
        paytm:   'paytmmp://' 
    }
};

document.querySelectorAll('.bill-trigger').forEach(btn => {
    btn.addEventListener('click', function() {
        const type = this.getAttribute('data-type');
        closeSheet('bill-sheet');
        
        const b = billLinks[type];
        document.getElementById('upi-bill-title').textContent = b.title;
        document.getElementById('gpay-bill-link').href    = b.gpay;
        document.getElementById('phonepe-bill-link').href = b.phonepe;
        document.getElementById('paytm-bill-link').href   = b.paytm;
        
        setTimeout(() => openSheet('upi-bill-sheet'), 150);
    });
});

/* ---- Video Page Logic (YouTube Lazy Load & Filtering) ---- */
document.querySelectorAll('.video-thumb').forEach(thumb => {
    thumb.addEventListener('click', function() {
        const videoId = this.getAttribute('data-vid');
        const wrapper = this.parentElement;
        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube-nocookie.com/embed/' + videoId + '?autoplay=1&rel=0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none';
        wrapper.innerHTML = '';
        wrapper.appendChild(iframe);
    });
});

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const filterTarget = this.getAttribute('data-filter');
        
        // Active Class Toggle
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Section Filtering
        document.querySelectorAll('.cat-sec').forEach(sec => {
            if (filterTarget === 'all' || sec.getAttribute('data-cat') === filterTarget) {
                sec.classList.add('visible');
            } else {
                sec.classList.remove('visible');
            }
        });
    });
});
