// Initialize Firebase (already imported firebase-config.js)

const signinForm = document.getElementById('signin-form');

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed in successfully
            const user = userCredential.user;
            console.log('User signed in:', user);
            // Redirect or perform other actions after successful sign-in
        })
        .catch((error) => {
            // Handle errors
            console.error('Sign-in error:', error.message);
            // Display error message to the user
        });
});
