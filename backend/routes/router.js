const router = require("express").Router();

//  services router

const serviceRouter = require("./services");

router.use("/", serviceRouter);

// Parties routes

const partyRouter = require ("./parties");

router.use("/", partyRouter);

module.exports = router;