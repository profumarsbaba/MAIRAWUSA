const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//db connection with MongoDB
mongoose.connect(
  "mongodb+srv://Sbabausb:14usb450SAU950$@cluster0.nlfnvna.mongodb.net/MAIRAWUSA"
);

//API creation

app.get("/", (req, res) => {
  res.send("<h1>Express App is Running</h1>");
});

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

//create the upload endpoint
app.use("/images", express.static("./upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    images_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

//product schema

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  newPrice: {
    type: Number,
    require: true,
  },
  oldPrice: {
    type: Number,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available:{
    type: Boolean,
    default: true,
  }
});

app.post('/addproduct', async(req, res)=>{
    let products = await Product.find({});
    let id;
    if(products.length > 0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;

    }else {
        id=1;
    }
   
   const product = new Product({
    id:id,
    name: req.body.name,
    category: req.body.category,
    image: req.body.image,
    newPrice: req.body.newPrice,
    oldPrice: req.body.oldPrice,

   })
   console.log(product);
   await product.save();
   console.log('save');
   res.json({
    success:true,
    name:req.body.name,
   })
})

app.post('/removeproduct', async(req, res)=>{
    await Product.findOneAndDelete({id:req.body.id})
    console.log("removed")
    res.json({
        success:true,
        name:req.body.name
    })
})

app.get('/allproducts', async(req, res)=>{
let products = await Product.find({});
console.log("All product has been fetched");
res.send(products)
})

// schema creating for uset model
const Users = mongoose.model('Users', {
   name:{
    type:String,
   },
   email:{
    type:String,
    unique: true,
   },
  password:{
    type:String,
  },
  cartData:{
    type:Object,
  },
  date:{
    type:Date,
    default:Date.now,
  } 
})

// creating registering uset endpoint

app.post('/signup', async (req, res)=>{

  let check = await Users.findOne({email:req.body.email})
  if (check){
    return res.status(400).json({success:false, errors:"existing user found with same email"})
  }
  let cart = {};
  for(let i=0;i<300;i++){
    cart[i]=0;
  }
  const user = new Users({
    name:req.body.username,
    email:req.body.email,
    password:req.body.password,
    cartData:cart
  })
 
  await user.save();

  const data = {
    user:{
      id:user.id
    }
  }
  const token = jwt.sign(data, 'secret_ecom')
 
  
  res.json({
    success:true,
    token
  })
})

// creating login user endpoint

app.post('/login', async (req, res)=>{
  let user = await Users.findOne({email:req.body.email});
  if(user){
    const passCompare = req.body.password === user.password;
    if(passCompare){
      const data = {
        user:{
          id:user.id
        }
      }
      const token = jwt.sign(data, 'secret_ecom');
      res.json({success:true, token});
    } else{
      res.json({success:false, error:"Wrong Password"});
    }
  } else{
    res.json({success:false, error:"Wrong email address"});
  }
})

app.get('/newcollection', async (req, res)=>{
  let product = await Product.find({});
  let newcollection = product.slice(1).slice(-8);
  console.log("newcollection fetched")
  res.send(newcollection);
})

app.get('/popularinmilk', async (req, res)=>{
  let product = await Product.find({category:"milik"});
  let popularinmilk = product.slice(0,4);
  console.log("popularinmilk fetched")
  res.send(popularinmilk);
})

//creating middleware to fetch user

const fetchUser = async (req,res,next)=>{
  const token = req.header('auth-token');
  if(!token){
    res.status(401).send({errors:"please authenticate using valid token"})
  }
   else
  {
    try{
      const data = jwt.verify(token,'secret_ecom');
      req.user = data.user;
      next();
    } catch (error){
       res.status(401).send({errors:"quthenticate using valid token"})
    }
  }
}

app.post('/addtocart', fetchUser, async (req, res)=>{
  console.log("added", req.body.itemId)
   console.log(req.body, req.user)
  let userData = await Users.findOne({_id:req.user.id});
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
  res.send({resp:"added"})

})

app.post('/removefromcart', fetchUser, async (req, res)=>{
 console.log("remove", req.body.itemId)
  let userData = await Users.findOne({_id:req.user.id});
  if(userData.cartData[req.body.itemId] >0){
  userData.cartData[req.body.itemId] -= 1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
  res.send({resp:"Remove"})
  }

})

app.post('/getcart', fetchUser, async (req, res)=>{

  console.log("getcart");
  let userData = await Users.findOne({_id:req.user.id})
  res.json(userData.cartData);

})


app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on port " + port);
  } else {
    console.log("Error : " + error);
  }
});
