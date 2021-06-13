function sumUpTo(num) {
	if (num === 1) {
		return 1;
	}
	return num + sumUpTo(num - 1); // a segunda parcela da soma fica 2 - 1 = 1 e na função quando o parâmentro é 1 o retorno tbm é 1
}

console.log(sumUpTo(2))