
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    if (matrix) {
        matrix.forEach((item, index) => (index % 2 == 0) ?
            item.forEach(item => result.push(item)) :
            result.push(...item.reverse())
        );
    }
	return result;
}
