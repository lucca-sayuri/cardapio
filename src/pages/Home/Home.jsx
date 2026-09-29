import Header from "../../components/Header/Header"
import { NavLink } from "react-router"

export default function Home() {
    return (
        <>
            <Header/>

            <section className="mt-16 mx-auto max-w-3xl text-center">
                <h1 className="text-6xl font-extrabold mb-4">Cardápio de hoje</h1>
                <p className="text-lg mb-12">Veja o cardápio de hoje, terça-feira:</p>

                <NavLink className="px-12 py-4 bg-orange-600 text-amber-50 font-bold underline
                shadow-[0px_6px_rgb(187,77,0)] rounded-2xl hover:cursor-pointer hover:bg-orange-700 hover:shadow-[0px_6px_rgb(127,57,0)]" to="/cardapio">Cardápio</NavLink>
            </section>
        </>
    )
}