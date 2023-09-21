const mongoose = require('mongoose');
async function connectToDb() {
  try {
    //deploy changes
    await mongoose.connect('mongodb+srv://root:root@demo.uw7o4th.mongodb.net/demo?retryWrites=true&w=majority');
    console.log('Connected to DB');
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connectToDb;
