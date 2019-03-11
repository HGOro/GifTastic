/*
    [X]create a group of strings and display them on the page
    [X]get the value from the input on click of submit btn
    [X]add the value to the group of strings and display it on the stage
    [X]get the text/value of the displayed strings (btns) on click
    [X]display related images on the page
    [X] on click of the image, the image should become animated
    [X]on click again of the image, image should become still
*/

//create a group of strings and display them on the page DONE

var topics = ["arnold schwarzenegger", "sylvester stallone", "steven seagal", "jean claude van damme"];

var baseURL = 'https://api.giphy.com/v1/gifs/search?q=';
var APIKeyParameter = '&api_key=oYYMUWmaBwQIUvE564e649IZgeuQwq8A';
var queryLimit = '&limit=10';

    //need to loop through each item in the array

    for(var i = 0; i<topics.length; i++){
        // create a button for each item in the array
        var button = $('<button>').text(topics[i]).addClass('search-item');
        // add text to the button that is the value of the current item in the array
        // add a class to the button (for styling later)
        // add it to the html
        $('#button-wrap').append(button)
    }

    //get the value from the input on click of submit btn
    $('#search-btn').on('click', function(event){
        event.preventDefault();
        //console.log('clicked');
        //get the value from the input
        var inputValue = $('#search').val().trim().toLowerCase();
        //console.log(inputValue);
        //empty the search input after submitting
        $('#search').val('');

        //console.log(topics);
        //add the value to the group of strings and display it on the stage
        //edge casing for repeats, blanks, and capital inputs.
            if(!topics.includes(inputValue) && inputValue !== ""){
                topics.push(inputValue);
                //console.log(topics);
                //display it on the page
                //have to get rid of the btns already displayed first
                $('#button-wrap').empty();
                for(var i = 0; i<topics.length; i++){
                    // create a button for each item in the array
                    var button = $('<button>').text(topics[i]).addClass('search-item');
                    // add text to the button that is the value of the current item in the array
                    // add a class to the button (for styling later)
                    // add it to the html
                    $('#button-wrap').append(button)
                };
            }
    });

    //get the text/value of the displayed strings (btns) on click
    //create an event listener for a dynamically created element
    $('#button-wrap').on('click', '.search-item', function(event){
        //console.log('clicked');
        var selectedSearchItem = $(this).text();
        //console.log(selectedSearchItem);

            //use the selectedSearchItem value to query giphy API using AJAX
        var query = baseURL + selectedSearchItem + queryLimit + APIKeyParameter;
        $.get(query, function(results){
            //console.log(results.data);
            var giphyArray = results.data
            //$('#gif-wrap').empty();
            //display related images on the page
            for (var i = 0; i<giphyArray.length; i++){
                //for each item in data array, 
                //get img url for original_still
                //for each get img url for original
                //for each get rating
                //get the title to use as the alt text for each img
                var rating = giphyArray[i].rating;
                var stillUrl = giphyArray[i].images.original_still.url;
                //console.log(stillUrl)
                var animatedURL = giphyArray[i].images.original.url;
                var title = giphyArray[i].title;

                var div = $('<div>').addClass('gif-container');
                var img = $('<img>').attr('src', stillUrl).attr('alt', title).data('animate', animatedURL).data('still', stillUrl).addClass('gif');
                var h3 = $('<h3>').text(rating);

                $(div).append(h3, img); //looks like <div><h3></h3><img/></div>

                $('#gif-wrap').append(div);
            };

        });
    });


    //[] on click of the image, the image should become animated

    //[]on click again of the image, image should become still

    $('#gif-wrap').on('click', '.gif', function(){
        //console.log('clicked');
            //evaluate if image is animated or still
            var imgSrc = $(this).attr('src');
            var animate = $(this).data('animate');
            var still = $(this).data('still');
            if(imgSrc === animate){
            //if animated, make still
                $(this).attr('src', still);
            }
            //else, make animated
            else{
                $(this).attr('src', animate);
            }
    });