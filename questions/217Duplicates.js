var Duplicates=function(nums){
    let seen= new Set();
    for(let num of nums){
        if(seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

console.log(Duplicates([1,2,2,1]));