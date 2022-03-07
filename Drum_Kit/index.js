var drum = document.querySelectorAll('.drum');
for(var i=0; i<drum.length; i++){
    drum[i].addEventListener('click', function(){
        var key = this.innerHTML;
        drumSound(key);
        animate(key);
    });
}

document.addEventListener('keydown', function(event){
    drumSound(event.key);
    animate(event.key);
});

function drumSound(key){
    switch (key){
        case 'w': var audio = new Audio('/sounds/tom-1.mp3');
        break;
        case 'a': var audio = new Audio('/sounds/tom-2.mp3');
        break;
        case 's': var audio = new Audio('/sounds/tom-3.mp3');
        break;
        case 'd': var audio = new Audio('/sounds/tom-4.mp3');
        break;
        case 'j': var audio = new Audio('/sounds/crash.mp3');
        break;
        case 'k': var audio = new Audio('/sounds/kick-bass.mp3');
        break;
        case 'l': var audio = new Audio('/sounds/snare.mp3');
        break;
        default:
            console.log(event.key);
            break;
    }
    audio.play();
}

function animate(key){
    var activeButton = document.querySelector('.'+key);
    activeButton.classList.add('pressed');
    activeButton.style.color='#fff';
    setTimeout(() => {
        activeButton.classList.remove('pressed');
        activeButton.style.color='#DA0463';
    }, 200);
}