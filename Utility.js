var readlineSync = require('readline-sync');
class userRegistration {
    matchPattern = () => {
        try {
            /**
     * Password Requirements:
     * The password must be minimum 8 characters long
     * At least one upper case character.
     * At least one lower case character.
     * At least one number.
     * At least one special character
     */
    let password = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[*.!@$%^&(){}:;<>,.?/~_+=|-]).{8,}$/
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