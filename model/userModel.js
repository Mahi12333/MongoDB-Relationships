import mongoose from "mongoose"
const individualSchema = new mongoose.Schema({
  name: String,
  age: Number,
  // Reference to Passport collection
  passport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Passport'
  }
});

const UserModel = mongoose.model('Individual', individualSchema);
export default UserModel;
