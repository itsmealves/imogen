function contrast() {
    return {
        name: 'contrast',
        run: function(image, features) {
            let sum = 0;
            const matrix = features.coOccurrenceMatrix;

            for(let j = 0; j < matrix.length; j++) {
                for(let i = 0; i < matrix[0].length; i++) {
                    sum += Math.pow(i - j, 2) * matrix[j][i];
                }
            }

            return sum;

        }
    }
}

module.exports = contrast;
