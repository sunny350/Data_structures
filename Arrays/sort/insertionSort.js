/** 
 * insertion sort
 * given array [4,3,2,10,12,1,5,6] */

let arr = [4,3,2,10,12,1,5,6]
console.log("unsorted array >>>>",arr);

for(let i=1 ; i<arr.length ; i++){
    let j = i
    while(arr[j]<arr[j-1] && j!=0){
        const preEle = arr[j-1]
        arr[j-1] = arr[j]
        arr[j]= preEle
        j--
    }
    // console.log(i,">>>",arr);
}
console.log("resultant array >  > > > >",arr);