
import React, { useEffect } from 'react';
import { Infracao, Gravidade } from '../types';

interface Props {
  infracao: Infracao;
  onBack: () => void;
}

const InfracaoDetail: React.FC<Props> = ({ infracao, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getSeverityData = (g: Gravidade) => {
    switch (g) {
      case Gravidade.GRAVISSIMO: return { color: 'text-red-500', bg: 'bg-red-500', points: '7' };
      case Gravidade.GRAVE: return { color: 'text-orange-500', bg: 'bg-orange-500', points: '5' };
      case Gravidade.MEDIA: return { color: 'text-yellow-500', bg: 'bg-yellow-500', points: '4' };
      case Gravidade.LEVE: return { color: 'text-blue-500', bg: 'bg-blue-500', points: '3' };
      default: return { color: 'text-slate-500', bg: 'bg-slate-500', points: '0' };
    }
  };

  const severity = getSeverityData(infracao.gravidade);
  const observacoes = infracao.observacoes.split('///').map(s => s.trim()).filter(s => s !== '');

  return (
    <div className="flex flex-col pb-12">
      {/* Navbar Detalhes */}
      <div className="flex items-center justify-between mb-8 sticky top-0 bg-[#0f172a]/90 backdrop-blur-lg py-4 border-b border-slate-800 z-10">
        <div className="flex flex-col">
          <span className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.2em]">Detalhes da infração</span>
          <h2 className="text-white text-lg font-bold leading-none">Fiscalização</h2>
        </div>
        <button 
           onClick={onBack}
           className="w-10 h-10 bg-slate-800 text-white rounded-xl flex items-center justify-center text-lg active:scale-90 transition-transform border border-slate-700 shadow-xl"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="space-y-8 px-1">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white uppercase leading-tight mb-6">
            {infracao.descricao}
          </h1>
          
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
               <div className="flex-1 bg-white text-black p-4 rounded-xl flex flex-col justify-center shadow-lg border-b-4 border-slate-300">
                 <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Amparo Legal</span>
                 <span className="text-lg font-black leading-none">{infracao.artigo}</span>
               </div>
               
               <div className="flex-1 bg-yellow-500 text-black p-4 rounded-xl flex flex-col justify-center shadow-lg border-b-4 border-yellow-700">
                 <span className="text-[10px] font-black text-yellow-900 uppercase tracking-widest mb-1">Código</span>
                 <span className="text-lg font-black leading-none">CÓD: {infracao.codigo}</span>
               </div>
            </div>
          </div>
        </div>

        {/* Blocos Centrais */}
        <div className="grid gap-4">
          <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800/80">
            <span className="text-yellow-500 text-[10px] font-black uppercase mb-2 block tracking-widest opacity-80">Tipificação do Auto</span>
            <p className="text-xl font-bold text-white leading-snug uppercase italic">{infracao.tipificacao}</p>
          </div>
          
          <div className="bg-red-950/20 p-5 rounded-2xl border border-red-900/30">
            <span className="text-red-500 text-[10px] font-black uppercase mb-2 block tracking-widest">Medida Administrativa</span>
            <p className="text-2xl font-black text-red-50 uppercase italic leading-none">{infracao.medida}</p>
          </div>
        </div>

        {/* Procedimentos */}
        <div className="space-y-4">
          <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-widest flex items-center gap-2 mb-2">
            <i className="fas fa-hand-point-right text-yellow-500"></i>
            Observações
          </h3>
          <div className="space-y-4">
            {observacoes.map((par, i) => (
              <div key={i} className="bg-slate-800/30 p-5 rounded-xl border-l-4 border-yellow-500 shadow-sm">
                <p className="text-white text-lg font-bold leading-relaxed">{par}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gravidade ao Final */}
        <div className={`p-5 rounded-2xl border-2 border-slate-800 flex items-center justify-between ${severity.bg}/10 mb-6 shadow-inner`}>
           <div className="flex flex-col">
              <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Classificação</span>
              <span className={`text-xl font-black uppercase ${severity.color}`}>{infracao.gravidade}</span>
           </div>
           <div className={`w-14 h-14 rounded-full flex flex-col items-center justify-center border-2 border-black/30 text-white ${severity.bg} shadow-md`}>
              <span className="text-xl font-black leading-none">{severity.points}</span>
              <span className="text-[7px] font-black">PTS</span>
           </div>
        </div>

        {/* Botão de Retorno */}
        <div className="pt-2">
          <button 
            onClick={onBack}
            className="w-full bg-slate-800 text-white font-black uppercase text-base py-5 rounded-2xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-3 border border-slate-700"
          >
            <i className="fas fa-arrow-left"></i>
            NOVA CONSULTA
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfracaoDetail;
