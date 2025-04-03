const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://leonardocpalma:VoekYVs2oFtYmgEm@cluster0.2okvwdq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Conectado ao banco de dados");
  } catch (error) {
    console.log(`erro: ${error}`);
  }
}

module.exports = main;
