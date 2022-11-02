import { product } from "../models/Product.js";
import { task } from "../models/Task.js";

export const getProducts = async (req, res) => {
  try {
    const Product = await product.findAll();
    res.status(200).json(Product);
  } catch (error) {
    return res.status(400).json({ message: "error.message" });
  }
};

export const createProduct = async (req, res) => {
  const data = req.body;

  try {
    const newProduc = await product.create({
      name: data.name,
      description: data.description,
      category: data.category,
      price: data.price,
    });
    res.status(200).json({ message: "create Neew Product", pro: newProduc });
  } catch (error) {
    return res.status(400).json({ mesage: "error.message" });
  }

};

export const getProduct = async (req, res) => {
  try {
  const {id} = req.params

  const Product = await product.findOne({
    where: {
      id
    }
  })
  res.status(200).json(Product)
  } catch (error) {
    return res.status(400).json({message: 'error.message'})
  }
}

export const updateProduct = async (req, res) => {
  try {
    const {id} = req.params
  const data = req.body

  console.log(data)
  const Product = await product.findByPk(id, data)
  Product.name = data.name,
  Product.description = data.description,
  Product.category = data.category,
  Product.price = data.price,
  await Product.save()
  res.status(200).json(Product)
  } catch (error) {
    return res.status(400).json({message: "error.message"})
  }
}

 export const deleteProduct = async ( req, res) => {
  const {id} = req.params 

    try {
      const proDele = await product.destroy({
        where: {
          id
        }
      })
      res.status(200).json(proDele)
    } catch (error) {
      return res.status(400).json({message: "error.message" })
    }
 }



 export const getProductTask = async (req, res) => {
      try {
        const {id} = req.params

      const Tasks = await task.findAll({
        where: {
          productId: id
        }
      })
      res.status(200).json(Tasks)
      } catch (error) {
        return res.status(400).json({ message: "error.message"})
      }

 }
