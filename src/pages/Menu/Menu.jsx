import Header from "../../components/Header/Header"
import Card from "../../components/Card/Card"

export default function Menu() {
    return (
        <>
            <Header/>

            <section className="max-w-4xl mx-auto text-center">
                <h1 className="mt-12 font-bold text-4xl">Cardápio:</h1>
                <p className="text-stone-600">Terça-feira, 29 de setembro</p>

                <h2 className="mt-16 mb-10 font-bold text-2xl">Café da Manhã (9:30 - 9:45)</h2>
                
                <Card
                name={"Pão"} image={"pao"} desc={"Pão francês amanteigado."}/>
                <Card
                name={"Leite com cacau"} image={"leite"} desc={"Leite quente adocicado com pó de cacau."}/>
            </section>
        </>
    )
}