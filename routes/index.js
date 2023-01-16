const emailRouter = require("./emailRouter/email.controller")

module.exports = (app) => {
    app.use("/validate", emailRouter);
}