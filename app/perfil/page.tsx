"use client"
import NavBar from "@/components/navBar"
import { Card } from "@chakra-ui/react"
import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import Donut from "@/components/votacaoGrafico"


export default function PerfilPage() {

    const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);

    const renderedImage = imageSrc ? <img src={imageSrc as string} className='rounded-full w-16 h-16' alt="Uploaded" /> : <IoPersonSharp className="w-16 h-16 text-gray-500"/>;

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function() {
                setImageSrc(reader.result); // Atualiza o estado com o resultado da leitura do arquivo
            };
            reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados (data URL)
        }
    };

    return (
        
        <div>
            <NavBar />

            <section className="bg-customBlue h-screen text-white flex flex-col">

                <div className="flex justify-center">
                    <div className="flex flex-col mt-8 w-1/3 items-start ">
                        <h1 className="text-3xl font-bold">Perfil</h1>
                        <p className="w-2/3 mt-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fuga cumque, magni laboriosam corrupti earum eius commodi beatae alias, deleniti aliquam neque, exercitationem dolorem id quos consectetur perspiciatis tempora aperiam.</p>
                    </div>
                    <Card.Root className="w-60 h-60 bg-perfilCard mt-24 rounded">
                        <Card.Body className="flex justify-center items-center">
                            <h2 className="text-4xl p-2 font-bold">Usuário</h2>
                            <div className="w-30 h-30 bg-slate-200 rounded-full flex items-center justify-center">
                                <div className="w-24 h-24 bg-slate-200 border border-black rounded-full flex items-center justify-center">
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


                <div className="flex justify-evenly gap-16 mt-8 rounded-2xl bg-perfilCard w-3/5 py-8 self-center">
                    <div className="w-2/3 ps-12">
                        <h1 className="text-3xl font-bold">Propostas votadas</h1>
                        <p className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi eius ab. Tempore amet, hic laudantium ullam alias mollitia ex at est eius, autem magni animi adipisci, eos qui. Iusto!</p>
                    </div>
                    <div className="w-1/3">
                        <Card.Root className="w-60 h-60 bg-white rounded-2x">
                            <Card.Title className="flex justify-center items-center p-0 m-0">
                                <h2 className="text-sm text-black p-2 font-bold">Você participou de 210 votações</h2>
                            </Card.Title>
                            <Card.Body className="flex justify-center items-center relative p-0">
                                <Donut />
                                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center absolute bottom-20 top-14">
                                    <IoPersonSharp className="w-5 h-5 text-blue-700 "/>
                                </div>
                                <p className="text-black font-bold text-md p-4 absolute bottom-26 top-20"> 210 </p>
                            </Card.Body>
                            <Card.Footer className="flex text-black font-semibold justify-center items-center">
                               
                            </Card.Footer>
                        </Card.Root>
                    </div>
                </div>

            </section>
        </ div>
    )
}