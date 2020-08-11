
const commands = (commandName, ctx)=>{
    if( commandName === '!say'){
        return(`Welcome ${ctx.username}`)
    }else if( commandName === '!for'){
        return(`for ${ctx.username}`)
    }
}

module.exports = commands;