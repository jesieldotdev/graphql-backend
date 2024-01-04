import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const server = http.createServer(app);

const port = 5000;

export function serveDataAsRest(data:any){
    app.get("/users", async (req, res) => {
        res.send(data);
      });
}



server.listen(port, () => {
    console.log(`SERVER REST RUNING IN PORT ${port}`);
  });