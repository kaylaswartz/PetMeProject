//This is the code that assigns the choice of cat or dog depending on the answers
var continueDisplayCat = document.getElementById('continueCat');
var continueDisplayDog = document.getElementById('continueDog');
var continueDisplayLlama = document.getElementById('continueLlama');
var selectedAnswers = document.querySelectorAll("input:checked")


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
            arrayOfImage.src = `../Assets/llama.jpg`;
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

const beforeUnloadListener = (event) => {
    
    var selectedAnswers = document.querySelectorAll("input:checked")
    if(selectedAnswers.length > 0 && selectedAnswers.length <= 5 ){
        event.preventDefault();
        return event.returnValue = "Are you sure you want to exit?";
    }
    };
   window.onload = function() {
    window.addEventListener("beforeunload",beforeUnloadListener)
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
        let randomIndex = dogFactsArray[Math.floor(Math.random() * dogFactsArray.length)]
        let newDogFact = document.getElementById('fact2');
            newDogFact.innerText = randomIndex;
    });
}



var btn3 = document.getElementById('button3');
var LlamaFactsArray = [
    'Llamas are members of the camelid family meaning they\'re pretty closely related to vicuñas and camels.',
    'Camelids first appeared on the Central Plains of North America about 40 million years ago. About 3 million years ago, llamas\' ancestors migrated to South America.',
    'During the last ice age (10,000-12,000 years ago) camelids went extinct in North America. Now there are around 160,000 llamas and 100,000 alpacas in the United States and Canada.',
    'Llamas were first domesticated and used as pack animals 4,000 to 5,000 years ago in the Peruvian highlands.',
    'Llamas can grow as much as 6 feet tall though the average llama between 5 feet 6 inches and 5 feet 9 inches tall.',
    'Llamas weigh between 280 and 450 pounds and can carry 25 to 30 percent of their body weight, so a 400-pound male llama can carry about 100 to 120 pounds on a trek of 10 to 12 miles with no problem.',
]
if (btn3 !== null) {
    btn3.addEventListener('click', function () {
        let randomLlamaIndex = LlamaFactsArray[Math.floor(Math.random() * LlamaFactsArray.length)]
        let newLlamaFact = document.getElementById('fact3');
            newLlamaFact.innerText = randomLlamaIndex;
    });
}

var coll = document.getElementsByClassName("collapsible");

if (coll !== null) {
var i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
        });
    }
    
}
