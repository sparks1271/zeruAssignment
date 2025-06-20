import express from "express";
import cors from "cors";
import connectDb from "./config/mongdb.js";
import eigenlayerRoutes from "./Routes/eigenlayerRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await connectDb(); 
    app.use("/api/eigenlayer", eigenlayerRoutes);

    app.listen(port, () => {
      console.log(`Server initialised and running on: ${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to DB:", error);
    process.exit(1); 
  }
};

startServer();
