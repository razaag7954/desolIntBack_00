const {mongoose, Schema}=require('mongoose');
const carSchema = new mongoose.Schema({
    name:String,
    price:String,
    phone:String,
    city : {
        type : String,
        enum:['Lahore','Karachi']
    },
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    images: [{type:String}]

});
 
module.exports = mongoose.model(
    'car', carSchema);