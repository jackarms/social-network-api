const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: //Regex to VALIDATE email
  },
thoughts: [{
    type: Schema.Types.ObjectId,
    ref: "Thought",
}]

});
