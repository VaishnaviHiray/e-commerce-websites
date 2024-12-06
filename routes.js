let express = require("express");
let router = express.Router();

let bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(bodyParser.raw());

let mongoose = require("mongoose");
let user = require("./module/user");
let Product = require('./module/product');
let category = require('./module/category');
let cart = require('./module/cart');

mongoose.Promise = global.Promise;

let db = {};
db.user = user;
db.cart = cart;
db.product = Product;
db.category = category;

db.mongoose = mongoose;
db.url = "mongodb://127.0.0.1:27017/prodData";
db.mongoose.connect("mongodb://127.0.0.1:27017/prodData").then(() => {
        console.log("Connected to the database!!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!!", err);
        process.exit();
    })

let User = db.user;
let Products = db.product;
let Cart = db.cart;

// signup api's       
router.post("/signup", async(req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
});

//signin api's
router.post("/signin", async(req, res) => {
    console.log(req.body)
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            res.send(user)
        } else {
            res.send({ result: "no user found" });
        }
        res.send(user);
    }
});
var path = require("path");
var multer = require("multer");

router.use(express.static("public"));
router.use("/images", express.static(__dirname + "/images"));
//multer images api's
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images/");
    },
    filename: (req, file, cb) => {
        const fileName = `${file.originalname}`;
        cb(null, fileName);
    }
});

let upload = multer({ storage: storage });

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
router.post("/upload", upload.single("image"), async(req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded.");
    }
    let url = "http://localhost:5000/userApp/images/" + req.file.originalname;
    let obj = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        image: url
    }
    console.log(obj);
    let result = await Products.insertMany(obj);
    if (result) {
        res.send({
            originalname: req.file.originalname,
            mimetype: req.file.mimetype,
            size: req.file.size,
            path: req.file.path
        });
    } else {
        res.send("image not inserted!!");
    }
});
// get all images api's
router.get("/getprod", async function(req, res) {
    var product = await Products.find({});
    var result = product;
    res.send(result);
});

// Create a new category
router.post("/category", async(req, res) => {
    let { items } = req.body;

    try {
        if (!items) {
            return res.status(400).json({ message: "Category name is required" });
        }
        let categoryExists = await category.findOne({ items });
        if (categoryExists) {
            return res.status(400).json({ message: "Category already exists" });
        }
        let newCategory = new category({ items });
        let savedCategory = await newCategory.save();

        res.status(201).json({ message: "Category created successfully", category: savedCategory });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating category" });
    }
});
// Get all categories
router.get("/categories", async(req, res) => {
    try {
        let categories = await category.find({});
        res.status(200).json(categories);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching categories" });
    }
});
// Update a category
router.put("/category/:id", async(req, res) => {
    let { id, name } = req.params;
    try {
        let updatedCategory = await category.findByIdAndUpdate(
            id, { name }, { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({ message: "Category updated successfully", category: updatedCategory });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating category" });
    }
});
// Delete a category
router.delete("/category/:id", async(req, res) => {
    let { id } = req.params;

    try {
        const deletedCategory = await category.findByIdAndDelete(id);

        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({ message: "Category deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error deleting category" });
    }
});
// Add to cart or update cart
router.post('/cart', async function(req, res) {
    const { userId, productId, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            // Create a new cart if not found
            cart = new Cart({
                userId,
                items: [{ productId, quantity }]
            });
        } else {
            // Check if the product already exists in the cart
            const itemIndex = cart.items.findIndex(item => item.productId.equals(productId));

            if (itemIndex > -1) {
                // If product exists, update the quantity
                cart.items[itemIndex].quantity += quantity;
            } else {
                // If product does not exist, add it
                cart.items.push({ productId, quantity });
            }
        }

        await cart.save();
        res.status(200).json({ message: 'Product added to cart successfully', cart });
    } catch (err) {
        console.error("Error adding product to cart:", err);
        res.status(500).json({ message: 'Error adding product to cart', error: err });
    }
});
// Get all cart items for a specific user
router.get("/cart/:userId", async(req, res) => {
    const { userId } = req.params;

    try {
        const cart = await Cart.findOne({ userId }).populate({
            path: 'items.productId', // Populate product details
            model: 'Product', // Make sure 'Product' model is referenced correctly
            select: 'name price image category' // Select specific fields
        });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found for this user" });
        }

        res.status(200).json(cart);
    } catch (err) {
        console.error("Error fetching cart items:", err);
        res.status(500).json({ message: "Error fetching cart items" });
    }
});

// search api's
router.get("/search/:key", async(req, res) => {
    try {
        const key = req.params.key;
        const result = await Products.find({
            $or: [
                { name: { $regex: key, $options: "i" } },
                { category: { $regex: key, $options: "i" } },
                { price: key }
            ]
        });
        res.status(200).send(result);
    } catch (err) {
        console.error("Error while searching:", err);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

module.exports = router;
// // Get all cart items for a specific user
// router.get("/cart/:userId", async(req, res) => {
//     const { userId } = req.params;

//     try {
//         const cart = await Cart.findOne({ userId }).populate('items.productId'); // Populate product details
//         if (!cart) {
//             return res.status(404).json({ message: "Cart not found for this user" });
//         }
//         res.status(200).json(cart);
//     } catch (err) {
//         console.error("Error fetching cart items:", err);
//         res.status(500).json({ message: "Error fetching cart items" });
//     }
// });

// // add to cart api's
// router.post('/cart', async function(req, res) {
//     const { userId, productId, quantity } = req.body;
//     try {
//         let cart = await Cart.findOne({ userId });

//         if (!cart) {
//             cart = new Cart({
//                 userId,
//                 items: [{ productId, quantity }]
//             });
//         } else {
//             const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

//             if (itemIndex > -1) {
//                 cart.items[itemIndex].quantity += quantity;
//             } else {
//                 cart.items.push({ productId, quantity });
//             }
//         }
//         await cart.save();
//         res.status(200).json({ message: 'Product added to cart', cart });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: 'Error adding product to cart' });
//     }
// });