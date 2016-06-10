

  var superheroes = ['Spider Man', 'Iron Man', 'Captain America', 'Deadpool', 'Daredevil', 'X-Men', 'Hulk', 'Thor'];
console.log(superheroes);
renderButtons();

$('#addHero').on('click', function(){
    console.log('button is clicked')

    
    var heroNew = $('#hero-input').val();


    
     superheroes.push(heroNew);
     console.log(superheroes);
     renderButtons();


    return false;
   
  })

//$('.heroButton').on('click', function() {
$('#div01').on('click', '.heroButton', function() {
        console.log('heroButton is clicked')

        var heroGif = $(this).data('heronames');
        console.log(heroGif);
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + heroGif + "&api_key=dc6zaTOxFJmzC&limit=10";

       $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
              
                console.log(response)

                var results = response.data;

                for (var i = 0; i < 10; i++) {
                    console.log(results[i]);

                    var heroDiv = $('<div>');
                    var p = $('<p>')
                    p.text('rating' + results[i].rating);
                    // have to look the inspector to know the AIP element
                    console.log(results[i].rating);
                    var heroImage = $('<img>');
                    heroImage.attr('src', results[i].images.fixed_height.url);
                    heroDiv.append(p);
                    heroDiv.append(heroImage);
                    $('#gifs').prepend(heroDiv);
                }
           })





});

function renderButtons(){ 

      $('#div01').empty(); 
      for (var i=0; i<superheroes.length; i++){
          var a = $('<button>');
          a.attr('data-heronames', superheroes[i]);
          a.text(superheroes[i]);
          a.addClass('heroButton');
          $('#div01').append(a);
          console.log(a);
          console.log(i);
      }


};



