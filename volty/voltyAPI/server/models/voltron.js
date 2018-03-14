// require mongoose
var mongoose = require('mongoose');
// create the schema
var VoltronSchema = new mongoose.Schema({
  company_long_name: String,
  company_short_name: String,
  customer_email: String,
  customer_full_name: String,
  region: String,
  sightmachine_owner_email: String,
});
// register the schema as a model
var Voltron = mongoose.model('Voltron', VoltronSchema);
