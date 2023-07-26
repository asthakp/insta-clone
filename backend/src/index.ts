import express, { Request, Response, NextFunction } from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
// import xss from "xss";
import hpp from "hpp";
import { dbConnection } from "./config/db.config";
import indexRouter from "./routes/index";

const app = express();
dbConnection();
app.use(cors);
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(helmet());
app.use(hpp());

app.use("/", indexRouter);

//error handling for unmatched routes
interface CustomError extends Error {
  status?: number;
}
app.use((req: Request, res: Response, next: NextFunction) => {
  const error: CustomError = new Error("page not found");
  error.status = 404;
  next(error);
});

//error handler middleware
app.use(
  (error: CustomError, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500).json({
      status: false,
      error: error.message,
    });
  }
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server is running at port ", PORT);
});
