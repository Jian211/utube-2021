// to globalRouter.
export const join   = (req,res) => res.send("welcome Join!");
export const login  = (req,res) => res.send("login kudasai");

// to userRouter.
export const edit   = (req,res) => res.send("Edit user");
export const remove = (req,res) => res.send("remove user");
export const watch  = (req,res) => {
    console.log(req.params.id);
    return res.send(`Watch User #${req.params.id}`);
}
export const logout = (req,res) => res.send("Log Out");