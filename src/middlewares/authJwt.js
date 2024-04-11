import { SECRET } from "../config.js";
import { User } from "../models/User.js";
import { Role } from "../models/Role.js";
import jwt from "jsonwebtoken";

/** Checks the token */
export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token)
      return res.status(402).json({
        message: "no token provided",
      });

    const decoded = jwt.verify(token, SECRET);
    req.userName = decoded.id;
    const user = await User.findOne({
      where: {
        username: decoded.id,
      },
    });
    if (!user)
      return res.status(404).json({
        message: "user not found",
      });

    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const isModerator = async (req, res, next) => {
  try {
    const dbUser = await User.findOne({
      where: {
        username: req.userName,
      },
    });
    const roles = await dbUser.getRoles();
    let isModerator = false;
    roles.forEach((role) => {
      if(role.name === "moderator") {
        isModerator = true
      }
    }) 

    if(isModerator){
      next()
    } else {
      return res.status(403).json({
        message: 'moderator role required'
      })
    }

  } catch (error) {
    return res.status(404).json({ message: "roles not found" });
  }
}

export const isAdmin = async (req, res, next) => {
  try {
    const dbUser = await User.findOne({
      where: {
        username: req.userName,
      },
    });
    const roles = await dbUser.getRoles();
    let isAdmin = false;
    roles.forEach((role) => {
      if(role.name === "admin") {
        isAdmin = true
      }
    }) 

    if(isAdmin){
      next()
    } else {
      return res.status(403).json({
        message: 'admin role required'
      })
    }

  } catch (error) {
    return res.status(404).json({ message: "roles not found" });
  }
};
