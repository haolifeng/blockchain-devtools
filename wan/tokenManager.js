const EvmContract = require('../Evm/Contract');
const wanConfig = require('../conf/Wan');

class TokenManager extends EvmContract {
    constructor(url, scAddr, abi) {
        super(url, scAddr, abi);
    }
    async getTokenPairInfo(tokenPairID) {
        let tokenPairInfo = await this.scInst.getTokenPairInfo(tokenPairID);
        return tokenPairInfo;
    }

}
const tokenManagerSc = new TokenManager(wanConfig.url, wanConfig.tokenManagerAddr, wanConfig.tokenManagerAbi);
module.exports = tokenManagerSc;
