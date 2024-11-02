import { Button, Card, Input, Stack, Theme, Link } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"

export const CardWithForm = () => (
  <Theme appearance="light">

    <Card.Root borderWidth={'1px'} w='lg' smToLg={{w: 'sm'}} flexWrap={'wrap'} >
      <Card.Body>
        <Stack gap="4" w="full">  
          <Field label="Email">
            <Input p='4' placeholder="example@email.com" borderWidth={'1px'}/>
          </Field>
          <Field label="Senha">
            <Input p='4' placeholder="senha" borderWidth={'1px'}/>
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
  </Theme>
)
