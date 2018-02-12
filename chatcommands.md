# Default Commands
---------
These are the default commands for AiurBot. Use these commands in chat by using the bot's trigger (! by default) followed by the command name. Some commands require arguments. If any parameters for a command are surrounded in square brackets below, those parameters are optional.

|Command Name|Arguments|Description|Minimum Rank|
|:----------:|:-------:|-----------|:----------:|
|8ball       |`<any text>` | Asks the Magic 8 Ball a question.
|about       || Displays bot's "about" message.
|afktime     |`[@username\|#userID]` | Returns the amount of time a user has been inactive. Gets your own info if no valid argument.
|anagram     |`<7-30 character string>` | Returns an anagram of the given word(s), retrieved from www.anagramgenius.com.
|blacklist   |`<blacklist name>` `<add//remove\|rem>` `<youtube\|yt\|1//soundcloud\|sc\|2>` `<video ID//track ID>` | Adds or removes songs to/from a given blacklist.|Manager
|blacklists  || Returns list of valid blacklist names to be used with the blacklist command.
|commands    || Lists active commands and amount of inactive commands.
|dc          || Places you back into the waitlist at your old position ONLY IF you were disconnected while waiting.Must be undefined since disconnecting.
|dclookup    |`[@username\|userID]` | Returns a user's last disconnect time and position. Use their ID if they are not present in the room.
|candy       |`<@username>` | Give someone a random tasty candy!
|cookie      |`<@username>` | Give someone a cookie!
|disable     |`<command name>` | Disable a command.|Manager
|enable      |`<command name>` | Enable a command.|Manager
|english     |`<@username>` | Notify a user in their language to speak English if it is required.|Bouncer
|kick        |`@username`| Bans a user from the room and unbans them 2.5 seconds later, simulating a kick.|Manager
|gif         |`<tags>`| Grabs a random image from Giphy with the given tags. 2s cooldown.
|help        |`<chat command name>`| Returns the description of a command.
|jointime    |`[@username\|#userID]` | Returns amount of time since the given user entered the room. Gets your own info if no valid argument.
|link        || Returns the link of the song currently playing.
|props       || Show some appreciation for the DJ!
|roll        |[`<1-10>\|<1-20d1-999999999>]` | Returns a random number with given amount of digits, or rolls dice. Default: 2 digits.
|seentime    |`[@username\|#userID]` | Returns the total amount of time a user has been seen in the room. Gets your own info if no valid argument.
|set         |`<option>` `<value>` | Sets a bot option to the given value. If no value is given, returns the current value of it. List of valid options: https://git.io/vM9aD|Manager
|shots, shot |`[@username]` | Buy a random shot for a user!
|skip        |`[reason]` | Skips current song with optional reason, if valid.|Bouncer
|skipreasons || Lists reasons that can be used with !skip.|Bouncer
|stats       |`[@username\|#userID]` | Returns the user's recorded amount of plays and votes received. Gets your own info if no valid argument.
|swap        |`@user1` `@user2` | Swaps positions of two users in the waitlist. At least one must be in the waitlist.|Manager
|trigger     || Returns current trigger of the bot. This can be called with any valid trigger character.
|uptime      || Returns uptime of this bot.
"ytho":"http://i.imgur.com/yNlQWRM.jpg",
"cbg":"http://i.imgur.com/8ohO6lE.png",
"woosh":"http://i.imgur.com/fWSHCVJ.gif",
"thafuck":"https://i.imgur.com/CRumsLk.gif",
"mehspam":"Please stop spamming meh, its really annoying for those of us who use !RCS. Continue spamming meh and it WILL result in a ban.",
"spoopy":"https://media1.giphy.com/media/jRpeVKxEESNhe/giphy.gif",
"imgreactions":"/me !rules,!ytho,!thafuck,!woosh,!ayylmao,!cbg,!spoopy,!illuminati,!attentionwhore1,!attentionwhore2,!gtfo,!stfu,!:brushybrushy:,!yoink,!tap",
"attentionwhore1":"https://i.imgur.com/kYYiXdF.jpg",
"attentionwhore2":"https://i.imgur.com/kgWlK8l.gif",
"gtfo":"https://i.imgur.com/Q91xEea.gif",
"stfu":"https://i.imgur.com/Snf7uIV.gif",
"som":"/me Just an FYI this isn't an anti-meh room. If someone uses the meh button this is allowed, if said person then proceeds to talk shit about your or someone elses play then inform a *staff* member.  DO check your feelings at the door.",
":brushybrushy:":"https://i.imgur.com/w7Us6Fc.gif",
"tap":"https://media.tenor.com/images/c326634b553a8ad20c6142592d8fe01d/tenor.gif",
"yoink":"http://i.imgur.com/XQtLOMo.gif",
"riggedadminhax=1":"Admin roulette hacks activated!",
"riggedadminhax=0":"Admin roulette hacks deactivated!",
"riggedadminhax=2":"Pfft, you actually though this was a useful command? Try again."
		
