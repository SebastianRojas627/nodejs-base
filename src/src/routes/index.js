const routes = require("express").Router();
const trainer = require("./trainer/trainerRoutes");
const BASE_URL = "/v1/pokedex";
routes.use(BASE_URL, trainer);

module.exports = routes;
