import userModel from '../models/userModel.js';

const authenticate = async (req, res, _next) => {
    const { email, password } = req.body;
    const user = await userModel.findByEmail(email);
    if(user) {
        if(password === user.password) {
            res.status(200).json({ success: true });
        } else {
            res.status(401).json({ success: false });
        }
    } else {
        res.json({ success: false, error: "User not found"});
    }
}

const createUser = async (req, res, _next) => {
    const { user } = req.body;
    const newUser = await userModel.create(user);
    res.json({ newUser });
}

const findAllUsers = async (_req, res, _next) => {
    const users = await userModel.findAll();
    if(users.length > 0) {
        res.json({ users });
    } else {
        res.json({ success: false, error: "Users not found"});
    }
}

const findUser = async(req, res, _next) => {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if(user) {
        res.json({ user });
    } else {
        res.json({ success: false, error: "User not found"});
    }
}

const updateUser = async (req, res, _next) => {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if(user) {
        const { user } = req.body;
        await userModel.update(id, user);
        const updatedUser = await userModel.findById(id);
        res.json({ updatedUser });
    } else {
        res.json({ success: false, error: "User not found"});
    }
}

const deleteUser = async(req, res, _next) => {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if(user) {
        await userModel.deleteOne(id);
        res.json({ success: true });
    } else {
        res.json({ success: false, error: "User not found"});
    }
}


export default {
    authenticate,
    createUser,
    findAllUsers,
    findUser,
    updateUser,
    deleteUser,
}