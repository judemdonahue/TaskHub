$(document).ready(function() {
    $('.complete-task').on('click', function() {
        const taskId = $(this).data('task-id');
        const taskButton = $(this); // keep a reference to the button
        $.ajax({
            url: '/task/' + taskId + '/complete',
            method: 'POST',
        })
        .done(function(response) {
            $('#message').text('Task completed successfully');
            taskButton.text('Completed!'); // change the button text to 'Completed!'
            $('#total-points').text(response.totalPoints); // Assuming '#total-points' is the id of the element displaying the user's total points
            location.reload(); //update page upon task completion
        })
        .fail(function(jqXHR) {
            $('#message').text('An error occurred: ' + jqXHR.responseJSON.error);
        });
    });
});
