document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('message-form');
    var input = document.getElementById('message-input');
    var messages = document.getElementById('messages');

    // Event listener for form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var message = input.value.trim();
        if (message !== '') {
            appendMessage('You: ' + message);
            input.value = '';
        }
    });

    // Function to append a message to the chat window
    function appendMessage(message) {
        var li = document.createElement('li');
        li.textContent = message;
        messages.appendChild(li);
    }
});
