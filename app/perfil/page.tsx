import NavBar from "@/components/navBar"
import { Card } from "@chakra-ui/react"

export default function PerfilPage() {
    return (
        
        <>
            <NavBar />
            <section className="bg-customBlue h-screen text-white flex justify-center">

                <div className="flex flex-col mt-24 w-1/3">
                    <h1 className="text-3xl font-bold">Perfil</h1>
                    <p className="w-2/3 mt-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fuga cumque, magni laboriosam corrupti earum eius commodi beatae alias, deleniti aliquam neque, exercitationem dolorem id quos consectetur perspiciatis tempora aperiam.</p>
                </div>

                {/* <div className="w-80 h-80 bg-slate-400 mt-24">

                </div> */}
                <Card.Root className="w-80 h-80 bg-perfilCard mt-24 rounded">
                    <Card.Body className="flex justify-center items-center">
                        <div className="w-40 h-40 bg-slate-200 rounded-full flex items-center justify-center">
                            <div className="w-36 h-36 bg-slate-200 border border-black rounded-full">
                            </div>
                        </div>
                        <h2 className="p-4 text-4xl font-bold">Usuário</h2>
                    </Card.Body>
                </Card.Root>

            </section>
        </>
    )
}