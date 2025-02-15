const express = require("express");
const router = express.Router();

const indexController = {
  index: (_req, res) => {
    res.render("index", { title: "home" });
  },
  contato: (req, res) => {
    res.render("contato");
  },
  sobre: (_req, res) => {
    res.render("sobre");
  },
  cadastro: (_req, res) => {
    res.render("cadastro");
  },
};

module.exports = indexController;


