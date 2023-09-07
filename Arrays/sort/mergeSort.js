/** 
 * merge sort
 * given array [4,3,2,10,12,1,5,6] */
// [2,5][10,11]
function sortedArr(arr1 , arr2){
    let sortArr = []
    let totalLength = arr1.length + arr2.length 
    let Lindex = 0
    let Rindex = 0
    while( totalLength != 0){
        if(arr1[Lindex] < arr2[Rindex]){
            sortArr.push(arr1[Lindex])
            Lindex ++
        }else{
            sortArr.push(arr2[Rindex])
            Rindex ++
        }
        if(Lindex == arr1.length ){
            sortArr = [...sortArr , ...arr2.slice(Rindex)]
            totalLength = 1
            break
        }
        if(Rindex == arr2.length ){
            sortArr = [...sortArr , ...arr1.slice(Lindex)]
            totalLength = 1
            break
        }
        totalLength --
    }

    return sortArr
 
}

function breakArray(arr){
    if(arr.length == 1){
        return arr
    }
    let breakPoint = parseInt(arr.length/2)
    let leftArr = arr.slice(0,breakPoint) 
    let rightArr = arr.slice(breakPoint)
    const left = breakArray(leftArr)
    const right = breakArray(rightArr)
    return sortedArr(left,right)
    

}
console.log(breakArray([5,3,6,15,12,1]))

// sortedArr([2,9 ,15],[3,7])

