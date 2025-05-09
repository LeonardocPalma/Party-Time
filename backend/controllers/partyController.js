const { json } = require("express");
const PartyModel = require("../models/Party");

const checkPartyBudget = (budget, services) => {
  const priceSum = services.reduce((sum, service) => sum + service.price, 0);

  if (priceSum > budget) {
    return false;
  }

  return true;
};

const partyController = {
  create: async (req, res) => {
    try {
      const party = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        image: req.body.image,
        services: req.body.services,
      };

      // budget validation

      if (party.services && !checkPartyBudget(party.budget, party.services)) {
        return res.status(406).json({ msg: "O orçamento não é suficiente!" });
      }

      const response = await PartyModel.create(party);

      res.status(201).json({ response, msg: "Festa criada com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const parties = await PartyModel.find();

      res.json(parties);
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;

      const party = await PartyModel.findById(id);

      if (!party) {
        res.status(404).json({ msg: "Festa não encontrada!" });
        return;
      }

      res.json(party);
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;

      const party = await PartyModel.findById(id);

      if (!party) {
        res.status(404).json({ msg: "Festa não encontrada!" });
        return;
      }

      const deleteParty = await PartyModel.findByIdAndDelete(id);

      res.status(200).json({ deleteParty, msg: "Festa deletada com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;

      const party = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        image: req.body.image,
        services: req.body.services,
      };

      if (party.services && !checkPartyBudget(party.budget, party.services)) {
        return res.status(406).json({ msg: "O orçamento não é suficiente!" });
      }

      const updatedParty = await PartyModel.findByIdAndUpdate(id, party);

      if (!updatedParty) {
        res.status(404).json({ error: "Festa não encontrada" });
        return;
      }

      res.status(200).json({ updatedParty, msg: "Festa atualizada!" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = partyController;
