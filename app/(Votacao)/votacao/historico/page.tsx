import Link from "next/link";

export default function Historico() {
    return (
      <section className="bg-customBlue h-full p-12 px-8 lg:px-16 flex flex-col">
        <div className="text-white w-full">
          <h1 className="text-white text-4xl font-bold mb-8">Histórico de votações</h1>
          <div className="bg-gradient-to-r from-indigo-600 p-6 rounded-3xl mb-6">
            <h2 className="text-white text-2xl font-normal mb-2">Resumo</h2>
            <span className="text-white">Você participou de 6 votações esse mês</span>
          <table className="w-full text-center text-white border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="p-4 border-b border-gray-400 text-gray-400">Proposta</th>
                <th className="p-4 border-b border-gray-400 text-gray-400">Seu Voto</th>
                <th className="p-4 border-b border-gray-400 text-gray-400">% Votos</th>
                <th className="p-4 border-b border-gray-400 text-gray-400">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { proposta: "Proposta 1", voto: "FAVORÁVEL", votos: "56,25% A favor / 43,75% Contra", status: "EM ANDAMENTO" },
                { proposta: "Proposta 2", voto: "CONTRÁRIO", votos: "51,25% A favor / 48,75% Contra", status: "CONCLUÍDO" },
                { proposta: "Proposta 3", voto: "CONTRÁRIO", votos: "18,75% A favor / 81,25% Contra", status: "CONCLUÍDO" },
                { proposta: "Proposta 4", voto: "FAVORÁVEL", votos: "96,25% A favor / 3,75% Contra", status: "EM ANDAMENTO" },
                { proposta: "Proposta 5", voto: "FAVORÁVEL", votos: "43,75% A favor / 56,25% Contra", status: "CONCLUÍDO" },
                { proposta: "Proposta 6", voto: "CONTRÁRIO", votos: "68,75% A favor / 31,25% Contra", status: "CONCLUÍDO" },
              ].map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-600"
                >
                  <td className="p-4">{item.proposta}</td>
                  <td className="p-4">{item.voto}</td>
                  <td className="p-4">{item.votos}</td>
                  <td className="p-4">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <div className="flex justify-center mt-4">
            <nav>
              <ul className="flex gap-2 historicoIndex">
                {[1, 2, 3, 4, 5, 6, "...", 30].map((item, index) => (
                  <li key={index} className={`text-white cursor-pointer px-4 py-2 rounded-md hover:bg-indigo-600 ${index === 0 ? "bg-indigo-600" : "bg-indigo-700"}`}>
                    {item}
                  </li>
                ))}
                <Link href="/votacao">
                  <button className="p-4 rounded-lg shadow-md bg-gray-600 text-white">Voltar</button>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    );
  }
  