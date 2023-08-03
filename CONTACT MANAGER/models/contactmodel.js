const mongoose =  require("mongoose");

const contactschema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email:{
        type: String,
        required: [true, "Please provide an email"],
    },
    phone:{
        type: String,
        required: [true, "Please provide a phone number"],
    }

},
{
    timestamps: true,
} );

module.exports = mongoose.model("COntact", contactschema);