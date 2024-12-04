import NavBar from "@/components/navBar"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-customBlue h-screen">

      <NavBar />
      <main className="text-white">
        <div className='flex justify-center items-center w-full mt-10'>
            
          <div className='lg:w-1/2 w-full flex flex-col justify-center items-center'>

            <div className="flex justify-center text-center">
              <div className="flex flex-col justify-center items-center md:items-start md:text-start w-full gap-5">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-bold">
                        Descubra a verdade!
                    </h1>
                    <h1 className="text-4xl font-bold">
                        Combata a desinformação!
                    </h1>
                  </div>

                    
                  <Button colorPalette="cyan" className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 w-fit">Participar</Button>

              </div>
            </div>
              
          </div>

          <div className='w-1/2 bg-customBlue h-full flex flex-col items-center justify-center text-center max-md:hidden'>
              <Image src="/images/mainImage.png" className="scale-x-[-1]" alt="mainImage" width={600} height={600}/>
          </div>
        
        </div>


        <section className="bg-customBlue p-5 flex flex-col items-center py-20 text-center">
            <h1 className="text-white text-4xl font-bold mb-5">Qual nossa missão?</h1>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 m-4">

              <div className="text-center">
                <h1 className="text-2xl font-bold">Transparência</h1>
                <div className="bg-serviceBox h-60 w-60"></div>
              </div>

              <div className="text-center">
                <h1 className="text-2xl font-bold">Descentralização</h1>
                <div className="bg-serviceBox h-60 w-60"></div>
              </div>

              <div className="text-center">
                <h1 className="text-2xl font-bold">Comunidade</h1>
                <div className="bg-serviceBox h-60 w-60"></div>
              </div>

            </div>
            
        </section>

        <section className="bg-customBlue p-5 flex flex-col items-center pb-28 text-center">
            <h1 className="text-white text-4xl font-bold mb-5">Como funciona nosso processo de votação de propostas?</h1>
            
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16 m-4">

              <div className="bg-serviceBox h-60 w-60"></div>
              <div className="bg-serviceBox h-60 w-60"></div>
              <div className="bg-serviceBox h-60 w-60"></div>
              <div className="bg-serviceBox h-60 w-60"></div>

            </div>
            
        </section>

        <section className="bg-customBlue p-5 flex flex-col items-center pb-28 text-center">
            <h1 className="text-white text-4xl font-bold mb-5">Nosso sitema de recompensas</h1>
            
            <div className="bg-serviceBox min-h-72 h-140 flex justify-end w-full p-10">
              <Image src="/images/token.png" className="scale-x-[-1] max-md:hidden" alt="tokenImage" width={200} height={200}/>
            </div>
            
        </section>

        <section className="bg-customBlue p-5 flex flex-col items-center pb-28 text-center">
            <h1 className="text-white text-4xl font-bold mb-5">Combata a desinformação com a TruthDAO</h1>
            <Link href="/solicitarproposta" className="mt-4">
              <Button colorPalette="cyan" className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 px-10" title="Começar">Começar</Button>
            </Link>
        </section>

      </main>
    </div>


  );
}