var readlineSync = require('readline-sync');
class userRegistration {
    matchPattern = () => {
        let input = /^[A-Z]{1}[a-z]{2,}$/
        var userName = readlineSync.question('May I have your first name? ');
        const pattern = input.exec(userName);
        if (pattern) {
            console.log("Matches");
        }
        else {
            console.log("not match found");

        }
    }
}
module.exports = new userRegistration();