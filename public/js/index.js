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
    // $(".row-data").remove();
    // $("#table-transfer-info").hide();
    // $("#status-info div").remove();

    // $("#buckets").attr("disabled", true);
    // $("#users").attr("disabled", true);
    // $("#transfer-button").attr("disabled", true);
    // $("#loading").show();
    const id = $('#id').val();
    const confirmedGuestsNumber = $('#guests').val();

    // console.log("id", id);
    // console.log("Guest", guestNumber);

    $.ajax({
      url: "http://localhost:4800/guestConfirm",
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
        // const { logsArray } = data;
        // console.log("LOGS", logsArray);
        // $("#buckets").attr("disabled", false);
        // $("#users").attr("disabled", false);
        // $("#transfer-button").attr("disabled", false);
        // $("#loading").hide();
        // $("#status-info").append(
        //   `
        //   <div class="alert alert-success" role="alert">
        //    Images transferred to the bucket ${bucketSelected.val()}: ${logsArray.length}
        //   </div>
        //   `
        // );
        // $("#table-transfer-info").show();


        // $.each(logsArray, function (index, item) {
        //   $("#table-body-transfer-info").append(
        //     `<tr class="row-data">
        //       <td>${index + 1}</td>
        //       <td>${item.idPlayer}</td>
        //       <td>${item.firstNamePlayer}</td>
        //       <td>${item.imgExtension}</td>
        //       <td>${item.imgReduced}</td>
        //       <td><img src="${item.urlImageS3}" class="img-thumbnail rounded mx-auto d-block" alt="img" width="150" height="150"></td>
        //       <td>${item.insertUrlDatabase == 1 ? 'yes' : 'no' }</td>
        //     </tr>`
        //   ); 
        // });
      },
      error: function (xhr, status, error) {
        if (error) {

          console.log(error);
          // $("#status-info").append(
          //   `
          //   <div class="alert alert-danger" role="alert">
          //     Error: ${error}
          //   </div>
          //   `
          // );
          // $("#buckets").attr("disabled", false);
          // $("#users").attr("disabled", false);
          // $("#transfer-button").attr("disabled", false);
          // $("#loading").hide();
        }
      },
    });
  });
});