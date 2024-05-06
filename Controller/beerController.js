// import beerData from "../Data/beerData.js";
// export const getData = (req,res) => {
//     res.json(beerData);
// }

import Beer from "../Model/BeerModel.js";

export const getData = async (req, res) => {
  const datas = await Beer.find();
  res.json(datas);
};

export const postData = async (req, res) => {
  const model = new Beer(req.body);
  const saved = await model.save();
  res.json(saved);
};

export const putData = async (req, res) => {
  const content = req.body;
  const updatedData = await Beer.findByIdAndUpdate(req.params.id, content, {
    new: true,
  });
  res.json(updatedData);
};

export const deleteData = async (req, res) => {
  await Beer.findByIdAndDelete(req.params.id);
  res.send("id deleted");
};
