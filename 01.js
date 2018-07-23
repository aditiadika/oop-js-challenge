var crypto = require("crypto");

var md5 = crypto.createHash('md5');
var sha1 = crypto.createHash('sha1');
var sha256 = crypto.createHash('sha256');
var sha512 = crypto.createHash('sha512');

class Hash{
    constructor(input){
        this.hashSecret = input
    }
    
}

const result = new Hash('secret')
console.log("result md5: "+md5.update(result.hashSecret).digest('hex'))
console.log("result sha1: "+sha1.update(result.hashSecret).digest('hex'));
console.log("result sha256: "+sha256.update(result.hashSecret).digest('hex'));
console.log("result sha512: "+sha512.update(result.hashSecret).digest('hex'));
