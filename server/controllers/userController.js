import User from "../models/user.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

// get all, get user, create user, update user, delete user

class UserController {
  async getUsers(req, res) {
    try {
      const users = await User.findAll()
      
      return res.json(users)
    } catch (e) {
      console.log('error', e.message)
    }
  }

  async getUser(req, res) {
    try {
      const userId = req.params.userId
      const user = User.findOne({
        where: userId
      })
      if (!user) {
        return res.status(404).json({message: "User not found"})
      }

      return user
    } catch (e) {
      console.log('error', e.message)
    }
  }

  async createUser(req, res) {
    try {
      const { name, email, password, role } = req.body
      const isUserExist = await User.findOne({
        where: {
          email
        }
      })

      if (isUserExist) {
        return res.status(405).send('User with this email already exist!')
      } else {
        const user = await User.create({
          name,
          email,
          password: await bcrypt.hash(password, 10),
          role
        })
  
        if (user) {
          let token = jwt.sign({ id: user.id }, 'SECET_KEY', {
            expiresIn: 360000
          })
  
          res.cookie('token', token, { maxAge: 360000, httpOly: true })
          return res.status(201).json({message: 'User created successfully', user})
        } 
  
        return res.status(400).send('User didnt created')
  
      }
    } catch (e) {
      console.log('error', e.message)
   }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body
      
      const user = await User.findOne({ where: { email } })

      if (user) {
        const isSame = await bcrypt.compare(password, user.password)

        if (isSame) {
          let token = jwt.sign({ ...user }, 'SERCRET_KEY', {
            expiresIn: 360000
          })

          res.cookie('token', token, { maxAge: 360000, httpOly: true})
          return res.status(201).send(user)
        } else {
          return res.status(401).send("Authentication failed");
        }
      } else {
        return res.status(402).send("Authentication failed");
      }
    } catch (e) {
      console.log(e);
    }
  }

}

export default new UserController()