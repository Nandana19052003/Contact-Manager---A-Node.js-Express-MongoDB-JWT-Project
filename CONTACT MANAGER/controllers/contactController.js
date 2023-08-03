const asyncHandler = require("express-async-handler");
//@desc Get all Contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "Get all contacts" });
  });
  
//@desc Create new Contacts
//@route POST /api/contacts
//@access public

const CreateContact = asyncHandler(async(req, res) => {
    console.log("The request body is : ", req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new Error("Please enter all fields");
    }
    res.status(201).json({ message: "Create new contacts" });
  });
  

//@desc GET Contacts
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
  });

//@desc Update Contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact= asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Update contacts for ${req.params.id}` });
  });
  

//@desc Delete Contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async(req, res) => {res.status(200).json({ message: `Delete contacts for ${req.params.id}` });
});

module.exports = {
    getContacts, 
    CreateContact, 
    getContact,
    updateContact, 
    deleteContact};
