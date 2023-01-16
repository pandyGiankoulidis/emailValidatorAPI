const mongoose = require("mongoose");
const Domain = mongoose.model(
    "domain",
    new mongoose.Schema({
        domain: String
    },
        { collection: 'basic' }
    )
);
module.exports = Domain;