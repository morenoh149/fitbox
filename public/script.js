$(document).ready(function() {
  $('button#test').click(sendBeep);
  $('button#boxing').click(startBoxing);
  $('button#stop').click(cancelRoutine);
  initClock();
});

// initializes the clock's view
var initClock = function() {
  var currentTime = Date.now();
  $('div#clock').append('00:00');
};

var sendBeep = function() {
  $.get( "https://agent.electricimp.com/A1Rf-bQt0ws9?speaker=1", function( data ) {
    $( ".result" ).html( data );
    alert( "Load was performed." );
  });
};

var startBoxing = function() {
  //
};

var cancelRoutine = function() {
  //
};
