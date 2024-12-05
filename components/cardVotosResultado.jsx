"use client"
import { Card } from "@chakra-ui/react";

//Votos será importado
const [votos, setVotos] = useState(60);

const [votosNecessarios, setVotosNecessarios] = useState(60);
const [resultado, setResultado] = useState("Indefinido");	

const showResult = (votos) => {
    
    if (votos >= votosNecessarios) {
      setResultado("Aprovado");
    } else {
      setResultado("Reprovado");
    }

    Resultado();

  }

function Resultado() {

  return (
    <Card.Root className="bg-transparent shadow-md border-[1.3px] border-black">
      <Card.Body className="flex items-start">
        <span >Resultado</span>
        <span className="text-4xl font-bold text-white self-center">
            {resultado}
        </span>
        <span className="self-center text-opacity-70 text-sm opacity-55">votos favoravéis</span>
      </Card.Body>
    </Card.Root>
  );
}

export { showResult };