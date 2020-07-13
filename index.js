'use strict'

const regex = /^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?(?:<svg[^>]*>[^]*<\/svg>|<svg[^/>]*\/\s*>)\s*$/i

const detectSVG = input => {
    if(input==undefined||input==null)
        return false
    input=input.toString().replace(/\s*<!Entity\s+\S*\s*(?:"|')[^"]+(?:"|')\s*>/img, '')
    input=input.replace(/<!--([\s\S]*?)-->/g, '')
    return Boolean(input) && regex.test(input)
}

module.exports = detectSVG
