import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";
import { Role } from "../models/Role.js";
import { UserRole } from "../models/UserRole.js";

export const signin = async (req, res) => {
  res.send("inicio de sesion");
};

/** New User */
export const signup = async (req, res) => {
  const { username, email, password, roles } = req.body;
  try {
    const newUser = await User.create({
      username,
      email,
      password,
    });

    if (roles.length != 0) {
      //obtenemos los id de los roles correspondientes
      const rolesId = await Promise.all(
        roles.map(async (role) => {
          const roleFound = await Role.findOne({
            where: {
              name: role,
            },
          });
          return roleFound.dataValues.id;
        })
      );

      //se guardan las relaciones en la tabla pivote
      const newRelations = await Promise.all(
        rolesId.map(async (roleId) => {
          const newRecord = await UserRole.create({
            username,
            roleId,
          });
        })
      );
    } else {
      const roleId = await Role.findOne({
        where: {
          name: "user",
        },
      });
      console.log(roleId);
      const newRecord = await UserRole.create({
        username,
        roleId: roleId.dataValues.id,
      });
    }

    const token = jwt.sign({ id: newUser.username }, "SECRET", {
      expiresIn: 86400, //25v hrs
    });
    res.json(token);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
