const menuTrigger = document.querySelector('.col1-trigger');
const menuColumn = document.querySelector('.col1');

const linkTrigger = document.querySelector('.col3-trigger');
const linkColumn = document.querySelector('.col3');


let menuVisible = false;
let linksVisible = false;

const onMenuTriggerClick = ev => {
  menuVisible = !menuVisible;
  if (menuVisible) {
    menuColumn.style.visibility = 'visible';
  } else {
    menuColumn.style.visibility = 'hidden';
  }
};

const onLinkTriggerClick = ev => {
  linksVisible = !linksVisible;
  if (linksVisible) {
    linkColumn.style.visibility = 'visible';
  } else {
    linkColumn.style.visibility = 'hidden';
  }
};


menuTrigger.addEventListener('click', onMenuTriggerClick);
linkTrigger.addEventListener('click', onLinkTriggerClick);