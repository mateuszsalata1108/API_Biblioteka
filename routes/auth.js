const router = require('express').Router();
const User = require('../models/User');
const {registerValidation, loginValidation} = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

    //REJESTRACJA
    // Walidacja wprowadzanych danych
    router.post('/register', async (req,res)=>{
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Sprawdzanie czy mail jest juz w bazie danych
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email istnieje w bazie danych');
    
    //Szyfrowanie hasła
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.hasło, salt);

    //Utworzenie nowego użytkownika
    const user = new User({
        imię: req.body.imię,
        email: req.body.email,
        hasło: hashedPassword
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    }
    catch(err){
        res.status(400).send(err);
    }
    });


    //Logowanie
    router.post('/login', async (req, res) => {
        const { error } = loginValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        //Sprawdzanie czy mail jest w bazie danych
        const user = await User.findOne({ email: req.body.email });
        if(!user) return res.status(400).send('Niepoprawne poświadczenia');
        //Sprawdzanie poprawności hasła
        const validPass = await bcrypt.compare(req.body.hasło, user.hasło);
        if(!validPass) return res.status(400).send('Niepoprawne poświadczenia');
 
        //Token zabezpieczający
        const token = jwt.sign({ _id: user._id}, process.env.TOKEN_SECRET);
        res.header('auth-token', token).send(token);
    });

module.exports = router ;