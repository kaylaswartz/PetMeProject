fetch('https://cataas.com/cat?json=true')
  .then(function(response){
    console.log(response)
    return response.json();
}).then(function(catData){
    petCatData = catData 
    console.log(catData)
    var catGif = document.getElementsByClassName('catgif');

    return catData
})


// then(function(data){
//     console.log(data)
//     var arrayOfAvatarClass = document.getElementsByClassName('catgif');
//     return data
// })
// fetch('https://cataas.com/cat/gif')
//   .then(function(data){
//     return data
//     //console.log(data)
// });

// class getCat{
//     constructor() {
//         this.cats = {
//         }; // or possibly 0
//         // null ?  probably shouldn't use something we don't know
//     }
//     addAnimal(catUrl) {
//         if (animal.hungry === false) {
//             return this.field.push(animal);
//         }
//     }
// }

// class Farm {
//     constructor() {
//         this.field = []; // or possibly 0
//         // null ?  probably shouldn't use something we don't know
//     }

//     // make method
//     addAnimal(animal) {
//         if (animal.hungry === false) {
//             return this.field.push(animal);
//         }
//     }
//     // possibly have a field with arces

//     work() {
//       // track work done by farmer
//     }
// }

// export default Farm;