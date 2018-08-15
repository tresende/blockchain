'use strict'

const { TransactionHandler } = require('sawtooth-sdk/processor/handler')
const { Decoder } = require('cbor')
const { calculateVoteAddress, handlerInfo } = require('./infra');

const encode = obj => Buffer.from(JSON.stringify(obj, Object.keys(obj).sort()))

class VoteNHandler extends TransactionHandler {
  constructor() {
    console.log('Iniciando smart contract para votos ')
    const info = handlerInfo();
    super(info.family, [info.version], [info.prefix]);
  }

  apply(txn, context) {
    console.log("chegando uma nova transacao");

    const dataDecoded = Decoder.decodeFirstSync(txn.payload);
    const payload = JSON.parse(dataDecoded);

    const blockAddress = calculateVoteAddress(payload)
    const { candidateNumber, ellectionName } = payload;
    return context.setState({
      [blockAddress]: encode({ candidateNumber, ellectionName })
    });
  }
}

module.exports = {
  VoteNHandler
}
