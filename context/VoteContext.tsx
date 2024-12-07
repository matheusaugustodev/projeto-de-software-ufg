import React, { createContext, useContext, useState } from "react";

// Define o tipo de contexto para votações
type VoteContextType = {
  votes: { favor: number; against: number }; // Estado global
  castVote: (type: "favor" | "against") => void; // Função para registrar voto
};

// Cria o contexto
const VoteContext = createContext<VoteContextType | undefined>(undefined);

// Provedor do contexto
export const VoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [votes, setVotes] = useState({ favor: 0, against: 0 });

  const castVote = (type: "favor" | "against") => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  return (
    <VoteContext.Provider value={{ votes, castVote }}>
      {children}
    </VoteContext.Provider>
  );
};

// Hook para usar o contexto
export const useVoteContext = () => {
  const context = useContext(VoteContext);
  if (!context) {
    throw new Error("useVoteContext deve ser usado dentro de VoteProvider");
  }
  return context;
};
