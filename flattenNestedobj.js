/*
    const user = { user: {name: 'Alice' , age: 30} , active: true};

    covert the one level deep object into dot notation  like below:
    { 'user.name': 'Alice', 'user.age': 30, active: true }


 */

function flattenObj(nestObj){
        let result_obj = {};

        let nestObj_entries = Object.entries(nestObj)
        for (const [key, val] of nestObj_entries){
            if( typeof val == 'object'){
                for(const [nestedKey, nestedValue] of Object.entries(val)){
                    result_obj[`${key}.${nestedKey}`] = nestedValue
                }
            }else{
                result_obj[key] = val
            }
        }

        console.log("The Object Is: ", result_obj)
        
}


const userData = { user: { name: "Alice", age: 30 }, active: true };
flattenObj(userData)