function defaultParsingFlags() {
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        nullInput       : false,
        invalidFormat   : false
    };
}

export default function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}
