import { Button, Card, Input, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import {Link} from '@chakra-ui/react'


export const CardWithForm = () => (
  <Card.Root 
    maxW="lg"
    className="bg-white text-black"
    p="6"
    borderRadius="md"
    boxShadow="md"
  >
    <Card.Body>
      <Stack gap="4" w="full">
        <Field label="Email" unstyled="true">
          <Input />
        </Field>
        <Field label="Senha">
          <Input />
        </Field>
      </Stack>
    </Card.Body>
    <Card.Footer justifyContent="flex-center">
      <Button variant="solid" w="full">
        Entrar
      </Button>
    </Card.Footer>
    <Link variant="underline" padding="10" href="#">Esqueceu a senha?</Link>
  </Card.Root>
);
