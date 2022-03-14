import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as bodyParser from "body-parser";

admin.initializeApp(functions.config().firebase);

const app = express();
const main = express();

main.use("players", app);
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

app.post('/players', async (req, res) => {
  const player: Player = {
    id: "1",
    name: "Cristiano Ronaldo",
    number: "7",
    team: "Manchester United",
  };
  await db.collection("player").add(player);
});
