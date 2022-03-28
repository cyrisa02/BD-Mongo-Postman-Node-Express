const encryptPassword = require("../utils/encryptPassword");

async function coaches(req, res) {
  const Coach = req.app.get("models").Coach;
  let CoachList;
  if (req.query.discipline){

    const CoachList = await Coach.find({discipline : req.query.discipline}).populate("user");
  }else{
    const CoachList = await Coach.find().populate("user");
  }
  
  res.json(CoachList);
}

async function coachCreate(req, res) {
 
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
       role : "coach",
    }).save();
    const newCustomer = await new models.Customer ({ user: NewUser._id}).save();
    return res.json(newCustomer);   
  }


 async function coachDelete(req, res) {

       if(!req.body._id){
             return res.json("_id manquant");
        }
         if(req.role !== "manager"){
         return res.json("Unauthorized");
       }
       const Coach = req.app.get("models").Coach;
        let toDeleteCoach = await Coach.findById(req.body._id);

        if (!toDeleteCoach) {
            return res.json("Customer not found");
        }
        let toDeleteUser = await models.User.findById(toDeleteCoach.user);

      await toDeleteUser.remove();
      await toDeleteCoach.remove();
       res.json("Successfully deleted");
    }


  async function coachUpdate(req, res) {
 
       
        if(req.role !== "manager"){
          return res.json("Unauthorized");
        }
        try{
            if (!req.body._id) {
                return res.json("No _id provided");
            }
      const Coach = req.app.get("models").Coach;


      let toModifyCoach = await Coach.findById(req.body._id);
      if (!ToModifyCuoach) {
          return res.json("Coach not found");
      }
      const toModifyKeys = Object.keys(req.body.toModify);
      for (const key of toModifyKeys){
          toModifyUser[key] = req.body.toModify[key];
      }
      await toModifyUser.save();    
      res.json(toModifyCoach);
      } catch (error) {
          return res.json(error.message);
      }
    }

    
module.exports = { coachCreate,  coachDelete,  coachUpdate, coachs};
