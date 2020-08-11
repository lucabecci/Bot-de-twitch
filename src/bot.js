const tmi = require('tmi.js');
require('dotenv').config();
const firstCommands = require('./firstFunctions')
const spamText = require('./spamModule')
//Configuramos nuestro bot
const options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: process.env.SECRET_USER,
        password: process.env.SECRET_TOKEN
    },
    channels: ['lucadevbot']
}
//Instanciamos el bot 
const client = new tmi.client(options);
//Conectamos el bot
client.connect();

//Hacemos que el bot envie un mensaje al estar conectado al canal

client.on('connected', (addres, port) =>{
    //creamos una accion para el canal
    // client.action('lucadevbot', `hello ${addres}: ${port}`)
    
        setInterval(() =>{
            client.action('lucadevbot', spamText())  
        }, 30000);

            
})

client.on('chat', (target, ctx, message, self) =>{
    if(self) return;
    //Sacamos los espacios del comando para despues validarlo
    const commandName = message.trim()

    /*enviamos el mensaje a una funcion
     y validamos si el comando existe*/
    const resp = firstCommands(commandName, ctx)
    client.say(target, resp)
})