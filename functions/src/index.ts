import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as bodyParser from "body-parser";

admin.initializeApp(functions.config().firebase);

const app = express();
const main = express();

main.use("/players", app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({extended: false}));

const db = admin.firestore();
export const playersApi = functions.https.onRequest(main);

app.get("/", async (req, res) => {
  const snapshot = await admin.firestore().collection("players").get();

  const players: any[] = [];
  snapshot.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();
    players.push({id, ...data});
  });

  res.status(200).send(JSON.stringify(players));
});

app.get("/:id", async (req, res) => {
  const snapshot = await db.collection('players').doc(req.params.id).get();
  const userId = snapshot.id;
  const userData = snapshot.data();

  res.status(200).send(JSON.stringify({id: userId, ...userData}));
});

app.post('/', async (req, res) => {
  const player = req.body;
  await db.collection("players").add(player);
  
  res.status(201).send();
});

app.put("/:id", async (req, res) => {
  const body = req.body;
  await db.collection('players').doc(req.params.id).update(body);

  res.status(200).send();
});

app.delete("/:id", async (req, res) => {
  await db.collection("players").doc(req.params.id).delete();

  res.status(200).send();
});
