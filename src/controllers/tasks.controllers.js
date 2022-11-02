import { task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const Task = await task.findAll();
    res.status(200).json(Task);
  } catch (error) {
    return res.status(400).json({ message: "error.message" });
  }
};

export const createTask = async (req, res) => {
  const data = req.body;

  try {
    const newTask = await task.create({
      description: data.description,
      comment: data.comment,
      productId: data.productId,
    });
    res.status(200).json({ message: "create Neew Product", pro: newTask });
  } catch (error) {
    return res.status(400).json({ mesage: "error.message" });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;

    const Task = await task.findOne({
      where: {
        id,
      },
    });
    res.status(200).json(Task);
  } catch (error) {
    return res.status(400).json({ message: "error.message" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    console.log(data);
    const Task = await task.findByPk(id, data);
    (Task.name = data.name),
    (Task.comment = data.comment)

    await Task.save();
    res.status(200).json(Task);
  } catch (error) {
    return res.status(400).json({ message: "error.message" });
  }
};



export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    await task.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({ message: "deleted Task", task: data });
  } catch (error) {
    return res.status(400).json({ message: "error.message" });
  }
};
