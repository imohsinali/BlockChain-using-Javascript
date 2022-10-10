const {GENESIS_DATA}= require("./config")

class Block{
    constructor({prevHash,hash,data}){
        this.timestamp=new Date()
        this.prevHash=prevHash
        this.hash=hash
        this.data=data
    }
    static genesis(){
        return new this(GENESIS_DATA)
    }
}


const block1=new Block({data:"Mohsin",prevHash:'0x123',hash:"0x1244"})
// console.log(block1)
const genesisBlock=Block.genesis()
console.log(genesisBlock)