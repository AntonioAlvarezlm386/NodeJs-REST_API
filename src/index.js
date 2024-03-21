import app from './app.js';
import { PORT } from './config.js'

/**Movemos todo el codigo a un archivo app,js, para que el index solo quede como elarchivo que arranca el servidor */

app.listen(PORT);
console.log(`server running on port ${PORT}`)

