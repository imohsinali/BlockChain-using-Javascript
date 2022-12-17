import crypto from 'crypto'
export const cryptoHash=(...inputs)=>{
    const hash=crypto.createHash('sha256')
    hash.update(inputs.sort().join(''))
    return hash.digest('hex')

}

// const result=cryptoHash("hello","word")
// console.log(result)