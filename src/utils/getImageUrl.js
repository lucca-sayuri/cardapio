import leite from "../assets/leite_com_cacau.jpg"
import pao from "../assets/pao_manteiga.jpg"

export default function getImageUrl(src) {
    if (src == "leite") {
        return (leite)
    } else if (src == "pao") {
        return (pao)
    }
}