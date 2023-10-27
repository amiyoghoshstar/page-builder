import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import router from './ui/ui.route.js';
const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//setup template engine
app.use(express.static('public'));
app.use('views', express.static(path.join(__dirname, 'views')));
app.set('view engine', 'hbs');
app.use('/', router);
app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running,and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
