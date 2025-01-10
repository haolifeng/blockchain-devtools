const tokenManagerSc = require('./tokenManager');

const getTokenPairInfo=async ()=>{
    let info = await  tokenManagerSc.getTokenPairInfo(904);
    console.log('info: ', info);
}

const main= async()=>{
   await getTokenPairInfo();
}
main();