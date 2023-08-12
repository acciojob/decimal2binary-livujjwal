 function decimalToBinary(num) {
    if (num == 0 || num == 1) {
      return num;
    }
    let binary = [];
   while (num>0) {
      binary.unshift(Math.floor(num%2));
     num = Math.floor(num/2);
     console.log(num)
   }
    console.log(binary.join(''));
    return binary;
  }

window.decimalToBinary = decimalToBinary;
