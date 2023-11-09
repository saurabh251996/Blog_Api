const mongoose = require('mongoose');

// Create a Mongoose schema for a blog post
const blogSchema =mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: Date,
    default: Date.now,
  },
//   categories: [String], // Array of category or tag names
  comments: {

    type:String,
    required: true,

  },
    

//   likes: { type: Number, default: 0 },
//   dislikes: { type: Number, default: 0 },
//   featuredImage: String, // URL or file path to the image
//   authorId: String, // User ID of the author
//   authorBio: String,
//   views: { type: Number, default: 0 },
 
//   relatedPosts: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Blog',
//     }
//   ],
 
 
});

// Create a Mongoose model for the blog schema
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
