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


/* ---- Bill UPI Routing (Using App Launcher Intents) ---- */
// Reverted back to the intents that act exactly like tapping the app icon
const intentGPay = 'intent://#Intent;action=android.intent.action.MAIN;category=android.intent.category.LAUNCHER;package=com.google.android.apps.nbu.paisa.user;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user;end';
const intentPhonePe = 'intent://#Intent;action=android.intent.action.MAIN;category=android.intent.category.LAUNCHER;package=com.phonepe.app;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.phonepe.app;end';
const intentPaytm = 'intent://#Intent;action=android.intent.action.MAIN;category=android.intent.category.LAUNCHER;package=net.one97.paytm;S.browser_fallback_url=https://play.google.com/store/apps/details?id=net.one97.paytm;end';

const billLinks = {
    electricity: { title: '⚡ Electricity Bill', gpay: intentGPay, phonepe: intentPhonePe, paytm: intentPaytm },
    mobile:      { title: '📱 Mobile Recharge', gpay: intentGPay, phonepe: intentPhonePe, paytm: intentPaytm },
    water:       { title: '🚰 Water Bill', gpay: intentGPay, phonepe: intentPhonePe, paytm: intentPaytm },
    ott:         { title: '🎬 OTT / DTH', gpay: intentGPay, phonepe: intentPhonePe, paytm: intentPaytm },
    gas:         { title: '🔥 Gas Booking', gpay: intentGPay, phonepe: intentPhonePe, paytm: intentPaytm },
    other:       { title: '💳 Other Payment', gpay: intentGPay, phonepe: intentPhonePe, paytm: intentPaytm }
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
