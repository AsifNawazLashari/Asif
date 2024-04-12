// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZ4IjtvPGypB84evukROyNHwBvkhGyBkM",
            authDomain: "alif-ac574.firebaseapp.com",
            projectId: "alif-ac574",
            storageBucket: "alif-ac574.appspot.com",
            messagingSenderId: "261987716644",
            appId: "1:261987716644:web:02d0beeee8a04f998a12b1",
            measurementId: "G-YGQ1V6489M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

// Function to extract topic ID from URL parameter
function getTopicIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Retrieve and display topic details
const topicId = getTopicIdFromUrl();
if (topicId) {
    // Code to fetch and display topic details
    // For simplicity, let's assume the topic name is fetched from the database
    const topicName = "Sample Topic"; // Replace with actual topic name
    document.getElementById('topic-name').textContent = topicName;

    // Retrieve and display posts associated with the topic
    db.ref('posts').orderByChild('topicId').equalTo(topicId).once('value')
        .then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const post = childSnapshot.val();
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <div class="profile-picture"></div>
                    <div class="post-details">
                        <p class="user-designation">${post.author}</p>
                        <p class="post-time">${formatTime(post.createdAt)}</p>
                        <p class="post-content">${post.content}</p>
                        <button class="like-button">Like</button>
                        <button class="comment-button">Comment</button>
                    </div>
                `;
                document.getElementById('post-layout').appendChild(postElement);
            });
        })
        .catch((error) => {
            console.error('Error fetching posts:', error);
        });
} else {
    console.error('Topic ID not found in URL parameter!');
    alert('Topic ID not found in URL parameter.');
}

// Function to format time (e.g., Today, Yesterday, Just Now, 1 year ago, etc.)
function formatTime(timestamp) {
    // To be implemented
    // Return formatted time string based on the timestamp
}

// Event listener to show post creation form when "Create New Post" button is clicked
document.getElementById('create-post-button').addEventListener('click', function(event) {
    document.getElementById('post-form').style.display = 'block';
});

// Event listener for submitting the post creation form
document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const content = document.getElementById('post-content').value;

    // Get current timestamp
    const timestamp = new Date().toISOString();

    // Generate a unique ID for the new post
    const newPostKey = db.ref().child('posts').push().key;

    // Create the new post object
    const newPost = {
        content: content,
        author: "John Doe", // Replace with actual author name or user ID
        createdAt: timestamp,
        topicId: topicId
    };

    // Save the new post in the database
    db.ref('posts/' + newPostKey).set(newPost)
        .then(() => {
            console.log('New post added successfully');
            // Hide the post creation form
            document.getElementById('post-form').style.display = 'none';
            // Clear the form field
            document.getElementById('post-content').value = '';
            // Refresh the page to display the new post
            location.reload();
        })
        .catch((error) => {
            console.error('Error adding new post:', error);
            alert('Error adding new post. Please try again.');
        });
});
                                                      
