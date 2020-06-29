//Given a 2-D matrix, rotate it 90 degrees clockwise in-place.

let matrix = 
[[1,2,3],
 [4,5,6],
 [7,8,9]]


//O(n^2) solution that transposes the matrix first then reverses the rows.

//Transpose the matrix; break if you pass by [1,1], [2,2], etc.
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
        if (i == j) {
            break
        }
        let temp = matrix[i][j]
        matrix[i][j] = matrix[j][i]
        matrix[j][i] = temp
    }
}

//Reverse each row
for (let i = 0; i < matrix.length; i++) {
    matrix[i] = matrix[i].reverse()
}