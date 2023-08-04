const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactmodel");
//@desc Get all Contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async(req, res) => {
  const contacts = await Contact.find();
    res.status(200).json(contacts);
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
    const contact = await Contact.create({
      name,
      email,
      phone,
    })

    res.status(201).json(contact);
  });
  

//@desc GET Contacts
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async(req, res) => {
  const contact = await Contact.findByid(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
  });

//@desc Update Contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact= asyncHandler(async(req, res) => {
  const contact = await Contact.findByid(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }
  const updatedContact = await Contact.findByidAndupdate(
    req.params.id,
    req.body,
    {
      new: true,
  }
  );
  res.status(200).json(updateContact);

  });
  

//@desc Delete Contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async(req, res) => 
{
  const contact = await Contact.findByid(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }
  await contact.remove();
  res.status(200).json(contact);
});

module.exports = {
    getContacts, 
    CreateContact, 
    getContact,
    updateContact, 
    deleteContact};
