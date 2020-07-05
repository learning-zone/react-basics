const bcrypt = require("bcryptjs")
const saltRounds = 10;
const Password = 'root';

/**
 * Bcrupt Hash Code generator
 */
bcrypt.hash(Password, saltRounds, function(err, hash) {
    console.log(hash);
});
