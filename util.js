module.exports = class Bot {
	read(message, command) {
		return new Promise((resolve, reject) => {			
			const exc = require(`./commands/${command}.js`)				
			if(exc.PERMISSIONS) {				
				if(!message.member.hasPermission(exc.PERMISSIONS)) return reject('NO PERM')
			}
			if(!exc.execute){ 
				return reject("Função execute não encontrada") 
			} else {
				if(`${process.env.prefix}${command}` === message.content && exc.default) {
					exc.default(message)
				} else {
					exc.execute(message)
				}				
				return resolve(message.author.username)
			}
		})
	}
}