var readlineSync = require('readline-sync');
class userRegistration {
    matchPattern = () => {
        try {
            let phNo = /^[1-9]{2}\s{0,1}[0-9]{10}$/
            var userName = readlineSync.question('May I have your ph no?');
            const pattern = phNo.exec(userName);
            if (pattern) {
                console.log("Matches");
            }
            else {
                console.log("not match found");

            }
        } catch (e) {
            console.log(e);
        }
    }
}
module.exports = new userRegistration();