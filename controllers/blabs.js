
var Blab = require("../models/blab");

function index() {
  Blab
  .find({})
  .then(
    function(blabs) {
      res.json(blabs);
    },
    function(err) {
      console.log(err);
    }
  );
}

module.exports = {
  index: index
};
