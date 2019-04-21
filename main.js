"use strict";

var program = {
    movieList: [],

    addToList : function(){
        if ($("#title").val() !== null && $("#rating").val() !== null) {
            const movie1 = new Movie($("#title").val(), $("#rating").val() );
            if(movie1.validateInput())
            {
                program.movieList.push(movie1);
                $("#title").val("");
                $("#rating").val("");
                $("#message").text("Movie added successfully!");
                $("#message").css("color", "green");
                $("#title").focus();
            }
            else
            {
                $("#message").text("Entry invalid.");
                $("#message").css("color", "red");
            }
        }   
    },

    showList: function(){
        $("#list").empty(); 
        this.movieList.sort(program.sortByRating);
        $.each(this.movieList, function (key, value) {
            $("#list").append("<li>"+ value.toString() + "</li>");
        })
    },


    //This will sort your array
    sortByRating: function (obj1, obj2){ 
        return obj2.rating - obj1.rating;
    },
};

$(function(){
    $("#submit").on("click", function() { program.addToList(); } );
    $("#showMoive").on("click",function() { program.showList(); } );

    $(document).keypress(function(e){
        if (e.which == 13){
            $("#submit").click();
        }
    });

    program.movieList = [];
    $("#title").focus();
});



