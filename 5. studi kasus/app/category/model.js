const mongoose = require('mongoose');

// seperti bikin aturan khusus untuk table
const categorySchema = mongoose.Schema({
  name: {
    // required untuk validasi
    type: String,
    required: [true, 'field nama harus ada'],
    minlength: [3, 'panjang nama minimal 3 karakter'],
    maxlength: [50, 'panjang nama maksimal 50 karakter'],
  },
});
const category = mongoose.model('category', categorySchema);
module.exports = category;
