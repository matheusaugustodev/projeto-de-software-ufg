import NavBar from "@/components/navBar"
import { Card } from "@chakra-ui/react"
import Image from 'next/image'

export default function Dashboard() {
    return (
        <div className="bg-customBlue h-screen">


            <NavBar />
            <main className="text-white m-10">


                <div className='flex flex-col justify-center text-start'>

                    <h1 className="text-2xl font-bold text-start">Dashboard</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5 items-end">

                        <Card.Root className="bg-blue-700 mt-5 h-fit">
                            <Card.Body>
                                <Card.Description className="flex items-center gap-5">

                                    <div>
                                        <div className="font-bold">
                                            Meus tokens
                                        </div>
                                        <div className="text-3xl text-white">
                                            1508,65
                                        </div>
                                    </div>

                                    <div>
                                    <Image src="/images/token.png" className="max-md:hidden" alt="tokenImage" width={50} height={50}/>
                                    </div>


                                </Card.Description>
                            </Card.Body>
                        </Card.Root>
                        <Card.Root className="bg-blue-700 mt-5 h-fit">
                            <Card.Body>
                                <Card.Description className="flex items-center gap-5">

                                    <div className="flex items-center gap-1">
                                        <div>
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
                                    <Image src="/images/graficoSeta.png" className="max-md:hidden" alt="tokenImage" width={50} height={50}/>
                                    </div>


                                </Card.Description>
                            </Card.Body>
                        </Card.Root>
                        <Card.Root className="bg-blue-700 mt-5">
                            <Card.Body>
                                <Card.Description className="flex items-center gap-5">

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
                                    <Image src="/images/moedaPorcentagem.png" className="max-md:hidden" alt="tokenImage" width={100} height={100}/>
                                    </div>


                                </Card.Description>
                            </Card.Body>
                        </Card.Root>

                    </div>

                </div>

            </main>
        </div>


    );
}