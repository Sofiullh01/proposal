document.getElementById('accept-btn').addEventListener('click', function() {
    const congratsAudio = document.getElementById('congrats-audio');
    congratsAudio.play();
    
    const congratsMessage = document.createElement('div');
    congratsMessage.className = 'congrats';
    congratsMessage.textContent = 'Congratulations! We are now in a relationship!';
    
    document.querySelector('.container').appendChild(congratsMessage);
    
    setTimeout(function() {
        congratsMessage.style.display = 'block';
    }, 200);
});
