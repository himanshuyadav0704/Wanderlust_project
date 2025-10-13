const mongoose = require('mongoose');
const Listing = require('./listing');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
     comment: {                   // 👈 this will store the review text
    type: String,
    // required: true
  },
    createdAt: {
        type: Date,
        default: Date.now()
    },

    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

module.exports = mongoose.model('Review', reviewSchema);