# AiurBot 0.4.6 alpha
## [Changelog](changelog.md)
kinda lightweight command-line NodeJS moderation/chat bot for plug.dj :feelsgood:

Currently in ALPHA testing, this bot may be missing some events. There might be some errors too. However, this bot is pretty easy to use and can be left unattended in most cases.

Reconnecting is not a thing yet. If plug.dj goes down, you will have to manually restart the bot. If you're experienced with NodeJS, you can maybe rig up a reconnect feature for yourself in the meantime.

usage
------
easy mode:
- install NodeJS
- download and unzip this repo into a folder
- edit index.js, coreOptions.js, and (if EXTERNALSETTINGS is true) settings.json with a text editor to change settings to your liking
- open a command prompt/terminal within this folder and run: "npm install"
- when ready, run "node index.js"
- if HOME is still default, type `/j ROOMSLUG` where ROOMSLUG is the roomslug of the room you want to join
  - roomslugs can be found at the end of a room's URL, e.g. plug.dj/**this-is-a-room-slug**

help
------
Check out the help files in this repo for some more information on how to use the bot.
- [Command Line Help](commandline.md)
- [Blacklist Help](blacklisthelp.txt)
- [Chat Layout Explanation](chathelp.txt)
- [!set Command Help](setoptions.md)
- [General Chat Command Explanations](chatcommands.md)

# ALWAYS USE `/exit` TO CLOSE THE BOT. NEVER FORCE CLOSE.
- User records, such as last seen time, first seen time, plays, etc. are autosaved every 10 minutes, unless this is disabled `(seenAutoSave)`. Using the CLI command `/exit` will save records before closing, too. Force closing the bot may cause you to lose recent records.

You may also use `settings.json` to specify your settings. However, `EXTERNALSETTINGS` must be set to `true` within coreOptions.js.

For Windows, I recommend ConEmu as a command prompt and Unifont as the font. Should work on Linux in any terminal.
Not tested on Mac OS X.

Use the `!commands` chat command to list valid commands, and use `!help <commandname>` for more info on a command.

The bot now relies on the coreOptions.js file for a few options to help make replacing index.js a bit more convenient.

The bot's default trigger is `!` and can be changed within said file.

`STARTASNORMALUSER` can also be set to `true` to disable chat commands and automated features.
