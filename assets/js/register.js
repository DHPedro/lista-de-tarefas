document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name').value; 
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (userCredential) {
            var userId = userCredential.user.uid;
            var userData = {
                name: name
            };  
            var userRef = firebase.database().ref("users/" + userId);
            return userRef.set(userData);
        })
        .then(function() {
            window.location.href = "profile.html";
        })
        .catch(function (error) {
            console.error(error.message);
        });
});
