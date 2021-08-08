export const userStatue = (req,res,next) =>{
    res.locals.loggedIn = boolean(req.session.loggedIn);
    console.log(res.locals)

    next();
}