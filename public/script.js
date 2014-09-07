$(document).ready(function() {
  $('button#test').click(sendBeep);
  $('button#boxing').click(startBoxing);
  $('button#stop').click(cancelRoutine);
  $('button#pause').click(pauseRoutine);
});

// seconds displayed on clock
var countdown = 0;
var index = 0;
var roundsElapsed = 0;
var interval;
var rest = false;

var sendBeep = function() {
  $.get( "https://agent.electricimp.com/A1Rf-bQt0ws9?speaker=1", function( data ) {
    $( ".result" ).html( data );
    alert( "Load was performed." );
  });
};
var sendDoublebeep = function() {
  $.get( "https://agent.electricimp.com/A1Rf-bQt0ws9?doublebeep=1", function( data ) {
    $( ".result" ).html( data );
    alert( "Load was performed." );
  });
};

var startBoxing = function() {
  countdown = boxingRoutine[index];
  interval = window.setInterval(updateClock, 100);
  sendDoublebeep();
};

// updates the clock's display
var updateClock = function() {
  countdown--;
  $('#minutes').text(zeroFill(Math.floor(countdown/60)));
  $('#seconds').text(zeroFill(Math.floor(countdown%60)));

  if (countdown%60 === 0 && countdown > 0) {
    roundsElapsed++;
  }
  if (countdown === 20 && !rest) {
    $('#clock').animate({backgroundColor: 'red'}, 'slow');
    console.log('red bg');
  } else if (countdown === 0) {
    index++;
    if (index >= boxingRoutine.length) {
      index = 0;
    }
    countdown = boxingRoutine[index];
    if (countdown === 180) {
      sendDoublebeep();
      $('#clock').animate({backgroundColor: '#AEF132'}, 'slow');
      console.log('normal bg');
      rest = false;
    } else if (countdown === 30) {
      sendBeep();
      $('#clock').animate({backgroundColor: 'yellow'}, 'slow');
      console.log('yellow bg');
      rest = true;
    }
  }
};

var pauseRoutine = function() {
  if (interval) {
    clearInterval(interval);
  } else {
    interval = window.setInterval(updateClock, 100);
  }
};

var cancelRoutine = function() {
  countdown = 0;
  index = 0;
  roundsElapsed = 0;
  clearInterval(interval);
  $('#minutes').text("00");
  $('#seconds').text("00");
};

var zeroFill = function(num) {
  if (num < 10) {
    return '0' + num;
  } else {
    return num.toString();
  }
};

var boxingRoutine = [180,30];
