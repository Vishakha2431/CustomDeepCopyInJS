const obj={
    firstName:"Vishakha",
    age:"21",
    location:"Himachal",
    skills: {
        languages:["js","java","kotlin"],
        frameworksAndLibraries:["react","Android","redux"]
    }
};
//shallow copy cons are nested object because it will copy first layer only
// const copyObj =obj
// console.log(obj)
// copyObj.skills.frameworksAndLibraries.push("spring")
// console.log(copyObj)

//deep copy will take care of nested objects/arrays also
//custom deep copy fucntion
//put name_ in front of key of object
function deepCopy(obj){
    if(obj === null || typeof obj !=='object'){
        return obj
    }
    if(Array.isArray(obj)){
       return  obj.map((item)=>deepCopy(item))
    }

    let clone={};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            clone[`name_${key}`]=deepCopy(obj[key])
        }
    }
    return clone
}

const copyObj=deepCopy(obj)
console.log(obj)
console.log(copyObj)
copyObj.skills.frameworksAndLibraries.push("spring")
console.log(copyObj)



