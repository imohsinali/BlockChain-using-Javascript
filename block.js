const {GENESIS_DATA}= require("./config")
const cryptoHash =require('./cryptoHash')

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
    static mineBlock({prevBlock,data}){
        const timestamp=new Date()
        const prevHash= prevBlock.hash
        return new this({
            timestamp,
            prevHash,
            data,
            hash:cryptoHash(timestamp,prevHash,data)
    })
    }
}


const block1=new Block({data:"Mohsin",prevHash:'0x123',hash:"0x1244"})
// console.log(block1)
const genesisBlock=Block.genesis()
// console.log(genesisBlock)

const result=Block.mineBlock({prevBlock:block1,data:"Mohsin"})
console.log(result)
