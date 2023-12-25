import React from 'react'

function Result({ secretNum, term }) {
    let result;

    if (term) {

        if (secretNum < term) {
            result = 'Higher'
        }
        else if (secretNum > term) {
            result = "Lower"
        }
        else if (secretNum == term) {
            result = "Correct"
        }
        else {
            result = "Enter a valid Input";
        }
    }

    return (
        <h3> your Gusses: {result}</h3>
    )

}
export default Result;