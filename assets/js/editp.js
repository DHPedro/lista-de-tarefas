document.getElementById('profileForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var profilePicture = document.getElementById('profilePicture').files[0];

    // Salvar o nome do usuário e a foto de perfil no banco de dados Firebase ou outro sistema de armazenamento.

    // Exemplo: Enviar os dados para o Firebase Realtime Database ou Firebase Storage.
    // Lembre-se de adaptar esta parte para o seu sistema de armazenamento específico.

    // Exemplo de atualização de nome na página.
    document.getElementById('username').textContent = name;
});

document.getElementById('profilePicture').addEventListener('change', function () {
    var preview = document.getElementById('preview');
    var profilePicture = document.getElementById('profilePicture').files[0];

    if (profilePicture) {
        var reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
        };

        reader.readAsDataURL(profilePicture);
    }
});
