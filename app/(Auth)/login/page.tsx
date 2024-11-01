import { CardWithForm } from 'components/CardWithForm'
import { Card } from "@chakra-ui/react"

export default function Login() {
    return (
        <>
            <h1>
                Bem vindo de volta!
            </h1>
            <p>Vamos combate a desinformação!</p>

            <CardWithForm />
            <span> Não tem conta? </span>
            <p>Outras opções</p>

            <div className='flex'>
                <Card.Root>
                    <Card.Body>
                        Facebook
                    </Card.Body>
                </Card.Root>

                <Card.Root>
                    <Card.Body>
                        Google
                    </Card.Body>
                </Card.Root>

                <Card.Root>
                    <Card.Body>
                        Apple
                    </Card.Body>
                </Card.Root>
            </div>
            
        </>

    )
}