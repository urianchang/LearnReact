var voltrons = require('../controllers/voltrons.js');

//: CRUD operations
module.exports = function(app) {
    //: Get all voltrons
  app.get('/voltrons', function(req, res) {
    voltrons.index(req, res);
  });
    //: Create a voltron
  app.post('/api/v1/workflows/create_ma_service_environment', function(req, res) {
    voltrons.create(req, res);
  });
    //: Delete a voltron
  app.delete('/decommission/voltron/:id', function(req, res){
    voltrons.delete(req, res);
  });
    //: Get status of voltron assembly
  app.get('/api/v1/execution/:id', function(req, res) {
    voltrons.status(req, res);
  });
}
