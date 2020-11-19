var readlineSync = require('readline-sync');
class userRegistration {
    matchPattern = () => {
        try {
            let password = /^(?=.*[A-Z]).{8,}$/
            var userName = readlineSync.question('Enter correct password');
            const pattern = password.exec(userName);
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