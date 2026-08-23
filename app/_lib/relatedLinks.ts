export type RelatedLink = {
  title: string;
  href: string;
};

const atendimentoBase: RelatedLink[] = [
  { title: "Psiquiatra online", href: "/psiquiatra-online" },
  {
    title: "Primeira consulta psiquiátrica",
    href: "/primeira-consulta-psiquiatrica",
  },
  { title: "Quando procurar um psiquiatra", href: "/quando-procurar-psiquiatra" },
];

/** Topical “Veja também” links keyed by page path. */
export const relatedByPath: Record<string, RelatedLink[]> = {
  "/psiquiatra-online": [
    { title: "Tratamento de ansiedade", href: "/tratamento-ansiedade" },
    { title: "Tratamento de depressão", href: "/tratamento-depressao" },
    { title: "Tratamento de TDAH", href: "/tratamento-tdah" },
    { title: "Tratamento de insônia", href: "/tratamento-insonia" },
    { title: "Tratamento de burnout", href: "/tratamento-burnout" },
    {
      title: "Primeira consulta psiquiátrica",
      href: "/primeira-consulta-psiquiatrica",
    },
  ],
  "/primeira-consulta-psiquiatrica": [
    { title: "Psiquiatra online", href: "/psiquiatra-online" },
    { title: "Quando procurar um psiquiatra", href: "/quando-procurar-psiquiatra" },
    { title: "Tratamento de ansiedade", href: "/tratamento-ansiedade" },
    { title: "Tratamento de TDAH", href: "/tratamento-tdah" },
    { title: "Todos os conteúdos", href: "/conteudos" },
  ],
  "/quando-procurar-psiquiatra": [
    { title: "Psiquiatra online", href: "/psiquiatra-online" },
    {
      title: "Primeira consulta psiquiátrica",
      href: "/primeira-consulta-psiquiatrica",
    },
    { title: "Tratamento de ansiedade", href: "/tratamento-ansiedade" },
    { title: "Tratamento de depressão", href: "/tratamento-depressao" },
    { title: "Todos os conteúdos", href: "/conteudos" },
  ],
  "/tratamento-ansiedade": [
    { title: "Crise de ansiedade", href: "/crise-de-ansiedade" },
    { title: "Ansiedade e falta de ar", href: "/ansiedade-falta-de-ar" },
    { title: "Ansiedade à noite", href: "/ansiedade-a-noite" },
    { title: "TAG", href: "/tag" },
    { title: "Síndrome do pânico", href: "/sindrome-do-panico" },
    { title: "Psiquiatra online", href: "/psiquiatra-online" },
  ],
  "/tratamento-depressao": [
    { title: "Transtornos do humor", href: "/transtornos-do-humor" },
    { title: "Transtorno bipolar", href: "/transtorno-bipolar" },
    { title: "Tratamento de ansiedade", href: "/tratamento-ansiedade" },
    { title: "Tratamento de insônia", href: "/tratamento-insonia" },
    ...atendimentoBase.slice(0, 2),
  ],
  "/tratamento-tdah": [
    { title: "TDAH em adultos", href: "/tdah-em-adultos" },
    { title: "TDAH em mulheres", href: "/tdah-em-mulheres" },
    { title: "TDAH infantil", href: "/tdah-infantil" },
    { title: "Psiquiatra infantil", href: "/psiquiatra-infantil" },
    ...atendimentoBase.slice(0, 2),
  ],
  "/tratamento-insonia": [
    { title: "Insônia crônica", href: "/insonia-cronica" },
    { title: "Ansiedade à noite", href: "/ansiedade-a-noite" },
    { title: "Tratamento de ansiedade", href: "/tratamento-ansiedade" },
    { title: "Tratamento de depressão", href: "/tratamento-depressao" },
    { title: "Psiquiatra online", href: "/psiquiatra-online" },
  ],
  "/tratamento-burnout": [
    { title: "Burnout ou estresse?", href: "/burnout-ou-estresse" },
    { title: "Como saber se tenho burnout", href: "/como-saber-se-tenho-burnout" },
    { title: "Tratamento de ansiedade", href: "/tratamento-ansiedade" },
    { title: "Tratamento de depressão", href: "/tratamento-depressao" },
    { title: "Psiquiatra online", href: "/psiquiatra-online" },
  ],
  "/transtornos-do-humor": [
    { title: "Transtorno bipolar", href: "/transtorno-bipolar" },
    { title: "Tratamento de depressão", href: "/tratamento-depressao" },
    { title: "Tratamento de ansiedade", href: "/tratamento-ansiedade" },
    ...atendimentoBase.slice(0, 2),
  ],
  "/transtorno-bipolar": [
    { title: "Transtornos do humor", href: "/transtornos-do-humor" },
    { title: "Tratamento de depressão", href: "/tratamento-depressao" },
    ...atendimentoBase,
  ],
  "/sindrome-do-panico": [
    { title: "Tratamento de ansiedade", href: "/tratamento-ansiedade" },
    { title: "Crise de ansiedade", href: "/crise-de-ansiedade" },
    { title: "Ansiedade e falta de ar", href: "/ansiedade-falta-de-ar" },
    ...atendimentoBase.slice(0, 2),
  ],
  "/toc": [
    { title: "Tratamento de ansiedade", href: "/tratamento-ansiedade" },
    { title: "TAG", href: "/tag" },
    ...atendimentoBase,
  ],
  "/psiquiatra-infantil": [
    { title: "Ansiedade infantil", href: "/ansiedade-infantil" },
    { title: "TDAH infantil", href: "/tdah-infantil" },
    { title: "Autismo infantil", href: "/autismo-infantil" },
    { title: "Psiquiatra online", href: "/psiquiatra-online" },
    {
      title: "Primeira consulta psiquiátrica",
      href: "/primeira-consulta-psiquiatrica",
    },
  ],
  "/autismo-em-adultos": [
    { title: "Autismo infantil", href: "/autismo-infantil" },
    { title: "TDAH em adultos", href: "/tdah-em-adultos" },
    ...atendimentoBase,
  ],
  "/crise-de-ansiedade": [
    { title: "Tratamento de ansiedade", href: "/tratamento-ansiedade" },
    { title: "Síndrome do pânico", href: "/sindrome-do-panico" },
    { title: "Ansiedade e falta de ar", href: "/ansiedade-falta-de-ar" },
    { title: "Psiquiatra online", href: "/psiquiatra-online" },
  ],
  "/ansiedade-falta-de-ar": [
    { title: "Tratamento de ansiedade", href: "/tratamento-ansiedade" },
    { title: "Crise de ansiedade", href: "/crise-de-ansiedade" },
    { title: "Síndrome do pânico", href: "/sindrome-do-panico" },
    { title: "Psiquiatra online", href: "/psiquiatra-online" },
  ],
  "/ansiedade-a-noite": [
    { title: "Tratamento de ansiedade", href: "/tratamento-ansiedade" },
    { title: "Tratamento de insônia", href: "/tratamento-insonia" },
    { title: "Insônia crônica", href: "/insonia-cronica" },
    { title: "Psiquiatra online", href: "/psiquiatra-online" },
  ],
  "/ansiedade-infantil": [
    { title: "Psiquiatra infantil", href: "/psiquiatra-infantil" },
    { title: "Tratamento de ansiedade", href: "/tratamento-ansiedade" },
    { title: "TDAH infantil", href: "/tdah-infantil" },
    { title: "Psiquiatra online", href: "/psiquiatra-online" },
  ],
  "/tag": [
    { title: "Tratamento de ansiedade", href: "/tratamento-ansiedade" },
    { title: "Crise de ansiedade", href: "/crise-de-ansiedade" },
    { title: "Fobia social", href: "/fobia-social" },
    { title: "Psiquiatra online", href: "/psiquiatra-online" },
  ],
  "/fobia-social": [
    { title: "Tratamento de ansiedade", href: "/tratamento-ansiedade" },
    { title: "TAG", href: "/tag" },
    ...atendimentoBase.slice(0, 2),
  ],
  "/tdah-em-adultos": [
    { title: "Tratamento de TDAH", href: "/tratamento-tdah" },
    { title: "TDAH em mulheres", href: "/tdah-em-mulheres" },
    { title: "TDAH infantil", href: "/tdah-infantil" },
    { title: "Psiquiatra online", href: "/psiquiatra-online" },
  ],
  "/tdah-em-mulheres": [
    { title: "Tratamento de TDAH", href: "/tratamento-tdah" },
    { title: "TDAH em adultos", href: "/tdah-em-adultos" },
    { title: "Tratamento de ansiedade", href: "/tratamento-ansiedade" },
    { title: "Psiquiatra online", href: "/psiquiatra-online" },
  ],
  "/tdah-infantil": [
    { title: "Tratamento de TDAH", href: "/tratamento-tdah" },
    { title: "Psiquiatra infantil", href: "/psiquiatra-infantil" },
    { title: "Ansiedade infantil", href: "/ansiedade-infantil" },
    { title: "Psiquiatra online", href: "/psiquiatra-online" },
  ],
  "/insonia-cronica": [
    { title: "Tratamento de insônia", href: "/tratamento-insonia" },
    { title: "Ansiedade à noite", href: "/ansiedade-a-noite" },
    { title: "Tratamento de ansiedade", href: "/tratamento-ansiedade" },
    { title: "Psiquiatra online", href: "/psiquiatra-online" },
  ],
  "/burnout-ou-estresse": [
    { title: "Tratamento de burnout", href: "/tratamento-burnout" },
    { title: "Como saber se tenho burnout", href: "/como-saber-se-tenho-burnout" },
    { title: "Tratamento de ansiedade", href: "/tratamento-ansiedade" },
    { title: "Psiquiatra online", href: "/psiquiatra-online" },
  ],
  "/como-saber-se-tenho-burnout": [
    { title: "Tratamento de burnout", href: "/tratamento-burnout" },
    { title: "Burnout ou estresse?", href: "/burnout-ou-estresse" },
    { title: "Tratamento de depressão", href: "/tratamento-depressao" },
    { title: "Psiquiatra online", href: "/psiquiatra-online" },
  ],
  "/borderline": [
    { title: "Transtornos do humor", href: "/transtornos-do-humor" },
    { title: "Tratamento de ansiedade", href: "/tratamento-ansiedade" },
    ...atendimentoBase,
  ],
  "/autismo-infantil": [
    { title: "Psiquiatra infantil", href: "/psiquiatra-infantil" },
    { title: "Autismo em adultos", href: "/autismo-em-adultos" },
    { title: "TDAH infantil", href: "/tdah-infantil" },
    { title: "Psiquiatra online", href: "/psiquiatra-online" },
  ],
};

const regionRelated: RelatedLink[] = [
  { title: "Psiquiatra online", href: "/psiquiatra-online" },
  {
    title: "Primeira consulta psiquiátrica",
    href: "/primeira-consulta-psiquiatrica",
  },
  { title: "Tratamento de ansiedade", href: "/tratamento-ansiedade" },
  { title: "Tratamento de TDAH", href: "/tratamento-tdah" },
  { title: "Todos os conteúdos", href: "/conteudos" },
];

for (const path of [
  "/psiquiatra-online-sao-paulo",
  "/psiquiatra-online-abc",
  "/psiquiatra-online-ribeirao-pires",
  "/psiquiatra-online-santo-andre",
  "/psiquiatra-online-sao-bernardo",
  "/psiquiatra-online-maua",
]) {
  relatedByPath[path] = regionRelated;
}

export function relatedFor(path: string): RelatedLink[] {
  return relatedByPath[path] ?? atendimentoBase;
}
