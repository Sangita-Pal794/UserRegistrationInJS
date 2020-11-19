var readlineSync = require('readline-sync');
class userRegistration {
    matchPattern = () => {
        try{
            let input = /^[A-Z]{1}[a-z]{2,}$/
        var userName = readlineSync.question('May I have your first name? ');
        const pattern = input.exec(userName);
        if (pattern) {
            console.log("Matches");
        }
        else {
            console.log("not match found");

        }
            }catch(e)
        {
            console.log(e)
        }
    }
}
module.exports = new userRegistration();