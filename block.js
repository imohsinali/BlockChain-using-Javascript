import {GENESIS_DATA} from './config.js'
import {cryptoHash} from './cryptoHash.js'

export class Block{
    constructor({ timestamp, prevHash,hash,data,nonce,difficulty}){
        this.timestamp=timestamp
        this.prevHash=prevHash
        this.hash=hash
        this.data=data
        this.nonce=nonce
        this.difficulty=difficulty
    }
    static genesis(){
        return new this(GENESIS_DATA)
    }
    static mineBlock({prevBlock,data}){
        let hash ,timestamp;
        const prevHash= prevBlock.hash
        const {difficulty}=prevBlock
        // console.log(prevBlock)
        let nonce=0;
        do{
            nonce++;
            timestamp=Date.now()
            hash=  cryptoHash(timestamp,prevHash,data,difficulty,nonce)
        }while(hash.substring(0,difficulty)!=='0'.repeat(difficulty))
        return new this({
            timestamp,
            prevHash,
            data,
            hash,
            difficulty,
            nonce
    })
    }
}
// const block1=new Block({data:"Mohsin",prevHash:'0x123',hash:"0x1244"})

// // console.log(block1)
// const genesisBlock=Block.genesis()
// // console.log(genesisBlock)

// const result=Block.mineBlock({prevBlock:block1,data:"Mohsin"})
// console.log(result)
