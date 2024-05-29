
//bubbleSort

const bubbleSort = (arr)=>{
    const n = arr.length 
    for(let i = 0; i<n ;i++){
        for(j=0; j<n-1;j++){
            if(arr[j]> arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
return arr
}
  console.log(bubbleSort([29,30,-10,37 ]))

  // selection sort 

  const selectionSort=(arr)=>{
    const n=arr.length
    for(let i =0; i<n-1;i++){
        let minEl = i
        for(let j =i+1;j<n;j++){
            if(arr[j]< arr[minEl])
                minEl=j
            
        }

if(minEl !== i){
    [arr[i], arr[minEl]] =[arr[minEl], arr[i]]
}
    }
  }

  console.log(selectionSort([29,30,-10,37 ]))