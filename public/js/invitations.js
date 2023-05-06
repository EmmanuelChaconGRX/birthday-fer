
//Obtener datos desde BD
function getGuestList() {
  const pathname = window.location.pathname;
  const id = pathname.replace("/", "");
  console.log(id);
  if (!parseInt(id)) {
    console.log('Error')
    Swal.fire(
      '¡Url Incorrecta!',
      'Por favor pida que se le envie nuevamente la URL!',
      'error'
    ).then((result) => {
      console.log(result);
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        window.location.href = "http://localhost:4500/error/404";
      } 
    })
    return;
  }
  //DEV
  // url='http://localhost:5001/invitation';
  //PROD
  url = 'http://localhost:4500/invitation'
  $.ajax({
    url,
    type: "POST",
    data: {
      id,
    },
    success: function (data) {
      const {id, family, invitations_available, invitations_confirmed } = data;
      console.log("COFIRMADO", invitations_confirmed);
      // if (invitations_confirmed) {
      //   Swal.fire(
      //     `Uste confirmó ${invitations_confirmed} invitaciones`,
      //     'Puede modificar el numero de invitaciones cuando guste',
      //     'success'
      //   )
      // }
      $('#guestName').text(family.toUpperCase());
      for (let index = 1; index <= invitations_available; index++) {
        $("#guests").append(
          $("<option>", {
            value: index,
            text: index,
          })
        );
      }
      //Select default
      $('#guests').find('option').each(function(index,option){
        if($(option).val() == invitations_confirmed){
          $(this).attr('selected', 'true');
      }else if($(option).val() == invitations_available){
          $(this).attr('selected', 'true');
      }
      })

      $("#id").val(id);
    },
    error: function(data) {
      Swal.fire(
        '¡Url Incorrecta!',
        'Por favor pida que se le envie nuevamente la URL!',
        'error'
      ).then((result) => {
        console.log(result);
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          window.location.href = "http://localhost:4500/error/404";
        } 
      })
    }
  });
}

window.onpaint = getGuestList();
