import { Db } from "mongodb";

export const up = async (db: Db) => {
  await db.collection("hotels").updateMany({}, [{ $set: { pricePerNight: { $toInt: "$pricePerNight" } } }]);
};

export const down = async (db: Db) => {
  await db.collection("hotels").updateMany({}, [{ $set: { pricePerNight: { $toDouble: "$pricePerNight" } } }]);
};
