
import { Infracao, Gravidade } from './types';

export const DADOS_INFRACAO: Infracao[] = [
  {
    descricao: "Farol e indicadores de direção (setas) – com lâmpada de “LED”",
    codigo: "667-00",
    artigo: "Art. 230, XIII",
    tipificacao: "Alterar sistema de iluminação",
    medida: "Retenção do veículo",
    gravidade: Gravidade.GRAVE,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 270, §2º, do CTB), Autuação + Bloqueio de 30 dias"
  },
  {
    descricao: "Pneu ou pneus desgastados atingiram a marca límitrofe “TWI”, exceto estepe",
    codigo: "672-61",
    artigo: "Art. 230, XVIII",
    tipificacao: "Mau estado de conservação comprometendo a segurança",
    medida: "Retenção / Remoção conforme caso",
    gravidade: Gravidade.GRAVE,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, e não oferece condições de segurança para circulação (art. 270, §2º c/c §7º, do CTB), Autuação + Bloqueio de 30 dias + REMOÇÃO ao pátio"
  },
  {
    descricao: "Para-lama dianteiro amassado, quebrado ou mal fixado",
    codigo: "672-61",
    artigo: "Art. 230, XVIII",
    tipificacao: "Mau estado de conservação comprometendo a segurança",
    medida: "Retenção do veículo",
    gravidade: Gravidade.GRAVE,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 270, §2º, do CTB), Autuação + Bloqueio de 30 dias"
  },
  {
    descricao: "Para-lama dianteiro ausente",
    codigo: "661-02",
    artigo: "Art. 230, VII",
    tipificacao: "Alterar características do veículo",
    medida: "Retenção do veículo",
    gravidade: Gravidade.GRAVE,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 270, §2º, do CTB), Autuação + Bloqueio de 30 dias"
  },
  {
    descricao: "Para-lama traseiro (rabeta) ausente",
    codigo: "661-02",
    artigo: "Art. 230, VII",
    tipificacao: "Alterar características do veículo",
    medida: "Retenção do veículo",
    gravidade: Gravidade.GRAVE,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 270, §2º, do CTB), Autuação + Bloqueio de 30 dias"
  },
  {
    descricao: "Filtro de ar, mangote ou tampa ausentes ou adaptados",
    codigo: "661-02",
    artigo: "Art. 230, VII",
    tipificacao: "Alterar características do veículo",
    medida: "Retenção do veículo",
    gravidade: Gravidade.GRAVE,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 270, §2º, do CTB), Autuação + Bloqueio de 30 dias"
  },
  {
    descricao: "Placa afixada fora do habitáculo original; com chapa amassada, quebrada ou trincada por ação do tempo; etc…",
    codigo: "640-80",
    artigo: "Art. 221",
    tipificacao: "Placa de identificação em desacordo",
    medida: "Retenção do veículo",
    gravidade: Gravidade.MEDIA,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 270, §2º, do CTB), Autuação + Bloqueio de 30 dias"
  },
  {
    descricao: "Escapamento sem certificação INMETRO",
    codigo: "664-50",
    artigo: "Art. 230, X",
    tipificacao: "Equipamento obrigatório em desacordo",
    medida: "Retenção do veículo",
    gravidade: Gravidade.GRAVE,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 270, §2º, do CTB), Autuação + Bloqueio de 30 dias /// Conforme ITT 14 do CPTran "item 2.3.3.5" (sugiro a leitura)"
  },
  {
    descricao: "Escapamento sem redutor de temperatura (Motocicletas fabricadas a partir de 2009), "quando exigível pelo modelo"",
    codigo: "664-50",
    artigo: "Art. 230, X",
    tipificacao: "Equipamento obrigatório em desacordo",
    medida: "Retenção do veículo",
    gravidade: Gravidade.GRAVE,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 270, §2º, do CTB), Autuação + Bloqueio de 30 dias /// Conforme ITT 14 do CPTran "item 2.3" (sugiro a leitura)"
  },
  {
    descricao: "Escapamento com descarga livre (tubo oco, sem nenhuma espécie de abafador, silencioso ou miolo interno)",
    codigo: "665-31",
    artigo: "Art. 230, XI",
    tipificacao: "Veículo com descarga livre",
    medida: "Retenção do veículo",
    gravidade: Gravidade.GRAVE,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 270, §2º, do CTB), Autuação + Bloqueio de 30 dias /// Conforme ITT 14 do CPTran "item 2.1" (sugiro a leitura)"
  },
  {
    descricao: "Escapamento com ruído irregular, oriundo de furos por corrosão ou intensionalmente, miolo adulterado, quebrado e etc…",
    codigo: "665-32",
    artigo: "Art. 230, XI",
    tipificacao: "Silenciador de motor de explosão defeituoso, deficiente ou inoperante",
    medida: "Retenção do veículo",
    gravidade: Gravidade.GRAVE,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 270, §2º, do CTB), Autuação + Bloqueio de 30 dias /// Conforme ITT 14 do CPTran "item 4.2.2" (sugiro a leitura)"
  },
  {
    descricao: "Todo o sistema de iluminação dianteiro ou traseiro estiverem com defeito/lâmpadas queimadas",
    codigo: "663-72",
    artigo: "Art. 230, IX",
    tipificacao: "Equipamento obrigatório inoperante",
    medida: "Retenção / Remoção conforme caso",
    gravidade: Gravidade.GRAVE,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada:*DURANTE O DIA (art. 270, §2º, do CTB)- Autuação + Bloqueio de 30 dias e *DURANTE À NOITE (art. 270, §2º c/c §7º, do CTB) – Autuação + Bloqueio de 30 dias + REMOÇÃO ao pátio /// Conforme ITT 7 do CPTran "item 1.3.4.1.2" (sugiro a leitura)"
  },
  {
    descricao: "Retrorefletor (catadióptrico) “ausente”, em motocicletas fabricadas a partir de 2019",
    codigo: "663-71",
    artigo: "Art. 230, IX",
    tipificacao: "Sem equipamento obrigatório",
    medida: "Retenção do veículo",
    gravidade: Gravidade.GRAVE,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 270, §2º, do CTB), Autuação + Bloqueio de 30 dias"
  },
  {
    descricao: "Lanterna (luz) da placa “ausente”, todos os anos",
    codigo: "663-71",
    artigo: "Art. 230, IX",
    tipificacao: "Sem equipamento obrigatório",
    medida: "Retenção do veículo",
    gravidade: Gravidade.GRAVE,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 270, §2º, do CTB), Autuação + Bloqueio de 30 dias"
  },
  {
    descricao: "Retrorefletor (catadióptrico) “encoberto” (ex. pela placa), em motocicletas fabricadas a partir de 2019",
    codigo: "663-72",
    artigo: "Art. 230, IX",
    tipificacao: "Equipamento obrigatório inoperante",
    medida: "Retenção do veículo",
    gravidade: Gravidade.GRAVE,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 270, §2º, do CTB), Autuação + Bloqueio de 30 dias"
  },
  {
    descricao: "Lanterna (luz) da placa “encoberto” (ex. pela placa), todos os anos.",
    codigo: "663-72",
    artigo: "Art. 230, IX",
    tipificacao: "Equipamento obrigatório inoperante",
    medida: "Retenção do veículo",
    gravidade: Gravidade.GRAVE,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 270, §2º, do CTB), Autuação + Bloqueio de 30 dias"
  },
  {
    descricao: "Dispositivo antirradar",
    codigo: "657-20",
    artigo: "Art. 230, III",
    tipificacao: "Dispositivo antirradar",
    medida: "Remoção do veículo",
    gravidade: Gravidade.GRAVISSIMO,
    observacoes: "Irregularidade sanada (art. 271, §9º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 271, §9º-A, do CTB), Autuação + Bloqueio de 15 dias /// Diante do caso concreto e a fim de se coroar a Boa Ordem Administrativa, é devida a REMOÇÃO ao pátio, ainda que o infrator, ao ser fiscalizado, Sane a irrelularidade no veículo /// Conforme ITT 7 do CPTran "item 2.5.6" (sugiro a leitura)"
  },
  {
    descricao: "Calçado tipo chinelo havainas, sapato feminino plataforma, calçado feminino salto alto e etc…",
    codigo: "734-00",
    artigo: "Art. 252, IV",
    tipificacao: "Calçado que compromete a utilização dos pedais",
    medida: "Sem medida",
    gravidade: Gravidade.MEDIA,
    observacoes: "Irregularidade sanada, Autuação e liberação imediata"
  },
  {
    descricao: "Placa suja, amassada, riscada, quebrada, ângulo que dificulte a legibilidade e etc…",
    codigo: "660-20",
    artigo: "Art. 230, VI",
    tipificacao: "Placa sem legibilidade e visibilidade",
    medida: "Remoção do veículo",
    gravidade: Gravidade.GRAVISSIMO,
    observacoes: "Irregularidade sanada (art. 271, §9º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 271, §9º-A, do CTB), Autuação + Bloqueio de 15 dias /// Conforme ITT 7 do CPTran "item 2.5.6" (sugiro a leitura)"
  },
  {
    descricao: "Motocicleta sem placa",
    codigo: "658-00",
    artigo: "Art. 230, IV",
    tipificacao: "Sem placa de identificação",
    medida: "Remoção do veículo",
    gravidade: Gravidade.GRAVISSIMO,
    observacoes: "Irregularidade sanada (art. 271, §9º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 271, §9º-A, do CTB), Autuação + Bloqueio de 15 dias /// Diante do caso concreto e a fim de se coroar a Boa Ordem Administrativa, é devida a REMOÇÃO ao pátio, ainda que o infrator, ao ser fiscalizado, Sane a irrelularidade no veículo /// Conforme ITT 7 do CPTran "item 2.2.1 e 2.5.6" (sugiro a leitura)"
  },
  {
    descricao: "Sem espelhos retrovisores",
    codigo: "663-71",
    artigo: "Art. 230, IX",
    tipificacao: "Sem equipamento obrigatório",
    medida: "Retenção / Remoção conforme caso",
    gravidade: Gravidade.GRAVE,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, e não oferece condições de segurança para circulação (art. 270, §2º c/c §7º, do CTB), Autuação + Bloqueio de 30 dias + REMOÇÃO ao pátio"
  },
  {
    descricao: "Espelho retrovisor quebrado ou inoperante",
    codigo: "663-72",
    artigo: "Art. 230, IX",
    tipificacao: "Equipamento obrigatório inoperante",
    medida: "Retenção do veículo",
    gravidade: Gravidade.GRAVE,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 270, §2º, do CTB), Autuação + Bloqueio de 30 dias"
  },
  {
    descricao: "Espelhos retrovisores originais (em tese) não direcionados para traseira do veiculo",
    codigo: "663-72",
    artigo: "Art. 230, IX",
    tipificacao: "Equipamento obrigatório inoperante",
    medida: "Retenção do veículo",
    gravidade: Gravidade.GRAVE,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 270, §2º, do CTB), Autuação + Bloqueio de 30 dias"
  },
  {
    descricao: "Espelhos retrovisores originais (em tese) não cumprem requisitos da resolução, como as dimensões, motocicletas fabricadas a apartir de 2019",
    codigo: "664-50",
    artigo: "Art. 230, X",
    tipificacao: "Equipamento obrigatório em desacordo",
    medida: "Retenção do veículo",
    gravidade: Gravidade.GRAVE,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 270, §2º, do CTB), Autuação + Bloqueio de 30 dias"
  },
  {
    descricao: "Espelhos retrovisores não originais que não cumprem requisitos da resolução (ex. pequenos e com suporte rebativel ou não), independente da posição que se encontram.",
    codigo: "661-02",
    artigo: "Art. 230, VII",
    tipificacao: "Alterar características do veículo",
    medida: "Retenção do veículo",
    gravidade: Gravidade.GRAVE,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, porém oferece condições de segurança para circulação (art. 270, §2º, do CTB), Autuação + Bloqueio de 30 dias"
  },
  {
    descricao: "Condutor sem capacete de segurança",
    codigo: "703-01",
    artigo: "Art. 244, I",
    tipificacao: "Sem capacete de segurança",
    medida: "Retenção / Remoção conforme caso",
    gravidade: Gravidade.GRAVISSIMO,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata /// Irregularidade não sanada, e não oferece condições de segurança para circulação (art. 270, §2º c/c §7º, do CTB), Autuação + REMOÇÃO ao pátio /// Conforme ITT 13 do CPTran "parte final" (sugiro a leitura)"
  },
  {
    descricao: "Transportar passageiro sem capacete de segurança",
    codigo: "704-81",
    artigo: "Art. 244, II",
    tipificacao: "Passageiro sem capacete de segurança",
    medida: "Retenção do veículo",
    gravidade: Gravidade.GRAVISSIMO,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata"
  },
  {
    descricao: "Capacete de segurança com a cinta jugular e engate, por debaixo do maxilar inferior “solta”.",
    codigo: "520-70",
    artigo: "Art. 169",
    tipificacao: "Sem atenção ou sem os cuidados indispensáveis à segurança",
    medida: "Sem medida",
    gravidade: Gravidade.LEVE,
    observacoes: "Irregularidade sanada, Autuação e liberação imediata"
  },
  {
    descricao: "Capacete de segurança do tipo articulado (modular) com queixeira não abaixada e/ou não travada",
    codigo: "520-70",
    artigo: "Art. 169",
    tipificacao: "Sem atenção ou sem os cuidados indispensáveis à segurança",
    medida: "Sem medida",
    gravidade: Gravidade.LEVE,
    observacoes: "Irregularidade sanada, Autuação e liberação imediata"
  },
  {
    descricao: "Malabarismo ou equilibrando-se em uma roda",
    codigo: "705-61",
    artigo: "Art. 244, III",
    tipificacao: "Malabarismo ou equilibrando-se em uma roda",
    medida: "Retenção do veículo",
    gravidade: Gravidade.GRAVISSIMO,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata"
  },
  {
    descricao: "Capacete de segurança mal encaixado na cabeça",
    codigo: "703-01",
    artigo: "Art. 244, I",
    tipificacao: "Sem capacete de segurança",
    medida: "Retenção do veículo",
    gravidade: Gravidade.GRAVISSIMO,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata"
  },
  {
    descricao: "Condutor com capacete de segurança com viseira ou óculos de proteção em descacordo (ex. viseira levantada)",
    codigo: "768-42",
    artigo: "Art. 244, X",
    tipificacao: "Condutor com capacete de segurança com viseira ou óculos de proteção em descacordo",
    medida: "Retenção do veículo",
    gravidade: Gravidade.MEDIA,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata"
  },
  {
    descricao: "Transportar passageiro com capacete de segurança com viseira ou óculos de proteção em descacordo (ex. viseira levantada)",
    codigo: "771-42",
    artigo: "Art. 244, XI",
    tipificacao: "Passageiro com capacete de segurança com viseira ou óculos de proteção em descacordo",
    medida: "Retenção do veículo",
    gravidade: Gravidade.MEDIA,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata"
  },
  {
    descricao: "Condutor com capacete de segurança sem viseira ou óculos de proteção",
    codigo: "768-41",
    artigo: "Art. 244, X",
    tipificacao: "Condutor com capacete de segurança sem viseira ou óculos de proteção",
    medida: "Retenção do veículo",
    gravidade: Gravidade.MEDIA,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata"
  },
  {
    descricao: "Transportar passageiro com capacete de segurança sem viseira ou óculos de proteção",
    codigo: "771-41",
    artigo: "Art. 244, XI",
    tipificacao: "Passageiro om capacete de segurança sem viseira ou óculos de proteção",
    medida: "Retenção do veículo",
    gravidade: Gravidade.MEDIA,
    observacoes: "Irregularidade sanada (art. 270, §1º, do CTB), Autuação e liberação imediata"
  }
];
