import mongoose, { Connection } from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string;

let cachedConnection: Connection | null = null;

export async function dbConnect() {
    if (cachedConnection) {
        return cachedConnection;
    }

    const opts: mongoose.ConnectOptions = {
        bufferCommands: false,
    };

    const connection = await mongoose.connect(MONGODB_URI, opts);
    cachedConnection = connection.connection; // Store the connection
    return cachedConnection;
}
