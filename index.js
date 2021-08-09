// when Submit button is clicked
// if certain answers are selected
// then display dog gif
// otherwise
//display cat gif


var btn = document.getElementById('submit');
btn.addEventListener('click', function () {
    
    let cat = 0;
    let dog = 0;
    var question1 = document.getElementsByClassName('question1')
    var question2 = document.getElementsByClassName('question2')
    // var question3 = document.getElementsByClassName('question3')
    // var question4 = document.getElementsByClassName('question4')

    if (question1.value === "low") {
        cat++;
    } else if (question1.value === "medium") {
        cat++;
        dog++;
    } else {
        dog++;
    };
    if (question2.value === "never") {
        dog++;
    } else if (question2.value === "sometimes") {
        cat++;
        dog++;
    } else {
        cat++;
        console.log("Dog: ", dog);
        console.log("Cat: ", cat);
    }


    fetch('https://cataas.com/cat?json=true')
        .then(function (response) {
            console.log(response);
            return response.json();
        }).then(function (catData) {
            console.log(catData)
            var catGif = document.getElementById("catImage").src
            catGif = catData.url;
            console.log(catGif);
            return catData;
        })
})