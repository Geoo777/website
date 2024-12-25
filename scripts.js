document.getElementById('revealButton').addEventListener('click', function() {
    var message = document.getElementById('message');
    if (message.classList.contains('hidden')) {
        message.classList.remove('hidden');
        message.classList.add('visible');
    } else {
        message.classList.remove('visible');
        message.classList.add('hidden');
    }
});