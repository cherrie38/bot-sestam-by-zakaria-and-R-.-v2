1help
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});


const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "1";
client.login()
// يمسح الروم 
client.on("message", hr => {
if (hr.content.startsWith(prefix + "delete")) {
  
   var haider = hr.channel.delete();
  
hr.channel.send(` ${haider}`)
}
});


// كود افتار 
  client.on('message', message =>{
    
    if(message.content.startsWith(prefix + 'avatar')){
        let args = message.content.substring(prefix.length).split(" ");
        
        const user = message.mentions.users.first()
        if (!user && !args[1]) {
           
           const uavatar = message.author.avatarURL({ size: 4096, dynamic: true })
           const embed3 = new Discord.MessageEmbed()
               .setTitle(`${message.member.user.username} avatar`)
               .setDescription(`[Avatar URL of **${message.member.user.username}**](${uavatar})`)
               .setColor('RANDOM')
               .setImage(uavatar)
           message.channel.send(embed3)
       } 
      


       if (args[1] === 'server') {
        
        const savatar = message.guild.iconURL({ size: 4096, dynamic: true })
        const embed2 = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name} avatar`)
            .setDescription(`[Avatar URL of **${message.guild.name}**](${savatar})`)
            .setColor('RANDOM')
            .setImage(savatar)
        message.channel.send(embed2)
       
       }
       
               
               
       
               if (user) {
                   const avatar = user.displayAvatarURL({ size: 4096, dynamic: true });
       
       
                   const embed = new Discord.MessageEmbed()
                       .setTitle(`${user.username} avatar`)
                       .setDescription(`[Avatar URL of **${user.username}**](${avatar})`)
                       .setColor('RANDOM')
                       .setImage(avatar)
                   message.channel.send(embed)
               }
       }
  })


// كود باند 

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith( prefix + 'ban')) {
        if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");      
 
    const user = message.mentions.users.first();
  
    if (user) {
      
      const member = message.guild.member(user);
      
      if (member) {
 
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            
                        const embed = new Discord.MessageEmbed()
           .setColor("0F750E")
               .setFooter(`)

          .setTitle(`Successfully banned ${user.tag}`)
          message.channel.send(embed);
          })
          .catch(err => {
 
            message.reply('I was unable to ban the member');
           
            console.error(err);
          });
      } else {
       
        message.reply("That user isn't in this guild!");
      }
    } else {
      
      const embed = new Discord.MessageEmbed()
.setColor("FF0000")
.setTitle("``You didn't mention the user to ban!`` ❌")
message.channel.send(embed);
    }
  }
});

// كود قفل وفتح الشات 

client.on('message',async message =>{
let command = message.content.split(" ")[0]
command = command.slice(prefix.length)
if (message.content === prefix + "unlock") {
  if (!message.channel.guild)
    return message.reply("**this command is only for servers**");

  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.reply("**you don't have permissions **``MANAGE_MESSAGES``");
  message.channel.overwritePermissions([
{
 id: message.guild.id,
 allow: ['SEND_MESSAGES'],
},
], 'Needed to change permissions')
   message.channel.send(`**:unlock:| ${message.channel} Has Been Unlocked. **`)

}

if (message.content === prefix + "lock") {
  if (!message.channel.guild)
    return message.reply("**this command is only for servers**");

  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.reply("**you don't have permissions** ``MANAGE_MESSAGES``**");
  message.channel.overwritePermissions([
{
 id: message.guild.id,
 deny: ['SEND_MESSAGES'],
},
], 'Needed to change permissions')
      message.channel.send(`**:lock:| ${message.channel} Has Been Locked.**`)


}
});
///code kick

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith( prefix + 'kick')) {
    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
          
        
            const embed = new Discord.MessageEmbed()
           .setColor("0F750E")
               .setFooter(``)

          .setTitle(`Successfully kicked ${user.tag}`)
          message.channel.send(embed);
 
          })
          .catch(err => {
 
            message.reply('I was unable to kick the member');
            
            console.error(err);
          });
      } else {
       
        message.reply("That user isn't in this guild!");
      }
      
    } else {
 
const embed = new Discord.MessageEmbed()
.setColor("FF0000")
.setTitle("``You didn't mention the user to kick!`` ❌")
message.channel.send(embed);
    }
  }
});

// كود اضهار الروم واخفاها

client.on('message', message =>{
if(message.content === prefix +"hide"){
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.createOverwrite(everyone, {
              VIEW_CHANNEL : false
            }).then(() => {
                                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
               .setThumbnail(message.guild.iconURL())
                .setDescription(`> **Done Hide This Room ${message.channel}**`)
                .setFooter(`By ${message.author.username}`)
                message.channel.send(embed)
                })
}
});


client.on('message', message =>{
if(message.content === prefix +"show"){
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.createOverwrite(everyone, {
              VIEW_CHANNEL : true
            }).then(() => {
                                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
               .setThumbnail(message.guild.iconURL())
                .setDescription(`> **Done Show This Room ${message.channel}**`)
                    .setFooter(``)

                })
}
});  






// معلومات السرفر 
 
   client.on("message", jxa => {
    if (jxa.content === prefix + "server") {
  
  
      let embed = new Discord.MessageEmbed()
      .setTitle(`${jxa.guild.name}`)
      .setFooter(``)
        .setDescription(`**
      **ID Server** : ${jxa.guild.id}

    **Owner Server** : ${jxa.guild.owner}

   **Created** : ${jxa.guild.createdAt.toLocaleString()}

    **Members** : ${jxa.guild.memberCount}

   **Channels** : ${jxa.guild.channels.cache.size}
   
     **Region** : ${jxa.guild.region}
    **`);
    jxa.channel.send(embed);
    }
  });



///كود حماية الروابط
client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if(message.content.includes('discord.gg')){
    if(!message.member.hasPermission('ADMINISTRATOR'))
      message.delete()
  return message.reply(`** No Invite Links :angry: ! **`)
  }
});

///كود قيف اواي
const ms = require("ms");
 
client.on('message', async message => {
  let cmd = message.content.split(" ")[0];
  if (cmd == prefix + "gstart") {
    let winners = message.content.split(" ")[1];
    let time = message.content.split(" ")[2];
    let prize = message.content.split(" ").slice(3).join(" ");
    if (!winners || !time || !prize) return message.channel.send(`**Pls Use This Command Like this**\n \`${prefix}gstart 1 10m Nitro C\``);
    ///////time
    let ggg = ['d', "m", "h", "s"];
    if (ggg.some(c => time.endsWith(c))) {
      let timee = ms(time);
      console.log(timee);
      if (timee <= 10000) return message.channel.send(`**You Can't Make Giveaway Time Less Than 10sec**`);
      /////winners
      if (timee > 2592000000) return message.channel.send(`**You Can't Make Giveaway Time More Than 30Day**`)
      if (isNaN(winners)) return message.channel.send(`**Pls Type Number Of Winners Like:**\n${prefix}gstart \`1\` 10m Nitro C`);
      let wooners = Math.floor(winners);
      if (wooners >= 20 || wooners <= 0) return message.channel.send(`**Winners Most Be More Than 0 And Not More Than 20**`);
      ///// prize
      let tm = ms((timee - (Date.now() - (Date.now() + timee)) % 2), { long: true })
      let embed = new Discord.MessageEmbed()
        .setTitle('Giveaway Started')
        .setDescription(`Prize : ${prize}\n Ends At : ${tm}`)
        .setFooter(`${wooners} Winners | Hosted By : ${message.author.username}`)
        .setColor('GREEN')
 
 
      message.channel.send(embed).then(c => {
        c.react('🎉');
        asta(c, wooners, timee, prize, message.author.id);
      })
    } else {
      message.channel.send("**Please The Time Most Be Ends With 10m or 10s or 11h or 2d**");
    }
  } 
})
function asta(message, winners, time, prize, hoster) {
  setTimeout(() => {
    let tm = ms(((time - (Date.now() - (Date.now() + time)) % 2) / 2), { long: true })
    let embed = new Discord.MessageEmbed()
      .setTitle('Giveaway Started')
      .setDescription(`Prize : ${prize}\n Ends At : ${tm}`)
      .setFooter(`${winners} Winners | Hosted By : ${hoster}`)
      .setColor('GREEN')
 
    message.edit(embed);
 
  }, time / 4);
  setTimeout(() => {
    let tm = ms(((time - (Date.now() - (Date.now() + time)) % 2) / 4), { long: true })
    let embed = new Discord.MessageEmbed()
      .setTitle('Giveaway Started')
      .setDescription(`Prize : ${prize}\n Ends At : ${tm}`)
      .setFooter(`${winners} Winners | Hosted By : ${hoster}`)
      .setColor('GREEN')
 
    message.edit(embed);
 
  }, time / 2);
  setTimeout(() => {
    message.reactions.cache.get('🎉').users.remove(client.user.id)
    setTimeout(async () => {
      let winner = "";
      let s = [];
      let m = await message.reactions.cache.get('🎉').users.cache;
 
      m.forEach((value, key) => {
        s.push(key);
      })
 
 
 
      console.log(m);
 
      for (i = 0; i <= winners - 1; i++) {
        console.log(s);
 
        let r = s[Math.floor(Math.random() * s.length)];
        console.log(r);
        winner += "<@" + r + "> \n";
 
      }
      if (message.reactions.cache.get('🎉').users.cache.size < 1) {
        let embed = new Discord.MessageEmbed()
          .setTitle('End Giveaway')
          .setDescription(`No One Entered`)
          .setColor('RED')
        message.edit(embed);
      } else {
        let embed = new Discord.MessageEmbed()
          .setTitle('End Giveaway')
          .setDescription(`**Hosted By : <@${hoster}>**\n **Winner/s :**${winner}`)
          .setColor('GREEN')
        message.edit(embed);
        message.channel.send(`**Congratulations  ${winner}! You won the  ${prize}!**`);
      }
 
 
 
 
 
    }, 1000)
  }, time)
} ///حقوق monn codes

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.mentions.has(client.user))
    {
    message.reply(`**My Prefix Is** : \`${prefix}\``)
    }
});

///كود ميمز
var memes =["https ://cdn.discordapp.com/attachments/771701204370849842/798894896068165652/download.jpg","https: //cdn.discordapp.com/attachments/771701204370849842/798894918537314304/download_1.jpg","https ://cdn.discordapp.com/attachments/771701204370849842/798894940175859752/download_2.jpg","https: //cdn.discordapp.com/attachments/771701204370849842/798894960320446484/images.jpg","https ://cdn.discordapp.com/attachments/771701204370849842/798894979858563082/images_1.jpg","https: //cdn.discordapp.com/attachments/771701204370849842/798895019674566686/images_2.jpg","https ://cdn.discordapp.com/attachments/771701204370849842/798895039962284082/images_3.jpg","https: //cdn.discordapp.com/attachments/771701204370849842/798895060723826708/images_4.jpg"]
  client.on('message', message => {
   
  if(message.content.startsWith(prefix + 'memes')) {
   if(!message.channel.guild) return message.reply('** U CANT TYPE HERE**');
   var embed = new Discord.MessageEmbed()
  .setImage(memes[Math.floor(Math.random() * memes.length)])
   .setColor('RANDOM')
  message.channel.send(embed);
  }
  });

/// كود صراحة

  const sara7a = [
'تحب احد', 
'وش لونك المفضل', 
'وش تحب تاكل', 
'تحب سيرفر نار',
]; //تقدر تضيف كمان
client.on('message', alone => {
if (alone.content.startsWith(prefix + 'صراحة')) {
  if(!alone.channel.guild) return alone.reply('** This command only for servers **');
var ALONE = new Discord.MessageEmbed()

.setTitle("**SARA7A**")

.setColor("BLACK")

.setDescription(`${sara7a[Math.floor(Math.random() * sara7a.length)]}`)

         
      .setTimestamp()

 .setFooter(`Requsted by: ${alone.author.username}`)

 alone.react("✔")




alone.channel.send(ALONE)

}
});

///  trash كود


client.on("message", async (message) => {
let DIG = require("discord-image-generation");
    if (message.content.startsWith(prefix + "trash")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")
 
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Trash().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Trash.png");;
        message.channel.send(attach)
    }
});

     
/// spank كود


const DIG = require("discord-image-generation");
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "spank")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Spank().getImage(`${avatar}`, `${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Spank.png");;
        message.channel.send(attach)
    }
});
/// slap كود

client.on('message', message => {
  if(message.content.startsWith(prefix + "slap")) {
     let args = message.content.split(" ").slice(1).join(" ")
    if(!args) return message.reply("**Please Mention Someone**")
let user = message.mentions.users.first();user.username

      if (user.id == message.author.id) return message.reply("**You cannot use this command with yourself**")
if(message.author.bot || !message.guild) return message.reply("**this command for server only**")
 
var image = ' https://media.discordapp.net/attachments/790668583419510794/801426474212786206/1_3aJviL20aQQ9XNeBrAVl3A.gif?width=1178&height=613 '

 message.channel.send({
          embed: new Discord.MessageEmbed()
          .setFooter(`Code By Shark`)
          .setTitle(`${message.author.username} \`\`Slaped\`\` ${user.username}`)
          .setImage(` ${image} `)
             
      });
  }
});

/// wanted كود

client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "wanted")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Wanted().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Wanted.png");;
        message.channel.send(attach)
    }
});
///profile كود
 
client.on('message', message => {
    let args = message.content.split(' ');
    if (message.content.startsWith(prefix + 'profile')) {
        let member = message.mentions.users.first();

        if (args[0] && !args[1]) {
            message.channel.startTyping();
            setTimeout(() => {
                message.channel.stopTyping();
            }, Math.random() * (1 - 3) + 1 * 1000);
            message.channel.send({
                files: [
                    {
                        name: 'cutie=HyPeD.png',
                        attachment: `https://api.probot.io/profile/${message.author.id}`
                    }
                ]
            });
        }
        if (member) {
            message.channel.startTyping();
            setTimeout(() => {
                message.channel.stopTyping();
            }, Math.random() * (1 - 3) + 1 * 1000);
            message.channel.send({
                files: [
                    {
                        name: 'cutie=HyPeD.png',
                        attachment: `https://api.probot.io/profile/${member.id}`
                    }
                ]
            });
        } else if (args[1] && !member) {
            client.users.fetch(args[1]).then(userr => {
                message.channel.stopTyping();
                setTimeout(() => {
                    message.channel.stopTyping();
                }, Math.random() * (1 - 3) + 1 * 1000);
                message.channel.send({
                    files: [
                        {
                            name: 'cutie=HyPeD.png',
                            attachment: `https://api.probot.io/profile/${userr.id}`
                        }
                    ]
                });
            });
        }
    }
});
/// ramadan كود
 
 client.on("message",zaki=> {
    if(zaki.content === (prefix + 'متى رمضان'))
    var embed = new Discord.MessageEmbed()
    .setDescription(`**تاريخ البدء	13 أبريل 2021
تاريخ الانتهاء	13 مايو 2021
	ستبدأ بعد 67 يوم
مدة رمضان	31 يوم
**`)
.setTitle("متى رمضان")
zaki.channel.send(embed)
  });
///جميع الحقوق محفوضة لZakaria🍁#4675 و' R . ♪#1708 
client.on("message",zaki=> {
    if(zaki.content === (prefix + 'متى عيد الاضحى'))
    var embed = new Discord.MessageEmbed()
    .setDescription(`**تاريخ البدء	20 يوليو 2021
تاريخ الانتهاء	23 يوليو 2021
متي؟	ستبدأ بعد 165 يوم
مدة العيد	4 يوم
**`)
.setTitle(" متى عيد الاضحى")
zaki.channel.send(embed)
  });
  
  client.on("message",zaki=> {
    if(zaki.content === (prefix + 'متى عيد الفطر'))
    var embed = new Discord.MessageEmbed()
    .setDescription(`**تاريخ البدء	13 مايو 2021
تاريخ الانتهاء	15 مايو 2021
متي؟	ستبدأ بعد 97 يوم
مدة العيد	3 يوم

**`)
.setTitle("متى عيد الفطر")
zaki.channel.send(embed)
  });

client.on('message', zaki => {
  if (zaki.content.startsWith(prefix + "اذكار")) {
    let cuts = [
      '**الحَمْدُ لله الذِي أحْيَانا بَعْدَمَا أمَاتَنَا وإلَيْهِ النَشُور **',
      '**الحَمْدُ لله الذِي عَافَانِي في جَسَدِي ورَدَّ عَلَيَّ رُوحِي، وأَذِنَ لي بِذِكْرهِ**',
      '**مَنْ تَعَارَ مِنَ اللَّيْل – أى استيقظ – فقال:”لا إلَهَ إلاَّ الله وحْدَهُ لا شَرِيكَ لَهُ، لَهُ المُلْكُ ولَهُ الحَمْدُ وهُوَ على كلِّ شيءٍ قَدير، الحَمْدُ لله وسُبْحانَ الله ولا إله  إلا الله والله أكبر ولا حَولَ ولا قُوةَ إلا بالله” ثم قال: “اللَّهُمَّ اغْفِرْ لي”، أو دعى استُجيبَ لهُ، فإن توَضأَ وصَلّى قُبِلَتْ صَلاتُهُ.**',
      '** بسم الله ولجنا وبسم الله خرجنا وعلى ربنا توكلنا ثم يسلم على أهله **',
      ' **بسم الله توكلت على الله ولا حول ولا قوة إلا بالله**',
      ' **اللهم أني أعوذ بك من أن أَضِلَّ أو أُضَلَّ أو أَزِلَّ أو أُزَل أو أَظلِمَ أو أُظلَمَ أو اجهل أو يجهل علي**',
      ' **ان الله غفورو رحيم **',






    ];
    //تقدر تضيف كمان اذكار 
    let cut2 = cuts[Math.floor(Math.random() * cuts.length)];
    var embed = new Discord.MessageEmbed()
      .setTitle("اذكار وقيم")
      .setDescription(`${cut2}`)
      .setThumbnail(`${zaki.author.avatarURL({ dynamic: true })}`)
      .setColor("ORANGE")
      .setFooter(`Requsted By ${zaki.author.username}`, zaki.author.avatarURL({ dynamic: true }))

    zaki.channel.send(embed)

  }

})  


///جميع الحقوق محفوضة لZakaria🍁#4675 و' R . ♪#1708 


client.on('message', zaki => {
  if (zaki.content.startsWith(prefix + "ايات")) {
    let cuts = [
      '**قوله – تعالى -: ﴿ فَمَنْ أَظْلَمُ مِمَّنْ كَذَبَ عَلَى اللَّهِ وَكَذَّبَ بِالصِّدْقِ إِذْ جَاءَهُ ﴾ [الزمر: 32].**',
      '**قال تعالى : ﴿ وَالَّذِي جَاءَ بِالصِّدْقِ وَصَدَّقَ بِهِ أُولَئِكَ هُمُ الْمُتَّقُونَ ﴾ [الزمر: 33].**',
      '**قال تعالى: (وَمَنْ أَظْلَمُ مِمَّنِ افْتَرَى عَلَى اللّهِ كَذِباً أَوْ كَذَّبَ بِآيَاتِهِ إِنَّهُ لاَ يُفْلِحُ الظَّالِمُونَ).**',
      '**قال تعالى : (وَإِذَا تُتْلَى عَلَيْهِمْ آَيَاتُنَا بَيِّنَاتٍ تَعْرِفُ فِي وُجُوهِ الَّذِينَ كَفَرُوا الْمُنْكَرَ) [الحج: 72]. **',
      ' **قال تعالى : (محمد رسول الله والذين معه أشداء على الكفار رحماء بينهم تراهم ركعا سجدا يبتغون فضلا من الله ورضوانا سيماهم في وجوههم من أثر السجود) [الفتح: 29].**',
      ' **قال تعالى : (إن الأبرار لفي نعيم (22) على الأرائك ينظرون (23) تعرف في وجوههم نضرة النعيم) [المطففين: 22-24].*',
      ' **قال تعالى : (يوم تقلب وجوههم في النار يقولون يا ليتنا أطعنا الله وأطعنا الرسولا) [الأحزاب: 66].**',
      ' **حظ ناررر**',
      ' **حظ ناررر**',
    ' **حظ ناررر**',






    ];
    //تقدر تضيف كمان ايات
    let cut2 = cuts[Math.floor(Math.random() * cuts.length)];
    var embed = new Discord.MessageEmbed()
      .setTitle("ايات قرانية")
      .setDescription(`${cut2}`)
      .setThumbnail(`${zaki.author.avatarURL({ dynamic: true })}`)
      .setColor("ORANGE")
      .setFooter(`Requsted By ${zaki.author.username}`, zaki.author.avatarURL({ dynamic: true }))
    zaki.channel.send(embed)

  }

})
///code mute 
client.on('message', async message => {
if(message.content.startsWith(prefix + 'mute')) {
let mention = message.mentions.members.first();
let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
 
if (!message.guild.me.hasPermission('MANAGE_ROLES')) {
        const embed = new Discord.MessageEmbed()
.setThumbnail(client.user.avatarURL())
.setColor("RED")
.setTitle("Error ❌")
.setDescription("** انا لا امتلك برمشن المطلوب `MANAGE_ROLES` **")
.setFooter(client.user.username,client.user.avatarURL())
message.channel.send(embed);
};
if (!message.member.hasPermission('MANAGE_GUILD')) {
    const embed = new Discord.MessageEmbed()
.setThumbnail(client.user.avatarURL())
.setColor("RED")
.setTitle("Error ❌")
.setDescription(`**انت لا تمتلك البرمشن المطلوب MANAGE_GUILD**`)
    .setFooter(``)

};
 
let muteRole = message.guild.roles.cache.find(ro => ro.name == 'Muted');
if (!muteRole) {
    return message.channel.send("** انا لا أجد رتبة `Muted`**")
};
 
if(!mention) return message.channel.send(`**Ex : ${prefix}mute @user**`);
message.guild.channels.cache.forEach(c => {
c.updateOverwrite(role , {
SEND_MESSAGES: false, 
ADD_REACTIONS: false
});
});
mention.roles.add(role)
const embed = new Discord.MessageEmbed()
.setThumbnail(mention.user.avatarURL())
.setColor("GREEN")
.setTitle("Done ✅")
.setDescription(`**تــم أسكاته ${mention.user.username}**`)
.setFooter(`بــواسطة ${message.author.username}`)
message.channel.send(embed)
}
});

client.on('message', function(message) {
    if(message.content.startsWith(prefix + "say")) {
      let say = message.content.split(" ").slice(1).join(" ");
      message.channel.send(`${say}`)
      message.delete()
 
}
});


///code say and embed
client.on('message', badboy => {
  var args = badboy.content.split(' ').slice('1').join(" ")
  if(badboy.content.startsWith(prefix + "embed")){
    
 if(badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")
 if(!badboy.member.hasPermission("MANAGE_GUILD")) return badboy.channel.reply("you dont have a permission")
     var embed = new Discord.MessageEmbed()
    .setDescription(`${args}`)
    .setColor('RANDOM')
    badboy.channel.send(embed)
  }
})


///code vote
client.on('message', function(message) {
    if(message.content.startsWith(prefix + "vote")) {
      let arg = message.content.split(" ").slice(1).join(" ");
      if (!arg) return message.channel.send(`**Ex : ${prefix}vote Make Video ? **`);
const embed = new Discord.MessageEmbed()
.setColor("#f6ff00") 
.setAuthor(client.user.username,client.user.avatarURL())
.setThumbnail(message.author.avatarURL())
.setDescription(`${arg}`)
.setFooter(`React 👍 or 👎 | By ${message.author.username}`)
message.channel.send({embed}).then(msg => {
  msg.react('👍').then( r => {
    msg.react('👎')
  })
})
    }
});


client.on("message", zaki => {
    if(zaki.content === (prefix + 'help'))
     var embed = new Discord.MessageEmbed()
    .setFooter(``)
    .setColor("RANDOM")
    .setTitle(`\`\`${client.user.username}\`\` **help**`)
    .setDescription(`
    
  **General Commands**
**${prefix}ping
 ${prefix}server      
${prefix}user 
${prefix}profile     
${prefix}tag   
${prefix}say
${prefix}embed  
${prefix}avatar
**

**Admin Commands**
**${prefix}lock
${prefix}unlock
${prefix}mute
${prefix}hide
${prefix}show
${prefix}kick
${prefix}ban
${prefix}vote
${prefix}delete
**

  ** fun  Commands**
**${prefix}memes
${prefix}slap
${prefix}spank
${prefix}trash
${prefix}صرااحة
**

  ** Islamic  Commands**
**${prefix}متى رمضان 
${prefix}متى عيد الفطر
${prefix}اذكار
 ${prefix}ايات
${prefix}متى عيد الاضحى
**

**Giveaway Commands**
**${prefix}gstart
**
 

`)
zaki.channel.send(embed)
  });

 client.on("message",message => {
    if(message.content.startsWith(prefix + "user")){
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
      .setFooter(``)

  .setAuthor(message.author.username,message.author.avatarURL())
  .setThumbnail(message.author.avatarURL())
  .setTitle("Info User")
  .addField('``Name``', 
  ` ${message.author.tag} `, true)
  .addField(' ``ID``', 
  ` ${message.author.id} `, true)  
  .addField(' ``Created At``',
   ` ${message.author.createdAt.toLocaleString()} `, true)
  .setTimestamp(); 
  message.channel.send(embed)
  }
  });

// هنا نحط فيها الاشياء يلي سوينهخا مشان ماننسا 
//تاق - فتح وقفل- سرفر - اخفاء واضهار - كود افتار - 
