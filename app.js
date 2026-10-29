import express from "express";
import motos from "./motos.js";

const app = express();
app.get("/", (requisicao, resposta) => {
  resposta.send(motos);
});

app.listen(3000, () => console.log("Servidor rodando com sucesso"));
