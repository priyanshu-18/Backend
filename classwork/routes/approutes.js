const express = require('express');
const router = express.Router();

// Example POST route
router.post('/data', (req, res) => {
    res.json({
        message: "POST route working!",
        body: req.body
    });
});

module.exports = router;