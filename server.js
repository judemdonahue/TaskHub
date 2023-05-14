const PORT = 3001;

app.use(express.json());

// for html routes
app.use("/", require("./layouts/main.handlebars"));

app.use("/homepage", require("./views/homepage.handlebars"));

app.use("/user", require("./views/user.handlebars"));

app.use("/login", require("./views/login.handlebars"));

app.listen(PORT, () => console.log(`server listening on port ${PORT}!`));
