const {Client,Intents,MessageEmbed}=require('discord.js');
const dotenv = require('dotenv')
const Discord = require('discord.js');

dotenv.config();

const prefix ='-'
const cron = require('node-cron');

const client = new Client(
    {   
        intents:[
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
            Intents.FLAGS.GUILD_MEMBERS        
        ]
    }
);


const fs = require('fs'); 

client.commands =new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(File => File.endsWith('.js'));
for (const file of commandFiles){
    const command =require(`./commands/${file}`);

    client.commands.set(command.name, command);

}


client.on('ready',()=>{
    console.log('your bot is ready')
})
 
client.on('messageCreate', message => {
 
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'role') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } 
  
});
const Embed1 = new MessageEmbed()
	.setColor('#FFFF00')
	.setTitle('ถึงเวลาเข้าเรียนแล้ว')
    .setURL('https://media.discordapp.net/attachments/697363888739713086/915702491465809961/6F57811D-F701-4A2E-9727-6E4F9765DACD.jpg?width=687&height=1221')
    .setTitle('ถึงเวลาเข้าเรียนแล้ว2\t\t')
	.setAuthor('แจ้งเตือนเวลาเข้าเรียน\t\t\t\t', '', //'https://media.discordapp.net/attachments/903208555421777931/915660290945855508/Emilia_ep.41_3.png?width=810&height=456'
    )
	.setDescription('ตอนนี้เวลา 9.00 น แล้ว')

	.setThumbnail('https://media.discordapp.net/attachments/903208555421777931/915695590975868938/220px-Achtung.png')
	//.addField('Inline field title', 'Some value here', true)
	//.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	//.setFooter('', //'https://i.imgur.com/AfFp7pu.png'
    ;
const EmbedOnmon = new MessageEmbed()
	.setColor('#ffcc00')
	.setTitle('เปิดใช้การแจ้งเตือนเวลาเรียนของวันจันทร์ :hourglass: :white_check_mark: ʕ·ᴥ·˵　ʔ')
	.setTimestamp()
const EmbedOffmon = new MessageEmbed()
	.setColor('#ffcc00')
	.setTitle('การแจ้งเตือนเวลาเรียนของวันจันทร์สื้นสุดแล้ว :hourglass: :pencil:: ʕ·ᴥ·˵　ʔ')
	.setTimestamp()

const EmbedOntue = new MessageEmbed()
	.setColor('#ff00ff')
	.setTitle('เปิดใช้การแจ้งเตือนเวลาเรียนของวันอังคาร :hourglass: :white_check_mark: ʕ·ᴥ·˵　ʔ')
	.setTimestamp()
const EmbedOfftue = new MessageEmbed()
	.setColor('#ff00ff')
	.setTitle('การแจ้งเตือนเวลาเรียนของวันอังคารสื้นสุดแล้ว :hourglass: :pencil:: ʕ·ᴥ·˵　ʔ')
	.setTimestamp()

const EmbedOnwed = new MessageEmbed()
	.setColor('#7fff00')
	.setTitle('เปิดใช้การแจ้งเตือนเวลาเรียนของวันพุธ :hourglass: :white_check_mark: ʕ·ᴥ·˵　ʔ')
	.setTimestamp()
const EmbedOffwed = new MessageEmbed()
	.setColor('#7fff00')
	.setTitle('การแจ้งเตือนเวลาเรียนของวันพุธสื้นสุดแล้ว :hourglass: :pencil:: ʕ·ᴥ·˵　ʔ')
	.setTimestamp()

const EmbedOnthu = new MessageEmbed()
	.setColor('#ff783a')
	.setTitle('เปิดใช้การแจ้งเตือนเวลาเรียนของวันพฤหัสบดี :hourglass: :white_check_mark: ʕ·ᴥ·˵　ʔ')
	.setTimestamp()
const EmbedOffthu = new MessageEmbed()
	.setColor('#ff783a')
	.setTitle('การแจ้งเตือนเวลาเรียนของวันพฤหัสบดีสื้นสุดแล้ว :hourglass: :pencil:: ʕ·ᴥ·˵　ʔ')
	.setTimestamp()

const EmbedOnfri = new MessageEmbed()
	.setColor('#0019ff')
	.setTitle('เปิดใช้การแจ้งเตือนเวลาเรียนของวันศุกร์ :hourglass: :white_check_mark: ʕ·ᴥ·˵　ʔ')
	.setTimestamp()
const EmbedOfffri = new MessageEmbed()
	.setColor('#0019ff')
	.setTitle('การแจ้งเตือนเวลาเรียนของวันศุกร์สิ้นสุดแล้ว :hourglass: :pencil:: ʕ·ᴥ·˵　ʔ')
	.setTimestamp()
const Embedhelp = new MessageEmbed()
    .setColor('#20B2AA')
    //.setTitle('ʕ •ᴥ•ʔ ʜᴇʟᴘᴍᴇɴᴜ ')
    //.setURL('https://media.discordapp.net/attachments/697363888739713086/915702491465809961/6F57811D-F701-4A2E-9727-6E4F9765DACD.jpg?width=687&height=1221')
    .setAuthor('ʕ •ᴥ•ʔ ʜᴇʟᴘᴍᴇɴᴜ\t\t\t\t', '', //'https://media.discordapp.net/attachments/903208555421777931/915660290945855508/Emilia_ep.41_3.png?width=810&height=456'
    )
    .setDescription('-เข้าสู่ระบบ        | help  \n-ขอดูตารางเรียน | -schedule\n -แจ้งเตือนเวลาเรียน | -notification ')
    /*.addFields(
	{ name: '╰ Invite: กดที่นี่เพื่อเชิญ', value: 'Some value here' },)*/
    .addField("ถ้าต้องการเชิญเข้าดิส", "Invite: [กดที่นี่เพื่อเชิญ](https://discord.com/api/oauth2/authorize?client_id=902977996204441621&permissions=8&scope=bot)")
    //.setThumbnail('https://media.discordapp.net/attachments/903208555421777931/915695590975868938/220px-Achtung.png')
    //.addField('Inline field title', 'Some value here', true)
    .setImage('https://media.discordapp.net/attachments/697363888739713086/916292650691354634/2.jpg')
    .setTimestamp()
    //.setFooter('', //'https://i.imgur.com/AfFp7pu.png'
    ;


    const Embedtable = new MessageEmbed()
    .setColor('#E9967A')
    //.setTitle('ʕ •ᴥ•ʔ ʜᴇʟᴘᴍᴇɴᴜ ')
    //.setURL('https://media.discordapp.net/attachments/697363888739713086/915702491465809961/6F57811D-F701-4A2E-9727-6E4F9765DACD.jpg?width=687&height=1221')
    .setAuthor('ʕ •ᴥ•ʔ ᴛᴇᴀᴄʜɪɴɢ ꜱᴄʜᴇᴅᴜʟᴇ\t\t\t\t', '', //'https://media.discordapp.net/attachments/903208555421777931/915660290945855508/Emilia_ep.41_3.png?width=810&height=456'
    )
    .setDescription('╰⓵ ปกติ \n ╰⓶ อินเตอร์ \n ╰⓷ วิทย์สุขภาพ\n ╰⓸ ราชบุรี ')
    /*.addFields(
	{ name: '╰ Invite: กดที่นี่เพื่อเชิญ', value: 'Some value here' },)*/
    .setImage('https://media.discordapp.net/attachments/697363888739713086/917007269223358464/select201.png')
    .setTimestamp()
    //.setFooter('', //'https://i.imgur.com/AfFp7pu.png'
    ;


    const EmbedMon5 = new MessageEmbed()
	.setColor('#ffcc00')
    .setAuthor('ʕ •ᴥ•ʔ ᴍᴏɴᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', //'https://media.discordapp.net/attachments/903208555421777931/915660290945855508/Emilia_ep.41_3.png?width=810&height=456'
    )
	.setDescription('♡ ตอนนี้เวลา 9.25 น แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 5 นาทีจะถึงเวลาเรียน LNG ʕ·ᴥ·　ʔ')
	// .setThumbnail('https://media.discordapp.net/attachments/903208555421777931/915660290945855508/Emilia_ep.41_3.png?width=810&height=456')
	//.addField('Inline field title', 'Some value here', true)
	.setImage('https://media.discordapp.net/attachments/697363888739713086/916701929281818674/3.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', //'https://i.imgur.com/AfFp7pu.png'
    );
    const EmbedMon30 = new MessageEmbed()
	.setColor('#ffcc00')
    .setAuthor('ʕ •ᴥ•ʔ ᴍᴏɴᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 9.00 น แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 30 นาทีจะถึงเวลาเรียน LNG ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/632262233547866122/918908161598034000/4.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่',);
    const EmbedMonstart1 = new MessageEmbed()
	.setColor('#ffcc00')
    .setAuthor('ʕ •ᴥ•ʔ ᴍᴏɴᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 9.30 น แล้ว ♡ \n\n ʕ　·ᴥ·ʔ ถึงเวลาเรียน LNG แล้ว ʕ·ᴥ·　ʔ')
	.setImage('https://cdn.discordapp.com/attachments/897437592000290839/908376694556082246/wakeup.png')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    const EmbedMon52 = new MessageEmbed()
	.setColor('#ffcc00')
    .setAuthor('ʕ •ᴥ•ʔ ᴍᴏɴᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 13.25 น แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 5 นาทีจะถึงเวลาเรียน CPE101 ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/697363888739713086/916701929281818674/3.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    const EmbedMon302 = new MessageEmbed()
	.setColor('#ffcc00')
    .setAuthor('ʕ •ᴥ•ʔ ᴍᴏɴᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 13.00 น แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 30 นาทีจะถึงเวลาเรียน CPE101 ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/632262233547866122/918908161598034000/4.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่',);
    const EmbedMonstart2 = new MessageEmbed()
	.setColor('#ffcc00')
    .setAuthor('ʕ •ᴥ•ʔ ᴍᴏɴᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 13.30 น แล้ว ♡ \n\n ʕ　·ᴥ·ʔ ถึงเวลาเรียน CPE101 แล้ว ʕ·ᴥ·　ʔ')
	.setImage('https://cdn.discordapp.com/attachments/897437592000290839/908376694556082246/wakeup.png')
	.setTimestamp()
    const EmbedTue5 = new MessageEmbed()
	.setColor('#FF90FD')
    .setAuthor('ʕ •ᴥ•ʔ ᴛᴜᴇꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 8.25 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 5 นาทีจะถึงเวลาเรียน CPE111 ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/697363888739713086/916701929281818674/3.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    const EmbedTue30 = new MessageEmbed()
	.setColor('#FF90FD')
    .setAuthor('ʕ •ᴥ•ʔ ᴛᴜᴇꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 8.00 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 30 นาทีจะถึงเวลาเรียน CPE111 ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/697363888739713086/916701929281818674/3.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    const EmbedTuestart = new MessageEmbed()
	.setColor('#FF90FD')
    .setAuthor('ʕ •ᴥ•ʔ ᴛᴜᴇꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 8.30 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ ถึงเวลาเรียน CPE111 แล้ว ʕ·ᴥ·　ʔ')
	.setImage('https://cdn.discordapp.com/attachments/897437592000290839/908376694556082246/wakeup.png')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    
    const EmbedTue51 = new MessageEmbed()
	.setColor('#FF90FD')
    .setAuthor('ʕ •ᴥ•ʔ ᴛᴜᴇꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 10.25 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 5 นาทีจะถึงเวลาเรียน CPE101 ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/697363888739713086/916701929281818674/3.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    const EmbedTue301 = new MessageEmbed()
	.setColor('#FF90FD')
    .setAuthor('ʕ •ᴥ•ʔ ᴛᴜᴇꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 10.00 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 30 นาทีจะถึงเวลาเรียน CPE101 ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/697363888739713086/916701929281818674/3.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    const EmbedTuestart2 = new MessageEmbed()
	.setColor('#FF90FD')
    .setAuthor('ʕ •ᴥ•ʔ ᴛᴜᴇꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 10.30 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ ถึงเวลาเรียน CPE101 แล้ว ʕ·ᴥ·　ʔ')
    .setImage('https://cdn.discordapp.com/attachments/897437592000290839/908376694556082246/wakeup.png')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    
    const EmbedTue52 = new MessageEmbed()
	.setColor('#FF90FD')
    .setAuthor('ʕ •ᴥ•ʔ ᴛᴜᴇꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 13.25 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 5 นาทีจะถึงเวลาเรียน MTH101 ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/697363888739713086/916701929281818674/3.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    const EmbedTue302 = new MessageEmbed()
	.setColor('#FF90FD')
    .setAuthor('ʕ •ᴥ•ʔ ᴛᴜᴇꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 13.00 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 30 นาทีจะถึงเวลาเรียน MTH101 ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/697363888739713086/916701929281818674/3.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    const EmbedTuestart3 = new MessageEmbed()
	.setColor('#FF90FD')
    .setAuthor('ʕ •ᴥ•ʔ ᴛᴜᴇꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 13.30 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ ถึงเวลาเรียน MTH101 แล้ว ʕ·ᴥ·　ʔ')
    .setImage('https://cdn.discordapp.com/attachments/897437592000290839/908376694556082246/wakeup.png')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    
    const EmbedTue53 = new MessageEmbed()
	.setColor('#FF90FD')
    .setAuthor('ʕ •ᴥ•ʔ ᴛᴜᴇꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 15.25 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 5 นาทีจะถึงเวลาเรียน PHY103 ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/697363888739713086/916701929281818674/3.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    const EmbedTue303 = new MessageEmbed()
	.setColor('#FF90FD')
    .setAuthor('ʕ •ᴥ•ʔ ᴛᴜᴇꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 15.00 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 30 นาทีจะถึงเวลาเรียน PHY103 ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/697363888739713086/916701929281818674/3.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    const EmbedTuestart4 = new MessageEmbed()
	.setColor('#FF90FD')
    .setAuthor('ʕ •ᴥ•ʔ ᴛᴜᴇꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 15.30 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ ถึงเวลาเรียน PHY103 แล้ว ʕ·ᴥ·　ʔ')
    .setImage('https://cdn.discordapp.com/attachments/897437592000290839/908376694556082246/wakeup.png')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );

    const EmbedWed5 = new MessageEmbed()
	.setColor('#00FF1F')
    .setAuthor('ʕ •ᴥ•ʔ ᴡᴇᴅɴᴇꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 10.25 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 5 นาทีจะถึงเวลาเรียน CPE111 ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/697363888739713086/916701929281818674/3.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    const EmbedWed30 = new MessageEmbed()
	.setColor('#00FF1F')
    .setAuthor('ʕ •ᴥ•ʔ ᴡᴇᴅɴᴇꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 10.00 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 30 นาทีจะถึงเวลาเรียน CPE111 ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/697363888739713086/916701929281818674/3.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    const EmbedWedstart = new MessageEmbed()
	.setColor('#00FF1F')
    .setAuthor('ʕ •ᴥ•ʔ ᴡᴇᴅɴᴇꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 10.30 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ ถึงเวลาเรียน CPE111 แล้ว ʕ·ᴥ·　ʔ')
    .setImage('https://cdn.discordapp.com/attachments/897437592000290839/908376694556082246/wakeup.png')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );


    const EmbedThu5 = new MessageEmbed()
	.setColor('#FF925C')
    .setAuthor('ʕ •ᴥ•ʔ ᴛʜᴜʀꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 8.25 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 5 นาทีจะถึงเวลาเรียน CPE100 ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/697363888739713086/916701929281818674/3.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    const EmbedThu30 = new MessageEmbed()
	.setColor('#FF925C')
    .setAuthor('ʕ •ᴥ•ʔ ᴛʜᴜʀꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 8.00 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 30 นาทีจะถึงเวลาเรียน CPE100 ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/697363888739713086/916701929281818674/3.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    const EmbedThustart = new MessageEmbed()
	.setColor('#FF925C')
    .setAuthor('ʕ •ᴥ•ʔ ᴛʜᴜʀꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 8.30 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ ะถึงเวลาเรียน CPE100 แล้ว ʕ·ᴥ·　ʔ')
    .setImage('https://cdn.discordapp.com/attachments/897437592000290839/908376694556082246/wakeup.png')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );

    
    const EmbedThu52 = new MessageEmbed()
	.setColor('#FF925C')
    .setAuthor('ʕ •ᴥ•ʔ ᴛʜᴜʀꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 10.25 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 5 นาทีจะถึงเวลาเรียน PHY103 ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/697363888739713086/916701929281818674/3.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    const EmbedThu302 = new MessageEmbed()
	.setColor('#FF925C')
    .setAuthor('ʕ •ᴥ•ʔ ᴛʜᴜʀꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 10.00 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 30 นาทีจะถึงเวลาเรียน PHY103 ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/697363888739713086/916701929281818674/3.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    const EmbedThustart2 = new MessageEmbed()
	.setColor('#FF925C')
    .setAuthor('ʕ •ᴥ•ʔ ᴛʜᴜʀꜱᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 10.30 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ ถึงเวลาเรียน PHY103 แล้วʕ·ᴥ·　ʔ')
    .setImage('https://cdn.discordapp.com/attachments/897437592000290839/908376694556082246/wakeup.png')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    


    const EmbedFri5= new MessageEmbed()
	.setColor('#0036FF')
    .setAuthor('ʕ •ᴥ•ʔ ꜰʀɪᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 8.25 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 5 นาทีจะถึงเวลาเรียน MTH101 ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/697363888739713086/916701929281818674/3.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    const EmbedFri30 = new MessageEmbed()
	.setColor('#0036FF')
    .setAuthor('ʕ •ᴥ•ʔ ꜰʀɪᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 8.00 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 30 นาทีจะถึงเวลาเรียน MTH101 ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/632262233547866122/918908161598034000/4.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    const EmbedFristart = new MessageEmbed()
	.setColor('#0036FF')
    .setAuthor('ʕ •ᴥ•ʔ ꜰʀɪᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 8.30 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ ถึงเวลาเรียน MTH101 แล้ว ʕ·ᴥ·　ʔ')
    .setImage('https://cdn.discordapp.com/attachments/897437592000290839/908376694556082246/wakeup.png')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );

    const EmbedFri52= new MessageEmbed()
	.setColor('#0036FF')
    .setAuthor('ʕ •ᴥ•ʔ ꜰʀɪᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 13.25 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 5 นาทีจะถึงเวลาเรียน CPE100 ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/697363888739713086/916701929281818674/3.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    const EmbedFri302 = new MessageEmbed()
	.setColor('#0036FF')
    .setAuthor('ʕ •ᴥ•ʔ ꜰʀɪᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 13.00 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 30 นาทีจะถึงเวลาเรียน CPE100 ʕ·ᴥ·　ʔ')
	.setImage('https://media.discordapp.net/attachments/632262233547866122/918908161598034000/4.jpg')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );
    const EmbedFristart2 = new MessageEmbed()
	.setColor('#0036FF')
    .setAuthor('ʕ •ᴥ•ʔ ꜰʀɪᴅᴀʏ ᴄʟᴀꜱꜱʀᴏᴏᴍ\t\t\t\t', '', )
	.setDescription('♡ ตอนนี้เวลา 13.30 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ ถึงเวลาเรียน CPE100 แล้วʕ·ᴥ·　ʔ')
    .setImage('https://cdn.discordapp.com/attachments/897437592000290839/908376694556082246/wakeup.png')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );

    const Embedlogin = new MessageEmbed()
	.setColor('#E6E6FA')
    .setAuthor('ʕ •ᴥ•ʔ ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ʟᴏɢɪɴ\t\t\t\t', '', )
	//.setDescription('♡ ตอนนี้เวลา 13.30 แล้ว ♡ \n\n ʕ　·ᴥ·ʔ อีก 5 นาทีจะถึงเวลาเรียน CPE100 ʕ·ᴥ·　ʔ')
	.setImage('https://images-ext-2.discordapp.net/external/BiP38typeKKiF3kYkwy3ephppRq62AjKOLBcO_Or_hs/%3Fwidth%3D810%26height%3D456/https/media.discordapp.net/attachments/632262233547866122/905154280548335696/79412131dc58303d.png')
	.setTimestamp()
	.setFooter('ข้อความแจ้งเตือนจากครูใหญ่', );



    //บอทต้อนรับเวลาคนเข้าดิส
client.on('guildMemberAdd', guildMember =>{
        let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'student');

        guildMember.roles.add(welcomeRole);
        guildMember.guild.channels.cache.get('915680057148731393').send(`ยินดีต้อนรับนักศึกษา <@${guildMember.user.id}>เข้าสู่ดิสคอสนะครับ`)
});
 


client.on('messageCreate', msg=>{
    if (msg.content == prefix+'เข้าสู่ระบบ'){
        msg.channel.send({ embeds: [Embedlogin] });
    }
    })
client.on('messageCreate', msg=>{
        if (msg.content == prefix+'login'){
            msg.channel.send({ embeds: [Embedlogin] });
        }
        })
client.on('messageCreate', msg=>{
    if (msg.content == 'embed'){
        msg.channel.send({ embeds: [Embed1] });
    }
    if (msg.content == prefix+'ขอดูตารางเรียน'){
        msg.reply('ต้องการตารางเรียนของหลักสูตรไหนครับ')
        msg.channel.send("https://images-ext-1.discordapp.net/external/fyS0mVDAdkjtFkGvggTvANwQGUZWKxtxUargKSREJZY/https/media.discordapp.net/attachments/632262233547866122/908033860049199114/banner.png")
        msg.channel.send({ embeds: [Embedtable] });
    }
    if (msg.content == prefix+'schedule'){
        msg.reply('ต้องการตารางเรียนของหลักสูตรไหนครับ')
        msg.channel.send("https://images-ext-1.discordapp.net/external/fyS0mVDAdkjtFkGvggTvANwQGUZWKxtxUargKSREJZY/https/media.discordapp.net/attachments/632262233547866122/908033860049199114/banner.png")
        msg.channel.send({ embeds: [Embedtable] });
    }
    if (msg.content == 'ปกติ'){
        msg.reply('https://images-ext-2.discordapp.net/external/Pybx9aRewZYxkc_YLFn5PBHwp68Tso735LAOAxTzIqo/%3Fwidth%3D473%26height%3D676/https/media.discordapp.net/attachments/632262233547866122/908028880730873886/REG.png')
    }
    if (msg.content == 'regular'){
        msg.reply('https://images-ext-2.discordapp.net/external/Pybx9aRewZYxkc_YLFn5PBHwp68Tso735LAOAxTzIqo/%3Fwidth%3D473%26height%3D676/https/media.discordapp.net/attachments/632262233547866122/908028880730873886/REG.png')
    }
    if (msg.content == 'อินเตอร์'){
        msg.reply('https://images-ext-1.discordapp.net/external/h7JGeMQeqtoJrtG_u-Y1XMS5chOz4Exsbt-sQRhIf-Y/%3Fwidth%3D475%26height%3D676/https/media.discordapp.net/attachments/632262233547866122/907988386223128576/table.png')
    }
    if (msg.content == 'inter'){
        msg.reply('https://images-ext-1.discordapp.net/external/h7JGeMQeqtoJrtG_u-Y1XMS5chOz4Exsbt-sQRhIf-Y/%3Fwidth%3D475%26height%3D676/https/media.discordapp.net/attachments/632262233547866122/907988386223128576/table.png')
    }
    if (msg.content == 'วิทย์สุขภาพ'){
        msg.reply('https://images-ext-1.discordapp.net/external/wt72MUz_gxAxbcOJmMeU4bFU7v28EGkhy_2a5r6x3Gc/%3Fwidth%3D507%26height%3D676/https/media.discordapp.net/attachments/632262233547866122/908028908723642398/HDS.png')
    }
    if (msg.content == 'hds'){
        msg.reply('https://images-ext-1.discordapp.net/external/wt72MUz_gxAxbcOJmMeU4bFU7v28EGkhy_2a5r6x3Gc/%3Fwidth%3D507%26height%3D676/https/media.discordapp.net/attachments/632262233547866122/908028908723642398/HDS.png')
    }
    if (msg.content == 'ราชบุรี'){
        msg.reply('https://media.discordapp.net/attachments/918858994213330974/919263800073519224/RC.jpg?width=552&height=676')
    }
    if (msg.content == 'rc'){
        msg.reply('https://media.discordapp.net/attachments/918858994213330974/919263800073519224/RC.jpg?width=552&height=676')
    }
})

const EmbedDay = new MessageEmbed()
    .setColor('#6666CC')
    //.setTitle('ʕ •ᴥ•ʔ ʜᴇʟᴘᴍᴇɴᴜ ')
    //.setURL('https://media.discordapp.net/attachments/697363888739713086/915702491465809961/6F57811D-F701-4A2E-9727-6E4F9765DACD.jpg?width=687&height=1221')
    .setAuthor('ʕ •ᴥ•ʔ ɴᴏᴛɪꜰɪᴄᴀᴛɪᴏɴ ᴄʟᴀꜱꜱʀᴏᴏᴍ \t\t\t\t', '', //'https://media.discordapp.net/attachments/903208555421777931/915660290945855508/Emilia_ep.41_3.png?width=810&height=456'
    )
    .setDescription('╰⓵ -วันจันทร์ \n ╰⓶ -วันอังคาร \n ╰⓷ -วันพุธ\n ╰⓸ -วันพฤหัสบดี \n ╰⓹ -วันศุกร์  ')
    /*.addFields(
	{ name: '╰ Invite: กดที่นี่เพื่อเชิญ', value: 'Some value here' },)*/
    .setImage('https://media.discordapp.net/attachments/708269551066021898/918398644804288522/day.jpg')
    .setTimestamp()
    //.setFooter('', //'https://i.imgur.com/AfFp7pu.png'
    ;

// ฟังก์ชัน help 
client.on('messageCreate', msg=>{
    
    if (msg.content == prefix+'help'){
        msg.channel.send({ embeds: [Embedhelp] });
    }
})
client.on('messageCreate', msg=>{
    
    if (msg.content == prefix+'mon'){
        msg.channel.send({ embeds: [EmbedMonstart2] });
    }
})
client.on('messageCreate', msg=>{
    if (msg.content == prefix+'แจ้งเตือนเวลาเรียน'){
        msg.reply('วันนี้เป็นวันอะไร')
        msg.channel.send({ embeds: [EmbedDay] });
        
    }
})
client.on('messageCreate', msg=>{
    if (msg.content == prefix+'notification'){
        msg.reply('วันนี้เป็นวันอะไร')
        msg.channel.send({ embeds: [EmbedDay] });
        
    }
})

client.on('messageCreate', msg=>{
    if (msg.content == prefix+'วันจันทร์'){
        msg.channel.send({ embeds: [EmbedOnmon] });
    cron.schedule('1 10 23 * * Sat', function(){
        msg.channel.send({ embeds: [EmbedMon5] });
    })
    cron.schedule('1 08 23 * * Sat', function(){
        msg.channel.send({ embeds: [EmbedMon30] });
    })
    cron.schedule('1 11 23 * * Sat', function(){
        msg.channel.send({ embeds: [EmbedMonstart1] }); 
    })
    cron.schedule('1 00 13 * * Mon', function(){
        msg.channel.send({ embeds: [EmbedMon52]});
    })
    cron.schedule('1 25 13 * * Mon', function(){
        msg.channel.send({ embeds: [EmbedMon302]});
    })
    cron.schedule('1 30 13 * * Mon', function(){
        msg.channel.send({ embeds: [EmbedMonstart2]});
        msg.channel.send({ embeds: [EmbedOffmon] });
    })
    };
    })

    client.on('messageCreate', msg=>{
        if (msg.content == prefix+'monday'){
            msg.channel.send({ embeds: [EmbedOnmon] });
        cron.schedule('1 25 9 * * Mon', function(){
            msg.channel.send({ embeds: [EmbedMon5] });
        })
        cron.schedule('1 00 9 * * Mon', function(){
            msg.channel.send({ embeds: [EmbedMon30] });
        })
        cron.schedule('1 30 9 * * Mon', function(){
            msg.channel.send({ embeds: [EmbedMonstart1] }); 
        })
        cron.schedule('1 00 13 * * Mon', function(){
            msg.channel.send({ embeds: [EmbedMon52]});
        })
        cron.schedule('1 25 13 * * Mon', function(){
            msg.channel.send({ embeds: [EmbedMon302]});
        })
        cron.schedule('1 30 13 * * Mon', function(){
            msg.channel.send({ embeds: [EmbedMonstart2]});
            msg.channel.send({ embeds: [EmbedOffmon] });
        })
        };
        })

        client.on('messageCreate', msg=>{
            if (msg.content == prefix+'Monday'){
                msg.channel.send({ embeds: [EmbedOnmon] });
            cron.schedule('1 25 9 * * Mon', function(){
                msg.channel.send({ embeds: [EmbedMon5] });
            })
            cron.schedule('1 00 9 * * Mon', function(){
                msg.channel.send({ embeds: [EmbedMon30] });
            })
            cron.schedule('1 30 9 * * Mon', function(){
                msg.channel.send({ embeds: [EmbedMonstart1] }); 
            })
            cron.schedule('1 00 13 * * Mon', function(){
                msg.channel.send({ embeds: [EmbedMon52]});
            })
            cron.schedule('1 25 13 * * Mon', function(){
                msg.channel.send({ embeds: [EmbedMon302]});
            })
            cron.schedule('1 30 13 * * Mon', function(){
                msg.channel.send({ embeds: [EmbedMonstart2]});
                msg.channel.send({ embeds: [EmbedOffmon] });
            })
            };
            })
client.on('messageCreate', msg=>{
    if (msg.content == prefix+'วันอังคาร'){
        msg.channel.send({ embeds: [EmbedOntue] }); 
    cron.schedule('1 25 8 * * Tue', function(){
        msg.channel.send({ embeds: [EmbedTue5] });
    })
    cron.schedule('1 00 8 * * Tue', function(){
        msg.channel.send({ embeds: [EmbedTue30] });
    })
    cron.schedule('1 30 8 * * Tue', function(){
        msg.channel.send({ embeds: [EmbedTuestart] });//CPE111
    })
    cron.schedule('1 25 10 * * Tue', function(){
        msg.channel.send({ embeds: [EmbedTue51] });
    })
    cron.schedule('1 00 10 * * Tue', function(){
        msg.channel.send({ embeds: [EmbedTue301] });
    })
    cron.schedule('1 30 10 * * Tue', function(){
        msg.channel.send({ embeds: [EmbedTuestart2] });//CPE101
    })
    cron.schedule('1 25 13 * * Tue', function(){
        msg.channel.send({ embeds: [EmbedTue52] });
    })
    cron.schedule('1 00 13 * * Tue', function(){
        msg.channel.send({ embeds: [EmbedTue302] });
    })
    cron.schedule('1 30 13 * * Tue', function(){
        msg.channel.send({ embeds: [EmbedTuestart3] });//MTH101
    })
    cron.schedule('1 25 15 * * Tue', function(){
        msg.channel.send({ embeds: [EmbedTue53] });
    })
    cron.schedule('1 00 15 * * Tue', function(){
        msg.channel.send({ embeds: [EmbedTue303] });
    })
    cron.schedule('1 30 15 * * Tue', function(){
        msg.channel.send({ embeds: [EmbedTuestart4] });
        msg.channel.send({ embeds: [EmbedOfftue] });
    })
    };
    })

    client.on('messageCreate', msg=>{
        if (msg.content == prefix+'Tuesday'){
            msg.channel.send({ embeds: [EmbedOntue] }); 
        cron.schedule('1 25 8 * * Tue', function(){
            msg.channel.send({ embeds: [EmbedTue5] });
        })
        cron.schedule('1 00 8 * * Tue', function(){
            msg.channel.send({ embeds: [EmbedTue30] });
        })
        cron.schedule('1 30 8 * * Tue', function(){
            msg.channel.send({ embeds: [EmbedTuestart] });//CPE111
        })
        cron.schedule('1 25 10 * * Tue', function(){
            msg.channel.send({ embeds: [EmbedTue51] });
        })
        cron.schedule('1 00 10 * * Tue', function(){
            msg.channel.send({ embeds: [EmbedTue301] });
        })
        cron.schedule('1 30 10 * * Tue', function(){
            msg.channel.send({ embeds: [EmbedTuestart2] });//CPE101
        })
        cron.schedule('1 25 13 * * Tue', function(){
            msg.channel.send({ embeds: [EmbedTue52] });
        })
        cron.schedule('1 00 13 * * Tue', function(){
            msg.channel.send({ embeds: [EmbedTue302] });
        })
        cron.schedule('1 30 13 * * Tue', function(){
            msg.channel.send({ embeds: [EmbedTuestart3] });//MTH101
        })
        cron.schedule('1 25 15 * * Tue', function(){
            msg.channel.send({ embeds: [EmbedTue53] });
        })
        cron.schedule('1 00 15 * * Tue', function(){
            msg.channel.send({ embeds: [EmbedTue303] });
        })
        cron.schedule('1 30 15 * * Tue', function(){
            msg.channel.send({ embeds: [EmbedTuestart4] });
            msg.channel.send({ embeds: [EmbedOfftue] });
        })
        };
        })
        client.on('messageCreate', msg=>{
            if (msg.content == prefix+'tuesday'){
                msg.channel.send({ embeds: [EmbedOntue] }); 
            cron.schedule('1 25 8 * * Tue', function(){
                msg.channel.send({ embeds: [EmbedTue5] });
            })
            cron.schedule('1 00 8 * * Tue', function(){
                msg.channel.send({ embeds: [EmbedTue30] });
            })
            cron.schedule('1 30 8 * * Tue', function(){
                msg.channel.send({ embeds: [EmbedTuestart] });//CPE111
            })
            cron.schedule('1 25 10 * * Tue', function(){
                msg.channel.send({ embeds: [EmbedTue51] });
            })
            cron.schedule('1 00 10 * * Tue', function(){
                msg.channel.send({ embeds: [EmbedTue301] });
            })
            cron.schedule('1 30 10 * * Tue', function(){
                msg.channel.send({ embeds: [EmbedTuestart2] });//CPE101
            })
            cron.schedule('1 25 13 * * Tue', function(){
                msg.channel.send({ embeds: [EmbedTue52] });
            })
            cron.schedule('1 00 13 * * Tue', function(){
                msg.channel.send({ embeds: [EmbedTue302] });
            })
            cron.schedule('1 30 13 * * Tue', function(){
                msg.channel.send({ embeds: [EmbedTuestart3] });//MTH101
            })
            cron.schedule('1 25 15 * * Tue', function(){
                msg.channel.send({ embeds: [EmbedTue53] });
            })
            cron.schedule('1 00 15 * * Tue', function(){
                msg.channel.send({ embeds: [EmbedTue303] });
            })
            cron.schedule('1 30 15 * * Tue', function(){
                msg.channel.send({ embeds: [EmbedTuestart4] });
                msg.channel.send({ embeds: [EmbedOfftue] });
            })
            };
            })
client.on('messageCreate', msg=>{
    if (msg.content == prefix+'วันพุธ'){
        msg.channel.send({ embeds: [EmbedOnwed] });    
        cron.schedule('1 25 10 * * Wed', function(){
            msg.channel.send({ embeds: [EmbedWed5] });
    })
    cron.schedule('1 00 10 * * Wed', function(){
        msg.channel.send({ embeds: [EmbedWed30] });
})
    cron.schedule('1 30 10 * * Wed', function(){
        msg.channel.send({ embeds: [EmbedWedstart] });
        msg.channel.send({ embeds: [EmbedOffwed] });
    })
    };
    })

    client.on('messageCreate', msg=>{
        if (msg.content == prefix+'wednesday'){
            msg.channel.send({ embeds: [EmbedOnwed] });    
            cron.schedule('1 25 10 * * Wed', function(){
                msg.channel.send({ embeds: [EmbedWed5] });
        })
        cron.schedule('1 00 10 * * Wed', function(){
            msg.channel.send({ embeds: [EmbedWed30] });
    })
        cron.schedule('1 30 10 * * Wed', function(){
            msg.channel.send({ embeds: [EmbedWedstart] });
            msg.channel.send({ embeds: [EmbedOffwed] });
        })
        };
        })

        client.on('messageCreate', msg=>{
            if (msg.content == prefix+'Wednesday'){
                msg.channel.send({ embeds: [EmbedOnwed] });    
                cron.schedule('1 25 10 * * Wed', function(){
                    msg.channel.send({ embeds: [EmbedWed5] });
            })
            cron.schedule('1 00 10 * * Wed', function(){
                msg.channel.send({ embeds: [EmbedWed30] });
        })
            cron.schedule('1 30 10 * * Wed', function(){
                msg.channel.send({ embeds: [EmbedWedstart] });
                msg.channel.send({ embeds: [EmbedOffwed] });
            })
            };
            })
client.on('messageCreate', msg=>{
    if (msg.content == prefix+'วันพฤหัสบดี'){
        msg.channel.send({ embeds: [EmbedOnthu] });     
    cron.schedule('1 25 8 * * 4', function(){
        msg.channel.send({ embeds: [EmbedThu5]});
    })
    cron.schedule('1 00 8 * * 4', function(){
        msg.channel.send({ embeds: [EmbedThu30]});
    })
    cron.schedule('1 30 8 * * 4', function(){
        msg.channel.send({ embeds: [EmbedThustart]});
    })
    cron.schedule('1 25 10 * * 4', function(){
        msg.channel.send({ embeds: [EmbedThu52]});
    })
    cron.schedule('1 00 10 * * 4', function(){
        msg.channel.send({ embeds: [EmbedThu302]});
    })
    cron.schedule('1 30 10 * * 4', function(){
        msg.channel.send({ embeds: [EmbedThustart2]});
        msg.channel.send({ embeds: [EmbedOffthu] });
    })
    };
    })

    client.on('messageCreate', msg=>{
        if (msg.content == prefix+'Thursday'){
            msg.channel.send({ embeds: [EmbedOnthu] });     
        cron.schedule('1 25 8 * * 4', function(){
            msg.channel.send({ embeds: [EmbedThu5]});
        })
        cron.schedule('1 00 8 * * 4', function(){
            msg.channel.send({ embeds: [EmbedThu30]});
        })
        cron.schedule('1 30 8 * * 4', function(){
            msg.channel.send({ embeds: [EmbedThustart]});
        })
        cron.schedule('1 25 10 * * 4', function(){
            msg.channel.send({ embeds: [EmbedThu52]});
        })
        cron.schedule('1 00 10 * * 4', function(){
            msg.channel.send({ embeds: [EmbedThu302]});
        })
        cron.schedule('1 30 10 * * 4', function(){
            msg.channel.send({ embeds: [EmbedThustart2]});
            msg.channel.send({ embeds: [EmbedOffthu] });
        })
        };
        })

        client.on('messageCreate', msg=>{
            if (msg.content == prefix+'thursday'){
                msg.channel.send({ embeds: [EmbedOnthu] });     
            cron.schedule('1 25 8 * * 4', function(){
                msg.channel.send({ embeds: [EmbedThu5]});
            })
            cron.schedule('1 00 8 * * 4', function(){
                msg.channel.send({ embeds: [EmbedThu30]});
            })
            cron.schedule('1 30 8 * * 4', function(){
                msg.channel.send({ embeds: [EmbedThustart]});
            })
            cron.schedule('1 25 10 * * 4', function(){
                msg.channel.send({ embeds: [EmbedThu52]});
            })
            cron.schedule('1 00 10 * * 4', function(){
                msg.channel.send({ embeds: [EmbedThu302]});
            })
            cron.schedule('1 30 10 * * 4', function(){
                msg.channel.send({ embeds: [EmbedThustart2]});
                msg.channel.send({ embeds: [EmbedOffthu] });
            })
            };
            })
client.on('messageCreate', msg=>{
    if (msg.content == prefix+'วันศุกร์'){
        msg.channel.send({ embeds: [EmbedOnfri] });    
    cron.schedule('1 25 8 * * Fri', function(){
        msg.channel.send({ embeds: [EmbedFri5]});
    })
    cron.schedule('1 30 8 * * Fri', function(){
        msg.channel.send({ embeds: [EmbedFri30]});
    })
    cron.schedule('1 00 8 * * Fri', function(){
        msg.channel.send({ embeds: [EmbedFristart]});
    })
    cron.schedule('1 25 13 * * Fri', function(){
        msg.channel.send({ embeds: [EmbedFri52]});
    })
    cron.schedule('1 00 13 * * Fri', function(){
        msg.channel.send({ embeds: [EmbedFri302]});
    })
    cron.schedule('1 30 13 * * Fri', function(){
        msg.channel.send({ embeds: [EmbedFristart2]});
        msg.channel.send({ embeds: [EmbedOfffri] });
    })
    };
    })

client.on('messageCreate', msg=>{
    if (msg.content == prefix+'Friday'){
        msg.channel.send({ embeds: [EmbedOnfri] });    
    cron.schedule('1 25 8 * * Fri', function(){
        msg.channel.send({ embeds: [EmbedFri5]});
    })
    cron.schedule('1 30 8 * * Fri', function(){
        msg.channel.send({ embeds: [EmbedFri30]});
    })
    cron.schedule('1 00 8 * * Fri', function(){
        msg.channel.send({ embeds: [EmbedFristart]});
    })
    cron.schedule('1 25 13 * * Fri', function(){
        msg.channel.send({ embeds: [EmbedFri52]});
    })
    cron.schedule('1 00 13 * * Fri', function(){
        msg.channel.send({ embeds: [EmbedFri302]});
    })
    cron.schedule('1 30 13 * * Fri', function(){
        msg.channel.send({ embeds: [EmbedFristart2]});
        msg.channel.send({ embeds: [EmbedOfffri] });
    })
    };
    })

client.on('messageCreate', msg=>{
    if (msg.content == prefix+'friday'){
        msg.channel.send({ embeds: [EmbedOnfri] });    
    cron.schedule('1 25 8 * * Fri', function(){
        msg.channel.send({ embeds: [EmbedFri5]});
    })
    cron.schedule('1 00 23 * * Fri', function(){
        msg.channel.send({ embeds: [EmbedFri30]});
    })
    cron.schedule('1 30 8 * * Fri', function(){
        msg.channel.send({ embeds: [EmbedFristart]});
    })
    cron.schedule('1 25 23 * * Fri', function(){
        msg.channel.send({ embeds: [EmbedFri52]});
    })
    cron.schedule('1 00 13 * * Fri', function(){
        msg.channel.send({ embeds: [EmbedFri302]});
    })
    cron.schedule('1 30 13 * * Fri', function(){
        msg.channel.send({ embeds: [EmbedFristart2]});
        msg.channel.send({ embeds: [EmbedOfffri] });
    })
    };
    })
client.login(process.env.TOKEN)