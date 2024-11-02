import { Box, Link, Theme, Flex } from "@chakra-ui/react"
import Image from 'next/image'
import { CardWithForm } from '@/components/CardWithForm'

export default function Login() {
    return (
        <div className='flex justify-center items-center h-screen w-full'>
        
            <div className='w-1/2 flex flex-col items-center'>

                <div className="text-start mb-16">
                    <h1 className="text-5xl font-bold">
                        Bem vindo de volta!
                    </h1>

                    <p className="text-xl opacity-50">Vamos combater a desinformação!</p>
                </div>

                <CardWithForm />

                <div className="flex gap-2 mt-6 mb-14">
                    <span> Não tem conta? </span>
                    <Link href="/" color='blue.solid' className="underline" variant="underline">
                        Crie agora
                    </Link>
                </div>

                <p className="opacity-50">Outras opções</p>
            
                <Theme appearance="light">

                    <Flex justify={'space-between'} gap='4'>
                        <Box borderWidth="1px" p='4' borderRadius='md'>Facebook</Box>
                        <Box borderWidth="1px" p='4'  borderRadius='md'>Google</Box>
                        <Box borderWidth="1px" p='4'  borderRadius='md'>Apple</Box>
                    </Flex>

                </Theme>
            </div>

            <div className='w-1/2 bg-customBlue h-full flex flex-col items-center justify-center text-center'>
                <Image src="/images/mainImage.png" alt="mainImage" width={500} height={500}/>
            </div>

            
        </div>

    )
}