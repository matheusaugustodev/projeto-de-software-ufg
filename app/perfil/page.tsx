"use client"
import NavBar from "@/components/navBar"
import { Card } from "@chakra-ui/react"
import React, { useState } from "react"
import { IoPersonSharp } from "react-icons/io5"
import Image from 'next/image'
import dynamic from "next/dynamic";
const Donut = dynamic(() => import("@/components/votacaoGrafico"), { ssr: false });

export default function PerfilPage() {

    const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);

    const renderedImage = imageSrc ? <Image src={imageSrc as string} className='rounded-full w-full h-full' alt="Uploaded" /> : <IoPersonSharp className="border p-2 border-black rounded-full h-24 w-24 text-gray-500"/>;

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (typeof window === 'undefined') return; // Garante que está no ambiente do cliente
    
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                setImageSrc(reader.result); // Atualiza o estado com o resultado da leitura do arquivo
            };
            reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados (data URL)
        }
    };

    return (
        
        <div>
            <NavBar />

            <section className="bg-customBlue h-full md:h-screen justify-evenly items-center text-white flex flex-col">

                <div className="flex justify-center w-3/4 max-md:items-center">
                    <div className="flex flex-col w-2/3 md:items-start max-md:py-8">
                        <h1 className="text-3xl font-bold">Perfil</h1>
                        <p className="w-2/3 mt-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fuga cumque, magni laboriosam corrupti earum eius commodi beatae alias, deleniti aliquam neque, exercitationem dolorem id quos consectetur perspiciatis tempora aperiam.</p>
                    </div>
                    <Card.Root className="h-60 bg-perfilCard rounded xl:w-1/4 w-2/4">
                        <Card.Body className="flex justify-center items-center">
                            <span className="lg:text-4xl text-lg p-0 md:p-2 font-bold">Usuário</span>
                            <div className="w-28 h-28 bg-slate-200 rounded-full flex items-center justify-center">
                                <div className="rounded-full w-full h-full flex items-center justify-center">
                                    {
                                        renderedImage
                                    }
                                </div>
                            </div>
                            <div className="pt-2">
                                <label htmlFor="fileUpload" className="custom-file-upload">
                                    Selecionar imagem
                                </label>
                                <input id="fileUpload" type="file" onChange={handleFileChange} />
                            </div> 
                        </Card.Body>
                    </Card.Root>
                    
                </div>


                <div className="lg:h-60 flex md:justify-center max-md:items-center flex-col mb-8 md:flex-row gap-16 rounded-2xl bg-perfilCard w-3/4 py-3">
                    <div className="md:w-2/3 w-3/4 md:ps-12 max-md:mt-3">
                        <h1 className="text-3xl font-bold">Propostas votadas</h1>
                        <p className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi eius ab. Tempore amet, hic laudantium ullam alias mollitia ex at est eius, autem magni animi adipisci, eos qui. Iusto!</p>
                    </div>
                    <div className="md:w-2/3 w-3/4 max-md:mb-8 flex justify-center">

                        <Card.Root className="w-3/4 h-full bg-white rounded-2x">
                            <Card.Title className="flex justify-center items-center p-0 m-0">
                                <span className="text-sm text-black p-2 font-bold">Você participou de 210 votações</span>
                            </Card.Title>
                            <Card.Body className="flex justify-center items-center relative p-0">
                                <Donut />
                                <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center absolute top-12">
                                    <IoPersonSharp className="w-3 h-3 text-blue-700 "/>
                                </div>
                                <p className="text-black font-bold text-md p-4 absolute bottom-26 top-14"> 210 </p>
                            </Card.Body>
                            {/* <Card.Footer className="flex text-black font-semibold justify-center items-center">
                               
                            </Card.Footer> */}
                        </Card.Root>

                    </div>
                </div>

            </section>
        </ div>
    )
}