"use client";
import { Button, Card, Input, Stack, Theme, Link, For } from "@chakra-ui/react"
import { Checkbox } from "@/components/ui/checkbox"
import { Field } from "@/components/ui/field"

export function CardWithForm() {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const senha = formData.get('senha');
    const confirmaSenha = formData.get('confirmaSenha');

    // Checar se não estão vazios
    if(!email || !senha || !confirmaSenha) {
      alert('Preencha todos os campos');
      return;
    }

  }

  return (

    <Theme appearance="light">
      <form action="" onSubmit={handleFormSubmit}>
        <Card.Root borderWidth={'1px'} sm={{w:'sm'}} flexWrap={'wrap'} >
          <Card.Body>
            <Stack gap="4" w="full">  
                <Field label="Email">
                  <Input id="email" name="email" p='4' placeholder="example@email.com" borderWidth={'1px'}/>
                </Field>
                <Field label="Senha">
                  <Input id="senha" name="senha" p='4' placeholder="Insira a senha" borderWidth={'1px'}/>
                </Field>
                <Field label="Confirme a Senha">  
                  <Input id="confirmaSenha" name="confirmaSenha" p='4' placeholder="Confirme a senha" borderWidth={'1px'}/>
                </Field>
            </Stack>
          </Card.Body>
          <Card.Footer flexDir={'column'} className="items-center">
            <Stack maxW="320px">
              <Checkbox colorPalette={'blue'} required>Concordo com os {" "}
                <Link className="" href="#" color="blue.solid"> Termos de Uso</Link>
              </Checkbox>
            </Stack>
            <Button type="submit" bg='blue.solid' color='white' className="w-full">
              Cadastrar
            </Button>
          </Card.Footer>
        </Card.Root>
      </form>
    </Theme>
  )
}
