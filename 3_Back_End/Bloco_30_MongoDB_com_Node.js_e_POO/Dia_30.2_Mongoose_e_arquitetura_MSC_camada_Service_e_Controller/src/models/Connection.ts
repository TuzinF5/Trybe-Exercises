// ./src/models/Connection.ts

import 'dotenv/config';
import mongoose from 'mongoose';

// const options = {
//   user: 'user', // Usuário do banco de dados.
//   pass: 'password', // senha do usuário do banco de dados.
//   autoIndex: false, // Não cria index para cada inserção de dado no banco.
//   dbName: 'glassesStore', // Define qual banco de dados vou utilizar.
// };

// mongoose.connect('mongodb://localhost:27017/', options);

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    // || 'mongodb://root:example@localhost:27017/glassesStore?authSource=admin',
    || `mongodb://127.0.0.1:27017/
    ?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.3.1`,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
