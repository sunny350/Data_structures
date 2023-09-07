/** 
 * Bubble sort
 * given array [9, 8, 7, 6, 5, 4, 3, 2, 1] */

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log("starting array>>>>", arr);

// for steps , in this case there are 3 steps , total steps are >>> total length -1  
for (let i=0 ; i<arr.length-1 ; i++){ 
    for(let j = 0 ; j<arr.length-i-1 ; j++){
        if(arr[j]>arr[j+1]){
            // code for swap
            const temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
        // console.log(arr);
    }
    // console.log("...");
}
console.log("sorted array>>>>>",arr);