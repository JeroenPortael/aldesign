var express = require("express");
var root = express.Router();

root.get('/', function(req, res) {
  res.render("index", {
    nieuws: req.app.get('nieuwsFile').nieuws,
    categorieen: req.app.get('categorieenFile').categorieen,
    auteurs: req.app.get('auteursFile').auteurs
  });
});

module.exports = root;
