require("express-async-errors");
require("dotenv/config");
const AppError = require("./utils/AppError");

const database = require("./database/sqlite")
const uploadConfig = require("./configs/upload");

const cors = require("cors")
const express = require("express");
const routes = require("./routes");

const app = express();

app.use(cors())

app.use(express.json());


app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER_PLATE));

app.use(routes);

database()


app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    } 

    console.error(error); 
    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    });
});

const PORT = process.env.SERVE_PORT || 3333;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});