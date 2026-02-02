
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="pt-8 pb-6 px-4 text-center bg-[#0f172a] flex flex-col items-center overflow-hidden">
      {/* Nome da Instituição - Ajuste de tamanho para melhor encaixe no celular */}
      <div className="w-full max-w-full mb-4 flex flex-col items-center">
        <h1 className="text-white font-black uppercase text-center leading-[0.85]">
          <span className="block drop-shadow-[0_4px_15px_rgba(0,0,0,0.7)] tracking-[-0.05em] whitespace-nowrap" style={{ fontSize: 'clamp(2.8rem, 11vw, 4.5rem)' }}>
            Polícia Militar
          </span>
          <span className="block opacity-100 mt-2 tracking-[0.15em] font-black text-slate-300 whitespace-nowrap" style={{ fontSize: 'clamp(1.3rem, 5.5vw, 2rem)' }}>
            Estado de São Paulo
          </span>
        </h1>
        <div className="w-[90%] h-[3px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent mt-8 shadow-[0_0_15px_rgba(234,179,8,0.4)] opacity-70"></div>
      </div>

      {/* Título Principal */}
      <div className="mt-2 w-full">
        <h2 className="text-yellow-500 font-[900] uppercase tracking-[0.05em] mb-1 drop-shadow-lg opacity-90 [word-spacing:0.6rem]" style={{ fontSize: 'clamp(1.25rem, 5.5vw, 1.8rem)' }}>
          Consulta de Infrações
        </h2>

        {/* Subtítulo */}
        <h3 className="text-slate-500 text-[10px] sm:text-base font-black uppercase tracking-[0.3em] opacity-80">
          Motocicletas e Similares
        </h3>
      </div>
    </header>
  );
};

export default Header;
