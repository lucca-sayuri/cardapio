import { NavLink } from "react-router"

export default function Header() {
    return (
        <>
            <header className="flex justify-around items-center py-5 gap-24 bg-amber-200">
                <div className="text-xl">
                    <NavLink to="/" className="font-caveat text-4xl font-bold">Yummers</NavLink>
                </div>

                <nav className="text-xl flex gap-12">
                    <NavLink to="/">Início</NavLink>
                    <NavLink to="/cardapio">Cardápio</NavLink>
                </nav>
            </header>
        </>
    )
}