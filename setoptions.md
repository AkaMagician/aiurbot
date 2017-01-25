Set Options
------
These are the valid bot settings that can be changed through the "set" chat command. There are more bot settings, but the ones that are not listed can only be changed by the person running the bot using either the /set command or editing the script by hand.

|Option                   |Valid Datatype   |Description|
|:-----------------------:|:---------------:|-----------|
|autoWoot                 |`true` \| `false`|If true, automatically woots when a new song is played.
|welcomeUsers             |`true` \| `false`|If true, welcomes users joining the room.
|chatDeleteTriggerMessages|`true` \| `false`|If true, deletes messages beginning with the bot\'s trigger.
|chatDeleteResponses      |`true` \| `false`|If true, deletes responses to !afkdisable and !joindisable.
|announcementInterval     |`Number` **(MILLISECONDS)**|Amount of time between announcements in MILLISECONDS, must be above 5000. Default is 1200000 (20 minutes). Will restart the timer when this is changed.
|announcementRandom       |`true` \| `false`|If true, selects random announcements to send. If false, sends them in the order they are listed.
|sendAnnouncements        |`true` \| `false`|If true, sends announcements.
|useMessageCommands       |`true` \| `false`|If true, allows message commands to be used (such as shuffle, fav, rules, theme, etc)
|doAFKCheck               |`true` \| `false`|If true, checks for AFK users on the waitlist and removes them.
|doRoulette               |`true` \| `false`|If true, begins a roulette every hour.
|doAutoDisable            |`true` \| `false`|If true, sends the "!afkdisable" and "!joindisable" messages every hour.
|autoStuckSkip            |`true` \| `false`|If true, checks to see if a song is playing 60 seconds past its actual length and skips it if it is.
|doSkipCheck              |`true` \| `false`|If true, checks to see if a song should be skipped based on history/blacklist/etc. Will **NOT** skip the song, but is required to be true for doAutoSkip to work.
|doAutoSkip               |`true` \| `false`|If true, autoskips songs if they are found in history/blacklists/etc. Requires doSkipCheck to be true.
|hostBypassAutoSkip       |`true` \| `false`|If true, the host of the room can bypass autoskip conditions unless the song is unavailable.
|sendMOTD                 |`true` \| `false`|If true, sends the MOTD.
|motdInterval             |`Number` **(MILLISECONDS)**|Amount of time between MOTD messages in MILLISECONDS, must be above 5000. Default is 1800000 (30 minutes). Restarts the timer if changed.
|motd                     |`string`         |The MOTD message.
