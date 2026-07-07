import type { Metadata } from "next";
import SeoArticlePage from "../_components/SeoArticlePage";

export const metadata: Metadata = {
  title: "TDAH em adultos | Clínica Ello Saúde Mental",
  description: "Entenda sinais de TDAH em adultos, impacto na rotina e importância de avaliação especializada.",
};

const page = {
  "eyebrow": "TDAH",
  "title": "TDAH em adultos",
  "description": "Entenda sinais de TDAH em adultos, impacto na rotina e importância de avaliação especializada.",
  "intro": "O TDAH em adultos pode envolver desatenção, impulsividade, dificuldade de organização, procrastinação e impacto no trabalho, estudos e relacionamentos.",
  "sections": [
    {
      "title": "O que observar em TDAH em adultos",
      "paragraphs": [
        "TDAH em adultos pode envolver mudanças emocionais, comportamentais, no sono, na concentração, no apetite ou na rotina. A intensidade, a frequência e o prejuízo no dia a dia ajudam a entender quando vale buscar avaliação profissional.",
        "Cada pessoa apresenta sintomas de uma forma. Por isso, a consulta psiquiátrica considera história clínica, contexto familiar, rotina, fatores de estresse e evolução dos sintomas ao longo do tempo."
      ]
    },
    {
      "title": "Como a avaliação psiquiátrica pode ajudar",
      "paragraphs": [
        "A avaliação permite compreender o quadro de forma individualizada e construir um plano de cuidado adequado. Esse plano pode envolver orientação, acompanhamento, medidas de rotina, encaminhamentos e, quando indicado pelo médico, tratamento medicamentoso.",
        "O objetivo é reduzir sofrimento, melhorar funcionalidade e acompanhar a evolução com segurança."
      ]
    },
    {
      "title": "Atendimento online",
      "paragraphs": [
        "A consulta online permite que o paciente receba atendimento em saúde mental com praticidade, sigilo e acolhimento, desde que esteja em ambiente reservado e com boa conexão.",
        "O acompanhamento online pode ser uma alternativa para pessoas que buscam cuidado especializado sem deslocamento, mantendo a necessidade de avaliação individualizada."
      ]
    }
  ],
  "faqs": [
    {
      "question": "TDAH em adultos precisa sempre de psiquiatra?",
      "answer": "Nem sempre. A necessidade de avaliação psiquiátrica depende da intensidade dos sintomas, do prejuízo na rotina e da evolução do quadro. Quando há sofrimento persistente ou impacto importante, uma avaliação pode ajudar."
    },
    {
      "question": "A consulta online pode ser usada para avaliação inicial?",
      "answer": "Sim. A consulta online pode ser utilizada para avaliação inicial e acompanhamento, desde que seja adequada ao caso e realizada com privacidade."
    },
    {
      "question": "O conteúdo desta página substitui consulta?",
      "answer": "Não. O conteúdo é educativo e não substitui uma avaliação médica individual."
    }
  ],
  "related": [
    {
      "title": "Psiquiatra online",
      "href": "/psiquiatra-online"
    },
    {
      "title": "Primeira consulta psiquiátrica",
      "href": "/primeira-consulta-psiquiatrica"
    },
    {
      "title": "Quando procurar um psiquiatra",
      "href": "/quando-procurar-psiquiatra"
    }
  ]
};

export default function Page() {
  return <SeoArticlePage {...page} />;
}
