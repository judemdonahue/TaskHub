$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        var email = $('#inputEmail').val();
        var password = $('#inputPassword').val();

        $.ajax("/login", {
            type: "POST",
            data: {
                email: email,
                password: password
            }
        }).done(function() {
            // If the request is successful, redirect to the user page
            window.location.href = "/";
        }).fail(function(jqXHR, textStatus) {
            // If there's an error, show the error message
            alert(jqXHR.responseJSON.message);
        });
    });
});