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

// Reference to create topic form
const createTopicForm = document.getElementById('createTopicForm');

// Function to handle form submission
createTopicForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const title = createTopicForm['topicTitle'].value;
  const content = createTopicForm['topicContent'].value;

  // Call function to create topic
  createTopic(title, content);
});

// Function to create a new topic
function createTopic(title, content) {
  // Add new document to 'topics' collection
  db.collection('topics').add({
    title: title,
    content: content,
    created_at: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(function(docRef) {
    console.log('New topic created with ID: ', docRef.id);
    // Redirect to home page or display success message
  })
  .catch(function(error) {
    console.error('Error creating topic: ', error);
    // Display error message to the user
  });
}
