// for

for (let i = 0; i <= 10; i++) {
    // console.log(i);
}

let myArray = ["flash" , "batman" , "superman"];
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// break and continue

// for (let index = 0; index <= 10; index++) {
//     if(index == 5) {
//         console.log("5 Detected");
//         break;
//     }
//     console.log(index);
// }


for (let index = 0; index <= 10; index++) {
    if(index == 5) {
        console.log("5 Detected");
        continue;
    }
    console.log(index);
}