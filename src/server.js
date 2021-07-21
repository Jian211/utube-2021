import express from "express"

const PORT = 4000;
const app = express();

const home    = (req, res) => { return res.send("HOME PAGE")};
const protector   = (req, res ,next) => {
    if(req.url === "/protected"){
        return res.end();
    }
    next();
};

const urlLogger = (req,res,next) => {
    console.log("path: ",req.url);
    next();    
};

const timeLogger = (req,res,next) =>{
    const date  = new Date();
    const year  = date.getFullYear();
    const month = date.getMonth();
    const day   = date.getDate();
    
    console.log("time:",`${year}.${month}.${day}`);
    next();
}
const secure = (req,res,next) => {
    if(req.protocol ===`https`){
        console.log("secure");
    }else{
        console.log("insecure");
    }
    next();
}

app.get("/", urlLogger,timeLogger,secure,home);
app.get("/protected", protector);

app.listen(PORT,() => console.log(`Server lisenting`));