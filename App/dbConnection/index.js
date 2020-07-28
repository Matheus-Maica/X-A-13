const mongoose = require('mongoose');
mongoose.connect("mongodb://heroku_csbtxjp1:pf9uunot442i6fp2tjmqtrielk@ds339648.mlab.com:39648/heroku_csbtxjp1", {useNewUrlParser: true,useUnifiedTopology: true});
module.exports = mongoose