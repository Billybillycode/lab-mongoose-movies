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

router.get("/:id", async function (req, res, next) {
    try {
    await CelebrityModel.findById(req.param.id)
    res.render("celebrities")
} catch (err) {
    next(err)
}
})
