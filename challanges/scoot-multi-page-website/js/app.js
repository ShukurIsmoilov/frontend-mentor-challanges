'use strict';
const burgerButtonEl = document.getElementsByClassName('burger-menu')[0];
const sidebarBgEl = document.getElementsByClassName('sidebar-bg')[0];
const sidebarEl = document.getElementsByClassName('sidebar')[0];

burgerButtonEl.addEventListener('click', (evt) => {
    evt.target.classList.toggle('menu-open');
    sidebarEl.classList.toggle('show-sidebar');
    sidebarBgEl.classList.toggle('show-bg');
});


