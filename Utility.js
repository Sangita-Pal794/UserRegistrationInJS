var readlineSync = require('readline-sync');
class userRegistration {
    matchPattern = () => {
        try {
            let Email = /^([a-zA-Z0-9_.$*&!+-]+)@([a-z0-9]+).([a-z.]{2,7})$/
            var userName = readlineSync.question('May I have your email id? ');
            const pattern = Email.exec(userName);
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