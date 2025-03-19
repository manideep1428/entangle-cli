import express from "express"
import { authMiddleware } from "./middleware";


export const app = express();


app.get('/', (req, res) => {
    res.send("Hello via Bun!")
})


app.post("/project", authMiddleware, async (req, res) => {
    console.log("Came here")
    try {
        const { prompt } = req.body;
        
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }

})


app.listen(8080, () => {
    console.log("Server is running on port 8080")
})