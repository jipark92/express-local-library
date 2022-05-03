var mongoose = require('mongoose');

var Schema = mongoose.Schema;

let GenreSchema = new Schema(
    {
        name: {type: String, minlength:3, maxLength:100} 
    }
)

//virtual
GenreSchema
.virtual('url')
.get(function(){
    return '/catalog/genre' + this._id;
})

module.exports = mongoose.model('Genre', GenreSchema)