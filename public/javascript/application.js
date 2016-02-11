$(function() {
  
    // $("#findCity").on('submit', function() { 
  $("#findCity").on('click', function() {
    var i;
    var cityname;
    var cityzmw;
    var arr=[];
    var value = $("#autocomplete").val();  
    $.ajax({
      url:"http://autocomplete.wunderground.com/aq?&cb=call=?",
      dataType: "json",
      data:{
        "query":value
      },
      crossDomain: true,
      success: function (json_for_cities) {
        var table = $("#cities").find('tbody').empty();
        json_for_cities.RESULTS.forEach(function(city){
          var cityname = city.name;
          var cityzmw = city.zmw;
          var tr = $("<tr>").appendTo(table);
          tr.html('<td class="city"><a href="#">'+ cityname +'</a></td>');
          tr.on('click', function() {
            var url = "http://api.wunderground.com/api/383901c8559cb3ce/forecast/q/zmw:"+cityzmw+".json"
            $.ajax({
              url: url,
              dataType: 'json',
              success: function(json_for_city) {
                var high = json_for_city.forecast.simpleforecast.forecastday[0].high.celsius;
                var low = json_for_city.forecast.simpleforecast.forecastday[0].low.celsius;
                var condition = json_for_city.forecast.simpleforecast.forecastday[0].conditions;
                alert("High temperature of " + high + ", low temperature of " + low + ", a condition of " + condition +".");
              }

            });
            return false;
          });
        });
      },
      error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
   
      }
    }); 
  });

});

