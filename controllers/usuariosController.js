const path = require ('path')
const fs = require ('fs')
const bcrypt = require('bcrypt')
const { json } = require('express')

// ============== aceessing to user BD ============== //
const userFile = path.join(__dirname, '../database/usuarios.json')
const userRead = fs.readFileSync(userFile, 'utf-8')

// ============== transforming in json ============== //
const userJson = JSON.parse(userRead, null, 4)

// ============== controller ============== //
const usuariosController = {
    index: (req, res ) =>{
        res.render('user')
    },
    cadastro: (req,res) =>{
       const {user_fullname, user_email, user_password} = req.body

       const newUser = {
        name: user_fullname,
        email: user_email,
        password: bcrypt.hashSync( user_password, 10)
       }
       userJson.push(newUser)
       
       const json = JSON.stringify(userJson)
       fs.writeFileSync( userFile , json)
       res.redirect('/pizzas')

    },
    login: (req,res) =>{
        res.send('logando')
    }
}

module.exports = usuariosController