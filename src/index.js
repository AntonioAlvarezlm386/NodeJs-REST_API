import app from "./app.js";
import { PORT } from "./config.js";
import { sequelize } from "./db/db.js";

import { Product } from "./models/Product.js";



/**index file is just to start the server */
async function main() {
  try {
    await sequelize.sync();
    app.listen(PORT)
    console.log("> DB connection has been established successfully.");
    console.log('> app listen on port ', PORT)
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

/**Main function start */
main()
