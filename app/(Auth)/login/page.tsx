import { Card, Stack, Text } from "@chakra-ui/react"
import Image from 'next/image'
import { CardWithForm } from '@/components/CardWithForm'

export default function Login() {
    return (
        <div className='flex justify-center items-center h-screen w-full'>
        
            <div className='w-1/2 flex flex-col items-center'>
                <h1>
                    Bem vindo de volta!
                </h1>

                <p>Vamos combate a desinformação!</p>

                <CardWithForm />

                <span> Não tem conta? </span>

                <p>Outras opções</p>
            
                
                <Card.Root w="md">
                    <Card.Body>
                        <Stack direction="row" justify={'center'} gap={4}>
                        <Text>Facebook</Text>
                        <Text>Google</Text>
                        <Text>Apple</Text>
                        </Stack>
                    </Card.Body>
                </Card.Root>
            </div>

            <div className='w-1/2 bg-customBlue h-full flex flex-col items-center justify-center text-center'>
                <Image src="/images/mainImage.png" alt="mainImage" width={500} height={500}/>
            </div>

            
        </div>

    )
}