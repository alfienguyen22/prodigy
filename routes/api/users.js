const express = require("express");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

const validateLoginInput = require("../../validation/login");
const validateRegisterInput = require("../../validation/register");

const User = require("../../models/User");

const router = express.Router();

// @route GET api/users/test
// @desc Tests users route: just display a success message
// @access Public
router.get("/test", (req, res) => res.json("User works!"));

// @route GET api/users/register
// @desc Register new user
// @access Public
router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
        .then((user) => {
            if (user) {
                return res.status(400).json({ email: "Email already exists" });
            } else {
                const avatar = gravatar.url(req.body.email, {
                    s: "200", // size
                    r: "pg", // rating
                    d: "mm", // default
                });

                const new_user = new User({
                    name: req.body.name,
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    avatar,
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(new_user.password, salt, (err, hash) => {
                        if (err) throw err;
                        new_user.password = hash;
                        new_user
                            .save()
                            .then((user) => res.json(user))
                            .catch((err) => console.log(err));
                    });
                });
            }
        })
        .catch((err) => {
            return res.status(400).json(err);
        });
});

// @route GET api/users/login
// @desc Login new user, returning JWT token
// @access Public
router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({ email })
        .then((user) => {
            if (!user) {
                errors.email = "User not found.";
                return res.status(404).json(errors);
            }

            // Check password
            bcrypt.compare(password, user.password).then((isMatch) => {
                if (isMatch) {
                    return res.json({ msg: "Success" });
                } else {
                    errors.password = "Password incorrect";
                    return res.status(400).json(errors);
                }
            });
        })
        .catch((err) => {
            return res.status(400).json(err);
        });
});

module.exports = router;
