const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Products} = require('./src/db.js');
const port = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => { //force: true
  server.listen(port, () => {
    Products.create({
      name: "Whisky",
      type: "vinos",
      Variety: "Nose",
      brand: "Buchana",
      amount: "10",
      price: "10.5",
      stock: "100",
      ableDiscount: false,
      percentageDiscount: null,
      container: "nose",
      availability: "true",
      sells: "10",
      image:"https://media.istockphoto.com/id/174893293/es/foto/whisky.jpg?s=612x612&w=0&k=20&c=OOLRWsImVudwQXs8rYPt1HVmLMTOpxGUEbaF4pcFehM=",
      description: "Bebida alcoholica",
    }).then(() => console.log("Producto creado"))
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
});