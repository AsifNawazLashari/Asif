// Initialize Firebase (already imported firebase-config.js)

const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed up successfully
            const user = userCredential.user;
            console.log('User signed up:', user);
            // Redirect or perform other actions after successful sign-up
        })
        .catch((error) => {
            // Handle errors
            console.error('Sign-up error:', error.message);
            // Display error message to the user
        });
});
