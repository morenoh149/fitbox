$(document).ready(function() {
  $('button#test').click(sendBeep);
});

var sendBeep = function() {
  $.get( "https://agent.electricimp.com/A1Rf-bQt0ws9?speaker=1", function( data ) {
    $( ".result" ).html( data );
    alert( "Load was performed." );
  });
};
