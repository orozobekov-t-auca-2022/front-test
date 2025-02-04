const modalWindowBtn = document.querySelector('.buttons div');
console.log(modalWindowBtn);
const buildingPlanPhoto = document.querySelector('.modal_window');
console.log(buildingPlanPhoto);
const body = document.querySelector('body');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');

modalWindowBtn.addEventListener('click', () => {
    buildingPlanPhoto.style.display = 'block';
    closeBtn.style.display = 'block';
    overlay.style.display = 'block';
});


closeBtn.addEventListener('click', () => {
    buildingPlanPhoto.style.display = 'none';
    closeBtn.style.display = 'none';
    overlay.style.display = 'none';
});
