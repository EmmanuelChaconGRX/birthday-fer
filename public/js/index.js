$(function(){
  //Cuenta regresiva
  $('div#cuenta-regresiva').countdown('2022/09/03 15:00:00', function(event){
    $('#day').html(event.strftime('%D'));
    $('#hour').html(event.strftime('%H'));
    $('#minutes').html(event.strftime('%M'));
    $('#seconds').html(event.strftime('%S'));
  });


  $("#btn-confirm").click(function (e) {
    e.preventDefault();
    const id = $('#id').val();
    const confirmedGuestsNumber = $('#guests').val();
    const guestName = $('#guestName').text()

    console.log('ESTO',confirmedGuestsNumber);

    //Validation 
    if (!confirmedGuestsNumber) {
      Swal.fire(
        'Error!',
        'Por favor seleccione una cantidad de invitados',
        'error'
      )
      return;
    }

    //DEV
    // url = "http://localhost:4600/guestConfirm"
    //PROD
    url = "http://18.188.83.23/guestConfirm"
    $.ajax({
      url,
      type: "PUT",
      data: {
        id,
        confirmedGuestsNumber,
        guestName
      },
      success: function (data) {
        console.log(data);
        Swal.fire(
          '¡Muchas gracias por confirmar tu asistencia!',
          '',
          'success'
        )
      },
      error: function (xhr, status, error) {
        if (error) {
          console.log(error);
        }
      },
    });
  });
});