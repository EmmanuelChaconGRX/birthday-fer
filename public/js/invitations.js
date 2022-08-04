
//Obtener datos desde BD
function getGuestList() {
  const pathname = window.location.pathname;
  const id = pathname.replace("/", "");
  console.log(id);
  $.ajax({
    url: `http://localhost:4800/invitation`,
    type: "POST",
    data: {
      id,
    },
    success: function (data) {
      const {id, family, invitations_available, invitations_confirmed } = data;
      console.log("COFIRMADO", invitations_confirmed);
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
      $("#family").val(family);
    },
  });
}

window.onpaint = getGuestList();
