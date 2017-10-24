const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
const reindeerColor = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]

// //NAME
// //reindeer name generator
// const reindeerNameBuilder = function* () {

//     // Write a for loop that looks at each reindeer
//     let counter = 0
    
//         while (counter < reindeer.length) {
//             yield currentName = reindeer[counter];
//             counter += 1; // Increment the counter
//         }
// }
// //creating instance of reindeer name generator
// const reindeerNameFactory = reindeerNameBuilder();


// //COLOR
// //creating color generator
// const reindeerColorBuilder = function* () {

//     // Write a for loop that looks at each reindeer
//     let counter = 0
    
//         while (counter < reindeerColor.length) {
//             yield currentName = reindeerColor[counter];
//             counter += 1; // Increment the counter
//         }
// }
// //creating instance of reindeer color generator
// const reindeerColorFactory = reindeerColorBuilder();



// //FACTORY
// // Invoke factory function to create reindeer object
// const reindeerFactory = function (name, color) {
//     return Object.create(null, {
//         'name' : {value : reindeerNameFactory.next().value, enumerable:true},
//         'color' : {value : reindeerColorFactory.next().value, enumerable:true}
//     })
// }


// //creating dynamic variables to hold each object created by the variables above
// for (i = 0; i < reindeer.length; i++) {
//     window['reindeer' + (i + 1)] = reindeerFactory(i);
// }

// let reindeers = [];

// reindeers.push(reindeer1, reindeer2, reindeer3, reindeer4, reindeer5, reindeer6, reindeer7, reindeer8)


let reindeers = [];

for (i = 0; i < reindeer.length; i++)  {
    reindeers.push(Object.create(null, {
        'name' : {value : reindeer[i], enumerable : true},
        'color' : {value : reindeerColor[i], enumerable : true}
    }))
}
console.log(reindeers);


