const { ethers } = require("ethers");

class EvmContract {
    constructor(url, scAddr, abi) {
        this.provider = new ethers.providers.JsonRpcProvider(url);
        this.scInst = new ethers.Contract(scAddr, abi);
    }
}

module.exports = EvmContract;