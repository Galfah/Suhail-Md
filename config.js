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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254793581795";




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
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_34_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU2LFxuICAgICAgICA4NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTksXG4gICAgICAgIDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA0LFxuICAgICAgICA1NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDU5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODgsXG4gICAgICAgIDg2LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgODIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDczLFxuICAgICAgICAxMCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzEsXG4gICAgICAgIDExLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE3LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMyLFxuICAgICAgICA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NixcbiAgICAgICAgMTgzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MixcbiAgICAgICAgNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjExLFxuICAgICAgICA5MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDczLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImJoajJPLzVXb2liNFJ0VUlJL2xOMFFwMkNKZ2ZQeDRkRlJzWmJVN1o4VzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzkzNTgxNzk1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEMTc0ODI0QzhDQkVDQTY4QjVDNEM0MDBGOEUwQTdDMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0MTc2NDJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3OTM1ODE3OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY4NjI5NjFFREU4MzAxQ0QwQzQ0RjRDOEZDMzk2MzhGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQxNzY0M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1d3lwSUZVN1JaV3FsRWFxY08wV0lRXCIsXG4gIFwicGhvbmVJZFwiOiBcImM5NWE3YTBiLTRmMDktNGYxOC1hZDk3LWQwOTJhMjc4Zjc1NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICAxMTcsXG4gICAgICAxMTIsXG4gICAgICA0NCxcbiAgICAgIDQ3LFxuICAgICAgMjM4LFxuICAgICAgNjcsXG4gICAgICA5OCxcbiAgICAgIDI0NSxcbiAgICAgIDk5LFxuICAgICAgMTQ1LFxuICAgICAgMTcwLFxuICAgICAgMyxcbiAgICAgIDI1NSxcbiAgICAgIDQ0LFxuICAgICAgODAsXG4gICAgICAyOCxcbiAgICAgIDE0MyxcbiAgICAgIDEzMSxcbiAgICAgIDgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgMjQsXG4gICAgICAyNDIsXG4gICAgICAyNDYsXG4gICAgICA4OCxcbiAgICAgIDcxLFxuICAgICAgNzIsXG4gICAgICAxNjEsXG4gICAgICA2NyxcbiAgICAgIDUzLFxuICAgICAgNzUsXG4gICAgICAxMjgsXG4gICAgICAxMTgsXG4gICAgICAyMzIsXG4gICAgICAxMzgsXG4gICAgICAyMzEsXG4gICAgICAxNCxcbiAgICAgIDEzMixcbiAgICAgIDEwLFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkE5TUZFRVpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5MzU4MTc5NToxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJvY2tpZS5cIixcbiAgICBcImxpZFwiOiBcIjI0ODA4MjM0NDc5ODQwOjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lHdG0rMENFS0wvNnJRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZXNWL3Q0aDZPbE1FbUZUemJ6dFd4dkI2ODUybnBOZFFsTlhFR01ySDVrMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXYjZCTDhsbVhVU1RyWFVNYkpFY0ZybmdrNjY1Tk5FN1V3dUtpWXRWVXczQjAwV1hzazBJTlRUUFpKcEtVdUljRXJEVEY2amNyWDRaMkgwTVE2ZE1EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1ZW9CbzF1NFk5N1RycGg5NTA2T3c5aVkrblFDWkJVb1ZoOGdWRUVvK3BFdWIvNzNDZC83MzAvMWZ1azVWc3NaeUJFdFpmSWJsTzFyNytvOUFQMDhqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3OTM1ODE3OTU6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQxNzYzOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdNeFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR014Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiakN4WFFtUjdVVi80NDZTa01lLzJSelozSlJ1NWlKeHh3bVpVU2ZyMDY3ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NjU5MDg2MDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDI3MjMxMDUzN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
