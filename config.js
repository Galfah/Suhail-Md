const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254114701108";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "sleeping" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_27_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc3LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2LFxuICAgICAgICA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEyLFxuICAgICAgICA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMwLFxuICAgICAgICA5MCxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MixcbiAgICAgICAgNDEsXG4gICAgICAgIDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDU3LFxuICAgICAgICA5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDk4LFxuICAgICAgICA2MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDgzLFxuICAgICAgICA0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDcxLFxuICAgICAgICA0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU1LFxuICAgICAgICA2OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgNTksXG4gICAgICAgIDY2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgODUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibWlLSEhCYWJTV1J0cHA5VUJzTzR1Sm5FMDJvbVNrQ1JQdGVqTGkxMVIzbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQxMTQ3MDExMDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdDODQ4MDNGRjQ5MTZFRTVGMkE0QThBRjkwM0M5RUI3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzA2MjQxOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZR21uSm1Wa1F1YVJvTUd0ZUt2b2JRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ0NzFjNzkxLTJhMjAtNGUxNi05OWIwLTQ4ZjI5Njk2MzEzNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjYsXG4gICAgICAyMTMsXG4gICAgICAxOTksXG4gICAgICAxNDcsXG4gICAgICAxMTEsXG4gICAgICAyMSxcbiAgICAgIDEyNSxcbiAgICAgIDEwNyxcbiAgICAgIDM3LFxuICAgICAgMjMzLFxuICAgICAgMjIzLFxuICAgICAgNDYsXG4gICAgICA1OSxcbiAgICAgIDE5NixcbiAgICAgIDI0NCxcbiAgICAgIDI0MSxcbiAgICAgIDE4NyxcbiAgICAgIDIzNyxcbiAgICAgIDEzNSxcbiAgICAgIDc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDEzMSxcbiAgICAgIDE4MixcbiAgICAgIDUsXG4gICAgICAyMzcsXG4gICAgICA3MSxcbiAgICAgIDE5MCxcbiAgICAgIDc1LFxuICAgICAgMTgxLFxuICAgICAgNTIsXG4gICAgICAxNjUsXG4gICAgICA3MCxcbiAgICAgIDE2NixcbiAgICAgIDIxNSxcbiAgICAgIDQwLFxuICAgICAgNixcbiAgICAgIDI0LFxuICAgICAgOTMsXG4gICAgICAxMTMsXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUlBSUTNCSkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDExNDcwMTEwODoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc1MjIyMDk5NTk5NDg4OjIwQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlJvY2tpZS5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKN3B6WTBERUlxeHo3VUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInBubnVXYVA3Qm1XZi9tUG9QV0xQZCtEREc0d0dKMFFYeWdmYjFTSnVESDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSU9yR3B3a2tBcUlJcnZMcUxOUmxpSlduVVN0eW9UblNCZ0N4NHdUZUNXd2NXeWZlREdXWUJrenRvL0xqRVBkZEJEbjhUTnQ0U0doV1lBNFFQTm5iQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNk9PNlJnNE92aVhaMkhTNzNvc3J2eTRjOFJOQ3BjcDROYVRZUkhxR21zZDJNQ1FXVS9Wc0ZkRVdPeEg1QXA5WEM5VHNRcnFYNUFqSzBaQ2pIaUE5Z1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0MTE0NzAxMTA4OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwNjI0MTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLVXJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtVci5qc29uIjogIntcImtleURhdGFcIjpcImlwN05QOEwyMHZ4V1JBbENyakZUV08yNUU1RUphaHJnS1QxdnZ0TkNWeFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODMzODQ0MzgyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI4MzY5NzI1MjNcIn0iCn0=";


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Rockie-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Rockie",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
