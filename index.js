//This is the code that assigns the choice of cat or dog depending on the answers
var continueDisplayCat = document.getElementById('continueCat');
var continueDisplayDog = document.getElementById('continueDog');
var continueDisplayLlama = document.getElementById('continueLlama');

if (continueDisplayCat !== null) {
    continueDisplayCat.style.display = "none";
}

if (continueDisplayDog !== null) {
    continueDisplayDog.style.display = "none";
}

if (continueDisplayLlama !== null) {
    continueDisplayLlama.style.display = "none";
}


var btn = document.getElementById('submit');// when Submit button is clicked
if (btn !== null) {
    btn.addEventListener('click', function () {
        let cat = 0;
        let dog = 0;
        continueDisplayCat.style.display = "none"
        continueDisplayDog.style.display = "none"
        continueDisplayLlama.style.display = "none"

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

    });
}


var btn1 = document.getElementById('clickMe');

if (btn1 !== null) {
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


var btn2 = document.getElementById('button2');
var dogFactsArray = [
    'All dogs can be traced back 40 million years ago to a weasel-like animal called the Miacis which dwelled intrees and dens. The Miacis later evolved into the Tomarctus, a direct forbear of the genus Canis, which includes the wolf and jackal as well as the dog.', 
    'Ancient Egyptians revered their dogs. When a pet dog would die, the owners shaved off their eyebrows smeared mud in their hair, and mourned aloud for days.', 
    'Small quantities of grapes and raisins can cause renal failure in dogs. Chocolate, macadamia nuts, cooked onions, or anything with caffeine can also be harmful.', 
    'Apple and pear seeds contain arsenic, which may be deadly to dogs.', 
    'Rock star Ozzy Osborne saved his wife Sharons Pomeranian from a coyote by tackling and wrestling the coyote until it released the dog.', 
    'Dogs have sweat glands in between their paws.'
]
if (btn2 !== null) {
    btn2.addEventListener('click', function () {
        // let newDogFactArray = [];
        let randomIndex = dogFactsArray[Math.floor(Math.random() * dogFactsArray.length)]
        
        // newDogFactArray.push(randomIndex);
        let newDogFact = document.getElementById('fact2');
            newDogFact.innerText = randomIndex;
    });
}