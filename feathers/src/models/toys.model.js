// toys-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const toys = new Schema({
    toyName: { type: String, required: true },
    toyColor: { type: String, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('toys', toys);
};
