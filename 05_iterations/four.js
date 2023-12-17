const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple',
}

for(const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = [1 , 2 , 3 , 4 , 5];
for (const key in programming) {
    console.log(programming[key]);
}