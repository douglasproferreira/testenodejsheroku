const mongoose = require('mongoose');

const Publish = mongoose.model('Publish');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const publish = await Publish.paginate({}, { page, limit: 10 });

    return res.json(publish);
  },

  async show(req, res) {
    const publish = await Publish.find({status: "Found"});

    return res.json(publish);
  },

  async store(req, res) {
    const publish = await Publish.create(req.body);
    
    return res.json(publish);
  },

  async update(req, res) {
    const publish = await Publish.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(publish);
  },

  async mostra (req, res){
    return await res.sendfile('../view/index.html');
  }
};