import User from "../models/User";
import bcrypt from "bcrypt";

export const mainPage = (req,res) => {
    res.render("home",{
        pageTitle : "Home"
    })
}

export const getJoin = (req,res) => {
    console.log("Join Page > ");
    return res.render("join",{  pageTitle : "Join" })
}

export const postJoin = async (req,res) => {    
    const {  name, email, password, password2 } = req.body;
    if(password !== password2){
        console.log("두개의 비밀번호가 서로 다릅니다.")
        return res.status(400).render("join",{
            pageTitle : "Join",
            errorMessage : "please check again your password"
        })
    }
    const exists = await User.exists({$or : [{name, email}]})
    if(exists){
        console.log("중복된 이름/이메일 입니다.")
        return res.status(400).render("join",{
            pageTitle : "Join",
            errorMessage : "중복된 이름/이메일 입니다"
        })
    }
    await User.create({
        name,
        email,
        password
    })
    return res.redirect("/login");
}

export const getLogin = (req, res) => {
    console.log("Login Page > ");
    return res.render("login",{
        pageTitle : "Login",
    });
}

export const postLogin = async (req, res) => {
    const { name, password} = req.body;
    console.log(name, password," 확인 중...");

    const user = await User.findOne({name});
    const check = await bcrypt.compare(password,user.password);
    if(!check){
        console.log("비밀번호 혹은 아이디가 틀립니다.")
        return res.status(400).render("login",{
            pageTitle : "Login",
            errorMessage : "아이디 혹은 비밀번호가 틀립니다."
        });
    }
    req.session.user = user;
    req.session.loggedIn = true;
    return res.redirect("/");
}