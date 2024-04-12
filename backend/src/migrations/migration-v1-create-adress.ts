import mongoose from 'mongoose';

const up = async (): Promise<void> => {
  mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const User = mongoose.model('User', new mongoose.Schema({}, { strict: false, collection: 'users' }));

  await User.collection.updateMany({}, { $set: { address: {} } });

  await mongoose.connection.close();
};

const down = async (): Promise<void> => {
  mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const User = mongoose.model('User', new mongoose.Schema({}, { strict: false, collection: 'users' }));

  await User.collection.updateMany({}, { $unset: { address: 1 } });

  await mongoose.connection.close();
};

export { up, down };