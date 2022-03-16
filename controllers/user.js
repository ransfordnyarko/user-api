import UserModel from "../models/userModel.js";
import { v4 as uuidv4 } from 'uuid';

export const getUsers = async (req, res) => {

    try {
        const users = await UserModel.find();
        res.status(200).json(users)

    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getUser = async (req, res) => {
    const { id } = req.params;
    
    try {
        const user = await UserModel.findOne({ id: id});
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const createUser = async (req, res) => {
    const user = req.body;
    const newUser = new UserModel({...user, id: uuidv4()});

    try {
        await newUser.save();
        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json( { message: error.message });
        
    }
}

export const updateUser = async ( req, res ) => {
    const { id } = req.params;
    const updateParams = req.body;
    let user;

    try {
        user = await UserModel.findOne({ id: id});
    } catch (error) {
        res.status(404).json({ message: error.message})
    }

    if(user) {
        try {
            const updatedUser = await UserModel.updateOne({ id: id }, updateParams)
            res.status(201).json(updatedUser)
        } catch (error) {
            res.status(404).json({ message: error.message})
        }
    }
    else {
        res.status(404).json({ message: `There exists no user with ID ${id}`})
    }
}

export const deleteUser = async ( req, res ) => {
    const { id } = req.params;
    let user;

    try {
        user = await UserModel.findOne({ id: id});
    } catch (error) {
        res.status(404).json({ message: error.message})
    }

    if(user) {
        try {
            const deletedUser = await UserModel.deleteOne({ id: id })
            res.status(201).json(deletedUser)
        } catch (error) {
            res.status(404).json({ message: error.message})
        }
    }
    else {
        res.status(404).json({ message: `There exists no user with ID ${id}`})
    }


}