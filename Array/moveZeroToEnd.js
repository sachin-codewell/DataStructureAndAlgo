/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums) {
    let nonZeroIndex = 0;
    for(let i in nums){
        if(nums[i]!=0){
            [nums[nonZeroIndex],nums[i]] = [nums[i],nums[nonZeroIndex]]; // array destructuring
            nonZeroIndex++;
        }
    }
    
};