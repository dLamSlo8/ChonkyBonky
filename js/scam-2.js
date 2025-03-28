let sound = new Howl({
    src: ['/img/scam-2/grimace-final.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.75
});

const err = document.querySelector('.c-input-error');


$('.js-howler-button').on('click', (e) => {
    if ($('.js-howler-button span').text() === 'Pause') {
        console.log('Pause');
        sound.pause();
        $('.js-howler-button span').text('Play');
    }
    else {
        sound.play();
        $('.js-howler-button span').text('Pause');
    }
})
$('form').on('submit', function(e) {
    e.preventDefault();
    console.log('submit');
    
    let data = new FormData(this);
    console.log(data.get('money'));

    if (data.get('money') && parseInt(data.get('money')) > 0) {
        err.setAttribute('data-hidden', '');
        $('.js-money').text(data.get('money'));
        $('[data-section-id="buy-result"]').removeAttr('data-hidden');
        $('[data-section-id="bonus-nfts"]').removeAttr('data-hidden');
        // setTimeout(() => {
        //     $('[data-section-id="buy-result"]')[0].scrollIntoView();
        // }, 0);
    }
    else {
        err.removeAttribute('data-hidden');
    }
})