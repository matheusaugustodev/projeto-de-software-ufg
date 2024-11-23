"use client"
import { Card } from "@chakra-ui/react";

export default function VotosNecessarios() {
  return (
    <Card.Root className="bg-transparent shadow-md border-[1.3px] border-black">
      <Card.Body className="flex items-start">
        <span >Votos necessários</span>
        <span className="text-4xl font-bold text-white self-center">
            60%
        </span>
        <span className="self-center text-opacity-70 text-sm opacity-55">votos favoravéis</span>
      </Card.Body>
    </Card.Root>
  );
}