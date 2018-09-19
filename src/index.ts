import 'dotenv/config'; // require('dotenv').config();
import { server } from './server';
import { dbConnect } from './database';

(async () => {
    await dbConnect();
    await server();
})();
