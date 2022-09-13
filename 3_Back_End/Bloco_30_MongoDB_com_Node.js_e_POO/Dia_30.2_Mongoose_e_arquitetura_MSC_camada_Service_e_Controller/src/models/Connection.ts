// ./src/models/Connection.ts

import 'dotenv/config';
import mongoose from 'mongoose';

// const options = {
//   user: 'user', // Usuário do banco de dados.
//   pass: 'password', // senha do usuário do banco de dados.
//   autoIndex: false, // Não cria index para cada inserção de dado no banco.
//   dbName: 'glassesStore', // Define qual banco de dados vou utilizar.
// };

// connect('mongodb://localhost:27017/', options);

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || 'mongodb://root:example@localhost:27017/glassesStore?authSource=admin',
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
