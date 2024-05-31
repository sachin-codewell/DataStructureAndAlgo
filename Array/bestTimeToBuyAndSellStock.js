/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 
*/

function maxProfit(prices) {
    if(prices.length<=1){
        return 0;
    }
    let n = prices.length;;
    let bestSellingPrice= new Array(prices.length);
    bestSellingPrice[n-1] = prices[n-1];
    for(let i = n-2;i>=0;i--){
        if(bestSellingPrice[i+1]<prices[i]){
            bestSellingPrice[i] = prices[i]
        }
        else{
            bestSellingPrice[i] = bestSellingPrice[i+1];
        }
    } 
    let maxProfit= bestSellingPrice[0]-prices[0];
    for(let i=0;i<n;i++){
        maxProfit = Math.max(maxProfit,(bestSellingPrice[i]-prices[i]))
    }
    return maxProfit;
};

//approach 2
function maxProfit(prices) {
    if(prices.length<=1){
        return 0
    }
    let maxProfit = -Infinity;
    let maxSellPrice = -Infinity;

    for(let i=prices.length-1;i>=0;i--){
        if(maxSellPrice<prices[i]){
            maxSellPrice = prices[i];
        }
        maxProfit = maxProfit>maxSellPrice-prices[i]?maxProfit:maxSellPrice-prices[i];
    }
    return maxProfit;
};