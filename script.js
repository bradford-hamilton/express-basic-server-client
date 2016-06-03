$(document).ready(function() {

  $.ajax({
    url: 'http://localhost:1337',
    type: 'GET',
    success: function(data) {
      return data;
    },
    error: function(error) {
      return error;
    }
  }).done(function(data) {
    console.log(data);
  });

});
