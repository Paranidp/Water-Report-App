// ══════════════════════════════════════════
//  CONFIG
// ══════════════════════════════════════════
var FB_URL = 'https://water-issue-reporting-app-default-rtdb.firebaseio.com';
var ADMIN_USER = 'Parani';
var ADMIN_PASS = 'Parani@2008';

// ══════════════════════════════════════════
//  FIX 1: CartoDB tiles — no "Access blocked"
//  Works from local files AND GitHub Pages
// ══════════════════════════════════════════
var TILE_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
var TILE_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>';

// ══════════════════════════════════════════
//  LANGUAGE TRANSLATIONS
// ══════════════════════════════════════════
var LANG = 'en';

var I18N = {
    en: {
        tagline: 'Community Water Issue Reporter', createAccount: 'Create Account',
        fullName: 'Full Name', username: 'Username', phone: 'Phone Number',
        password: 'Password', confirmPassword: 'Confirm Password',
        createAccountBtn: 'Create Account →', haveAccount: 'Already have an account?',
        logIn: 'Log In', welcomeBack: 'Welcome Back 👋', logInBtn: 'Log In →',
        noAccount: "Don't have an account?", signUp: 'Sign Up', logout: 'Logout',
        hello: 'Hello', homeSubtitle: 'Report water issues to help your community.',
        myReports: 'My Reports', resolved: 'Resolved', reportIssue: 'Report Issue',
        tapToReport: 'Tap to report', trackStatus: 'Track status',
        infoBanner: 'ℹ️ Your reports are private. Only you and the admin can see your submissions.',
        home: 'Home', report: 'Report', map: 'My Map', mine: 'Mine', back: 'Back',
        reportTitle: 'Report Water Issue', reportSub: 'Your report goes directly to the admin',
        step1: '1. What type of issue?', step2: '2. Describe the problem',
        voiceNote: 'Record Voice Note', recording: '🔴 Recording... tap to stop',
        step3: '3. Location details', autoLocation: 'Use My Current Location',
        district: 'District', city: 'City / Area', landmark: 'Landmark / Street (optional)',
        pinMap: 'Pin on map', tapPin: '(tap to drop pin)',
        tapMap: 'Tap the map to mark exact location',
        step5: '5. Upload photo proof', tapUpload: 'Tap to upload a photo',
        step6: '6. Your phone number', phoneNote: 'Shared with admin only for follow-up',
        submitReport: '✅ Submit Report', myMap: 'My Issue Map',
        mapNote: 'Showing only your reported issues',
        myReportsSub: 'Only you can see these. Admin updates status after resolution.',
        leakage: 'Leakage', contamination: 'Contamination', noWater: 'No Water Supply',
        flood: 'Flood', drainage: 'Drainage Block', pipeBurst: 'Pipe Burst',
        sewage: 'Sewage Overflow', other: 'Other',
        gpsDetecting: '📍 Detecting your location...', gpsSuccess: '✅ Location detected!',
        gpsError: '❌ Could not get location. Please pin manually.',
    },
    ta: {
        tagline: 'சமூக நீர் பிரச்சினை புகாரளிப்பாளர்', createAccount: 'கணக்கு உருவாக்கு',
        fullName: 'முழு பெயர்', username: 'பயனர்பெயர்', phone: 'தொலைபேசி எண்',
        password: 'கடவுச்சொல்', confirmPassword: 'கடவுச்சொல் உறுதிப்படுத்து',
        createAccountBtn: 'கணக்கு உருவாக்கு →', haveAccount: 'ஏற்கனவே கணக்கு உள்ளதா?',
        logIn: 'உள்நுழை', welcomeBack: 'மீண்டும் வருக 👋', logInBtn: 'உள்நுழை →',
        noAccount: 'கணக்கு இல்லையா?', signUp: 'பதிவு செய்', logout: 'வெளியேறு',
        hello: 'வணக்கம்', homeSubtitle: 'நீர் பிரச்சினைகளை புகாரளிக்கவும்.',
        myReports: 'என் புகார்கள்', resolved: 'தீர்க்கப்பட்டது', reportIssue: 'புகார் அளி',
        tapToReport: 'தட்டி புகாரளி', trackStatus: 'நிலையை கண்காணி',
        infoBanner: 'ℹ️ உங்கள் புகார்கள் தனிப்பட்டவை. நீங்களும் நிர்வாகியும் மட்டுமே பார்க்க முடியும்.',
        home: 'முகப்பு', report: 'புகார்', map: 'என் வரைபடம்', mine: 'என்னுடையது', back: 'பின்செல்',
        reportTitle: 'நீர் பிரச்சினை புகாரளி', reportSub: 'உங்கள் புகார் நேரடியாக நிர்வாகிக்கு செல்லும்',
        step1: '1. என்ன வகை பிரச்சினை?', step2: '2. பிரச்சினையை விவரி',
        voiceNote: 'குரல் குறிப்பு பதிவு செய்', recording: '🔴 பதிவு செய்கிறது... நிறுத்த தட்டு',
        step3: '3. இருப்பிட விவரங்கள்', autoLocation: 'என் தற்போதைய இருப்பிடத்தை பயன்படுத்து',
        district: 'மாவட்டம்', city: 'நகரம் / பகுதி', landmark: 'அடையாளம் / தெரு (விரும்பினால்)',
        pinMap: 'வரைபடத்தில் குறி', tapPin: '(தட்டி குறி வை)',
        tapMap: 'சரியான இடத்தை தட்டவும்',
        step5: '5. புகைப்பட சான்று பதிவேற்று', tapUpload: 'புகைப்படம் பதிவேற்ற தட்டு',
        step6: '6. உங்கள் தொலைபேசி எண்', phoneNote: 'நிர்வாகியுடன் மட்டுமே பகிரப்படும்',
        submitReport: '✅ புகார் சமர்ப்பி', myMap: 'என் பிரச்சினை வரைபடம்',
        mapNote: 'உங்கள் புகார்கள் மட்டும் காட்டப்படுகின்றன',
        myReportsSub: 'இவற்றை நீங்கள் மட்டுமே பார்க்க முடியும்.',
        leakage: 'கசிவு', contamination: 'மாசு', noWater: 'நீர் வராமல்',
        flood: 'வெள்ளம்', drainage: 'கழிவுநீர் அடைப்பு', pipeBurst: 'குழாய் வெடிப்பு',
        sewage: 'கழிவுநீர்넘침', other: 'மற்றவை',
        gpsDetecting: '📍 இருப்பிடம் கண்டறிகிறது...', gpsSuccess: '✅ இருப்பிடம் கண்டறியப்பட்டது!',
        gpsError: '❌ இருப்பிடம் கிடைக்கவில்லை. கைமுறையாக குறியிடவும்.',
    },
    ml: {
        tagline: 'കമ്മ്യൂണിറ്റി ജല പ്രശ്ന റിപ്പോർട്ടർ', createAccount: 'അക്കൗണ്ട് ഉണ്ടാക്കുക',
        fullName: 'മുഴുവൻ പേര്', username: 'ഉപയോക്തൃനാമം', phone: 'ഫോൺ നമ്പർ',
        password: 'പാസ്‌വേഡ്', confirmPassword: 'പാസ്‌വേഡ് സ്ഥിരീകരിക്കുക',
        createAccountBtn: 'അക്കൗണ്ട് ഉണ്ടാക്കുക →', haveAccount: 'ഇതിനകം അക്കൗണ്ട് ഉണ്ടോ?',
        logIn: 'ലോഗിൻ', welcomeBack: 'തിരിച്ചു സ്വാഗതം 👋', logInBtn: 'ലോഗിൻ →',
        noAccount: 'അക്കൗണ്ട് ഇല്ലേ?', signUp: 'സൈൻ അപ്', logout: 'ലോഗ് ഔട്ട്',
        hello: 'നമസ്കാരം', homeSubtitle: 'ജല പ്രശ്നങ്ങൾ റിപ്പോർട്ട് ചെയ്യുക.',
        myReports: 'എന്റെ റിപ്പോർട്ടുകൾ', resolved: 'പരിഹരിച്ചു', reportIssue: 'പ്രശ്നം റിപ്പോർട്ട് ചെയ്യുക',
        tapToReport: 'ടാപ്പ് ചെയ്ത് റിപ്പോർട്ട് ചെയ്യുക', trackStatus: 'സ്റ്റാറ്റസ് ട്രാക്ക് ചെയ്യുക',
        infoBanner: 'ℹ️ നിങ്ങളുടെ റിപ്പോർട്ടുകൾ സ്വകാര്യമാണ്.',
        home: 'ഹോം', report: 'റിപ്പോർട്ട്', map: 'എന്റെ ഭൂപടം', mine: 'എന്റേത്', back: 'മടങ്ങുക',
        reportTitle: 'ജല പ്രശ്നം റിപ്പോർട്ട് ചെയ്യുക', reportSub: 'നിങ്ങളുടെ റിപ്പോർട്ട് നേരിട്ട് അഡ്മിനിലേക്ക്',
        step1: '1. ഏത് തരം പ്രശ്നം?', step2: '2. പ്രശ്നം വിവരിക്കുക',
        voiceNote: 'വോയ്‌സ് നോട്ട് റെക്കോർഡ് ചെയ്യുക', recording: '🔴 റെക്കോർഡ് ചെയ്യുന്നു...',
        step3: '3. സ്ഥാന വിശദാംശങ്ങൾ', autoLocation: 'എന്റെ നിലവിലെ സ്ഥാനം ഉപയോഗിക്കുക',
        district: 'ജില്ല', city: 'നഗരം / പ്രദേശം', landmark: 'ലാൻഡ്‌മാർക്ക് (ഐച്ഛികം)',
        pinMap: 'ഭൂപടത്തിൽ അടയാളപ്പെടുത്തുക', tapPin: '(ടാപ്പ് ചെയ്ത് പിൻ ഇടുക)',
        tapMap: 'കൃത്യമായ സ്ഥാനം ടാപ്പ് ചെയ്യുക',
        step5: '5. ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക', tapUpload: 'ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യാൻ ടാപ്പ് ചെയ്യുക',
        step6: '6. ഫോൺ നമ്പർ', phoneNote: 'അഡ്മിനുമായി മാത്രം പങ്കിടുന്നു',
        submitReport: '✅ റിപ്പോർട്ട് സമർപ്പിക്കുക', myMap: 'എന്റെ ഭൂപടം',
        mapNote: 'നിങ്ങളുടെ റിപ്പോർട്ടുകൾ മാത്രം',
        myReportsSub: 'ഇവ നിങ്ങൾക്ക് മാത്രം കാണാൻ കഴിയും.',
        leakage: 'ചോർച്ച', contamination: 'മലിനീകരണം', noWater: 'വെള്ളം ഇല്ല',
        flood: 'വെള്ളപ്പൊക്കം', drainage: 'ഡ്രെയിനേജ് തടസ്സം', pipeBurst: 'പൈപ്പ് പൊട്ടൽ',
        sewage: 'മലിനജലം', other: 'മറ്റുള്ളവ',
        gpsDetecting: '📍 സ്ഥാനം കണ്ടെത്തുന്നു...', gpsSuccess: '✅ സ്ഥാനം കണ്ടെത്തി!',
        gpsError: '❌ സ്ഥാനം ലഭിച്ചില്ല. കൈകൊണ്ട് അടയാളപ്പെടുത്തുക.',
    }
};

function setLang(lang) {
    LANG = lang;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('lang-' + lang).classList.add('active');
    var t = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        var key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
}

function tr(key) {
    return (I18N[LANG] && I18N[LANG][key]) ? I18N[LANG][key] : (I18N['en'][key] || key);
}

// ══════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════
var session = null;
var selectedType = '';
var selLat = null, selLng = null;
var reportMapObj = null, reportPin = null;
var userMapObj = null, userMarkers = [];
var adminMapObj = null;
var imgBase64 = null;
var allIssues = {};
var mediaRecorder = null, audioChunks = [], voiceBase64 = null, isRecording = false;

// ══════════════════════════════════════════
//  FIREBASE HELPERS
// ══════════════════════════════════════════
function fbGet(path) { return fetch(FB_URL + path + '.json').then(r => r.json()); }
function fbSet(path, data) { return fetch(FB_URL + path + '.json', { method: 'PUT', body: JSON.stringify(data) }).then(r => r.json()); }
function fbPush(path, data) { return fetch(FB_URL + path + '.json', { method: 'POST', body: JSON.stringify(data) }).then(r => r.json()); }
function fbPatch(path, data) { return fetch(FB_URL + path + '.json', { method: 'PATCH', body: JSON.stringify(data) }).then(r => r.json()); }

var CITIES = {
    Coimbatore: ['Coimbatore City', 'Gandhipuram', 'RS Puram', 'Peelamedu', 'Saibaba Colony', 'Singanallur', 'Ukkadam', 'Kuniyamuthur', 'Thudiyalur', 'Perur', 'Mettupalayam', 'Pollachi', 'Valparai', 'Annur', 'Sulur'],
    Chennai: ['Anna Nagar', 'Adyar', 'T Nagar', 'Velachery', 'Tambaram', 'Porur', 'Chrompet', 'Sholinganallur', 'Perambur', 'Ambattur'],
    Madurai: ['Madurai City', 'Anna Nagar', 'KK Nagar', 'Arappalayam', 'Simmakkal', 'Tallakulam'],
    Salem: ['Salem City', 'Shevapet', 'Fairlands', 'Ammapet', 'Suramangalam'],
    Trichy: ['Trichy City', 'Srirangam', 'Ariyamangalam', 'Thillai Nagar', 'Woraiyur'],
    Erode: ['Erode City', 'Bhavani', 'Perundurai', 'Gobichettipalayam']
};

var HINTS = {
    'Leakage': '💧 Note if water is wasting continuously or intermittently, and the pipe location.',
    'Contamination': '☠️ Describe the color/smell. Avoid using the water.',
    'No Water Supply': '🚱 Mention since when supply stopped and if the whole area is affected.',
    'Flood': '🌊 Note the water level and area covered. Mention if roads are blocked.',
    'Drainage Block': '🚧 Describe overflow severity. Is it a manhole or street drain?',
    'Pipe Burst': '💥 Dangerous! Note if it is a main line or house connection.',
    'Sewage Overflow': '🤢 Public health risk. Describe smell and extent of spread.',
    'Other': '📌 Please describe the issue clearly so admin can act quickly.'
};

var TYPE_ICON = { 'Leakage': '💧', 'Contamination': '☠️', 'No Water Supply': '🚱', 'Flood': '🌊', 'Drainage Block': '🚧', 'Pipe Burst': '💥', 'Sewage Overflow': '🤢', 'Other': '📌' };
var COLOR_MAP = { 'Leakage': 'red', 'Contamination': 'orange', 'No Water Supply': 'blue', 'Flood': 'violet', 'Drainage Block': 'green', 'Pipe Burst': 'gold', 'Sewage Overflow': 'black', 'Other': 'grey' };

// ══════════════════════════════════════════
//  TOAST
// ══════════════════════════════════════════
function toast(msg, color) {
    var t = document.getElementById('toast');
    t.textContent = msg; t.style.background = color || '#0077cc';
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2600);
}

// ══════════════════════════════════════════
//  ROUTING
// ══════════════════════════════════════════
function goTo(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-' + screen).classList.add('active');
    window.scrollTo(0, 0);
    if (screen === 'home') initHome();
    if (screen === 'report') initReport();
    if (screen === 'map') initUserMap();
    if (screen === 'myreports') initMyReports();
    if (screen === 'admin') initAdmin();
}

// ══════════════════════════════════════════
//  AUTH
// ══════════════════════════════════════════
async function register() {
    var name = document.getElementById('reg-name').value.trim();
    var user = document.getElementById('reg-user').value.trim().toLowerCase();
    var phone = document.getElementById('reg-phone').value.trim();
    var pass = document.getElementById('reg-pass').value;
    var confirm = document.getElementById('reg-confirm').value;

    if (!name || !user || !phone || !pass)
        return toast('⚠️ Please fill all fields', '#e63946');

    if (pass.length < 6)
        return toast('⚠️ Password min 6 characters', '#e63946');

    if (pass !== confirm)
        return toast('⚠️ Passwords do not match', '#e63946');

    try {
        // 🔍 Check if username already exists (loop through users)
        var users = await fbGet('/users') || {};

        for (var key in users) {
            if (users[key].username === user) {
                return toast('⚠️ Username already taken', '#e63946');
            }
        }

        // ✅ Create unique ID instead of using username as key
        var userId = 'u_' + Date.now();

        await fbSet('/users/' + userId, {
            name: name,
            username: user,
            phone: phone,
            password: pass
        });

        toast('✅ Account created! Please log in.', '#2dc653');
        setTimeout(() => goTo('login'), 1200);

    } catch (e) {
        toast('❌ Error connecting to database', '#e63946');
    }
}

async function login() {
    var user = document.getElementById('log-user').value.trim().toLowerCase();
    var pass = document.getElementById('log-pass').value;
    if (!user || !pass) return toast('⚠️ Enter username and password', '#e63946');
    try {
        var found = await fbGet('/users/' + user);
        if (!found || found.password !== pass) return toast('❌ Wrong username or password', '#e63946');
        session = { name: found.name, username: found.username, phone: found.phone };
        localStorage.setItem('ww_session', JSON.stringify(session));
        toast('✅ Welcome, ' + found.name + '!', '#2dc653');
        setTimeout(() => goTo('home'), 900);
    } catch (e) { toast('❌ Error connecting to database', '#e63946'); }
}

function logout() {
    if (confirm('Logout from WaterWatch?')) { session = null; localStorage.removeItem('ww_session'); goTo('login'); }
}

function adminLogin() {
    var u = document.getElementById('adm-user').value.trim();
    var p = document.getElementById('adm-pass').value;
    if (u === ADMIN_USER && p === ADMIN_PASS) { toast('✅ Welcome, Admin!', '#2dc653'); setTimeout(() => goTo('admin'), 900); }
    else toast('❌ Wrong admin credentials', '#e63946');
}

function adminLogout() { if (confirm('Logout from admin panel?')) goTo('login'); }

// ══════════════════════════════════════════
//  HOME
// ══════════════════════════════════════════
async function initHome() {
    if (!session) { goTo('login'); return; }
    document.getElementById('greetName').textContent = session.name.split(' ')[0];
    document.getElementById('topName').textContent = session.name.split(' ')[0];
    try {
        var issues = await fbGet('/issues');
        var mine = issues ? Object.values(issues).filter(i => i.username === session.username) : [];
        document.getElementById('myCount').textContent = mine.length;
        document.getElementById('resolvedCount').textContent = mine.filter(i => i.status === 'Resolved').length;
    } catch (e) { }
}

// ══════════════════════════════════════════
//  REPORT FORM
// ══════════════════════════════════════════
function initReport() {
    if (!session) { goTo('login'); return; }
    document.getElementById('r-phone').value = session.phone || '';
    selectedType = ''; selLat = null; selLng = null; imgBase64 = null; voiceBase64 = null; isRecording = false;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
    document.getElementById('typeHint').style.display = 'none';
    document.getElementById('r-desc').value = '';
    document.getElementById('r-district').value = '';
    document.getElementById('r-city').value = '';
    document.getElementById('r-landmark').value = '';
    document.getElementById('coordNote').textContent = tr('tapMap');
    document.getElementById('imgPreview').style.display = 'none';
    document.getElementById('upIcon').style.display = 'block';
    document.getElementById('upText').style.display = 'block';
    document.getElementById('voicePlayback').style.display = 'none';
    document.getElementById('voiceStatus').textContent = '';
    document.getElementById('voiceBtn').style.background = '';
    document.getElementById('voiceBtn').style.color = '';
    document.getElementById('gpsStatus').textContent = '';
    document.getElementById('gpsStatus').style.color = '';

    setTimeout(() => {
        if (!reportMapObj) {
            reportMapObj = L.map('reportMap').setView([11.0168, 76.9558], 12);
            L.tileLayer(TILE_URL, { attribution: TILE_ATTR, subdomains: 'abcd', maxZoom: 19 }).addTo(reportMapObj);
            reportMapObj.on('click', function (e) {
                selLat = e.latlng.lat; selLng = e.latlng.lng;
                if (reportPin) reportMapObj.removeLayer(reportPin);
                reportPin = L.marker([selLat, selLng]).addTo(reportMapObj).bindPopup('📍 Issue here').openPopup();
                document.getElementById('coordNote').textContent = 'Pinned: ' + selLat.toFixed(5) + ', ' + selLng.toFixed(5);
            });
        } else { reportMapObj.invalidateSize(); }
    }, 100);
}

function selectType(el, type) {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected'); selectedType = type;
    var h = document.getElementById('typeHint');
    h.style.display = 'block'; h.textContent = HINTS[type] || '';
}

// District and city are now free-text inputs — no dropdown loading needed

function previewImg(input) {
    if (!input.files[0]) return;
    var reader = new FileReader();
    reader.onload = function (e) {
        imgBase64 = e.target.result;
        document.getElementById('imgPreview').src = imgBase64;
        document.getElementById('imgPreview').style.display = 'block';
        document.getElementById('upIcon').style.display = 'none';
        document.getElementById('upText').style.display = 'none';
    };
    reader.readAsDataURL(input.files[0]);
}

// ══════════════════════════════════════════
//  AUTO GPS — pin + ALWAYS auto-fills District & City
//  Uses GPS coordinate distance matching so it
//  ALWAYS fills both fields — user only types landmark
// ══════════════════════════════════════════

// Each city has a GPS coordinate centre point
// Distance matching picks the closest city to the user's GPS
var CITY_COORDS = {
    Coimbatore: [
        { name: 'Coimbatore City', lat: 11.0168, lng: 76.9558 },
        { name: 'Gandhipuram', lat: 11.0168, lng: 76.9558 },
        { name: 'RS Puram', lat: 11.0024, lng: 76.9602 },
        { name: 'Peelamedu', lat: 11.0275, lng: 77.0198 },
        { name: 'Saibaba Colony', lat: 11.0238, lng: 76.9394 },
        { name: 'Singanallur', lat: 11.0080, lng: 77.0339 },
        { name: 'Ukkadam', lat: 10.9897, lng: 76.9629 },
        { name: 'Kuniyamuthur', lat: 10.9738, lng: 76.9351 },
        { name: 'Thudiyalur', lat: 11.0675, lng: 76.9714 },
        { name: 'Perur', lat: 10.9751, lng: 76.9231 },
        { name: 'Mettupalayam', lat: 11.2984, lng: 76.9364 },
        { name: 'Pollachi', lat: 10.6590, lng: 77.0073 },
        { name: 'Valparai', lat: 10.3271, lng: 76.9548 },
        { name: 'Annur', lat: 11.1825, lng: 77.1090 },
        { name: 'Sulur', lat: 11.0237, lng: 77.1248 }
    ],
    Chennai: [
        { name: 'Anna Nagar', lat: 13.0850, lng: 80.2101 },
        { name: 'Adyar', lat: 13.0012, lng: 80.2565 },
        { name: 'T Nagar', lat: 13.0418, lng: 80.2341 },
        { name: 'Velachery', lat: 12.9785, lng: 80.2209 },
        { name: 'Tambaram', lat: 12.9249, lng: 80.1000 },
        { name: 'Porur', lat: 13.0364, lng: 80.1573 },
        { name: 'Chrompet', lat: 12.9516, lng: 80.1462 },
        { name: 'Sholinganallur', lat: 12.9010, lng: 80.2279 },
        { name: 'Perambur', lat: 13.1143, lng: 80.2329 },
        { name: 'Ambattur', lat: 13.1143, lng: 80.1548 }
    ],
    Madurai: [
        { name: 'Madurai City', lat: 9.9252, lng: 78.1198 },
        { name: 'Anna Nagar', lat: 9.9374, lng: 78.1100 },
        { name: 'KK Nagar', lat: 9.9350, lng: 78.1050 },
        { name: 'Arappalayam', lat: 9.9200, lng: 78.1300 },
        { name: 'Simmakkal', lat: 9.9160, lng: 78.1210 },
        { name: 'Tallakulam', lat: 9.9310, lng: 78.1170 }
    ],
    Salem: [
        { name: 'Salem City', lat: 11.6643, lng: 78.1460 },
        { name: 'Shevapet', lat: 11.6700, lng: 78.1380 },
        { name: 'Fairlands', lat: 11.6750, lng: 78.1600 },
        { name: 'Ammapet', lat: 11.6580, lng: 78.1550 },
        { name: 'Suramangalam', lat: 11.6900, lng: 78.1700 }
    ],
    Trichy: [
        { name: 'Trichy City', lat: 10.7905, lng: 78.7047 },
        { name: 'Srirangam', lat: 10.8637, lng: 78.6888 },
        { name: 'Ariyamangalam', lat: 10.8200, lng: 78.7500 },
        { name: 'Thillai Nagar', lat: 10.8000, lng: 78.6900 },
        { name: 'Woraiyur', lat: 10.8100, lng: 78.7200 }
    ],
    Erode: [
        { name: 'Erode City', lat: 11.3410, lng: 77.7172 },
        { name: 'Bhavani', lat: 11.4454, lng: 77.6836 },
        { name: 'Perundurai', lat: 11.2750, lng: 77.5880 },
        { name: 'Gobichettipalayam', lat: 11.4540, lng: 77.4330 }
    ]
};

// District centre coordinates — used to find closest district
var DISTRICT_CENTRES = {
    Coimbatore: { lat: 11.0168, lng: 76.9558 },
    Chennai: { lat: 13.0827, lng: 80.2707 },
    Madurai: { lat: 9.9252, lng: 78.1198 },
    Salem: { lat: 11.6643, lng: 78.1460 },
    Trichy: { lat: 10.7905, lng: 78.7047 },
    Erode: { lat: 11.3410, lng: 77.7172 }
};

// Calculate distance in km between two lat/lng points
function calcDist(lat1, lng1, lat2, lng2) {
    var R = 6371;
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLng = (lng2 - lng1) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Find closest district to GPS point
function findClosestDistrict(lat, lng) {
    var best = null, bestDist = Infinity;
    Object.keys(DISTRICT_CENTRES).forEach(function (d) {
        var c = DISTRICT_CENTRES[d];
        var dist = calcDist(lat, lng, c.lat, c.lng);
        if (dist < bestDist) { bestDist = dist; best = d; }
    });
    return best;
}

// Find closest city within a district to GPS point
function findClosestCity(district, lat, lng) {
    var cities = CITY_COORDS[district];
    if (!cities) return null;
    var best = null, bestDist = Infinity;
    cities.forEach(function (c) {
        var dist = calcDist(lat, lng, c.lat, c.lng);
        if (dist < bestDist) { bestDist = dist; best = c.name; }
    });
    return best;
}

// Fill district text input
function fillDistrict(district) {
    document.getElementById('r-district').value = district;
}

// Fill city text input
function fillCity(district, city) {
    document.getElementById('r-city').value = city || '';
}

function autoDetectLocation() {
    var gpsEl = document.getElementById('gpsStatus');
    if (!navigator.geolocation) {
        gpsEl.textContent = tr('gpsError'); gpsEl.style.color = '#e63946'; return;
    }
    gpsEl.textContent = tr('gpsDetecting'); gpsEl.style.color = '#0077cc';

    navigator.geolocation.getCurrentPosition(
        function (pos) {
            selLat = pos.coords.latitude;
            selLng = pos.coords.longitude;

            // Step 1: Drop pin on map immediately
            var doPin = function () {
                reportMapObj.setView([selLat, selLng], 16);
                if (reportPin) reportMapObj.removeLayer(reportPin);
                reportPin = L.marker([selLat, selLng])
                    .addTo(reportMapObj)
                    .bindPopup('📍 Your current location')
                    .openPopup();
                document.getElementById('coordNote').textContent =
                    'Pinned: ' + selLat.toFixed(5) + ', ' + selLng.toFixed(5);
            };
            if (reportMapObj) doPin(); else setTimeout(doPin, 500);

            // Step 2: Find closest district by distance — ALWAYS fills
            var district = findClosestDistrict(selLat, selLng);
            fillDistrict(district);

            // Step 3: Find closest city within that district — ALWAYS fills
            var city = findClosestCity(district, selLat, selLng);
            fillCity(district, city);

            // Step 4: Show success — user only needs to enter landmark
            gpsEl.textContent = '✅ ' + district + ' › ' + city + ' — Please enter landmark only';
            gpsEl.style.color = '#2dc653';

            // Move landmark field into focus so user can type easily
            setTimeout(function () {
                document.getElementById('r-landmark').focus();
            }, 400);
        },
        function () { gpsEl.textContent = tr('gpsError'); gpsEl.style.color = '#e63946'; },
        { timeout: 10000, enableHighAccuracy: true }
    );
}

// ══════════════════════════════════════════
//  VOICE NOTE
// ══════════════════════════════════════════
async function toggleVoice() {
    var btn = document.getElementById('voiceBtn');
    var statusEl = document.getElementById('voiceStatus');
    var playback = document.getElementById('voicePlayback');

    if (!isRecording) {
        try {
            var stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            audioChunks = []; mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
            mediaRecorder.onstop = function () {
                var blob = new Blob(audioChunks, { type: 'audio/webm' });
                playback.src = URL.createObjectURL(blob); playback.style.display = 'block';
                var reader = new FileReader();
                reader.onload = e => { voiceBase64 = e.target.result; };
                reader.readAsDataURL(blob);
                statusEl.textContent = '✅ Voice note saved'; statusEl.style.color = '#2dc653';
                btn.style.background = ''; btn.style.color = '';
                btn.innerHTML = '🎙️ <span>' + tr('voiceNote') + '</span>';
                stream.getTracks().forEach(t => t.stop());
            };
            mediaRecorder.start(); isRecording = true;
            btn.style.background = '#e63946'; btn.style.color = '#fff';
            btn.innerHTML = '⏹️ <span>' + tr('recording') + '</span>';
            statusEl.textContent = '';
        } catch (e) { toast('❌ Microphone access denied', '#e63946'); }
    } else { mediaRecorder.stop(); isRecording = false; }
}

// ══════════════════════════════════════════
//  SUBMIT REPORT
// ══════════════════════════════════════════
async function submitReport() {
    if (!selectedType) return toast('⚠️ Select an issue type', '#e63946');
    if (!document.getElementById('r-desc').value.trim() && !voiceBase64) return toast('⚠️ Add a description or voice note', '#e63946');
    if (!document.getElementById('r-district').value.trim()) return toast('⚠️ Enter your district', '#e63946');
    if (!document.getElementById('r-city').value.trim()) return toast('⚠️ Enter your city / area', '#e63946');

    var report = {
        type: selectedType, desc: document.getElementById('r-desc').value.trim(),
        district: document.getElementById('r-district').value.trim(), city: document.getElementById('r-city').value.trim(),
        landmark: document.getElementById('r-landmark').value.trim(), phone: document.getElementById('r-phone').value.trim(),
        latitude: selLat, longitude: selLng, image: imgBase64, voiceNote: voiceBase64 || null,
        username: session.username, userFullName: session.name,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        status: 'Pending', adminNote: '', lang: LANG
    };

    try {
        toast('⏳ Submitting...', '#0077cc');
        await fbPush('/issues', report);
        toast('✅ Report submitted! Admin will review it.', '#2dc653');
        setTimeout(() => goTo('home'), 1400);
    } catch (e) { toast('❌ Failed to submit. Check connection.', '#e63946'); }
}

// ══════════════════════════════════════════
//  USER MAP
// ══════════════════════════════════════════
async function initUserMap() {
    if (!session) { goTo('login'); return; }
    setTimeout(async () => {
        if (!userMapObj) {
            userMapObj = L.map('userMap').setView([11.0168, 76.9558], 12);
            L.tileLayer(TILE_URL, { attribution: TILE_ATTR, subdomains: 'abcd', maxZoom: 19 }).addTo(userMapObj);
        } else { userMapObj.invalidateSize(); }
        userMarkers.forEach(m => userMapObj.removeLayer(m)); userMarkers = [];
        try {
            var issues = await fbGet('/issues');
            if (!issues) return;
            Object.values(issues).filter(i => i.username === session.username).forEach(issue => {
                if (!issue.latitude || !issue.longitude) return;
                var color = COLOR_MAP[issue.type] || 'grey';
                var icon = L.icon({ iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-' + color + '.png', shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png', iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34] });
                var m = L.marker([issue.latitude, issue.longitude], { icon }).addTo(userMapObj)
                    .bindPopup('<b>' + issue.type + '</b><br/>📍 ' + issue.city + ', ' + issue.district + '<br/>Status: <b>' + issue.status + '</b>');
                userMarkers.push(m);
            });
        } catch (e) { }
    }, 100);
}

// ══════════════════════════════════════════
//  MY REPORTS
// ══════════════════════════════════════════
async function initMyReports() {
    if (!session) { goTo('login'); return; }
    var el = document.getElementById('myReportList');
    el.innerHTML = '<div class="loading-spinner">⏳ Loading your reports…</div>';
    try {
        var issues = await fbGet('/issues');
        if (!issues) { el.innerHTML = '<div class="empty"><div class="e-icon">📭</div><p>No reports yet.</p></div>'; return; }
        var mine = Object.entries(issues).filter(([k, v]) => v.username === session.username).map(([k, v]) => ({ ...v, fbKey: k })).reverse();
        if (!mine.length) { el.innerHTML = '<div class="empty"><div class="e-icon">📭</div><p>No issues reported yet.</p><br/><button class="btn btn-primary" style="max-width:200px;margin:10px auto 0;" onclick="goTo(\'report\')">Report Now →</button></div>'; return; }

        el.innerHTML = mine.map(issue => {
            var statusClass = issue.status === 'Resolved' ? 'resolved' : issue.status === 'Reviewing' ? 'reviewing' : 'pending';
            var extraBanner = issue.status === 'Resolved'
                ? '<div class="solved-banner">✅ <b>Issue Resolved!</b> Thank you for reporting!' + (issue.adminNote ? '<br/>📝 ' + issue.adminNote : '') + '</div>'
                : issue.status === 'Reviewing'
                    ? '<div class="reviewing-banner">🔍 Admin is reviewing this issue.' + (issue.adminNote ? '<br/>📝 ' + issue.adminNote : '') + '</div>' : '';
            var voiceHtml = issue.voiceNote ? '<div style="margin-top:10px;"><p style="font-size:0.78rem;color:var(--text2);margin-bottom:4px;">🎙️ Voice Note:</p><audio controls src="' + issue.voiceNote + '" style="width:100%;border-radius:8px;"></audio></div>' : '';
            return '<div class="card"><div class="report-item"><div class="report-icon">' + (TYPE_ICON[issue.type] || '📌') + '</div><div class="report-body" style="flex:1;"><h4>' + issue.type + '</h4><div class="r-loc">📍 ' + issue.city + ', ' + issue.district + (issue.landmark ? ' · ' + issue.landmark : '') + '</div><div class="r-meta">📅 ' + issue.date + (issue.phone ? ' · 📞 ' + issue.phone : '') + '</div><div style="margin-top:7px;"><span class="badge badge-' + statusClass + '">' + issue.status + '</span></div></div></div>' + (issue.desc ? '<p style="font-size:0.83rem;color:var(--text2);margin-top:10px;line-height:1.5;">' + issue.desc + '</p>' : '') + voiceHtml + (issue.image ? '<img src="' + issue.image + '" style="width:100%;border-radius:10px;margin-top:10px;max-height:170px;object-fit:cover;"/>' : '') + extraBanner + '</div>';
        }).join('');
    } catch (e) { el.innerHTML = '<div class="empty"><div class="e-icon">⚠️</div><p>Failed to load. Check your connection.</p></div>'; }
}

// ══════════════════════════════════════════
//  ADMIN
// ══════════════════════════════════════════
async function initAdmin() {
    var el = document.getElementById('adminReportList');
    el.innerHTML = '<div class="loading-spinner">⏳ Loading all reports…</div>';
    try {
        var issues = await fbGet('/issues');
        allIssues = issues || {};
        var arr = Object.values(allIssues);
        document.getElementById('aTotal').textContent = arr.length;
        document.getElementById('aPending').textContent = arr.filter(i => i.status === 'Pending').length;
        document.getElementById('aResolved').textContent = arr.filter(i => i.status === 'Resolved').length;

        // Always rebuild map cleanly
        if (adminMapObj) { adminMapObj.remove(); adminMapObj = null; }
        adminMapObj = L.map('adminMap').setView([11.0168, 76.9558], 10);
        L.tileLayer(TILE_URL, { attribution: TILE_ATTR, subdomains: 'abcd', maxZoom: 19 }).addTo(adminMapObj);

        // FIX 3: only Pending + Reviewing pins shown
        refreshAdminMarkers();
        setTimeout(() => adminMapObj.invalidateSize(), 300);

        renderAdmin();
    } catch (e) { el.innerHTML = '<div class="empty"><div class="e-icon">⚠️</div><p>Failed to load reports.</p></div>'; }
}

// Only Pending and Reviewing show on map — Resolved disappear
function refreshAdminMarkers() {
    if (!adminMapObj) return;
    adminMapObj.eachLayer(l => { if (l instanceof L.Marker) adminMapObj.removeLayer(l); });
    Object.values(allIssues).forEach(issue => {
        if (issue.status === 'Resolved') return;   // ← skip resolved
        if (!issue.latitude || !issue.longitude) return;
        var color = COLOR_MAP[issue.type] || 'grey';
        var icon = L.icon({ iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-' + color + '.png', shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png', iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34] });
        L.marker([issue.latitude, issue.longitude], { icon }).addTo(adminMapObj)
            .bindPopup('<b>' + issue.type + '</b><br/>📍 ' + issue.city + ', ' + issue.district + '<br/>👤 ' + issue.userFullName + '<br/>📞 ' + (issue.phone || 'N/A') + '<br/>Status: <b>' + issue.status + '</b>');
    });
}

function renderAdmin() {
    var issues = Object.entries(allIssues).map(([k, v]) => ({ ...v, fbKey: k }));
    var statusF = document.getElementById('aFilterStatus').value;
    var typeF = document.getElementById('aFilterType').value;
    var filtered = issues.filter(i => (statusF === 'All Status' || i.status === statusF) && (typeF === 'All Types' || i.type === typeF)).reverse();
    var el = document.getElementById('adminReportList');
    if (!filtered.length) { el.innerHTML = '<div class="empty"><div class="e-icon">🔍</div><p>No reports match the filter.</p></div>'; return; }

    el.innerHTML = filtered.map(issue => {
        var voiceHtml = issue.voiceNote ? '<div class="info-row"><span class="info-label">🎙️ Voice</span><audio controls src="' + issue.voiceNote + '" style="flex:1;border-radius:6px;height:36px;"></audio></div>' : '';
        return '<div class="admin-report-card"><div class="arc-head"><h3>' + (TYPE_ICON[issue.type] || '📌') + ' ' + issue.type + '</h3><select class="status-sel" onchange="updateStatus(\'' + issue.fbKey + '\',this.value)"><option ' + (issue.status === 'Pending' ? 'selected' : '') + '>Pending</option><option ' + (issue.status === 'Reviewing' ? 'selected' : '') + '>Reviewing</option><option ' + (issue.status === 'Resolved' ? 'selected' : '') + '>Resolved</option></select></div><div class="arc-body"><div class="info-row"><span class="info-label">👤 Reporter</span><span>' + issue.userFullName + ' (@' + issue.username + ')</span></div><div class="info-row"><span class="info-label">📞 Phone</span><span>' + (issue.phone || '—') + '</span></div><div class="info-row"><span class="info-label">📍 Location</span><span>' + issue.city + ', ' + issue.district + (issue.landmark ? ' · ' + issue.landmark : '') + '</span></div>' + (issue.latitude ? '<div class="info-row"><span class="info-label">🗺️ GPS</span><span>' + issue.latitude.toFixed(5) + ', ' + issue.longitude.toFixed(5) + '</span></div>' : '') + '<div class="info-row"><span class="info-label">📅 Date</span><span>' + issue.date + '</span></div><div class="info-row"><span class="info-label">📝 Description</span><span>' + (issue.desc || '—') + '</span></div>' + voiceHtml + '<div class="info-row"><span class="info-label">📌 Note</span><input class="admin-note-input" type="text" id="note-' + issue.fbKey + '" value="' + (issue.adminNote || '') + '" placeholder="Note visible to user…" onblur="saveNote(\'' + issue.fbKey + '\')" /></div>' + (issue.image ? '<img src="' + issue.image + '" class="arc-img" alt="Issue photo"/>' : '<p style="font-size:0.78rem;color:var(--text3);margin-top:6px;">📷 No photo uploaded</p>') + '</div></div>';
    }).join('');
}

async function updateStatus(fbKey, newStatus) {
    try {
        await fbPatch('/issues/' + fbKey, { status: newStatus });
        allIssues[fbKey].status = newStatus;
        var arr = Object.values(allIssues);
        document.getElementById('aPending').textContent = arr.filter(i => i.status === 'Pending').length;
        document.getElementById('aResolved').textContent = arr.filter(i => i.status === 'Resolved').length;
        refreshAdminMarkers(); // resolved pin disappears instantly
        toast('✅ Status updated → ' + newStatus, '#2dc653');
    } catch (e) { toast('❌ Failed to update status', '#e63946'); }
}

async function saveNote(fbKey) {
    var note = document.getElementById('note-' + fbKey).value;
    try { await fbPatch('/issues/' + fbKey, { adminNote: note }); allIssues[fbKey].adminNote = note; } catch (e) { }
}

// ══════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════
(function init() {
    var saved = localStorage.getItem('ww_session');
    if (saved) { session = JSON.parse(saved); goTo('home'); }
    else goTo('signup');
})();
