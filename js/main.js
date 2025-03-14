// покрутка 

const menuLink = document.querySelectorAll('.Skrol[data-goto]');
if (menuLink.length > 0) {
    menuLink.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    });

}

function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

        window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth'
        });
        e.preventDefault();
    };
}


// Видео

const video = document.querySelector('.img_Video');
const buttonPaus = document.querySelector('.btn_Start');

buttonPaus.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        buttonPaus.classList.add('video_block_play')
    };

})

video.onclick = function () {
    video.pause();
    buttonPaus.classList.remove('video_block_play')
}