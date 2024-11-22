const usuariosModel= require('../models/usuariosModel')

class usuariosControllers{

constructor(){
Object.preventExtensions(this);
}

fetchUsers = async(req,resp)=>{
    let data= await usuariosModel.fetchUsersAll();
resp.status(200).json(data);
}

createUsers = async(req,resp)=>{
     let idrecord= await usuariosModel.createUsers(req.body);
    resp.status(200).json(idrecord);
}

updateUsers = async()=>{

}

deleteUsers = async()=>{

}

}

module.exports = usuariosControllers;