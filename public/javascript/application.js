$(function() {
  $("#getWeather").on('click', function() {
    console.log("#getWeather")
    $.ajax({
    url: "http://api.wunderground.com/api/383901c8559cb3ce/geolookup/conditions/q/Canada/Vancouver.json",
    dataType: "json",
    success: function(parsed_json) {
    var location = parsed_json['location']['city'];
    var temp_f = parsed_json['current_observation']['temp_f'];
    alert("Current temperature in " + location + " is: " + temp_f);
    }
  });
  });
    // $("#findCity").on('submit', function() {
      var i;
      var out;
      var arr=[];
    $("#findCity").on('click', function() {
      var value = $("#autocomplete").val();  

    $.ajax({
    url:"http://autocomplete.wunderground.com/aq?&c=US&cb=call=?",
    dataType: "json",
    data:{
    "query":value
    },
    crossDomain: true,

    success: function (parsed_json) {
    var c =$.each(parsed_json.RESULTS,function(i,item){
    out=(parsed_json.RESULTS[i].name);
     arr.push(out);
     var table = $("#cities").find('tbody').empty();
     arr.forEach(function(city) {
      var tr = $("<tr>").attr('href').addClass('city').appendTo(table);
      $("<td>").appendTo(tr).text(city);
      });
     });
    console.log(c)

     // });
    //  $("#autocomplete").autocomplete({
    //  source:arr

    // });

    },
     error: function (xhr, ajaxOptions, thrownError) {
    alert(xhr.status);
    alert(thrownError);
   
        }

    }); 
  });
 // });

});

