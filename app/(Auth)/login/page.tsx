import { Link } from "@chakra-ui/react"
import Image from 'next/image'
import { CardWithForm } from '@/components/cardWithFormLogin'
import LoginOptions from '@/components/loginOptions'

export default function Login() {
    return (

        <div className='flex justify-center items-center h-screen w-full'>
        
            <div className='lg:w-1/2 w-full flex flex-col justify-center items-center'>

                <div className="flex flex-col justify-center items-center text-start mb-16 w-full">
                    <h1 className="text-5xl font-bold w-3/6">
                        Bem vindo de volta!
                    </h1>

                    <p className="text-xl opacity-50 w-3/6 mt-4">Vamos combater a desinformação!</p>
                </div>

                <CardWithForm />

                <div className="flex gap-2 mt-6 mb-14">
                    <span> Não tem conta? </span>
                    <Link href="/sign-up" color='blue.solid' className="underline">
                        Crie agora
                    </Link> 
                </div>


                    <div className="h-px flex justify-center items-center bg-gray-300 w-3/5 mb-6">
                        <p className="py-6 bg-white text-gray-300">Outras opções</p>
                    </div>

                <LoginOptions />
            </div>

            <div className='w-1/2 bg-customBlue h-full flex flex-col items-center justify-center text-center max-md:hidden'>
                <Image src="/images/mainImage.png" className="scale-x-[-1]" alt="mainImage" width={800} height={800}/>
            </div>

            
        </div>

    )
}