function recursiveCount(num = 0) {
  if (num >= 10) return;
	console.log(num);
	recursiveCount(++num);
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution

/*
Return if num is greater than or equal to 10

console.log the num
increase num by one

*/