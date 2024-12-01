const array = [false, 'example', 42, -17, {}, true, 0, 'JavaScript', null, "", undefined];
const obj = {};
const countQuantityByType = (array)=>{
for (const element of array){
    const type = typeof element;

    if((obj[type] == undefined)) {
        obj[type] = 0
    }

    obj[type]++
}
    return array
}
countQuantityByType(array)
console.dir(obj)