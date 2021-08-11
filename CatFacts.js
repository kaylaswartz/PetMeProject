var btn1 = document.getElementById('clickMe');
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
})