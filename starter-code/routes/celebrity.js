const express = require("express");
const router = new express.Router();
const CelebrityModel = require("../models/Celebrity");

router.get("/", async (req, res, next) => {
    try {
        res.render("celebrities", {celebrity: await CelebrityModel.find() });
    } catch (err) {
        next(err);
    }
});

router