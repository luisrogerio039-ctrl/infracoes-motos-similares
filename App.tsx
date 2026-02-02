
import React, { useState, useMemo, useCallback } from 'react';
import Header from './components/Header';
import InfracaoCard from './components/InfracaoCard';
import InfracaoDetail from './components/InfracaoDetail';
import { DADOS_INFRACAO } from './constants';
import { Gravidade, Infracao } from './types';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGravidade, setFilterGravidade] = useState<string>('');
  const [selectedInfracao, setSelectedInfracao] = useState<Infracao | null>(null);

  const limparBusca = useCallback(() => {
    setSearchTerm('');
    setFilterGravidade('');
  }, []);

  const handleSelectInfracao = (inf: Infracao) => {
    setSelectedInfracao(inf);
    window.scrollTo(0, 0);
  };

  const handleCloseDetail = () => {
    setSelectedInfracao(null);
    limparBusca();
  };

  const filteredInfracoes = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();
    if (search === '' && filterGravidade === '') return [];

    return DADOS_INFRACAO.filter((inf) => {
      const textToSearch = `${inf.codigo} ${inf.descricao} ${inf.artigo} ${inf.tipificacao}`.toLowerCase();
      const matchesText = textToSearch.includes(search);
      const matchesGravidade = filterGravidade === '' || inf.gravidade === filterGravidade;
      return matchesText && matchesGravidade;
    });
  }, [searchTerm, filterGravidade]);

  return (
    <div className="min-h-screen w-full bg-[#0f172a] text-white flex flex-col font-['Roboto',sans-serif]">
      
      {!selectedInfracao && <Header />}

      <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 pb-12 flex flex-col">
        
        {!selectedInfracao && (
          <div className="space-y-4 mb-6 transition-all duration-300">
            {/* Input de Busca */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ff0000] drop-shadow-[0_0_15px_rgba(255,0,0,1)]">
                <i className="fas fa-search text-xl"></i>
              </div>
              <input
                type="text"
                placeholder="Descrição ou código..."
                className="w-full pl-12 pr-12 py-4 bg-[#1e293b]/50 border border-slate-700 rounded-2xl text-white outline-none focus:border-yellow-500 focus:bg-[#1e293b]/80 transition-all text-lg placeholder:text-slate-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white p-2"
                >
                  <i className="fas fa-times-circle"></i>
                </button>
              )}
            </div>
            
            {/* Filtros Secundários */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <select
                  className="w-full px-10 py-4 bg-[#1e293b]/50 border border-slate-700 rounded-2xl text-white outline-none focus:border-yellow-500 transition-all text-base cursor-pointer appearance-none shadow-sm"
                  value={filterGravidade}
                  onChange={(e) => setFilterGravidade(e.target.value)}
                >
                  <option value="" className="bg-[#0f172a] text-white">Todas Gravidades</option>
                  <option value={Gravidade.GRAVISSIMO} className="bg-[#0f172a] text-white font-bold">🔴 Gravíssima (7 pts)</option>
                  <option value={Gravidade.GRAVE} className="bg-[#0f172a] text-white font-bold">🟠 Grave (5 pts)</option>
                  <option value={Gravidade.MEDIA} className="bg-[#0f172a] text-white font-bold">🟡 Média (4 pts)</option>
                  <option value={Gravidade.LEVE} className="bg-[#0f172a] text-white font-bold">🔵 Leve (3 pts)</option>
                </select>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-yellow-500/60">
                  <i className="fas fa-filter text-xs"></i>
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  <i className="fas fa-chevron-down text-xs"></i>
                </div>
              </div>

              {(searchTerm || filterGravidade) && (
                <button 
                  onClick={limparBusca}
                  className="px-5 bg-red-950/20 border border-red-900/40 text-red-500 rounded-2xl font-black text-[10px] uppercase hover:bg-red-900 hover:text-white transition-all flex items-center gap-2"
                >
                  <i className="fas fa-trash-can"></i>
                  LIMPAR
                </button>
              )}
            </div>
            
            <div className="w-full h-[3px] bg-yellow-500/80 mt-2 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.3)]"></div>
          </div>
        )}

        {/* Listagem ou Detalhe */}
        <section className="flex-1 mt-2">
          {selectedInfracao ? (
            <InfracaoDetail 
              infracao={selectedInfracao} 
              onBack={handleCloseDetail} 
            />
          ) : (
            searchTerm.trim() !== '' || filterGravidade !== '' ? (
              <div className="space-y-1">
                {filteredInfracoes.length > 0 ? (
                  filteredInfracoes.map((inf, idx) => (
                    <InfracaoCard 
                      key={`${inf.codigo}-${idx}`} 
                      infracao={inf} 
                      onClick={() => handleSelectInfracao(inf)}
                    />
                  ))
                ) : (
                  <div className="text-center py-16 bg-[#1e293b]/10 rounded-3xl border-2 border-dashed border-slate-800/50">
                     <i className="fas fa-search-minus text-[#ff0000] text-6xl mb-4 opacity-50 drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]"></i>
                     <p className="text-slate-500 font-black uppercase tracking-widest text-xs">Nenhum registro encontrado</p>
                  </div>
                )}
              </div>
            ) : (
              /* Tela de Boas-vindas - Lupa e Círculo com Brilho e Tamanho Reduzidos Conforme Solicitado */
              <div className="flex flex-col items-center justify-center py-10 px-6 border border-dashed border-slate-800/40 rounded-[2.5rem] bg-slate-900/5 mt-4">
                <div className="mb-5 p-5 bg-red-500/5 rounded-full border border-red-500/40 shadow-[0_0_15px_rgba(255,0,0,0.2)] relative overflow-hidden group">
                   <i className="fas fa-search text-3xl text-[#ff0000] opacity-90 drop-shadow-[0_0_8px_rgba(255,0,0,0.5)] transition-all duration-700 group-hover:scale-110"></i>
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <h3 className="text-slate-300 text-xl font-black uppercase tracking-[0.2em] text-center mb-3">Pronto para Consulta</h3>
                <p className="text-slate-500 text-sm text-center mb-10 leading-relaxed max-w-[260px] font-medium">
                  Insira o artigo, código enquadramento, palavras-chave ou escolha a gravidade para pesquisa.
                </p>

                <div className="w-full max-w-[240px] space-y-3">
                   <div className="flex items-center gap-4 text-slate-500 text-[11px] font-black uppercase tracking-tight bg-slate-800/10 p-3 rounded-xl border border-slate-800/30">
                      <div className="w-6 h-6 rounded bg-yellow-500/10 flex items-center justify-center">
                        <i className="fas fa-database text-yellow-500/60 text-[10px]"></i>
                      </div>
                      <span>{DADOS_INFRACAO.length} Registros Locais</span>
                   </div>
                   <div className="flex items-center gap-4 text-slate-500 text-[11px] font-black uppercase tracking-tight bg-slate-800/10 p-3 rounded-xl border border-slate-800/30">
                      <div className="w-6 h-6 rounded bg-yellow-500/10 flex items-center justify-center">
                        <i className="fas fa-bolt text-yellow-500/60 text-[10px]"></i>
                      </div>
                      <span>Pesquisa Instantânea</span>
                   </div>
                   <div className="flex items-center gap-4 text-slate-500 text-[11px] font-black uppercase tracking-tight bg-slate-800/10 p-3 rounded-xl border border-slate-800/30">
                      <div className="w-6 h-6 rounded bg-yellow-500/10 flex items-center justify-center">
                        <i className="fas fa-globe text-yellow-500/60 text-[10px]"></i>
                      </div>
                      <span>Consulta On-line</span>
                   </div>
                </div>
              </div>
            )
          )}
        </section>
      </main>
    </div>
  );
};

export default App;
