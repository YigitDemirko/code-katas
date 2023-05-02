function solution(number){
  // convert the number to a roman numeral
  let result = '';
  const integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
  integers.forEach((value,index)=>{
    while(number >= value){
      result += roman[index];
      number -= value;
    }
  });
  return result;
}