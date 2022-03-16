import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    age: Number
})

const UserModel = mongoose.model('UserModel', userSchema);

export default UserModel;