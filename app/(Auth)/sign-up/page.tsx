import { Link } from "@chakra-ui/react"
import Image from 'next/image'
import { CardWithForm } from '@/components/cardWithFormSignup'
import LoginOptions from '@/components/loginOptions'

export default function Login() {

    return (
        
        <div className='flex justify-center items-center h-full w-full'>
        
            <div className='xl:w-3/5 max-xl:w-9/11 flex flex-col justify-center items-center bg-white min-h-screen'>

                <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="text-3xl font-bold">
                        Bem vindo a TruthDAO!
                    </h1>

                    <p className="text-lg opacity-50 w-3/5 text-center py-2">Faça parte de uma comunidade que luta junto contra a
                        disseminassão de informações falsas.
                    </p>
                </div>

                <CardWithForm />

                <div className="flex gap-2 mt-3 mb-3">
                    <span> Já possui conta? </span>
                    <Link href="/login" color='blue.solid' className="underline">
                        Entrar
                    </Link>
                </div>


                <div className="h-px flex justify-center items-center bg-gray-300 w-3/5 mb-4">
                    <p className="bg-white text-gray-300">Outras opções</p>
                </div>

                <LoginOptions />
            </div>
            <div className='w-1/2 bg-customBlue h-full flex flex-col items-center justify-center text-center max-md:hidden'>
                <Image src="/images/mainImage.png" className="scale-x-[-1]" alt="mainImage"  width={600} height={600}/>
            </div>

            
        </div>

    )
}