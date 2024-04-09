import app from "./app.js";
import { PORT } from "./config.js";
import { sequelize } from "./db/db.js";
import { Product } from './models/Product.js'
import { Role } from './models/Role.js'
import { User } from './models/User.js'
import { UserRole } from './models/UserRole.js'

/**index file is just to start the server */
async function main() {
  try {
    await sequelize.sync({alter:true});
    app.listen(PORT)
    console.log("> DB connection has been established successfully.");
    console.log('> app listen on port', PORT)
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

/**Main function start */
main()
 