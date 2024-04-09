import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
  phoneNumber: {
    type: Number,
  },
});

const formModel = mongoose.model("Users", formSchema);
export default formModel;
