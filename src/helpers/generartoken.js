const jwt = require("jsonwebtoken")

const generartoken = (uid)=>{
    return new Promise((resolve, reject) => {
        jwt.sign(uid, process.env.SECRET,{
            expiresIn: '7d'
        }, (err, token)=>{
            if(err){
                reject(err)
            } resolve(token)
        })
    })
}

module.exports = generartoken