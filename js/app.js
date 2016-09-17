$(document).ready(function(){

   $('#term').focus(function(){
      var full = $("#information").has("img").length ? true : false;
      if(full == false){
         $('#information').empty();
      }
   });

   var getCharacter = function(){

        var characterName = $('#term').val();

         if(characterName == ''){

            $('#information').html("Please enter a Star Wars character name.");

         } else {

            $('#information').html(" Loading... ");

            $.getJSON("http://swapi.co/api/people/?search=" + characterName, function(json) {
               if (json != "Nothing found."){
                     $('#information').html(' Here is the info. ');
                  } console.log(json.results[0]);

                  document.getElementById("information").innerHTML = JSON.stringify(json.results[0]);

                  document.getElementById("information").innerHTML = json.results[0].name;

                  var empty = "";

                  for (key in json.results[0]) {
                    var value = json.results[0][key];
                    empty += "<b class='key-name'>" + key + "</b>" + " " + "<div class='value-output'>" + value + "</div>" + "<br>"
                  }
                  document.getElementById("information").innerHTML = empty;


                  var pix = '<img src="images/luke-skywalker.jpg">';

                  // if (json.results[0].name === "Luke Skywalker") {
                  //   //document.getElementById("picture").innerHTML = pix;
                  //   $('#picture').addClass('picture-1').fadeIn();
                  //   document.getElementById("picture").innerHTML = "<div class='shader'>" + "</div>"
                  // } else if (json.results[0].name === "Han Solo") {
                  //   $('#picture').removeClass();
                  //   $('#picture').addClass('picture-2').fadeIn();
                  //   document.getElementById("picture").innerHTML = "<div class='shader'>" + "</div>"
                  // }

                  
                    //document.getElementById("picture").innerHTML = pix;
                    $('#picture').css('backgroundImage', 'url("images/' + json.results[0].name + '.jpg")').fadeIn();
                    document.getElementById("picture").innerHTML = "<div class='shader'>" + "</div>"



             });

          }

        return false;
   }

   $('#search').click(getCharacter);
   $('#term').keyup(function(event){
       if(event.keyCode == 13){
           getCharacter();
       }
   });

});

