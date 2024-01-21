import mongoose from "mongoose";
export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongo connected successfully");
    });
    connection.on("error", (err) => {
      console.log(
        "mongo connection error, Please make sure MongoDB is running. ",
        err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went error in mongodb connnect", error);
  }
}
