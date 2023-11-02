const mongoose = require('mongoose');

// seperti bikin aturan khusus untuk table
const productSchema = mongoose.Schema({
  name: {
    // required untuk validasi
    type: String,
    required: [true, 'field nama harus ada'],
    minlength: [3, 'panjang nama minimal 3 karakter'],
    maxlength: 50,
  },
  price: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    required: [true, 'field deskripsi harus ada'],
  },

  Image_url: {
    type: String,
    required: false,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
  },
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
