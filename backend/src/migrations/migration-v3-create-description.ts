import mongoose from 'mongoose';

const up = async (): Promise<void> => {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const HotelSchema = new mongoose.Schema({}, { strict: false, collection: 'hotels' });
  const HotelModel = mongoose.model<any>('Hotel', HotelSchema);

  await HotelModel.collection.updateMany({}, { $set: { description: '' } });

  await mongoose.connection.close();
};

const down = async (): Promise<void> => {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const HotelSchema = new mongoose.Schema({}, { strict: false, collection: 'hotels' });
  const HotelModel = mongoose.model<any>('Hotel', HotelSchema);

  await HotelModel.collection.updateMany({}, { $unset: { description: 1 } });

  await mongoose.connection.close();
};

export { up, down };
