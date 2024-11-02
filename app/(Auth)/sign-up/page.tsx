import { Box, Link, Theme, Flex } from "@chakra-ui/react"
import Image from 'next/image'
import { CardWithForm } from '@/components/cardWithFormSignup'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";


export default function Login() {
    return (
        
        <div className='flex justify-center items-center h-screen w-full'>
        
            <div className='lg:w-1/2 w-full flex flex-col justify-center items-center'>

                <div className="flex flex-col justify-center items-center mb-16 w-full">
                    <h1 className="text-5xl font-bold w-4/6 xl:ms-32">
                        Bem vindo a TruthDAO!
                    </h1>

                    <p className="text-xl opacity-50 w-2/3 xl:ms-32 mt-8">Faça parte de uma comunidade que luta junto contra a
                        disseminassão de informações falsas.
                    </p>
                </div>

                <CardWithForm />

                <div className="flex gap-2 mt-6 mb-14">
                    <span> Já possui conta? </span>
                    <Link href="/login" color='blue.solid' className="underline">
                        Entrar
                    </Link>
                </div>


                    <div className="h-px flex justify-center items-center bg-gray-300 w-3/5 mb-6">
                        <p className="py-6 bg-white text-gray-300">Outras opções</p>
                    </div>

            
                <Theme appearance="light" w='3/4'>
                    <Flex justify={'space-evenly'}>
                        <Box borderWidth="1px" px='6' py='2' borderRadius='md'>
                            <FaFacebook className=" text-6xl text-blue-700" />
                        </Box>
                        <Box borderWidth="1px" px='6' py='2'  borderRadius='md'><FcGoogle className="text-6xl" /></Box>
                        <Box borderWidth="1px" px='6' py='2'  borderRadius='md'><FaApple className="text-6xl"/></Box>
                    </Flex>
                </Theme>
            </div>

            <div className='w-1/2 bg-customBlue h-full flex flex-col items-center justify-center text-center max-md:hidden'>
                <Image src="/images/mainImage.png" className="scale-x-[-1]" alt="mainImage" width={800} height={800}/>
            </div>

            
        </div>

    )
}