exports.username = '', //username
exports.password = ''; //password

//if both fields are not empty, will allow for automatic sign-in when the bot is started
//main purpose is to allow reconnecting due to downtimes while the user is AFK and (try to) keep
//the user's credentials from staying in memory
//reconnecting is not a thing yet (but auto signin is!)