const {ethers} = require('ethers');

class EvmWallet{
    constructor() {
        this.wallet = null;
    }

    fromMnemonic(words, path) {
        if(path) {
            this.wallet = ethers.Wallet.fromMnemonic(words, path)
        }else{
            this.wallet = ethers.Wallet.fromEncryptedJsonSync(words);
        }
        
    }

}