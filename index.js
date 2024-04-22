
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqbaHNHq-z5hmhIW4Tnzl0--Wm5Aj49gE",
  authDomain: "alif-495ff.firebaseapp.com",
  projectId: "alif-495ff",
  storageBucket: "alif-495ff.appspot.com",
  messagingSenderId: "636697141623",
  appId: "1:636697141623:web:f6bbef53e973cf24df4172",
  measurementId: "G-GWD6ZQJS0L"
};

firebase.initializeApp(firebaseConfig);

// Reference to Firestore database
const db = firebase.firestore();

// Function to fetch recent topics
function fetchRecentTopics() {
  // Your code to fetch recent topics from Firestore
}

// Function to fetch recent posts
function fetchRecentPosts() {
  // Your code to fetch recent posts from Firestore
}

// Function to fetch recent questions
function fetchRecentQuestions() {
  // Your code to fetch recent questions from Firestore
}

// Call functions to fetch recent topics, posts, and questions
fetchRecentTopics();
fetchRecentPosts();
fetchRecentQuestions();
