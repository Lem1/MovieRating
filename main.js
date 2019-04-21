"use strict";

var program = {
    movieList: [],

    // add movie to list
    addToList : function(){
        if ($("#title").val() !== null && $("#rating").val() !== null) {
            const movie1 = new Movie($("#title").val(), $("#rating").val() );
            if(movie1.validateInput())
            {
                // add movie to movie list
                program.movieList.push(movie1);
                // clear input fields
                $("#title").val("");
                $("#rating").val("");
                // show success message
                $("#message").text("Movie added successfully!");
                $("#message").css("color", "green");
                // re-set focus to first input field
                $("#title").focus();
            }
            else
            {
                // show fail message
                $("#message").text("");
                alert("Entry invalid!");
            }
        }   
    },

    // this function displays movie list
    showList: function(){
        // clear previous listing
        $("#list").empty(); 
        // sort the array of movies by rating
        this.movieList.sort(program.sortByRating);
        // add li to ul[id=list]
        $.each(this.movieList, function (key, value) {
            $("#list").append("<li>"+ value.toString() + "</li>");
        })
    },


    // sort array by rating
    sortByRating: function (obj1, obj2){ 
        return obj2.rating - obj1.rating;
    },
};

// when document is loaded
$(function(){
    // set button eventListeners
    $("#submit").on("click", function() { program.addToList(); } );
    $("#showMoive").on("click",function() { program.showList(); } );

    // set Enter key eventListener
    $(document).keypress(function(e){
        if (e.which == 13){
            $("#submit").click();
        }
    });

    // clear array
    program.movieList = [];
    // set focus to first input field
    $("#title").focus();
});



