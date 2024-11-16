"use client"
import { Button, Card, Input, Stack, Theme, Link } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"

export function CardWithForm(){

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const senha = formData.get('senha');
    const confirmaSenha = formData.get('confirmaSenha');

    if(!email || !senha || !confirmaSenha) {
      alert('Preencha todos os campos');
      return;
    }

  }

  return (
    <Theme appearance="light">
      <form action="" onSubmit={handleFormSubmit}>
        <Card.Root borderWidth={'1px'} w='md' smToLg={{w: 'sm'}} flexWrap={'wrap'} >
          <Card.Body>
            <Stack gap="4" w="full">  
              <Field label="Email">
                <Input id="email" name="email" p='4' placeholder="example@email.com" borderWidth={'1px'}/>
              </Field>
              <Field label="Senha">
                <Input id="senha" name="senha" p='4' placeholder="senha" borderWidth={'1px'}/>
              </Field>
            </Stack>
          </Card.Body>
          <Card.Footer flexDir={'column'} className="items-start">
            <Button bg='blue.solid' color='white' className="w-full">
              Entrar
            </Button>
            <Link href="/" color='blue.solid' className="items-start underline">
              Esqueceu a senha?
            </Link>
          </Card.Footer>
        </Card.Root>
      </ form>
    </Theme>
  )
}
