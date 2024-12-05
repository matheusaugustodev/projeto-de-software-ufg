"use client"
import React from 'react';
import { Card } from '@chakra-ui/react';
import dynamic from "next/dynamic";
const Donut = dynamic(() => import("@/components/Donuts/cardVotacaoGrafico"), { ssr: false });

export default function CardVotacao () {
    return (
      <div className="h-fit w-80 bg-transparent rounded-md shadow-lg border-[1.3px] border-black">
          <Card.Root className='h-fit w-full bg-transparent flex items-center'>
              <Card.Body className='text-center'>
                  <Donut />
                  <span className='text-xl font-bold'>Proposto por 0xC6e...0633</span>
              </Card.Body>
          </Card.Root>
      </div>
    );
} 