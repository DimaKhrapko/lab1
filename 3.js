const array = [false, 'example', 42, -17, {}, true, 0, 'JavaScript', null, "", undefined];
const obj = {
    string: 0,
    number: 0,
    boolean: 0,
    object: 0,
    undefined: 0,
}
const sort = (array) => {
    for (const element of array){
        const type = typeof element;
        switch(type){
            case "string":
                obj.string++
                break;
            case "number":
                obj.number++
                break;
            case "boolean":
                obj.boolean++
                break;
            case "object":
                obj.object++
                break;
            case 'undefined':
                obj.undefined++;
                break;
        }
    }
}
sort(array)
console.log(obj)