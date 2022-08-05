
//Obtener datos desde BD
function getGuestList() {
  const pathname = window.location.pathname;
  const id = pathname.replace("/", "");
  console.log(id);
  //DEV
  // url='http://localhost:4600/invitation';
  //PROD
  url = 'http://18.188.83.23/invitation'
  $.ajax({
    url,
    type: "POST",
    data: {
      id,
    },
    success: function (data) {
      const {id, family, invitations_available, invitations_confirmed } = data;
      console.log("COFIRMADO", invitations_confirmed);
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
      }
      })

      $("#id").val(id);
    },
  });
}

window.onpaint = getGuestList();
