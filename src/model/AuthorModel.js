const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nair7229:Admin1346@cluster0.hcabz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'); //Part 2 Point 1
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;