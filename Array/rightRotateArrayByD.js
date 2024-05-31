// first approach

 function rotate(nums, k){
    k = k%nums.length;
    if(k<=0){
      return ;
    }
    let length = nums.length;
    rotateArray(nums,0,length-1);
    rotateArray(nums,0,k-1);
    rotateArray(nums,k,length-1);
  
};

function rotateArray(arr, startPostion,endPostion){

  while(startPostion<endPostion){
      let hold = arr[startPostion];
      arr[startPostion] = arr[endPostion];
      arr[endPostion] = hold;
      startPostion++;
      endPostion--

  }
}

//second approach
var rotate = function(nums, k) {
    let length = nums.length;
    k = k%length;
    k = length-k;
    if(k==0){
        return nums;
    }
    let temp = new Array(k);
    for(let i=0; i<k;i++)temp[i] = nums[i];
    for(let i=k;i<length;i++){
        nums[i-k] = nums[i]
    }
     for(let i=length-k;i<length;i++){
        nums[i] = temp[i-(length-k)];
    }
    return nums;
};