
const { ethers } = require('ethers');

class EthersChain {
    constructor(url){
        this.provider = new ethers.providers.JsonRpcProvider(url);
    }
}

module.exports = EthersChain;

