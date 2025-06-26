// ✅ Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAm7bKotH4ly67inPPdruhppa42fWYH5OY",
  authDomain: "omolayoschool-29c90.firebaseapp.com",
  projectId: "omolayoschool-29c90",
  storageBucket: "omolayoschool-29c90.firebasestorage.app",
  messagingSenderId: "92639111131",
  appId: "1:92639111131:web:d7cc04cff3da1b97d0e9fe"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Handle form login
document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  try {
    const userCred = await signInWithEmailAndPassword(auth, email, pass);
    const user = userCred.user;

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const role = userSnap.data().role;
      if (role === "admin") location.href = "admin-dashboard.html";
      else if (role === "teacher") location.href = "teacher-dashboard.html";
      else if (role === "student") location.href = "student-dashboard.html";
      else alert("❌ Role not recognized.");
    } else {
      alert("User role document not found in Firestore.");
    }
  } catch (err) {
    alert("Login failed: " + err.message);
  }
});
