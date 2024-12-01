function GetTimeStampObject(dateObject){
    return { unix: dateObject.valueOf(), utc: dateObject.toUTCString() }
}

const GetTimeStampObjectFromString = function(date){
    var timestamp;

    //handle strings and timestamp input
    if (isNaN(date)){
        timestamp = new Date(date)
    } else {
        timestamp = new Date(parseInt(date))
    }

    //invalid date
    if (isNaN(timestamp)){
        console.log(date);
        return { error : "Invalid Date" };
    }
    
    return GetTimeStampObject(timestamp);
    
}

const GetCurrentTimeStampObject = function(){
    var timestamp = new Date();
    return GetTimeStampObject(timestamp);
}

//"Fri, 25 Dec 2015 00:00:00 GMT"
module.exports = { GetTimeStampObjectFromString, GetCurrentTimeStampObject };