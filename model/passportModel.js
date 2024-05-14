import mongoose from "mongoose"

const passportSchema = new mongoose.Schema({
  passportNumber: String,
  country:String,
  expiryDate: Date
});

const PassportModel = mongoose.model('Passport', passportSchema);
export default PassportModel;
