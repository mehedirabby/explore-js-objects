const first = {a:2,b:1,d:8};
const second = {a:2,c:8,b:1};
const third = second;
// if(third ===second){
//     console.log('they are smae')
// }
// else{
//     console.log('different')
// }

// do not use this method to compare object or array
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

// console.log(firstString,secondString,third)
// if(firstString === secondString){
//     console.log('same');
// }
// else{
//     console.log('different');
// }
function compareObject(first,second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length===secondKeys.length){
        for(const key of firstKeys)
        if(first[key]!== second[key]){
            return false;
        }

    }
    return true;
}
const isSame = compareObject(first,second);
console.log(isSame);