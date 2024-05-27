import User from "../../Models/userModel.js"
import bcrypt from 'bcrypt'
export const login = async (req, res) => {
    const { username, password } = req.body

    const user = await User.findOne({ username: username });
    const hashPassword = await User.schema.methods.hashPassword(password);
    console.log('user', user)
    if (!user) {
        return res.status(401).json({
            success: false,
            message: 'Invalid username and password'
        })

    }

    const token = await User.schema.methods.getJwtToken(user._id);
    console.log('token', token);

    return res.cookie('token', token).status(200).json({
        success: true,
        message: 'Login Successfully 💐'
    });

}
export const signUp = async (req, res) => {
    const { username, password } = req.body

    const user = await User.findOne({ username: username });
    const hashPassword = await User.schema.methods.hashPassword(password);
console.log(user)
    if (user?.username===username) {
        return res.status(401).json({
            success: false,
            message: 'Name already taken '
        })

    }


    const postBody = {
        username: username,
        password: hashPassword
    }
    const save = User.create(postBody);
    if (save) {
        return res.status(200).json({
            success: true,
            data: save,
            message: 'Register Successfully 💐'
        })
    }
};

