/* 
    Handles scroll locking for a11y dialog modal.
*/
const dialogSelector = document.querySelector('[data-a11y-dialog]');
const html = document.documentElement;

const dialog = new A11yDialog(dialogSelector);
const video = document.querySelector('.payment-confirmation-js-video');

dialog.on('show', () => {
    html.style.overflowY = 'hidden';
    video.play();

});
dialog.on('hide', () => {
    html.style.overflowY = '';
    video.pause();
});

/* 
    Close handler.
*/
dialogSelector.addEventListener('click', function(e) {
    if (e.target.classList.contains('c-dialog-container')) {
        dialog.hide();
    }
});



