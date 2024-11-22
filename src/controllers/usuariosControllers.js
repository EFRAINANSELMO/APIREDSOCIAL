const usuariosModel= require('../models/usuariosModel')

class usuariosControllers{

constructor(){
Object.preventExtensions(this);
}

fetchUsers = async(req,resp)=>{
  //  let data= await usuariosModel.fetchUsersAll();
  let data="FETCH FUNCIONANDO";
//console.log(data);
resp.status(200).json({data});
}

createUsers = async(req,resp)=>{
    // let idrecord= await usuariosModel.createUsers(req.body);
    //let record=req.body;
   // console.log(req.body);

//let idrecord="createUsers funcionando";
//console.log(idrecord);
 resp.status(200).json(req.body);
}

updateUsers = async()=>{

}

deleteUsers = async()=>{

}

}

module.exports = usuariosControllers;