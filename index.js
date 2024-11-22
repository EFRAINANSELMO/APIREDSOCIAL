const Appmanager= require('./src/components/AppManager');//import AppManager

const run=async()=>{
   const oAppmanager= new Appmanager();
   await oAppmanager.prepareService();
   await oAppmanager.runService();
}
run();