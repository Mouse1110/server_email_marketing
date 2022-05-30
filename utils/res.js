module.exports = function(res,code,status){
    const error = new Error(status);
    res.error = error;
    res.statusCode = code;
    return res.send()
}