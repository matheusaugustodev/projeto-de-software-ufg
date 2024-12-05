import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Textarea } from "@chakra-ui/react"

export default function SolicitarProposta() {
    return (

        <div className="bg-customBlue pb-20 min-h-screen">


            <main className="text-white m-10">

                <div className='flex justify-center items-center w-full -10 gap-10 px-5'>

                    <div className='lg:w-3/5 w-full flex flex-col justify-center items-center'>

                        <div className="flex justify-center items-center">

                            <div className="flex flex-col justify-center items-center md:items-start md:text-start w-full gap-5">

                                <h1 className="text-2xl font-bold">Solicitar proposta</h1>
                                <div className="flex flex-col items-end gap-5">

                                    <div className="flex flex-col gap-3">
                                        <div>
                                            <div className="font-bold text-sm">Qual sua proposta?</div>
                                            <Textarea placeholder="Digite qual a sua proposta" className="p-2 bg-blue-700 text-xs" rows={1} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm">Por quê você acha que essa proposta é importante?</div>
                                            <Textarea placeholder="Digite a importância da sua proposta" className="p-2 bg-blue-700 text-xs" rows={1} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm">Essa proposta é qual tipo? (Adição, Remoção, Atualização)</div>
                                            <Textarea placeholder="Digite a área da DAO que essa proposta afeta" className="p-2 bg-blue-700 text-xs" rows={1} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm">Detalhe mais a proposta?</div>
                                            <Textarea placeholder="Digite mais detalhes que possam ajudar a entender a proposta" className="p-2 bg-blue-700 text-xs" rows={2} />
                                        </div>

                                    </div>

                                    <Button colorPalette="cyan" className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-slate-400 w-fit text-sm" title="Enviar proposta">Enviar proposta</Button>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='w-2/5 bg-customBlue h-full flex flex-col items-center justify-center text-center max-lg:hidden'>
                        <Image src="/images/mulherLupa.png" alt="mainImage" width={600} height={600} />
                    </div>

                </div>

            </main>
        </div>


    );
}