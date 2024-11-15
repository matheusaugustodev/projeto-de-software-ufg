import ServicesGrid from "@/components/ServicesGrid";
import NavBar from "@/components/navBar";

export default function Servicos() {
    return (
        <>
            <NavBar/>
            <section className="bg-customBlue h-screen p-12 flex flex-col items-center">
                <h1 className="text-white text-4xl font-bold">Nossos Serviços</h1>
                <ServicesGrid/>
            </section>
        </>
    )
}