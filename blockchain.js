import {Block} from  './block.js'
import { cryptoHash } from './cryptoHash.js'

export class Blockchain{
    constructor()
    {
        this.chain=[Block.genesis()]
    }
    addBlock({data}){
        const newBlock=Block.mineBlock({
            prevBlock:this.chain[this.chain.length-1],
            data:data
            
        })
        this.chain.push(newBlock)
    }
    static isValidChain(chain)
    {
        // if(chain[0]!==Block.genesis())
        //we can not check do this beacuse both chian and Block.gensis is not belong to same instance
        if(JSON.stringify(chain[0])!==JSON.stringify(Block.genesis()))
         {
        console.warn("moshi")

        return false

         }


        for(let i=1;i<chain.length;i++)
        {
            const {timestamp,prevHash,hash,data}=chain[i]// destrusture.
            const realLastHash=chain[i-1].hash
            if(prevHash!==realLastHash)
            {
        console.warn("m2")

            return false

            }
            const validatedHash=cryptoHash(timestamp,prevHash,data)
            if(hash!==validatedHash)
            {
             console.warn(hash)
             console.warn(validatedHash)

            return false

            }
        }
        return true
    }
}
const blockchain=new Blockchain()
blockchain.addBlock({data:"block1"})
// blockchain.addBlock({data:"block2"})
// blockchain.addBlock({data:"block2"})
const result=Blockchain.isValidChain(blockchain.chain)
console.log(result)

// console.log(blockchain)