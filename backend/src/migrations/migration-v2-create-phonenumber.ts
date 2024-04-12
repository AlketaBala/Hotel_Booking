import mongoose from 'mongoose';

const up = async (): Promise<void> => {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const User = mongoose.model('User', new mongoose.Schema({}, { strict: false, collection: 'users' }));

  await User.collection.updateMany({}, { $set: { phoneNumber: null } });

  await mongoose.connection.close();
};