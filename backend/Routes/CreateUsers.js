const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/createUser', async (req, res) => {
    try {
        const { name, location, email, password } = req.body;

        // Perform data validation before saving
        const user = new User({ name, location, email, password });

        // Save the user to the database
        await user.save();

        res.json({ success: true, message: 'User created successfully.' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}
);

module.exports = router;