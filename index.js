'use strict'

const regex = /^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?(?:<svg[^>]*>[^]*<\/svg>|<svg[^/>]*\/\s*>)\s*$/i

const isBinary = buffer => {
    const isBuffer = Buffer.isBuffer(buffer)
    for(let i = 0; i < 24; i++) {
        const characterCode = isBuffer ? buffer[i] : buffer.charCodeAt(i)
        if(characterCode === 65533 || characterCode <= 8) {
            return true
        }
    }
    return false
}

const detectSVG = input => {
    if(input==undefined||input==null)
        return false
    input=input.toString().replace(/\s*<!Entity\s+\S*\s*(?:"|')[^"]+(?:"|')\s*>/img, '')
    input=input.replace(/<!--([\s\S]*?)-->/g, '')
    return Boolean(input) && !isBinary(input) && regex.test(input)
}

module.exports = detectSVG
