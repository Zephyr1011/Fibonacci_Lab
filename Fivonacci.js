prev2 = 0
prev1 = 1

console.log(prev2)
console.log(prev1)
for (let index = 0; index < 18; index++) {
   newNum = prev2+prev1;
      console.log(newNum)
       
        prev2 = prev1
        prev1 = newNum
}