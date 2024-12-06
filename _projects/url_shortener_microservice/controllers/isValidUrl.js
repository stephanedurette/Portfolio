const dns = require('dns');

const isValidUrl = async function(url, callback){
    try {
        dns.lookup(new URL(url).host, (err, address, family) => {
            if (err){
                console.log(err);
                callback(false);
            } else if(!address){
                console.log('invalid address');
                callback(false);
            } else {
                callback(true);
            }
        })
    } catch (err) {
        console.log(err);
        callback(false);
    }
}

module.exports = isValidUrl;