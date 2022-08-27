import app from './app';

// Importing Mongodb Data Base
import { mainDataBase } from './Database/mongdb';

mainDataBase();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`File are seved at http://localhost:${PORT}`);
});
