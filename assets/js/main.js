/* Base JS codes */

/* Sticky sidebar */
const openStickySidebarButton = document.querySelector('.btn-open-sticky-sidebar') ;
const closeStickySidebarBtn = document.querySelector('.btn-close-sticky-sidebar');
const stickySidebarLayer = document.querySelector('.app-sidebar--sticky') ; 
const stickySidebarSelf  = document.querySelector('.sticky-sidebar--self') ;

const enableStickySidebar = () =>{
    stickySidebarSelf.classList.remove('disable-stickySidebar-self')
    stickySidebarLayer.classList.remove('disable-stickySidebar-layer')
    stickySidebarSelf.classList.add('enable-stickySidebar-self')
    stickySidebarLayer.classList.add('enable-stickySidebar-layer')
}

const disableStickySidebar = () =>{
    stickySidebarSelf.classList.remove('enable-stickySidebar-self')
    stickySidebarLayer.classList.remove('enable-stickySidebar-layer')
    stickySidebarSelf.classList.add('disable-stickySidebar-self')
    stickySidebarLayer.classList.add('disable-stickySidebar-layer')
}

openStickySidebarButton.addEventListener('click',enableStickySidebar)
closeStickySidebarBtn.addEventListener('click',disableStickySidebar)

 