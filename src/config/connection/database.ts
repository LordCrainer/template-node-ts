import config from "../env/index";
import { connect } from "mongoose";
import Logger from "../lib/logger";

const connectDB = async () => {
  try {
    const mongoURI: string = config.database.MONGODB_URI;
    const options = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
    Logger.info("💾 MongoDB Connected");
    return await connect(mongoURI);
  } catch (err) {
    Logger.error(`❌ ${err.message}`);
    // Exit process with failure
    process.exit(1);
  }
};

export default { connectDB };
