console.log(0)
console.log(1)
count = 2

function fibonacci(prev1, prev2)
{
    while (count<=19) {
        newNum = prev2+prev1;
      console.log(newNum)
       
        prev2 = prev1
        prev1 = newNum
        count+= 1;
        fibonacci(prev1,prev2)
    }
};

fibonacci(1,0)