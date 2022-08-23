import mongoose from "mongoose";

const MONGO_URL =
  "mongodb+srv://imdb:vidaloca@cluster0.on0un.mongodb.net/blinkitdb?retryWrites=true&w=majority";
//process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error(
    "Please define the MONGO_URL environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;

//import { MongoClient } from "mongodb";
//import mongoose from "mongoose";

//
//const uri = process.env.MONGODB_URI;
//const options = {};
//
//let client;
//let clientPromise;
//
//if (!process.env.MONGODB_URI) {
//  throw new Error("Please add your Mongo URI to .env.local");
//}
//
//if (process.env.NODE_ENV === "development") {
//  // In development mode, use a global variable so that the value
//  // is preserved across module reloads caused by HMR (Hot Module Replacement).
//  if (!global._mongoClientPromise) {
//    client = new mongoose(uri, options);
//    global._mongoClientPromise = client
//      .connect()
//      .then(() => console.log(connecteed));
//  }
//  clientPromise = global._mongoClientPromise;
//} else {
//  // In production mode, it's best to not use a global variable.
//  client = new MongoClient(uri, options);
//  clientPromise = client.connect();
//}
//
//// Export a module-scoped MongoClient promise. By doing this in a
//// separate module, the client can be shared across functions.
//export default clientPromise;
//
