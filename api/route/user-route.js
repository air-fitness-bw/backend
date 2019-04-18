require('dotenv').config();
const bcrypt = require('bcryptjs')
const router = require('express').Router();
const Users = require('./user-controller');
const tokenGenerator = require('../auth/tokenGenerator');
const { auth } = require('../auth/auth-route');


router.get('/', (req, res) => {
Users.find()
    .then(users => {
    res.json(users);
    })
    .catch(err => res.send(err));
});

//register
router.post('/reg', async (req, res) => {
    const { username, password, role } = req.body;
    const newUser = req.body;

if (password) {
const hash = bcrypt.hashSync(newUser.password, 8);
    newUser.password = hash;
    //console.log(hash);
    }

if ((!username, !password, !role)) {
    res
    .status(400)
    .json({ message: 'Username and password required, please try again.' });
}
try {
    const user = await Users.add(newUser);
    console.log(user);
    if (user) {
        console.log('here')
    const token = tokenGenerator.newToken(user);
        res.status(201).json({
        message: 'Welcome!',
        user_id: user.id,
        token
        });
    } else {
        res.status(500).json({ message: 'Registration failure' });
    }
    } catch (err) {
    res.status(500).json({err, message: 'Internal server error' });
    }
});
//log in send token
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({ message: 'Username and password required, please try again.' });
        return
    }

    try {
        const user = await Users.findBy(username);
        if (bcrypt.compareSync(password, user.password)) {
            const token = tokenGenerator.newToken(user);
            
            res.status(200).json({message: 'Login successful', token});
            return
        } else {
            res.status(401).json({ message: 'Invalid credentials, please try again.' });
            return
        }
    } catch (error) {
        res.status(500).json({ message: 'Invalid credentials, please try again.', error });
    }
});

// delete user
router.delete('some end point', auth, async (req, res) => {
    const id = req.params.id;

    try {
        const count = await users.remove(id);
        if (count === 1) {res.status(202).json({ message: `User successfully deleted` });
        } else {
        res.status(404).json({ message: `No user with matching id, please try again.` });
    }
} catch (err) {
    res.status(500).json({ message: 'Internal server error' });
}
});


module.exports = router;
