const { model } = require('mongoose');
const bcrypt = require("bcryptjs");

const UsersSchema = require('../schemas/UsersSchema');

UsersSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});

UsersSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const UserModel = model('users', UsersSchema);

module.exports = UserModel;