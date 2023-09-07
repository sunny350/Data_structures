/** 
 * selecton sort
 * given array [15,8,9,3,74,12] */


let array = [9,15,3,8,74,12,86]
console.log("original array >>>>",array );
for (let i=0 ; i<array.length-1 ; i++){
    minEleIdx = i
    for(let j=i+1 ; j<array.length ; j++){
        if(array[minEleIdx] > array[j]) minEleIdx = j
    }

    let temp = array[i]
    array[i]=array[minEleIdx]
    array[minEleIdx]= temp
    console.log(`array after ${i+1} step`,array)
    console.log();
}

console.log("final sorted array >>>>>>",array);
