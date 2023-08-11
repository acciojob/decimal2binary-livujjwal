function decimalToBinary(num) {
	if (num == 0 || num == 1) {
		return num;
	}
	let binary = '';
 while (num>0) {
 	binary += num%2;
	 num /=2;
 }
  return binary;
}

window.decimalToBinary = decimalToBinary;
