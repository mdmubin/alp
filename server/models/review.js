import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
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

const Review = mongoose.model('Review', reviewSchema);

export default Review;
