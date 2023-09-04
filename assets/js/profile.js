firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var userId = user.uid;
        var userRef = firebase.database().ref("users/" + userId + "/name");
        userRef.once("value")
            .then(function(snapshot) {
                var userName = snapshot.val();
                document.getElementById('username').textContent = userName;

                loadTasks(userId);
            })
            .catch(function(error) {
                console.error(error.message);
            });
    } else {
        window.location.href = "login.html";
    }
});
