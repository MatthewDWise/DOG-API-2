"use none";

function getDogImage(numberInput) {
    if (!numberInput){
        fetch("https://dog.ceo/api/breeds/image/random/3")
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson));        
    } else if (numberInput > 50) {
        return alert ("50 is the maximum number of pups, please choose again!");
    } else if (numberInput == 0) {
        return alert("Minimum number of pups is 1!");
    } else {
        fetch(`https://dog.ceo/api/breeds/image/random/${numberInput}`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error =>alert('Something went wrong.  Try again later.'));
    }
}

function displayResults(responseJson){
    console.log(responseJson);
    $('.results').html("");
    responseJson.message.forEach(renderedImage =>{
        $('.results').append(`<img src ="${responseJson.message}" class ="results-img">`);
    });
    $('.results').removeClass('hidden');
}

function watchFormInput() {
    $("#doggie-form").submit(event => {
        event.preventDefault();
        let userNumberInput = $("#number-dog").val();
        getDogImage(userNumberInput);
    });
}

$(function(){
    console.log("App loaded!  Watiing for Submission!");
    watchFormInput();
});
