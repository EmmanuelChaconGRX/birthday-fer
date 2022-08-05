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

    $.ajax({
      url: "http://localhost:4600/guestConfirm",
      type: "PUT",
      data: {
        id,
        confirmedGuestsNumber,
      },
      success: function (data) {
        console.log(data);
        Swal.fire(
          'Perfecto!',
          'Gracias por confirmar tu asistencia',
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