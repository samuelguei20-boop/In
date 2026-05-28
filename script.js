// SPLASH SCREEN

window.addEventListener('load', () => {

  setTimeout(() => {

    document
    .getElementById('splashScreen')
    .classList
    .remove('active');

    document
    .getElementById('welcomeScreen')
    .classList
    .add('active');

  },3000);

});

/* START APP */

document
.getElementById('startBtn')
.onclick = () => {

  document
  .getElementById('onboarding')
  .classList
  .add('hidden');

  document
  .getElementById('app')
  .classList
  .remove('hidden');

};

/* NAVIGATION */

document
.querySelectorAll('.nav-item')
.forEach(btn => {

  btn.onclick = () => {

    // remove active page

    document
    .querySelectorAll('.page')
    .forEach(page => {

      page.classList.remove('active-page');

    });

    // remove active nav

    document
    .querySelectorAll('.nav-item')
    .forEach(nav => {

      nav.classList.remove('active-nav');

    });

    // add active page

    const pageId = btn.dataset.page;

    document
    .getElementById(pageId)
    .classList
    .add('active-page');

    // active nav

    btn.classList.add('active-nav');

  };

});

/* HIDE BALANCE */

let balanceVisible = true;

document
.getElementById('toggleBalance')
.onclick = () => {

  balanceVisible = !balanceVisible;

  const balance =
  document.getElementById('balanceText');

  const cfa =
  document.getElementById('cfaText');

  const eyeBtn =
  document.getElementById('toggleBalance');

  if(balanceVisible){

    balance.innerText = '2500';

    cfa.innerText = '≈ 2500 FCFA';

    eyeBtn.innerHTML =
    '<i class="fa-regular fa-eye"></i>';

  }

  else{

    balance.innerText = '••••';

    cfa.innerText = '≈ ••••';

    eyeBtn.innerHTML =
    '<i class="fa-regular fa-eye-slash"></i>';

  }

};

/* XP SYSTEM */

let xp = 0;

setInterval(() => {

  xp += 5;

  if(xp >= 100){

    xp = 0;

  }

  document
  .getElementById('xpFill')
  .style.width = xp + '%';

  document
  .getElementById('levelPercent')
  .innerText = xp + '%';

},2000);

/* DARK MODE */

const themeToggle =
document.getElementById('themeToggle');

themeToggle.onclick = () => {

  document.body.classList.toggle('dark');

  // icon change

  if(document.body.classList.contains('dark')){

    themeToggle.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

    localStorage.setItem(
      'bcc-theme',
      'dark'
    );

  }

  else{

    themeToggle.innerHTML =
    '<i class="fa-solid fa-moon"></i>';

    localStorage.setItem(
      'bcc-theme',
      'light'
    );

  }

};

/* LOAD THEME */

const savedTheme =
localStorage.getItem('bcc-theme');

if(savedTheme === 'dark'){

  document.body.classList.add('dark');

  themeToggle.innerHTML =
  '<i class="fa-solid fa-sun"></i>';

}

/* COPY REFERRAL */

const copyBtn =
document.querySelector('.referral-box .main-btn');

copyBtn.onclick = () => {

  const input =
  document.querySelector('.referral-box input');

  input.select();

  input.setSelectionRange(0,99999);

  navigator.clipboard.writeText(input.value);

  copyBtn.innerText = 'Lien copié ✓';

  setTimeout(() => {

    copyBtn.innerText = 'Copier le lien';

  },2000);

};

/* FAKE NOTIFICATION */

const notifBtn =
document.querySelector('.notif-btn');

notifBtn.onclick = () => {

  alert(
    '🔔 Aucune nouvelle notification'
  );

};

/* MISSION BUTTON */

document
.querySelectorAll('.mission-btn')
.forEach(btn => {

  btn.onclick = () => {

    alert(
      '🚀 Mission bientôt disponible'
    );

  };

});

/* ACTION BUTTONS */

document
.querySelectorAll('.action-btn')
.forEach(btn => {

  btn.onclick = () => {

    const action =
    btn.innerText;

    alert(
      'Fonction : ' + action + ' bientôt disponible'
    );

  };

});

/* CENTER BUTTON */

document
.querySelector('.center-btn')
.onclick = () => {

  alert(
    '🔥 Mission du jour bientôt disponible'
  );

};
