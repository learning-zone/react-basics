/**
 * FORMAT OF TOKEN
 * Authorization: Bearer <access_token>
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const verifyToken = (req, res, next) => {
    //Get auth header value
    const bearerHeader = req.headers['authorization'];
    
    if(typeof bearerHeader !== 'undefined') {

        req.token = bearerHeader.split(' ')[1];
        // Next Middleware
        next();
    } else {
        //Forbidden
        res.sendStatus(403);
    }
}

module.exports = verifyToken;
