"use strict";

var Movie = function(pMovie, pRating){
    this.title = pMovie;
    this.rating = pRating;
    this.validateInput = function(){
        let myRating = parseInt(this.rating);
        if ( this.title === "" ) {
            return false;
        } else if( isNaN(myRating) ) {
            return false;
        } else if( myRating < 1 || myRating > 5 ) {
            return false;
        } else {
            return true;
        }
    };
    this.toString = function(){
        return  this.title + "  (" + this.rating + " stars)";
    };
}
    
