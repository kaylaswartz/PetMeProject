//This is the code that assigns the choice of cat or dog depending on the answers
var continueDisplayCat = document.getElementById('continueCat');
//continueDisplayCat.style.display = "none";
var continueDisplayDog = document.getElementById('continueDog');
// continueDisplayDog.style.display = "none";
var continueDisplayLlama = document.getElementById('continueLlama');
// continueDisplayLlama.style.display = "none";

if(continueDisplayCat !== null) {
    //then we ignore so the error is not thrown
   continueDisplayCat.style.display = "none";   
}  

if(continueDisplayDog !== null) {
    //then we ignore so the error is not thrown
    continueDisplayDog.style.display = "none";   
} 

if(continueDisplayLlama !== null) {
    //then we ignore so the error is not thrown
    continueDisplayLlama.style.display = "none";   
} 

// TODO: Dog and llama too

var btn = document.getElementById('submit');// when Submit button is clicked
if(btn !== null) { 
btn.addEventListener('click', function () {
    let cat = 0;
    let dog = 0;
    
    let selectedAnswers = document.querySelectorAll("input:checked") // creating an array with all the checked values in it
//evaluating question 1

    if (selectedAnswers[0].value === "low") {
        cat++;
    } else if (selectedAnswers[0].value === "medium") {
        cat++;
        dog++;
    } else {
        dog++;
    };
//evaluating question 2
    if (selectedAnswers[1].value === "never") {
        dog++;
    } else if (selectedAnswers[1].value === "sometimes") {
        cat++;
        dog++;
    } else {
        cat++;
    }
// evaluating question 3
    if (selectedAnswers[2].value === "yes") {
        dog++;
    } else if (selectedAnswers[2].value === "no") {
        cat++;
    }
//evaluating question 4
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

//evaluating question 5
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
    // if certain answers are selected
    // then display dog gif

    // otherwise
    //display cat gif
    
    if (cat > dog) {
        fetch(`https://cataas.com/cat?json=true`)
            .then(function (response) {
                console.log(response);
                return response.json();
            }).then(function (catData) {
                catAPIData = catData
                let url = catAPIData.url
                let arrayOfImage = document.getElementById('petImage');
                arrayOfImage.src = `https://cataas.com/${url}`
                continueDisplayCat.style.display = 'block';

            })
    } else if (cat < dog) {
        fetch(`https://random.dog/woof.json`)
            .then(function (response) {
                console.log(response);
                return response.json();
            }).then(function (dogData) {
                dogAPIData = dogData
                let url = dogAPIData.url

                let arrayOfImage = document.getElementById('petImage');
                arrayOfImage.src = url
                continueDisplayDog.style.display = 'block';

            })
    } else if (cat === dog) {
        let arrayOfImage = document.getElementById('petImage')
        arrayOfImage.src = `llama.jpg`;
        continueDisplayLlama.style.display = 'block';

    }

    continueDisplayCat.style.display = "none"
    continueDisplayDog.style.display = "none"
    // continueDisplayLlama.style.display = "none"


});
}

var btn1 = document.getElementById('clickMe');

if(btn1 !== null) { 
btn1.addEventListener('click', function () {
fetch('https://meowfacts.herokuapp.com/')
    .then(function (response) {
        console.log(response);
        return response.json();
    }).then(function (factData) {
        let factArray = [];
        let fact = factData.data;
        factArray.push(fact);
        let randomCatFact = document.getElementById('fact1');
        randomCatFact.innerText = factArray;
      
    })
});
}
