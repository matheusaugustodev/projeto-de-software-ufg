import { Button, Card, Input, Stack, Theme } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"

export const CardWithForm = () => (
  <Card.Root maxW="sm" colorPalette='gray'>
    <Card.Body>
      <Stack gap="4" w="full">
        <Field label="Email">
          <Input placeholder="example@gmail.com"  variant="outline"/>
        </Field>
        <Field label="Senha">
          <Input placeholder="senha" variant="outline"/>
        </Field>
      </Stack>
    </Card.Body>
    <Card.Footer justifyContent="flex-end">
      <Button variant="solid" colorPalette='blackAlpha' w='full'>Entrar</Button>
    </Card.Footer>
  </Card.Root>
)
