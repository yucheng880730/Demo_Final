const express = require('express');
const app = express();
const port = 3010;
const cors = require("cors");
const attacking = require("./routes/attacking");

// below for our backend
const { ethers } = require("hardhat");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors({origin:true}))
app.use(express.json());
app.use("/attacking", attacking);

const wssProvider = new ethers.providers.WebSocketProvider(
  process.env.RPC_URL_WSS
);

const listenMempool = async(txHash) => {
  const strLogPrefix = `txhash=${txHash}`;
  console.log(strLogPrefix, "received");
  return strLogPrefix
}

const main = async () => {
  wssProvider.on("pending", async (txHash) =>{
    listenMempool(txHash)
  });
}

main()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})