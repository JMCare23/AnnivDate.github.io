TweenLite.defaultEase = Linear.easeNone;
const time = 3;
const d = 0.2;
const master = new TimelineMax({repeat:-1, yoyo:true, paused:true});

TweenMax.set(".flower, .leftleaf, .rightleaf", { transformOrigin:"center bottom"});

for (i = 1; i < 5; i++) {
  tl = new TimelineMax();
  tl.to("#tulip" + i + " .flower", time, {rotation: -20}, 0);
  tl.to("#tulip" + i + " .leftleaf", time, {rotation: 5}, 0);
  tl.to("#tulip" + i + " .rightleaf", time, {rotation: 5}, 0);
  tl.to(".stemStart" + i , time, {morphSVG:".stemEnd" + i}, 0);
  master.add(tl, (i-1) * d);
}

master.play();


const yesBTN = document.querySelector('.btn-yes'),
    noBTN = document.querySelector('.btn-no'),
    container = document.getElementById("container"),
    confirm = document.querySelector('.confirm-dialog'),
    body = document.querySelector('body');

let count = 0;

yesBTN.addEventListener('mouseover', (e) => {
    e.target.innerHTML = 'Please &#128521;';
});

yesBTN.addEventListener('click', () =>{
    body.classList.add('yes');
});

noBTN.addEventListener('mousemove', (e) => {
    const buttonRect = noBTN.getBoundingClientRect(); // Get button's position and size
    const mouseX = e.clientX; 
    const mouseY = e.clientY;

    const distanceX = Math.abs(mouseX - (buttonRect.left + buttonRect.width / 2)); // Calculate horizontal distance from mouse to button center
    const distanceY = Math.abs(mouseY - (buttonRect.top + buttonRect.height / 2)); // Calculate vertical distance from mouse to button center

    const maxDistance = 500; 

    if (distanceX < maxDistance && distanceY < maxDistance) {
        noBTN.style.top = `${Math.random() * 200}px`;
        noBTN.style.left = `${Math.random() * 200}px`;

        count++;

        if (count >= 5) {
            noBTN.innerHTML = "Think about it";
        }
    }
});
