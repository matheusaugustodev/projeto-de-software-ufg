import ServicesGrid from "@/components/ServicesGrid";
  
export default function Servicos() {
    return (
        <>
              
            <section className="bg-customBlue h-screen p-5 flex flex-col items-center">
                <h1 className="text-white text-4xl font-bold">Nossos Serviços</h1>
                <ServicesGrid/>
            </section>
        </>
    )
}