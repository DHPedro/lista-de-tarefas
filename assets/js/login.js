document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function (userCredential) {
            window.location.href = "profile.html";
        })
        .catch(function (error) {
            console.error(error.message);
        });
});
