const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title :{
          type : String,
          require : true
    },
    
    description : String,

    // image : {    
    //     filename: String,
    //      url: String,
    //     //  default:
    //     //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7X8sseBG9LssIyDQBAmaWZrQPJix90lv3AA&s",
    //     // set: (v) => 
    //     // v == ""
    //     //  ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7X8sseBG9LssIyDQBAmaWZrQPJix90lv3AA&s"
    //     //   : v,

    // },

     image: {    
      url: String,
      filename: String
    // filename: {
    //   type: String,
    //   default: "default.jpg"
    // },
    // url: {
    //   type: String,
    //   default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7X8sseBG9LssIyDQBAmaWZrQPJix90lv3AA&s"
    // }
  },

    // price : Number,
    price: {
  type: Number,
  default: 0
},
    location : String,
    country : String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

});

listingSchema.post("findOneAndDelete", async(listing) => {
  if(listing) {
    await Review.deleteMany({_id: {$in: listing.reviews}});
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;