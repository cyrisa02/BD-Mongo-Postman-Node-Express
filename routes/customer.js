const {  customerCreate, customerDelete, customerUpdate, customers } = require("../controllers/customer");

function customerRoute(app) {
  //Create
  app.post("/customerCreate", customerCreate);  

    //Delete
  app.post("/customerDelete", customerDelete);

  //Update
  app.post("/customerUpdate", customerUpdate);

  app.get("/customers", customers);

 
}

module.exports = customerRoute;
