import UserModel from "../../model/userModel.js";
import PassportModel from "../../model/passportModel.js";


const createIndividualWithPassport = async (req, res) => {
  try {
    // Create passport
    const passport = await PassportModel.create({
        passportNumber: req.body.passportNumber,
        country:req.body.country,
        expiryDate: new Date(req.body.exdate)
    });

    // Create individual with reference to passport
    const individual = await UserModel.create({
      name: req.body.name,
      age: req.body.age,
      passport: passport._id
    });

    res.status(201).json({ individual, passport });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getIndividualWithPassport = async (req, res) => {
    try {
      const individual = await UserModel.findById(req.params.individualId).populate('passport');
      if (!individual) {
        return res.status(404).json({ message: 'Individual not found' });
      }
      res.status(200).json(individual);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
export{
    createIndividualWithPassport,
    getIndividualWithPassport
}
