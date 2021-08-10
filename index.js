// when Submit button is clicked
// if certain answers are selected
// then display dog gif
// otherwise
//display cat gif


var btn = document.getElementById('submit');
btn.addEventListener('click', function () {

    let cat = 0;
    let dog = 0;

    let selectedAnswers = document.querySelectorAll("input:checked")
    // let selectedPhoto = 'https://cataas.com/cat?json=true'
    // let randomPhoto = selectedPhoto.url
    // let arrayOfCatImage = document.getElementById('catImage');
    // arrayOfImage.src = `https://cataas.com/${randomPhoto}`




    // var arrayofQuestions = document.getElementsByClassName("question")
    // arrayofQuestions

    if (selectedAnswers[0].value === "low") {
        cat++;
        console.log("I am here at the low answer")
    } else if (selectedAnswers[0].value === "medium") {
        cat++;
        dog++;
    } else {
        dog++;
    };

    if (selectedAnswers[1].value === "never") {
        dog++;
    } else if (selectedAnswers[1].value === "sometimes") {
        cat++;
        dog++;
    } else {
        cat++;
        console.log("Dog: ", dog);
        console.log("Cat: ", cat);
    }

    if (selectedAnswers[2].value === "yes") {
        dog++;
    } else if (selectedAnswers[2].value === "no") {
        cat++;
    }

    if (selectedAnswers[3].value === "0") {
        cat++;
        dog++;
    } else if (selectedAnswers[3].value === "25") {
        cat++;
        dog++;
    } else if (selectedAnswers[3].value === "50") {
        cat++;
        dog++;
    } else if (selectedAnswers[3].value === "75") {
        cat++;
        dog++;
    } else {
        cat++;
        dog++;
    }


    if (selectedAnswers[4].value === "NoFur") {
        cat++;
    } else if (selectedAnswers[4].value === "LittleFur") {
        cat++;
        dog++;
    } else {
        dog++;
    };

    console.log("You are a cat person:", cat)
    console.log("You are a dog person", dog)

    if (cat > dog) {
        fetch(`https://cataas.com/cat?json=true`)
            .then(function (response) {
                console.log(response);
                return response.json();
            }).then(function (catData) {
                catAPIData = catData
                let url = catAPIData.url
                //let selectedPhoto = 'https://cataas.com/cat?json=true'
                //let randomPhoto = selectedPhoto.url
                let arrayOfImage = document.getElementById('petImage');
                //arrayOfCatImage.src = `https://cataas.com/${randomPhoto}`
                arrayOfImage.src = `https://cataas.com/${url}`
                return catData;
            })



    } else {
        fetch(`https://random.dog/woof.json`)
            .then(function (response) {
                console.log(response);
                return response.json();
            }).then(function (dogData) {
                dogAPIData = dogData
                let url = dogAPIData.url

                let arrayOfImage = document.getElementById('petImage');
                //arrayOfCatImage.src = `https://cataas.com/${randomPhoto}`
                arrayOfImage.src = url


                return dogData;
            })
    }





})