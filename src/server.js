import express from "express"

const app = express();

const handleHome    = (req, res) => { return res.send("HOME PAGE")};
const handleAbout   = (req, res) => { return res.send("ABOUT")};
const handleContact = (req, res) => { return res.send("Contact")};
const handleLogin   = (req, res) => { return res.send("Login")};


app.get("/", handleHome);
app.get("/about", handleAbout);
app.get("/contact", handleContact);
app.get("login",handleLogin);

app.listen(PORT,() => console.log(`Server lisenting`));