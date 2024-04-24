let wordA = "danger"
let wordB = "garden"

function validAnagram(s1, s2){
    if(s1.lenght != s2.length){

    }
    let objectForStoreChar = {}

    if(s1.length == 0 || s2.length == 0 ){
        return "please input word"
    }

    for(let i = 0; i < s1.length; i++){

        if(objectForStoreChar[s1[i]]){
            objectForStoreChar[s1[i]] += 1 
        }else{
            objectForStoreChar[s1[i]] = 1 
        }
        
    }

    for(let j = 0; j < s2.length; j++){
        if(objectForStoreChar[s2[j]]){
            objectForStoreChar[s2[j]] -= 1 
        }else {
            return "false"
        }
    }

    return "true"

}

console.log(validAnagram(wordA, wordB));
