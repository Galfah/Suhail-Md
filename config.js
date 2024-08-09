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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254745632729";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_25_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgODksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM4LFxuICAgICAgICA1MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzLFxuICAgICAgICA2MixcbiAgICAgICAgMjksXG4gICAgICAgIDk1LFxuICAgICAgICAxNzksXG4gICAgICAgIDcwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUwLFxuICAgICAgICA4MixcbiAgICAgICAgMTA5LFxuICAgICAgICA2OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDc5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDk5LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc0LFxuICAgICAgICA2MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NixcbiAgICAgICAgMjQxLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNixcbiAgICAgICAgMTI4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMixcbiAgICAgICAgMTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUyLFxuICAgICAgICAwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI5LFxuICAgICAgICA4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NixcbiAgICAgICAgMjAzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlU0UkN5d0taT0ZKdEVJb1kwTkJqTlY4N2h3OTNBTE5mOEtxdmcvSHhmWmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImYwSEZxUXF0UVBXVTNablJvUmZzTGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGVkOTc3ZGItZDVmOC00YTYxLWI0YTctOGFiZTFjMzU3MzA0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg3LFxuICAgICAgMjIyLFxuICAgICAgNjksXG4gICAgICAxMzcsXG4gICAgICAxNDAsXG4gICAgICAyMzgsXG4gICAgICAyMCxcbiAgICAgIDE4MyxcbiAgICAgIDIwMixcbiAgICAgIDk4LFxuICAgICAgNDMsXG4gICAgICAxNixcbiAgICAgIDEyMCxcbiAgICAgIDI5LFxuICAgICAgMTAwLFxuICAgICAgMTc0LFxuICAgICAgMTY0LFxuICAgICAgMjM3LFxuICAgICAgNjAsXG4gICAgICA3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICAxMjAsXG4gICAgICAwLFxuICAgICAgMjM5LFxuICAgICAgMTU2LFxuICAgICAgNTIsXG4gICAgICAyMzYsXG4gICAgICA3NixcbiAgICAgIDYxLFxuICAgICAgMzUsXG4gICAgICA0NixcbiAgICAgIDc5LFxuICAgICAgOTksXG4gICAgICAxMzgsXG4gICAgICAxNTIsXG4gICAgICAyMjgsXG4gICAgICA3NixcbiAgICAgIDExMSxcbiAgICAgIDE4MixcbiAgICAgIDE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNZUEEyUEJXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDU2MzI3Mjk6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTk2NDc4MDQ2ODIyOTI6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMcXB4dXNHRVBXaDJiVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1NRzJ1Wi81eXBMdXUyWWk4WkZzTnNONWJRTzlBazNFV2g1ZzBzUU5ZZ2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ1VZZWlFMGpEM29IOStmNDRMTGRJdnE2QSs5ZE1tem03WmIyN25UY01pMENyc3JWRXZrcWM3L2N2VVlQUkJUZklSclc5TUVpMEo1TXN2NnY3S3ZXQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWi9hV0xKaTBVcVozcWZYck1ieXZ4cVd0dlZlMUFuaWF1aUxZRkx5ZDBjOUIrSHRKbXkwQkVnRmthZjNlRm9tQXh3WmE4UndqNVlvZDRtNGhFMWdJamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQ1NjMyNzI5OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMjI0MzEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTDNiXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMM2IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNRk9wekVBNTFTM1l5My9mMjcxSGNvZkJpMGtKTWJDNmV0by9EaThIblNnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MzYxNjAxODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMzIyNDA5NjA5MFwifSIKfQ=="


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
