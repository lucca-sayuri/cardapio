import leite from "../assets/leite_com_cacau.jpg"
import pao from "../assets/pao_manteiga.jpg"
import banana from "../assets/banana.jpg"
import abacaxi from "../assets/abacaxi.jpg"
import bolachaSal from "../assets/bolacha_sal.jpg"
import arroz from "../assets/arroz.jpg"
import feijao from "../assets/feijao.jpg"
import carne from "../assets/carne_cozida.jpg"
import frango from "../assets/frango.jpg"

export default function getImageUrl(src) {
    switch (src) {
        case "leite":
            return(leite)
        
        case "pao":
            return(pao)
        
        case "banana":
            return(banana)

        case "bolacha_sal":
            return(bolachaSal)

        case "abacaxi":
            return(abacaxi)

        case "carne":
            return(carne)

        case "arroz":
            return(arroz)

        case "feijao":
            return(feijao)

        case "frango":
            return(frango)
    }
}