// Angel Gabriel Barrera Rangel ST: 5043
// Exercise 1
// Create a function to print a matrix
function printMatrix(size) {
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            row += '[0] ';
        }
        console.log(row);
    }   
}

printMatrix(2);