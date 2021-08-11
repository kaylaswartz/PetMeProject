var btn1 = document.getElementById('clickMe');
btn1.addEventListener('click', function () {
    // fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all')
    //     .then(function (response) {
    //         console.log(response);
    //         return response.json();
    //     }).then(function (factData) {
    //         for (var i = 0; i < factData.length; i++){
    //             factData[0].fact.value
    //         }
    //         let factArray = [];
    //         let fact = factData.data;
    //         factArray.push(fact);
    //         let randomCatFact = document.getElementById('fact1');
    //         randomCatFact.innerText = factArray;

    //     })
    // })


    fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all')
        .then(function (response) {
            console.log(response);
            return response.json();
        }).then(function (factData) {
            for (fact in factData) {
                let getdogFacts = factData[fact]
                let randomDogFact = document.getElementById('fact2');
                randomDogFact.innerText = getdogFacts;
                console.log("this is lisa:", getdogFacts)
            }
        })
})

