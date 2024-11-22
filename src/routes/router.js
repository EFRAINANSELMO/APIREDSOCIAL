const express =require('express')

class Router{
     #router;
     #usuariosControllers;
     
    constructor(){
     this.#router= express.Router();
     Object.preventExtensions(this);
    }
    attachControllers = async(ousuariosControllers)=>{
      this.#usuariosControllers=ousuariosControllers;
      
    }
   
    prepareRouting = async()=>{
       this.#router.get('/usuarios',this.#usuariosControllers.fetchUsers);
       this.#router.post('/usuarios',this.#usuariosControllers.createUsers);
    }

    getRouter = () =>{
        return this.#router;
    }
}

module.exports = Router;