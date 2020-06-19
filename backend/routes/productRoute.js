import express from 'express';
import data from '../data.js';
const router = express.Router();

// router.get("/", async (req, res) => {
//   const category = req.query.category ? { category: req.query.category } : {};
//   const searchKeyword = req.query.searchKeyword ? {
//     name: {
//       $regex: req.query.searchKeyword,
//       $options: 'i'
//     }
//   } : {};
//   const sortOrder = req.query.sortOrder ?
//     (req.query.sortOrder === 'lowest' ? { price: 1 } : { price: -1 })
//     :
//     { _id: -1 };
//     //const products =  data.products.find({ ...category, ...searchKeyword }).sort(sortOrder);
//   const product = data.products.filter(item =>
//     item.name == req.query.searchKeyword

//   );
//   if(product)
//   res.send(product);
//   else
//   res.send(data.products);
// });

router.get("/:id", async (req, res) => {
  const productId = req.params.id;
  const product = data.products.find(x => x._id === productId);
  if (product)
    res.send(product);
  else
    res.status(404).send({ msg: "Product Not Found." })
});

router.get("/", (req, res) => {
  res.send(data.products);
});

export default router;