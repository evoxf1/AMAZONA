  import cors from "cors";
  import dotenv from "dotenv";
  import express, { Request, Response } from "express";
  // import { sampleProducts } from "./data";
  import mongoose from "mongoose";
  import path from 'path'
  import { productRouter } from "./routers/productRouter";
  import seedRouter from "./routers/seedRouter";
  import { userRouter } from "./routers/userRouter";
  import { orderRouter } from "./routers/orderRouter";
import keyRouter from "./routers/keyRouter";

  dotenv.config();
  const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/foxydb";
  mongoose.set("strictQuery", true);
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("connected to mongodb");
    })
    .catch(() => {
      console.log("error mongodb");
    });

  const app = express();

  // Enable CORS for all origins
  app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:5173"],
    })
  );

  // app.get("/api/products", (req, res) => {
  //   res.json(sampleProducts);
  // });

  // app.get("/api/products/:slug", (req: Request, res: Response) => {
  //   res.json(sampleProducts.find((x) => x.slug === req.params.slug));
  // });

  app.use(express.json())
  app.use(express.urlencoded({ extended:true }))


  app.use("/api/products", productRouter);
  app.use("/api/users", userRouter);
  app.use("/api/orders", orderRouter);
  app.use("/api/seed", seedRouter);

  // Mount the keyRouter middleware
app.use("/api/keys", keyRouter)


app.use(express.static(path.join(__dirname, '../../foxy/dist')))
app.get('*', (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, '../../foxy/dist/index.html'))
)

const PORT: number = parseInt((process.env.PORT || '4000') as string, 10)
  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
