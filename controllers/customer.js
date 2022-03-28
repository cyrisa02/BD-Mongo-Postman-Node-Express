const encryptPassword = require("../utils/encryptPassword");

async function customers(req, res) {
  const Customer = req.app.get("models").Customer;
  const CustomersList = await Customer.find().populate("user");
  res.json(CustomersList);
}

async function customerCreate(req, res) {
 
    if (!req.body.password){
      return res.json("No Password");
    }
    if(req.role !== "manager"){
      return res.json("Unauthorized");
    }
   const models = req.app.get("models");
    const {token, salt, hash} = encryptPassword(req.body.password);
    
   
    const NewUser = await new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      token,
       salt, 
       hash,
    }).save();
    const newCustomer = await new models.Customer ({ user: NewUser._id}).save();
    return res.json(newCustomer);   
  }


 async function customerDelete(req, res) {

       if(!req.body._id){
             return res.json("_id manquant");
        }
         if(req.role !== "manager"){
         return res.json("Unauthorized");
       }
       const Customer = req.app.get("models").Customer;
        let toDeleteCustomer = await Customer.findById(req.body._id);

        if (!toDeleteCustomer) {
            return res.json("Customer not found");
        }
        let toDeleteUser = await models.User.findById(toDeleteCustomer.user);

      await toDeleteUser.remove();
      await toDeleteCustomer.remove();
       res.json("Successfully deleted");
    }


  async function customerUpdate(req, res) {
 
       
        if(req.role !== "manager"){
          return res.json("Unauthorized");
        }
        try{
            if (!req.body._id) {
                return res.json("No _id provided");
            }
      const Customer = req.app.get("models").Customer;


      let toModifyCustomer = await Customer.findById(req.body._id);
      if (!ToModifyCustomer) {
          return res.json("Customer not found");
      }
      const toModifyKeys = Object.keys(req.body.toModify);
      for (const key of toModifyKeys){
          toModifyUser[key] = req.body.toModify[key];
      }
      await toModifyUser.save();    
      res.json(toModifyCustomer);
      } catch (error) {
          return res.json(error.message);
      }
    }

    
module.exports = { customerCreate, customerDelete, customerUpdate, customers};
