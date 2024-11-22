
class usuariosModel{

   #orientDB;

    constructor(){
    Object.preventExtensions(this);
    }

    defineModel = async(orientDB)=>{
    this.#orientDB= await orientDB;
    }
    
    fetchUsersAll = async()=>{
        let session = await this.#orientDB.pool.acquire();
        let data;
            data = await session.select().from('usuarios').all();
       // console.log(data);
        
            session.close();
            return data;

    }
    
    createUsers = async(objetc)=>{
        let session = await this.#orientDB.pool.acquire();
        let idRecord= await session.create('Vertex','usuarios').set(objetc).one();
        
        return idRecord;

    }
    
    updateUsers = async()=>{
    
    }
    
    deleteUsers = async()=>{
    
    }
    
    }
    
    module.exports = usuariosModel = new usuariosModel();