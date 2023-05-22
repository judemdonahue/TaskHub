$(document).ready(function() {
    $('#register-btn').on('click', function(e) {
        e.preventDefault();
        console.log('Button clicked');

        var email = $('#inputEmail').val();
        var username = $('#inputUsername').val();
        var password = $('#inputPassword').val();

        $.ajax("/register", {
            type: "POST",
            data: {
                email: email,
                username: username,
                password: password
            }
        }).then(function() {
            // If the request is successful, redirect to the homepage
            window.location.href = "/login";
        }).fail(function(error) {
            // If there's an error, log the error
            console.error('Error:', error);
        });
    });
});