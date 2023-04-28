#!/usr/bin/env node
import { rps, rpsls } from "./lib/rpsls.js";
import minimist from 'minimist';
import express from 'express';

const args = minimist(process.argv.slice(2)); 
const port = args.port || 5000;
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.listen(port);

app.get('/app/', (req, res) => {
    res.status(200)
    res.send("200 OK");
})

app.get('/app/rps/', (req, res) => {
    console.log(rps())
    res.status(200)
    res.send(rps());
})

app.get('/app/rpsls/', (req, res) => {
    res.status(200)
    res.send(rpsls());
})

app.get('/app/rps/play/', (req, res) => {
    res.status(200)
    res.send(rps(req.query.shot))
})

app.post('/app/rps/play/', (req, res) => {
    res.status(200)
    res.send(rps(req.body.shot))
})

app.get('/app/rps/play/:shot/', (req, res) => {
    res.status(200)
    res.send(rps(req.params.shot))
})

app.get('/app/rpsls/play/', (req, res) => {
    res.status(200)
    res.send(rpsls(req.query.shot))
})

app.post('/app/rpsls/play/', (req, res) => {
    res.status(200)
    res.send(rpsls(req.body.shot))
})

app.get('/app/rpsls/play/:shot/', (req, res) => {
    res.status(200)
    res.send(rpsls(req.params.shot))
})

app.get("*", (req, res) => {
    res.status(404)
    res.send("404 NOT FOUND");
})