import express from "express"
import {PORT} from "./config.js"
import indexRoutes from "./routes/index.routes.js"


const app = express()
app.use(indexRoutes)


console.log("Hello World!")
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))