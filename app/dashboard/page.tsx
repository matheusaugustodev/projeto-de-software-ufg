import { Card } from "@chakra-ui/react"
import Image from 'next/image'

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

                    <section className="bg-customBlue h-full py-12 flex flex-col w-full text-white">
                        <div className="bg-gradient-to-r from-indigo-600 p-6 rounded-3xl mb-6">
                            <h2 className="text-white text-2xl font-normal mb-2">Histórico de votações</h2>
                            <span className="text-white">Você participou de 6 votações esse mês</span>
                            <table className="w-full text-center text-white border-separate border-spacing-0">
                                <thead>
                                    <tr>
                                        <th className="p-4 border-b border-gray-400 text-gray-400">Proposta</th>
                                        <th className="p-4 border-b border-gray-400 text-gray-400">Seu Voto</th>
                                        <th className="p-4 border-b border-gray-400 text-gray-400">% Votos</th>
                                        <th className="p-4 border-b border-gray-400 text-gray-400">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { proposta: "Proposta 1", voto: "FAVORÁVEL", votos: "56,25% A favor / 43,75% Contra", status: "EM ANDAMENTO" },
                                        { proposta: "Proposta 2", voto: "CONTRÁRIO", votos: "51,25% A favor / 48,75% Contra", status: "CONCLUÍDO" },
                                        { proposta: "Proposta 3", voto: "CONTRÁRIO", votos: "18,75% A favor / 81,25% Contra", status: "CONCLUÍDO" },
                                        { proposta: "Proposta 4", voto: "FAVORÁVEL", votos: "96,25% A favor / 3,75% Contra", status: "EM ANDAMENTO" },
                                        { proposta: "Proposta 5", voto: "FAVORÁVEL", votos: "43,75% A favor / 56,25% Contra", status: "CONCLUÍDO" },
                                        { proposta: "Proposta 6", voto: "CONTRÁRIO", votos: "68,75% A favor / 31,25% Contra", status: "CONCLUÍDO" },
                                    ].map((item, index) => (
                                        <tr
                                            key={index}
                                            className="border-b border-gray-600"
                                        >
                                            <td className="p-4">{item.proposta}</td>
                                            <td className="p-4">{item.voto}</td>
                                            <td className="p-4">{item.votos}</td>
                                            <td className="p-4">{item.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                </div>

            </main>
        </div>


    );
}