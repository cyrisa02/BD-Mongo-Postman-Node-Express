const { userGet, userCreate, userDelete } = require("../controllers/user");

function userRoute(app) {
  //Create
  app.post("/userCreate", userCreate);

  //Read
  app.get("/user", userGet);

  //Delete
  app.post("/userDelete", userDelete);
}

module.exports = userRoute;
