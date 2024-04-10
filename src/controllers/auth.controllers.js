import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";
import { Role } from "../models/Role.js";

export const signIn = async (req, res) => {
  try {
    const dbUser = await User.findOne({
      where: {
        email: req.body.email,
      }
    });
    
    /** If the user doesn't exist */
    if (!dbUser) return res.status(400).json({ message: "user not found" });
    
    /** Password validation */
    const matchPassword = await dbUser.comparePassword(req.body.password)
    if(!matchPassword) return res.status(401).json({token: 'null', message: 'incorrect password'})

    /** Token creation */
    const token = jwt.sign({id: dbUser.username}, SECRET, {
      expiresIn: 86400
    })

    res.json({token})
    
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};

/** New User */
export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;
  try {
    const newUser = await User.create({
      username,
      email,
      password,
    });

    if (roles.length != 0) {
      //get the req roles id from the db
      const dbRoles = await Promise.all(
        roles.map(async (role) => {
          return await Role.findOne({
            where: {
              name: role,
            },
          });
        })
      );

      dbRoles.forEach((role) => {
        newUser.addRole(role);
      });
    } else {
      const defaultRole = await Role.findOne({
        where: {
          name: "user",
        },
      });
      newUser.addRole(defaultRole);
    }

    const token = jwt.sign({ id: newUser.username }, SECRET, {
      expiresIn: 86400, //24 hrs
    });
    res.json(token);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
