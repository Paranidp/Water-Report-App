# 💧 WaterWatch
### Community Water Issue Reporting System

A mobile-friendly web application that allows community members to report water-related issues directly to the admin. Built with pure HTML, CSS, and JavaScript — hosted free on GitHub Pages, powered by Firebase Realtime Database.

🌐 **Live Website:** [https://paranidp.github.io/Waterwatch./](https://paranidp.github.io/Waterwatch./)

---

## 📱 Screenshots

| Screen | Description |
|---|---|
| Signup / Login | Create account and log in securely |
| Home | View your report count and resolved count |
| Report Issue | 6-step form with GPS, photo, voice note |
| My Reports | Track status of your submitted reports |
| My Map | See your issues pinned on an interactive map |
| Admin Panel | Admin-only dashboard to manage all reports |

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 User Accounts | Signup, login, logout with username & password |
| 📝 Report Issues | 8 issue types — Leakage, Contamination, No Water, Flood, Drainage Block, Pipe Burst, Sewage Overflow, Other |
| 📍 Auto GPS Location | One tap fills district, city, and drops map pin automatically |
| ✏️ Manual Location | Users can type any district and city freely |
| 🎙️ Voice Note | Record voice description — useful for illiterate users |
| 📷 Photo Upload | Upload photo proof with the report |
| 🌐 3 Languages | English, தமிழ் (Tamil), മലയാളം (Malayalam) |
| 🗺️ My Map | Interactive map showing only the logged-in user's issues |
| 🔒 Private Reports | Users see only their own reports — fully private |
| ✅ Status Updates | Admin marks Resolved → user sees green "Resolved" banner instantly |
| 📝 Admin Notes | Admin can write notes on each report — visible to the user |
| 👨‍💼 Admin Dashboard | Secret admin panel — view all reports, update status, play voice notes |
| ☁️ Firebase Cloud | All data saved in real-time cloud — visible across all devices |
| 🗺️ Admin Map | Shows all Pending and Reviewing issues — resolved pins disappear |

---

## 📁 Project Structure

```
WaterWatch/
├── index.html     → All HTML screens in one file
├── style.css      → All styles — layout, cards, buttons, language bar
├── app.js         → All JavaScript — Firebase, GPS, maps, voice, language
└── README.md      → This file
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | All screens — signup, login, home, report, map, admin |
| CSS3 | Responsive mobile layout, animations, components |
| Vanilla JavaScript | Routing, forms, Firebase, GPS, voice, maps |
| Firebase Realtime Database | Cloud storage — all users and reports |
| Leaflet.js | Interactive maps |
| CartoDB Tiles | Map tiles (no "Access blocked" error) |
| Web MediaRecorder API | Voice note recording in the browser |
| Haversine Formula | GPS distance matching for auto district/city fill |
| Google Fonts | Plus Jakarta Sans + Outfit |
| GitHub Pages | Free static website hosting |

---

## 👤 How It Works — User Flow

```
Sign Up → Log In → Home
                     ↓
              Report Issue
                     ↓
         Select Issue Type (8 types)
                     ↓
         Write Description / Record Voice Note
                     ↓
         Tap "Use My Location" → GPS fills District + City + Map Pin
         (OR type District and City manually)
                     ↓
         Add Landmark (optional)
         Upload Photo (optional)
                     ↓
         Submit Report → Saved to Firebase
                     ↓
         Admin sees report → Updates Status
                     ↓
         User sees ✅ Resolved in My Reports
```

---

## 🔐 How It Works — Admin Flow

```
Login Page → Admin Login (secret button)
                     ↓
         Enter Admin Username + Password
                     ↓
         Admin Dashboard
           - See all reports from all users
           - View map with Pending/Reviewing pins
           - Filter by Status or Issue Type
           - Change status: Pending → Reviewing → Resolved
           - Add note to user
           - Play voice note recorded by user
           - Resolved pins disappear from admin map
```

---

## 📍 Auto Location — How It Works

1. User taps **"Use My Current Location"** button
2. Browser asks for GPS permission
3. GPS coordinates are detected
4. **Map zooms and drops a pin** at exact location
5. App calculates **distance to all known district centres** (Haversine formula)
6. **Nearest district is filled** automatically in the District field
7. **Nearest city is filled** automatically in the City field
8. User only needs to type the **Landmark** — everything else is done

> If the auto-filled district/city is wrong, the user can simply type over it — both fields are editable text boxes.

---

## 🌐 Language Support

Switch language anytime using the bar at the top of every screen:

| Language | Script |
|---|---|
| English | Latin |
| Tamil | தமிழ் |
| Malayalam | മലയാളം |

All labels, buttons, hints, and messages switch instantly without reloading.

---

## 🎙️ Voice Note — For Illiterate Users

1. Tap **🎙️ Record Voice Note** button in the report form
2. Browser asks for microphone permission
3. Speak the problem clearly
4. Tap **⏹️ Stop** to finish recording
5. Audio preview appears — user can listen before submitting
6. Voice note is saved with the report
7. **Admin can play back** the voice note in the admin panel

---

## 🔒 Privacy & Security

| Rule | Details |
|---|---|
| Private reports | Each user sees only their own reports |
| Admin access | Hidden — no visible link for regular users |
| Admin credentials | Known only to the administrator |
| No cross-user data | Users cannot see each other's reports |

---

## 🐛 Bugs Fixed

| Bug | Solution |
|---|---|
| OpenStreetMap "Access blocked" error | Switched to CartoDB tiles — works everywhere |
| Admin map blank after opening | Map fully rebuilt on every admin page visit |
| GPS pin not dropping on map | Map zoom + auto-pin on GPS success |
| Resolved issues still showing on admin map | Resolved markers skipped in `refreshAdminMarkers()` |
| Wrong city auto-filled (e.g. Singanallur for Chettipalayam) | Replaced with free-text inputs — user types any city |
| Status change not reflecting on map instantly | `refreshAdminMarkers()` called after every status update |

---

## 📊 Issue Types

| Icon | Type |
|---|---|
| 💧 | Leakage |
| ☠️ | Contamination |
| 🚱 | No Water Supply |
| 🌊 | Flood |
| 🚧 | Drainage Block |
| 💥 | Pipe Burst |
| 🤢 | Sewage Overflow |
| 📌 | Other |

---

## 🗄️ Firebase Database Structure

```
Firebase Realtime Database
├── users/
│     └── username/
│           ├── name
│           ├── username
│           ├── phone
│           └── password
│
└── issues/
      └── -auto_key/
            ├── type
            ├── desc
            ├── district
            ├── city
            ├── landmark
            ├── phone
            ├── latitude
            ├── longitude
            ├── image (base64)
            ├── voiceNote (base64)
            ├── username
            ├── userFullName
            ├── date
            ├── status        ← Pending / Reviewing / Resolved
            ├── adminNote
            └── lang
```

---

## 🚀 How to Deploy on GitHub Pages

1. Create a new repository on GitHub
2. Upload all 4 files: `index.html`, `style.css`, `app.js`, `README.md`
3. Go to **Settings → Pages**
4. Set source: **main branch**, root `/`
5. Click Save — site goes live in ~1 minute
6. Share the link: `https://your-username.github.io/repo-name/`

---

## ⚙️ Firebase Setup Steps

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Create a new project
3. Go to **Build → Realtime Database → Create Database**
4. Start in **test mode**
5. Copy the database URL into `app.js` as `FB_URL`
6. Done — no backend or server needed

---

## 👨‍💻 Developer

**Parani D P**
Student Project — Water Issue Community Reporting App
Built with HTML, CSS, JavaScript, and Firebase
Hosted on GitHub Pages

---

## 📄 License

This project is open source and free to use for educational and community purposes.
