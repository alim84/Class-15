const express = require("express");
const { default: mongoose } = require("mongoose");
const userModel = require("./models/user.model");
const PostModel = require("./models/Post.model");
const app = express();

port = 3000;

let db_Url = mongoose
  .connect(
    "mongodb+srv://alimscohfw:alimscohfw@cluster0.yfgu72u.mongodb.net/alimscohfw?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Databese is connect");
  });

app.use(express.json());

app.get("/user", async (req, res) => {
  let user = await userModel.find({}).populate("post");
  res.sendStatus({ user });
});

app.post("/create/user", async (req, res) => {
  let { name, email } = req.body;

  let users = new userModel({
    name,
    email,
  });
  await users.save();
  res.send({ user });
});
app.post("/create/post", async (req, res) => {
  let { title, user } = req.body;
  let post = new PostModel({
    title,
    user,
  });
  await post.save();

  let userdetails = await userModel.findOneAndUpdate(
    { _id: user },
    { $push: { post: post._id } },
    { new: true }
  );
  res.send({ msg: post });
});

app.listen(port, () => {
  console.log(`Server is runing http://localhost:${port}`);
});
