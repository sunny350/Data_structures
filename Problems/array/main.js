const array_dsa = class {
    constructor(arr) {
      this.arr = arr
    }
    reverse_array(){
      try {
        const output_array=[]
        for(let i = 0 ;i<this.arr.length ;i++){
          console.log(this.arr[this.arr.length-(1+i)]);
          output_array.push(this.arr[this.arr.length-(1+i)])
        }
        return output_array
      } catch (error) {
        console.log("error in reverse_array",error);
      }
    }
  
    matchingStrings(stringList, queries) {
      try {
        let dict ={}
        let result_arr =[]
        for(let i of stringList){
          if(dict[i]){
            dict[i] = dict[i]+1
          }else{
            dict[i] = 1
          }
        }
        for(let i of queries){
          result_arr.push(dict[i] ? dict[i] : 0 )
        }
        return result_arr
      } catch (error) {
        
      }
  
    }
  };
  
  const test = new array_dsa()
  console.log(test.matchingStrings(["a","a","b","c","f"],["z","a","b"])); 