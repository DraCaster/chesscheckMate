const challengeFunction = function (kingWhite, rookBlack, bishopBlack, knightBlack) {

    if (obtenerMovimientoAlfil(bishopBlack, kingWhite) && obtenerMovimientoCaballo(knightBlack, kingWhite)
        && obtenerMovimientoTorre(rookBlack, kingWhite)) {
        return "jaque mate"
    }
    return "jaque"
}

module.exports = challengeFunction


function obtenerMovimientoAlfil(alfil, rey) {
    let posRey = rey.split("")
    return true
}

function obtenerMovimientoTorre(torre, rey) {
    let posRey = rey.split("")
    return true
}

function obtenerMovimientoCaballo(caballo, rey) {
    let posRey = rey.split("")
    return true
}