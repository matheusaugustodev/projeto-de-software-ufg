import { Link } from "@chakra-ui/react"
import Image from 'next/image'
import { CardWithForm } from '@/components/cardWithFormSignup'
import LoginOptions from '@/components/loginOptions'

export default function Login() {

    return (
        
        <div className='flex justify-center items-center h-screen w-full'>
        
            <div className='lg:w-1/2 w-full flex flex-col justify-center items-center'>

                <div className="flex flex-col justify-center items-center mb-12 w-full">
                    <h1 className="text-3xl font-bold w-4/6 xl:ms-32">
                        Bem vindo a TruthDAO!
                    </h1>

                    <p className="text-lg opacity-50 w-2/3 xl:ms-32 mt-8">Faça parte de uma comunidade que luta junto contra a
                        disseminassão de informações falsas.
                    </p>
                </div>

                <CardWithForm />

                <div className="flex gap-2 mt-4 mb-8">
                    <span> Já possui conta? </span>
                    <Link href="/login" color='blue.solid' className="underline">
                        Entrar
                    </Link>
                </div>


                    <div className="h-px flex justify-center items-center bg-gray-300 w-3/5 mb-6">
                        <p className="py-6 bg-white text-gray-300">Outras opções</p>
                    </div>

                    <LoginOptions />
            </div>

            <div className='w-1/2 bg-customBlue h-full flex flex-col items-center justify-center text-center max-md:hidden'>
                <Image src="/images/mainImage.png" className="scale-x-[-1]" alt="mainImage" width={600} height={600}/>
            </div>

            
        </div>

    )
}