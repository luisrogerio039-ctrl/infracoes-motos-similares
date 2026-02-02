
import React from 'react';
import { Infracao, Gravidade } from '../types';

interface Props {
  infracao: Infracao;
  onClick: () => void;
}

const InfracaoCard: React.FC<Props> = ({ infracao, onClick }) => {
  const getSeverityColors = (g: Gravidade) => {
    switch (g) {
      case Gravidade.GRAVISSIMO: return { color: 'text-red-500', bg: 'bg-red-500', points: '7' };
      case Gravidade.GRAVE: return { color: 'text-orange-500', bg: 'bg-orange-500', points: '5' };
      case Gravidade.MEDIA: return { color: 'text-yellow-500', bg: 'bg-yellow-500', points: '4' };
      case Gravidade.LEVE: return { color: 'text-blue-500', bg: 'bg-blue-500', points: '3' };
      default: return { color: 'text-slate-500', bg: 'bg-slate-500', points: '0' };
    }
  };

  const severity = getSeverityColors(infracao.gravidade);

  return (
    <div 
      onClick={onClick}
      className="bg-[#1e293b]/30 border border-slate-800 rounded-2xl p-5 flex flex-col gap-3 transition-all active:scale-[0.98] active:bg-[#1e293b]/50 cursor-pointer hover:border-yellow-500/30 group mb-4"
    >
      <div className="flex justify-between items-start mb-1">
         {/* Gravidade com Bola Colorida e Texto Branco */}
         <div className="flex items-center gap-2 bg-slate-900/50 px-2 py-1 rounded border border-slate-800 shadow-sm">
            <i className={`fas fa-circle text-[8px] ${severity.color}`}></i>
            <span className="text-[10px] font-black uppercase text-white tracking-wider">
               {infracao.gravidade}
            </span>
         </div>
         
         <div className="flex items-center gap-1 bg-black/20 px-2 py-1 rounded-lg">
            <span className={`text-sm font-black ${severity.color}`}>{severity.points}</span>
            <span className="text-[9px] text-slate-500 font-bold">PTS</span>
         </div>
      </div>
      
      <h3 className="text-lg font-bold text-white leading-tight group-active:text-yellow-500 transition-colors">
        {infracao.descricao}
      </h3>
      
      <div className="flex justify-between items-center mt-2 pt-3 border-t border-slate-800/60">
         <div className="flex gap-3 items-center">
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-wider">{infracao.artigo}</span>
            <span className="text-yellow-500 text-[11px] font-black bg-yellow-500/10 px-2 py-1 rounded border border-yellow-500/20">CÓD: {infracao.codigo}</span>
         </div>
         <i className="fas fa-chevron-right text-slate-700 text-[10px] group-hover:translate-x-1 transition-transform"></i>
      </div>
    </div>
  );
};

export default InfracaoCard;
