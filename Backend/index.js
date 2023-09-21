const express= require("express")
const cors=require("cors")
const booksRoute=require("./Routes/booksRoute")
require("./db/conn")

const PORT=5555;
const app = express();


//midleware for parsing req body
app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    return res.status(234).send("HELLO")
})

app.use("/books",booksRoute)
app.listen(PORT,()=>{
    console.log(`listening to port : ${PORT}`);
})