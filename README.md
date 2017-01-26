# plugdj-aiurbot
kinda lightweight command-line NodeJS moderation/chat bot for plug.dj :feelsgood:

Yes, it's buggy. Yes, there are missing events. Yeah, I suppose it's messy too.

It's in ALPHA testing.

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
  
# ALWAYS USE `/exit` TO CLOSE THE BOT. NEVER FORCE CLOSE.

You may also use `settings.json` to specify your settings. However, `EXTERNALSETTINGS` must be set to `true` within coreOptions.js.

For Windows, I recommend ConEmu as a command prompt and Unifont as the font.

Check out the help files (commandline.md, blacklisthelp.txt, chathelp.txt, setoptions.md) in this repo for some help.

Use the `!commands` chat command to list valid commands, and use `!help <commandname>` for more info on a command.

The bot now relies on the coreOptions.js file for a few options to help make replacing index.js a bit more convenient.

The bot's default trigger is `!` and can be changed within said file.

`STARTASNORMALUSER` can also be set to `true` to disable chat commands and automated features.
