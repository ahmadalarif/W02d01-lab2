// # 5
// ## Maximum of Three Numbers

function maxOfThree(num1, num2, num3){
    var largest = (6,9,1);
    if(num1> num2 && num1 >num3){
      largest = (num1);
    }else if (num2 > num3 && num2 > num1){
      largest = (num2);
    }else{
     largest = (num3);
    }
    return largest
    
    
    
    // / # 6
    // ## Print Longest Word


function findLongestWor(str) {
    return str.sort(function(a, b) {return b.length - a.length})[0];
  }
  console.log(longestString("BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"));
  
  function findLongestWord(str) {
    // return str.length;
  }


// # 7
// ## Transmogrify the Numbers

function transMogrify(num1,num2,num3){
    var result=Math.pow((num1*num2),num3);
    return result;
    }
    console.log(transMogrify(5, 3, 2));
