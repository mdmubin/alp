import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
}, {
  timeStamps: true,
});

const Review = mongoose.Model('Review', reviewSchema);

export default Review;
