const ZingRouter = require("./zing");
const UserRouter = require("./user");

function router(app) {
  app.use("/api/user", UserRouter);
  app.use("/api/zing", ZingRouter);

  // Page Error
  app.get("*", (req, res, next) => {
    res.send("Nhập sai đường dẫn! Vui lòng nhập lại >.<");
  });
}

module.exports = router;
