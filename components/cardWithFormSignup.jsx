import { Button, Card, Input, Stack, Theme, Link } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"

export const CardWithForm = () => (
  <Theme appearance="light">

    <Card.Root borderWidth={'1px'} w='lg' smToLg={{w:'sm'}} flexWrap={'wrap'} >
      <Card.Body>
        <Stack gap="4" w="full">  
          <Field label="Email">
            <Input p='4' placeholder="example@email.com" borderWidth={'1px'}/>
          </Field>
          <Field label="Senha">
            <Input p='4' placeholder="Insira a senha" borderWidth={'1px'}/>
          </Field>
          <Field label="Confirme a Senha">  
            <Input p='4' placeholder="Confirme a senha" borderWidth={'1px'}/>
          </Field>
        </Stack>
      </Card.Body>
      <Card.Footer flexDir={'column'} className="items-start">
        <Button bg='blue.solid' color='white' className="w-full">
          Cadastrar
        </Button>
      </Card.Footer>
    </Card.Root>
  </Theme>
)
