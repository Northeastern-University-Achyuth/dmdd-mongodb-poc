import { connect } from "mongoose";

const url: string = "";

async function connectDB() {
  try {
    await connect(url);
    console.log("Successfully connected to the url");
  } catch (error) {
    console.log("Error connecting to the MongoDB Server");
    console.log(error);
  }
}

export { connectDB };
