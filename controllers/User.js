const Signup = require('../models/signup.js');
const ClubReqForm = require('../models/RequestForm.js');

exports.adminAuthentication = async(req, res)=> {
    try {
        const { username, code } = req.body;
        const existingUser = await Signup.findOne({ username, password: code });
        if (!existingUser)
        {
            return res.status(500).json("Invalid Code...");
        }
        return res.status(200).json(existingUser);
    }
    catch (error) {
        return res.status(500).json(error);
    }
}

exports.clubReqForm = async(req, res)=> {
    try {
        const { Name, Email, ClubName, ClubMotive,department,working } = req.body;
        const response = await ClubReqForm.create({ Name, Email, ClubName, ClubMotive,department,working });
        return res.status(200).json({status: true, message: "Data uploaded successfully!!",response});
    }
    catch (error) {
        return res.status(500).json(error);
    }
}

exports.readClubReqForm = async(req,res)=> {
    try {
        const response = await ClubReqForm.find();
        return res.status(200).json({status: true, message: "Data read successfully!!",response});
    }
    catch (error) {
        return res.status(500).json(error);
    }
}