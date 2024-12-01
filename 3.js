const array = [false, 'example', 42, -17, {}, true, 0, 'JavaScript', null, "", undefined];
const obj = {
    string: 0,
    number: 0,
    boolean: 0,
    object: 0,
    undefined: 0,
}
const countQuantityByType = (array)=>{
    for (const element of array){
        const type = typeof element;
        obj[type]++
    }
        return array
    }
countQuantityByType(array)
console.dir(obj)
