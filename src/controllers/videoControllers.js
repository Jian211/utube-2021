export const home   = (req,res) => res.send("Home Video");
export const search = (req,res) => res.send("Search Video");

//Video router
export const edit   = (req,res) => {
    
    return res.send(`Edit Video #${req.params.id}`);
}
    
export const remove = (req,res) => res.send("remove Video");
export const upload = (req,res) => res.send("Upload Video");
export const watch  = (req,res) => {
     return res.send(`watch Video #${req.params.id}`);
}