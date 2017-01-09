|Command        |Aliases|Arguments|Description|Example(s)|
|---------------|-------|---------|-----------|----------|
|/ban           |       |`reason#` `duration` `@username|userID`|Bans a user in the room with given username or userID, reason# and duration.|`/ban 1 h @baduser`, `/ban 4 f 1234567`|
|/kick          |       |`reason#` `@username|userID`|Bans a user in the room with given username or userID and reason#, then unbans them 2.5 seconds later.|`/kick 2 @username`, `/kick 5 1234567`|
|/mute          |       |`reason#` `duration` `@username|userID`|Mutes a user in the room with given username or userID, reason# and duration.|`/mute 3 s @user`, `/mute 2 m 1234567`|
|/banreasons    |/br    |         |Displays a list of valid ban reasons to be used with **/ban**.||
|/mutereasons   |/mr    |         |Displays a list of valid mute reasons to be used with **/mute**.||
|/bandurations  |/bd    |         |Displays a list of valid ban durations to be used with **/ban**.||
|/mutedurations |/md    |         |Displays a list of valid mute durations to be used with **/mute**.||
|/unban         |       |`userID` |Unbans user with the given userID.|`/unban 1234567`|
|/banlist       |       |         |Retrieves the room's banlist and displays it. Debug purposes.|
|/deletemsg     |/delmsg, /dm|`chatID`|Deletes a chat message with the given chatID. Looks something like **0123456-1234567890123**|`/dm 1234567-1417172092351`|
|/unmute        |       |`userID` |Unmutes a user with the given userID.|`/unmute 1234567`|
|/removestaff   |/rmstaff|`userID`|Removes a user with the given userID from the room's staff.|`/rmstaff 1234567`|
|/unqueue       |/undj, /removedj, /rmdj|`userID`|Removes a user with the given userID from the waitlist.|`/rmdj 1234567`|
|/cycle         |       |`[on | off]`|Displays current waitlist cycle status. If **on** is given, turns cycle ON. If **off**, turns cycle OFF.|`/cycle on`, `/cycle off`|
|/playlist      |/pl    |         |Displays name of currently active playlist.|
|/setplaylist   |/setpl |`playlistID`|Activates a playlist **on your account** with the given playlistID.|`/setpl 45678901`|
|/deleteplaylist|/deletepl|`playlistID`|Deletes a playlist **on your account** with the given playlistID.|`/deletepl 45678901`|
|/writeplaylists|       |         |Retrieves a list of playlists on your account and saves it to data/playlists.json. Used for debug purposes.|
|/clear         |/cls   |         |Clears screen.|
|/exit          |/quit  |         |**Safely closes the program. Important.**|
|/userlist      |/users, /u|      |Displays the userlist, and amount of guests if any.|
|/disable       |       |`name of a chat command`|Deactivates a given chat command.|`/disable 8ball`|
|/enable        |       |`name of a chat command`|Activates a given chat command.|`/enable roll`|
|/join          |/j, /room, /r|`room slug`|Joins the given room. A **room slug** is what can be found at the end of a room's URL. (e.g. https://plug.dj/this-is-the-room-slug)|`/j its-a-trap-and-edm`|
|/home          |       |         |Joins HOME room defined at the top of index.js.|
|/woot          |/w     |         |Woot.|
|/meh           |/m     |         |Meh.|
|/grab          |/g     |         |Grabs song into the currently active playlist.|
|/votes         |/v     |         |Displays the current woot/grab/meh vote count.|
|/link          |       |         |Displays link of current song.|
|/waitlist      |/djlist, /djs, /wl|`[join|j, leave|l, lock, unlock]` `[clear (if lock)]`|If no argument, displays the waitlist and its lock/cycle status. join: joins waitlist. leave: leaves waitlist. lock: locks waitlist; if **clear** is given, clears waitlist too. unlock: unlocks waitlist.|`/wl lock clear`, `/wl unlock`, `/wl j`, `/wl l`|
|/reloadsettings|/rs    |         |Loads settings.json|
|/saveseen      |/ss    |         |Writes current data of seen users to data/seenUsers.json|
|/listsettings  |       |         |Displays a list of BotSettings option names.|
|/set           |       |`\<name of BotSettings option\>` `\<value to set\>`|Changes the value of a given BotSettings option, if valid.|`/set timestampColor cyan`, `/set welcomeusers true`|
|/getuser       |/showuser, /user|`username\|userID`|If user is in the room, displays info about the given user. If no argument, returns your own info.|`/user`, `/user someoneinroom`, `/user 1234567`|
|/trigger       |       |`[trigger char]`|Displays current trigger. If valid argument is given, sets the trigger to given argument.|`/trigger $`|
|/me            |       |`*any text*`|Default /me behavior on plug.dj.|`/me hello`|
|/commands      |/cmds  |         |Lists active and inactive chat commands.|
