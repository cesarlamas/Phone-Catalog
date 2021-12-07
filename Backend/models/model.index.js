const mongoose = require('mongoose');

const db = "mongodb+srv://PhoneCatalog:PhoneCatalog@cluster0.zzyqd.mongodb.net/Projects2retryWrites=true&w=majority";

mongoose.connect(db, (err) => {
  console.log("connecting")
  if (err) console.log(err);
  else{

    console.log(`Connected to database 🎉`);
  }
});

module.exports = mongoose;
