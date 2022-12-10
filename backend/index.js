const express = require('express');
const app = express();
const port = 3010;
const cors = require("cors");
const attacking = require("./routes/attacking");

app.use(cors({origin:true}))
app.use(express.json());
app.use("/attacking", attacking);

app.get('/', (req,res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})