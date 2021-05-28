import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDXcb76NxbGIvBueGoy1d6q_aaPznaPl2M",
  authDomain: "mhookata-65cc0.firebaseapp.com",
  projectId: "mhookata-65cc0",
  storageBucket: "mhookata-65cc0.appspot.com",
  messagingSenderId: "264723385496",
  appId: "1:264723385496:web:dc0e39c2d15f6c1fcc94ed",
  measurementId: "G-CD5QC9WJSH",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
