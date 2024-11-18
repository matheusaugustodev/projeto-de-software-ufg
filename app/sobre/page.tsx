import NavBar from "@/components/navBar";

export default function Sobre() {
    return (
        <>
            <NavBar/>
            <section className="bg-customBlue h-screen p-5 flex flex-col items-center">
                <h1 className="text-white text-4xl font-bold">Sobre nós</h1>
                <p className="text-white text-lg mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, asperiores aliquam. Labore vitae nulla optio minus! Quia dolorum ipsa exercitationem fugiat consectetur quasi corrupti, nesciunt vel iste veritatis. Tempora, dignissimos!</p>
            </section>
        </>
    )
}