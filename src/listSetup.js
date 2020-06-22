/* global pub Test */
pub.listSetup = function() {
  var elem = document.querySelectorAll('.price__pad');

  for (var i = 0; i < elem.length; i++) {
    if (i === 0) { // eslint-disable-line yoda
      elem[i].insertAdjacentHTML('beforeend', '<div class="hok--listedArea"><ul><li class="cross"><span>6-day home delivery and WSJ Magazine</span></li><li>Unlimited access to WSJ.com</li></ul><ul><li>WSJ mobile app</li><li>WSJ tablet app</li></ul><ul><li>Informative podcasts</li><li>WSJ+ Premium Benefits Program</li></ul></div><div class="hok--toggle">Hide product features</div>');
    } else {
      elem[i].insertAdjacentHTML('beforeend', '<div class="hok--listedArea"><ul><li>6-day home delivery and WSJ Magazine</li><li>Unlimited access to WSJ.com</li></ul><ul><li>WSJ mobile app</li><li>WSJ tablet app</li></ul><ul><li>Informative podcasts</li><li>WSJ+ Premium Benefits Program</li></ul></div><div class="hok--toggle">Hide product features</div>');
    }
  }

  self.on('click', '.hok--toggle', function() {
    this.classList.toggle('hok--active');
    this.previousSibling.classList.toggle('hok--active');
    if (this.innerText === 'Hide product features') { // eslint-disable-line yoda
      this.innerText = 'View product features';
    } else {
      this.innerText = 'Hide product features';
    }
  });

  if (Test.variation === 3 || Test.variation === 2) { // eslint-disable-line yoda
    var toggles = document.querySelectorAll('.hok--toggle');

    for (var i1 = 0; i1 < toggles.length; i1++) {
      toggles[i1].click();
    }
  }

};
