var myApp = new Framework7({
    modalTitle: 'aparida',
    animateNavBackIcon: true,
    pushState: true,
    pushStateSeparator: '#page/',
    externalLinks: ['external'],
    swipePanel: true,
    swipePanelCloseOpposite: true,
    swipePanelNoFollow: true,
});



// Expose Internal DOM library
var $ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {
    // Enable Dynamic Navbar for this view
    dynamicNavbar: true
});





// Show/hide preloader for remote ajax loaded pages
// Probably should be removed on a production/local app
$(document).on('ajaxStart', function () {
    myApp.showIndicator();
});
$(document).on('ajaxComplete', function () {
    // myApp.hideIndicator();
});

mainView.goBack();




/* ===== Photo Browser Examples ===== */
// Create photoprobsers first:
// var photoBrowserPhotos = [
//     {
//         url: 'img/beach.jpg',
//         caption: 'Amazing beach in Goa, India'
//     },
//     'http://placekitten.com/1024/1024',
//     'img/lock.jpg',
//     {
//         url: 'img/monkey.jpg',
//         caption: 'I met this monkey in Chinese mountains'
//     },
//     {
//         url: 'img/mountains.jpg',
//         caption: 'Beautiful mountains in Zhangjiajie, China'
//     }
    
// ];


var photoBrowserPhotos = [
    'img/mountains.png',
    'img/beach.jpg',
    'img/monkey.jpg',
    'img/mountains.jpg',
    'http://placekitten.com/1024/1024',
    
];



var photoBrowserDark = myApp.photoBrowser({
    photos: photoBrowserPhotos,
    theme: 'dark',
    navbar: true,
    toolbar: true,
    type: 'popup',
});


$(document).on('pageAfterAnimation', function () {

  // $('.navbar-on-left').hide();

  $('.ks-pb-standalone-dark').on('click', function () {
        photoBrowserDark.open();
  });
  
});



$(document).on('pageAfterAnimation', '.page[data-page="index"]', function () {

  // $('.navbar-on-center').css('display','flex');

  
});


/* ===== Color themes ===== */
myApp.onPageInit('color-themes', function (page) {
    var themes = 'theme-white theme-black theme-yellow theme-red theme-blue theme-green theme-pink theme-lightblue theme-orange theme-gray';
    var layouts = 'layout-dark layout-white';
    $(page.container).find('.ks-color-theme').click(function () {
        $('body').removeClass(themes).addClass('theme-' + $(this).attr('data-theme'));
    });
    $(page.container).find('.ks-layout-theme').click(function () {
        $('body').removeClass(layouts).addClass('layout-' + $(this).attr('data-theme'));
    });
});
