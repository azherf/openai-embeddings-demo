const PORT = 8000
const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
const OpenAI = require("openai")
require("dotenv").config()

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

app.post("/embedding", async (req, res) => {
    const text = req.body.text
    const embedding = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: text,
        encoding_format: "float",
    })
    res.send(embedding.data[0].embedding)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))