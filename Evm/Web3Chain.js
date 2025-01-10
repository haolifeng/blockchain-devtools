const Web3 = require('web3');

class Web3Chain {
    constructor(url) {
        this.web3 = new Web3(new Web3.providers.HttpProvider(url));
        this.web3.eth.handleRevert = true;
    }

    async getBalance(address){
        return this.web3.eth.getBalance(address);
    }
    async getNonce(address){
        return await this.web3.eth.getTransactionCount(address,"pending");
    }
    async getGasPrice(){
        return await this.web3.eth.getGasPrice();
    }
    async sendSignedTransaction(signedTransaction){
        let receipt = await this.web3.eth.sendSignedTransaction(signedTransaction);
        return receipt;
    }
    sendSignedTransactionCallback(signedTransaction,callback){
        this.web3.eth.sendSignedTransaction(signedTransaction,callback);
    }
    sendSignedTransactionUsingEventEmitter(signedTransaction,hashCallback, receiptCallback, confirmationCallback, errorCallback){
        this.web3.eth.sendSignedTransaction(signedTransaction)
            .on('transactionHash',hashCallback)
            .on('receipt',receiptCallback)
            .on('confirmation',confirmationCallback)
            .on('error',errorCallback);
    }

    async getTx(txHash) {
        let tx = await this.web3.eth.getTx(txHash);
        return tx;
    }

    async signMessage(message, strPriKey){
        let obj = await this.web3.eth.accounts.sign(message, strPriKey);
        return obj.signature
    }
    async getTransactionReceipt(hash){
        let receipt = await this.web3.eth.getTransactionReceipt(hash)
        return receipt;
    }
    async estimateGas(callObject){
        let number = await  this.web3.eth.estimateGas(callObject);
        return number;
    }
    async getBlockNumber(){
        let number = await this.web3.eth.getBlockNumber();
        return number;
    }


}


module.exports = Web3Chain;

