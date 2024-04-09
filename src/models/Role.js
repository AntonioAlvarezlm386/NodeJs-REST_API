import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Role = sequelize.define("roles", {
  name: {
    type: DataTypes.STRING,
  }
},{
    timestamps: false
});
