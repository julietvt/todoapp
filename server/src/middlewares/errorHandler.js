
var errorhandler = function (err,req,res,next) {
    res.status(500).send('Internal Server Error!');
}
module.exports = errorhandler;
