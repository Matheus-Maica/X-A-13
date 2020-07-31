const fs = require('fs')

module.exports = { 
    execute: message => {        
        var ping = Date.now() - message.createdTimestamp + " ms";
        message.channel.send(`Internet merda? ${ping}`)
    }
}