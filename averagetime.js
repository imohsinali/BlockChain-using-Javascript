import { Blockchain } from "./blockchain.js";
const blockchain=new Blockchain()
blockchain.addBlock("block01")
let prevTimestamp,nextTimestamp,nextBlock,timeDiff,averageTime;
const times=[]

for(let i=0;i<100;i++)
{
    prevTimestamp=blockchain.chain[blockchain.chain.length-1].timestamp
    blockchain.addBlock({data:`block ${i}`})
    nextBlock=blockchain.chain[blockchain.chain.length-1]
    nextTimestamp=nextBlock.timestamp
    timeDiff=nextTimestamp-prevTimestamp
    times.push(timeDiff)
    averageTime=times.reduce((total,num)=>total+num)/times.length
    console.log(`time to mine block: ${timeDiff}ms ,Diffculty:${nextBlock.difficulty}ms,average time ${averageTime}ms`)

}
