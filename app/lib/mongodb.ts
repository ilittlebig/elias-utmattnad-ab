import mongoose, { Connection } from 'mongoose';

interface CachedMongoose {
  conn: Connection | null;
  promise: Promise<Connection> | null;
}

const cache: CachedMongoose = {
  conn: null,
  promise: null
};

export async function dbConnect(): Promise<Connection> {
  if (cache.conn) {
    return cache.conn;
  }

  if (!cache.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
    };
    cache.promise = mongoose.connect(process.env.MONGODB_URI as string, opts).then(() => {
      // Assuming the mongoose connection is now established and can be accessed via mongoose.connection
      return mongoose.connection;
    });
  }

  cache.conn = await cache.promise;
  return cache.conn;
}
