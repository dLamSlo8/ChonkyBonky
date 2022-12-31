const urlParams = new URLSearchParams(location.search);
const packageType = urlParams.get('package');
const packageName = document.querySelector('.payment-js-package-name');
const packageCost = document.querySelector('.payment-js-package-cost');
const packageImg = document.querySelector('.payment-js-package-img');
const err = document.querySelector('.c-input-error');
const form = document.querySelector('.payment-js-ssn-form');

const packageInfo = {
    'not-a-scam': {
        title: 'Not-a-Scam',
        cost: 300,
        imgSrc: 'img/chonkybonky-front.png'
    },
    'kind-of-a-scam': {
        title: 'Kind-of-a-Scam',
        cost: 700,
        imgSrc: 'img/chonkybonky-2pack.png'
    },
    'literally-a-scam': {
        title: 'Literally-a-Scam',
        cost: 1200,
        imgSrc: 'img/chonkybonky-3pack.png'
    }
};

if (packageInfo[packageType]) {
    const packageData = packageInfo[packageType];

    packageName.textContent = packageData.title;
    packageCost.textContent = `${packageData.cost}`;
    packageImg.setAttribute('src', packageData.imgSrc);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = new FormData(form);
    console.log(data.get('ssn'));

    if (data.get('ssn')) {
        err.setAttribute('data-hidden', '');
        window.location.replace('https://chonkybonky.net/payment-confirmation/');
    }
    else {
        err.removeAttribute('data-hidden');
    }
});