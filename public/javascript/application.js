$.getJSON({
  type: "GET",
  dataType: "jsonp",
  cache: false,
  url: "https://api.instagram.com/v1/tags/lighthouse/media/recent?
  access_token=46924214a4794e278bef3133f59c90c6&callback=callbackFunction",
  success: function(response) {

  }
})

https://api.instagram.com/oauth/authorize/?client_id=25ab280b1e9e4cdaa8f7091559414141&redirect_uri=https://github.com/IamElaya&response_type=code