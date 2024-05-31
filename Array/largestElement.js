function largest(arr){
    if(arr.length<=0){
        return -1;
    }
    let largest = arr[0];
    for(let i =0;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
    }
    return largest;
}