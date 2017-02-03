//HOME: the roomslug to join upon logging in
exports.HOME = "-8299715266665171479";

//STARTASNORMALUSER: if true, starts bot with all commands and automatic moderation disabled
exports.STARTASNORMALUSER = false;

//EXTERNALSETTINGS: if true, allows loading of settings.json
exports.EXTERNALSETTINGS = false;

//list of blacklists
//  'blacklistName' : ['blacklists/name_of_file.json', [empty array to populate]],
exports.blacklists = {
    //'op': ['blacklists/op.json', [] ],
    'example': ['blacklists/example.json', [] ]
};

//DEBUG: if true, logs certain internal things (spammy!)
exports.DEBUG = false;

//TRIGGER: bot's trigger char, all chat messages must start with this (excluding the "trigger" command).
//This is reverted to "!" in case it becomes invalid; see validateTrigger().
//Can only be one of these characters: ! # $ % ^ & * ( ) _ + - = ` ~ . , ?
exports.TRIGGER = '!';