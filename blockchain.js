const Block=require('./block.js')

class Blockchain{
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
}
const blockchain=new Blockchain()
blockchain.addBlock({data:"block1"})
blockchain.addBlock({data:"block2"})
blockchain.addBlock({data:"block2"})


console.log(blockchain)
module.exports=Blockchain