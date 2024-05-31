
class Solution{
    print2largest(arr,n){
        let largest = -Infinity;
        let secondLargest = -Infinity;
        
        for(let i=0;i<n;i++){
            if(arr[i]>largest){
                secondLargest = largest;
                largest = arr[i];
            }
            else if(arr[i]>secondLargest&&largest>arr[i]){
                 secondLargest = arr[i];
            }
        }
        
        return (secondLargest==-Infinity?-1:secondLargest);
    }
}

/*
IP = [1,2,3,4,5,5] o/p = 4
ip = [1,1,1,1,1,1] op = -1
*/