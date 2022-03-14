import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as bodyParser from "body-parser";
import {v4 as uuid} from 'uuid';

admin.initializeApp(functions.config().firebase);

const app = express();
const main = express();

main.use("/players", app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({extended: false}));

const db = admin.firestore();
export const playersApi = functions.https.onRequest(main);

interface Player
{
    id: string,
    name: string,
    number: string,
    team: string
}

app.post('/', async (req, res) => {
  const player: Player = {...req.body, id: uuid()};
  await db.collection("player").add(player);
  res.status(201).send();
});
