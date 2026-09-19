const express = require("express");
const router = express.Router();

const user = []

router.get('/',(req,res) => {
    res.status(200).json({
        message: "Ambil semua user",
        data:user.map(user) => ({
            id:user.id,
            name:user.name,
            email:user.email
        })
    })
})

