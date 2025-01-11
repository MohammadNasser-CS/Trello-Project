class PublicActions {
    generateRandomIndex(maxValue, exclude) {
        if (exclude < 0) {
            return Math.floor(Math.random() * (maxValue));
        }
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * (maxValue)); // Random number between 0 and maxValue (inclusive)
        } while (randomNumber === exclude); // Repeat if the number matches the excluded value
        return randomNumber;
    }

}
export default PublicActions;