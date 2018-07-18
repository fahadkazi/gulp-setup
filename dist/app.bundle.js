debugger;
$('#advance').load('advance-search.html');
$( document ).ajaxComplete(function( event, xhr, settings ) {
    $('.from-date').datepicker({});
    // if ( settings.url === "ajax/test.html" ) {
    //   $( ".log" ).text( "Triggered ajaxComplete handler. The result is " +
    //     xhr.responseText );
    // }
  });