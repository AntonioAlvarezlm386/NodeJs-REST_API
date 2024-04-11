import { Role } from "../models/Role.js";
import { User } from "../models/User.js";

export const createUser = async (req, res) => {
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

    res.status(200).json({ message: 'user created'});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
