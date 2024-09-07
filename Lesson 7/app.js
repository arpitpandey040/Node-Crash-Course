const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
// creating Express app
const app = express();

// connecting to mongodb
const dbURI =
  "mongodb+srv://ampandey58:Panaditya%4012@cluster0.xcd4i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dbURI)
  // .then(() => console.log(`Conneted to MongoDB`))
  .then(() => app.listen(3000)) // we don't want to browser to listen untill DB is connected
  .catch((err) => console.log(err));
// express view engine
app.set("view engine", "ejs");

// // listen for requests
// app.listen(3000);

// using middleware
// app.use((req, res, next) => {
//   console.log(`New request made`);
//   console.log(`host: ${req.hostname}`);
//   console.log(`path : ${req.path}`);
//   console.log(`method : ${req.method}`);
//   next();
// });

// app.use((req, res, next) => {
//   console.log(`In the next middleware`);
//   next();
// });

// middleware and static files

app.use(express.static("public"));
app.use(express.urlencoded()); // it takes all the url encoded data that we write and passing it as an object into req object
// instead we can use morgan

app.use(morgan("dev"));

// how to stop browser caching data
// app.use((req, res, next) => {
//     res.setHeader('Cache-Control', 'no-store');
//     next();
//   });
app.get("/", (req, res) => {
  // const blogs = [
  //   { title: "First Blog", snippet: "This is the first blog post." },
  //   { title: "Second Blog", snippet: "This is the second blog post." },
  //   { title: "Third Blog", snippet: "This is the Third post." },
  // ];
  // res.render("index", { title: "Home", blogs }); // instead of doing this we can redirect to all blogs page where we will redner the data fetched from mongodb
  res.redirect("/blogs");
});

// mongoose and sandbox routes
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "Test Blog 2",
    snippet: "This is a test blog.",
    body: "This is a test blog body.",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// getting all blogs from mongoDB
app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
// how to find a single blog
app.get("/single-blog", (req, res) => {
  Blog.findById("66ccd978a68f7800cfedbb3f")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// blog routes

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) // sort the data in ascending order
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
      // console.log(`new blog created.`)
    })
    .catch((err) => {
      console.log(err);
    });

  // console.log(req.body)
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.delete('/blogs/:id', (req, res) => {
  const id = req.params.id;
  
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create A New Blog" });
});
// 404 Page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
}); // use is a middleware
