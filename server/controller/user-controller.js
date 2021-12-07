import User from '../model/userSchema.js'

export const userSignUp = async (req, res) => {
    try {
        const exist = await User.findOne({ username: req.body.username });
        if(exist) {
            return res.status(401).json({ message: 'User already exist'});
        }
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json(`${user.firstname} has been successfully registered`);
        
    } catch (error) {
        res.json('Error: ', error.message);
    }
}

export const userLoginIn = async (req, res) => {
    try {
        let user = await User.findOne({username: req.body.username, password: req.body.password})
        if(user) return res.status(201).json({message: `${req.body.username} successfully logged in`})
        else  {
            return res.status(401).json({message: 'Invalid Username or Password'})
        }
    }
    catch(error)  {
        console.log('Error : ', error.message)
    }
}