const tmi = require('tmi.js');
require('dotenv').config();
//Configuramos nuestro bot
const options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "oauth:tbdtjjq0c7ub4ew55n8r7p9e1iqm5h",
        password: "lucadevbot"
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
    client.action('lucadevbot', `hello ${addres}: ${port}`)
})

client.on('chat', async(target, ctx, message, self) =>{
    if(self) return;
    //Sacamos los espacios del comando para despues validarlo
    const commandName = message.trim()

    //Validamos el mensaje segun la accion que queremos
    if( commandName === '!say'){
        client.say(target, `Welcome ${ctx.username}`)
    }
})