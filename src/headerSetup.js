/* global pub utils Test */
pub.headerSetup = function() {
  utils.waitForElement('header').then(function() {
    document.querySelector('.header').innerHTML =
      '<div class="header__branding"><div class="logo"><a href="https://www.wsj.com/"><img src="dist/img/header-logo.svg" class="wsj"></a></div></div>';
    if (2 !== Test.variation) {
      // eslint-disable-line yoda
      document.querySelector('.prices__item:nth-child(1) .price__bullet').innerHTML =
        '<li class="cross"><span>6-day home delivery and WSJ Magazine</span></li><li>Unlimited access to WSJ.com</li><li>WSJ mobile app</li><li>WSJ tablet app</li><li>Informative podcasts</li><li>WSJ+ Premium Benefits Program</li>';
      document.querySelector('.prices__item:nth-child(2) .price__bullet').innerHTML =
        '<li>6-day home delivery and WSJ Magazine</li><li>Unlimited access to WSJ.com</li><li>WSJ mobile app</li><li>WSJ tablet app</li><li>Informative podcasts</li><li>WSJ+ Premium Benefits Program</li>';
      document
        .querySelector('.hero .limit')
        .insertAdjacentHTML('afterbegin', '<div class="hok--titles"><h1>Uncertain Times Call for Trusted Facts</h1><h2>Student Offer: $4 per Month</h2></div>');
      document.querySelector('.prices__item:nth-child(1) .plan-name-header').innerText = 'Student Digital Pack';
      document.querySelector('.prices__item:nth-child(2) .plan-name-header').innerText = 'Student Print & Digital Pack';
    }

    document.querySelector('.prices__item:nth-child(1) .price__module .btn').innerText = 'ACT NOW';
    document.querySelector('.prices__item:nth-child(1) .price__module .btn').classList.remove('btn--alt');
    document.querySelector('.prices__item:nth-child(1) .price__module .btn').classList.add('hok-btn--primary');
    document.querySelector('.prices__item:nth-child(2) .price__module .btn').classList.remove('btn--alt');
    document.querySelector('.prices__item:nth-child(2) .price__module .btn').classList.add('hok-btn--primary');
    document.querySelector('.prices__item:nth-child(2) .price__module .btn').innerText = 'ACT NOW';

    var links = document.querySelectorAll('.price__module .offer-link');

    for (var i2 = 0; i2 < links.length; i2++) {
      links[i2].classList.remove('digital-link');
      links[i2].classList.remove('offer-link');
    }

    jQuery('.offer-link').each(function() {
      jQuery(this).find('.price__text__div').insertBefore(jQuery(this));
    });
  });
};
