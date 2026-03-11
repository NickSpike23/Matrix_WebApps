// Angel Gabriel Barrera Rangel ST: 5043
// Exercise 1
// Create a function to print a matrix
function printMatrix(size) { // it take the size of the matrix as a parameter
    for (let i = 0; i < size; i++) { // loop through the rows of the matrix
        let row = ''; // initialize an empty string to store the current row
        for (let j = 0; j < size; j++) { // loop through the columns of the matrix
            row += '[0] '; // add the value of the current cell to the row string
        }
        console.log(row);
    }   
}

printMatrix(2); // it will print a 2x2 matrix