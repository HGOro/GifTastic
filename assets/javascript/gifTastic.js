/*
    [X]create a group of strings and display them on the page
    [X]get the value from the input on click of submit btn
    [X]add the value to the group of strings and display it on the stage
    [X]get the text/value of the displayed strings (btns) on click
    []display related images on the page
    [] on click of the image, the image should become animated
    []on click again of the image, image should become still
*/

//create a group of strings and display them on the page DONE

var gifSearchValues = ["arnold schwarzenegger", "sylvester stallone", "steven seagal", "jean claude van damme"];

var baseURL = ;
var APIKey = ;

    //need to loop through each item in the array

    for(var i = 0; i<gifSearchValues.length; i++){
        // create a button for each item in the array
        var button = $('<button>').text(gifSearchValues[i]).addClass('search-item');
        // add text to the button that is the value of the current item in the array
        // add a class to the button (for styling later)
        // add it to the html
        $('#button-wrap').append(button)
    }

    //get the value from the input on click of submit btn
    $('#search-btn').on('click', function(event){
        event.preventDefault();
        console.log('clicked');
        //get the value from the input
        var inputValue = $('#search').val().trim().toLowerCase();
        console.log(inputValue);
        //empty the search input after submitting
        $('#search').val('');

        console.log(gifSearchValues);
        //add the value to the group of strings and display it on the stage
        //edge casing for repeats, blanks, and capital inputs.
            if(!gifSearchValues.includes(inputValue) && inputValue !== ""){
                gifSearchValues.push(inputValue);
                console.log(gifSearchValues);
                //display it on the page
                //have to get rid of the btns already displayed first
                $('#button-wrap').empty();
                for(var i = 0; i<gifSearchValues.length; i++){
                    // create a button for each item in the array
                    var button = $('<button>').text(gifSearchValues[i]).addClass('search-item');
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
        console.log('clicked');
        var selectedSearchItem = $(this).text();
        console.log(selectedSearchItem);

        //display related images on the page
            //use the selectedSearchItem value to query giffy API using AJAX
        $.get()
    });
