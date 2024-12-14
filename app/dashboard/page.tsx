import { Card } from "@chakra-ui/react"
import Image from 'next/image'
import Historico from "../(Votacao)/votacao/historico/page"

export default function Dashboard() {
    return (
        <div className="bg-customBlue pb-20 min-h-screen">

            <main className="text-white p-10">

                <div className='flex flex-col justify-center text-start'>

                    <h1 className="text-white text-4xl font-bold mb-8">Dashboard</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5 items-end">

                        <Card.Root className="bg-blue-700 mt-5 h-fit">
                            <Card.Body>

                                <div className="flex items-center justify-center gap-5 text-center lg:text-start lg:justify-around">

                                    <div>
                                        <div className="font-bold">
                                            Meus tokens
                                        </div>
                                        <div className="text-3xl text-white">
                                            1508,65
                                        </div>
                                    </div>

                                    <div>
                                        <Image src="/images/token.png" className="max-lg:hidden" alt="tokenImage" width={50} height={50}/>
                                    </div>
                                    
                                </div>

                            </Card.Body>
                        </Card.Root>
                        <Card.Root className="bg-blue-700 mt-5 h-fit">
                            <Card.Body>

                                <div className="flex items-center justify-center gap-5 text-center lg:text-start lg:justify-around">

                                    <div className="flex items-center justify-center lg:justify-around gap-1">
                                        <div className="text-center lg:text-start">
                                            <div className="font-bold">
                                                Valor do token
                                            </div>
                                            <div className="text-3xl text-white">
                                                R$ 2,67
                                            </div>
                                        </div>
                                        <div className="text-lime-500">
                                            +5%
                                        </div>
                                    </div>

                                    <div>
                                    <Image src="/images/graficoSeta.png" className="max-lg:hidden" alt="tokenImage" width={50} height={50}/>
                                    </div>

                                </div>

                            </Card.Body>
                        </Card.Root>
                        <Card.Root className="bg-blue-700 mt-5">
                            <Card.Body>

                            <div className="flex items-center justify-center lg:justify-around gap-1 text-center lg:text-start">

                                    <div className="flex flex-col items-center gap-3">
                                        <div>
                                            <div className="font-bold">
                                                Propostas aceitas
                                            </div>
                                            <div className="text-3xl text-white">
                                                100 propostas
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                Bônus
                                            </div>
                                            <div className="text-3xl text-white">
                                                375,00 tokens
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                    <Image src="/images/moedaPorcentagem.png" className="max-lg:hidden" alt="tokenImage" width={100} height={100}/>
                                    </div>

                                </div>
                            </Card.Body>
                        </Card.Root>
                        

                    </div>

                   <Historico />

                </div>

            </main>
        </div>


    );
}