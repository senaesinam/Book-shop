const login =(req,res)=>{
    res.send("<h1>You have logged in successfully</h1>")
}


const register = (req, res)=>{

    res.send("<h1>You have registered successfully</h1>")
}



module.exports = {
    login,
    register
}