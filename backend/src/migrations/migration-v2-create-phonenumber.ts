import mongoose from 'mongoose';

const up = async (): Promise<void> => {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String },
  });

  await mongoose.connection.collection('users').createIndex({ email: 1 }, { unique: true });

  await mongoose.model('User', UserSchema).create({
    email: 'Alketa.Bala@gmail.com',
    password: 'password123',
    firstName: 'Alketa',
    lastName: 'Bala',
    phoneNumber: '38349231654',
  });

  await mongoose.connection.close();
};
const down = async (): Promise<void> => {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await mongoose.model('User', new mongoose.Schema({}, { strict: false, collection: 'users' })).deleteMany({});
  await mongoose.connection.collection('users').dropIndex('email_1');

  await mongoose.connection.close();
};

export { up, down };
