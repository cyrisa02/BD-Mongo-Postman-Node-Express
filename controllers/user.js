async function userGet(req, res) {
  try {
    const User = req.app.get("models").User;
    const MyUsers = await User.find();
    res.json(MyUsers);
  } catch (error) {
    return error.message;
  }
}

async function userCreate(req, res) {
  try {
    const User = req.app.get("models").User;
   
    const NewUser = await new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
    }).save();

    res.json(NewUser);
  } catch (error) {
    res.json(error.message);
  }
}

module.exports = { userGet, userCreate };
