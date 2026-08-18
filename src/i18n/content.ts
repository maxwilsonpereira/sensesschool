export const locales = ['pt', 'en'] as const;
export type Locale = (typeof locales)[number];

export const school = {
  name: 'Senses Montessori School',
  email: 'contato@sensesschool.com.br',
  phoneDisplay: '+55 11 2614 0201',
  phoneHref: 'tel:+551126140201',
  whatsappDisplay: '+55 11 94063 6421',
  whatsappHref: 'https://wa.me/5511940636421',
  street: 'R. Princesa Isabel, 445',
  neighborhood: 'Brooklin Paulista',
  city: 'São Paulo',
  region: 'SP',
  country: 'BR',
  mapHref:
    'https://www.google.com/maps/search/?api=1&query=R.%20Princesa%20Isabel%2C%20445%2C%20Brooklin%20Paulista%2C%20S%C3%A3o%20Paulo',
} as const;

const commonRoutes = {
  about: '/',
  method: '/educacao/',
  programs: '/programas/',
  campus: '/nossa-casa/',
  journal: '/blog/',
  events: '/eventos/',
} as const;

export const content = {
  pt: {
    lang: 'pt-BR',
    localeName: 'Português',
    path: '/',
    alternatePath: '/en/',
    skip: 'Pular para o conteúdo',
    meta: {
      title: 'Escola Montessori Bilíngue no Brooklin | Senses',
      description:
        'Escola e berçário Montessori bilíngue no Brooklin, São Paulo. Um ambiente preparado para autonomia, descoberta e desenvolvimento integral.',
    },
    nav: {
      menu: 'Menu',
      close: 'Fechar',
      items: [
        { label: 'A Senses', href: commonRoutes.about },
        { label: 'Método', href: commonRoutes.method },
        { label: 'Programas', href: commonRoutes.programs },
        { label: 'Nossa casa', href: commonRoutes.campus },
        { label: 'Conteúdos', href: commonRoutes.journal },
      ],
      visit: 'Agende uma visita',
      language: 'English',
    },
    hero: {
      eyebrow: 'Montessori bilíngue · Brooklin, São Paulo',
      title: 'Toda criança nasce cientista.',
      body:
        'Na Senses, mãos pequenas encontram um mundo preparado para investigar, escolher e construir conhecimento com autonomia.',
      primaryCta: 'Conheça a Senses',
      secondaryCta: 'Agende uma visita',
      scrollLabel: 'Role para montar',
      canvasLabel:
        'Animação de uma mesa infantil de madeira sendo montada peça por peça',
      fallbackAlt:
        'Mesa infantil de madeira montada, símbolo do aprendizado prático Montessori',
    },
    intro: {
      eyebrow: 'Educar para a liberdade',
      title: 'Aprender com as mãos. Crescer por inteiro.',
      lead:
        'Somos uma escola e berçário bilíngue que pratica Montessori com respeito aos princípios de Maria Montessori. Cada escolha — do educador ao mobiliário — considera a criança como protagonista do próprio desenvolvimento.',
      detail:
        'Aqui, liberdade não é ausência de estrutura. É a possibilidade de escolher com propósito dentro de um ambiente calmo, belo e cuidadosamente organizado.',
    },
    method: {
      eyebrow: 'Montessori na prática',
      title: 'Um ambiente que diz: “você consegue”.',
      body:
        'O espaço, os materiais e o adulto preparado trabalham juntos para que cada criança avance em seu próprio ritmo.',
      principles: [
        {
          number: '01',
          title: 'Autonomia com propósito',
          body: 'Materiais acessíveis e escolhas reais transformam curiosidade em concentração, coordenação e confiança.',
        },
        {
          number: '02',
          title: 'Ambiente preparado',
          body: 'Ordem, beleza e mobiliário na escala da criança criam condições para explorar e cuidar do espaço com independência.',
        },
        {
          number: '03',
          title: 'Aprender fazendo',
          body: 'Materiais concretos tornam linguagem, matemática, sentidos e vida prática experiências que podem ser tocadas e compreendidas.',
        },
        {
          number: '04',
          title: 'O educador observa',
          body: 'O adulto guia com intenção, apresenta novos desafios e protege a concentração sem interromper a descoberta.',
        },
      ],
    },
    programs: {
      eyebrow: 'Percursos de desenvolvimento',
      title: 'Um ambiente que cresce junto com a criança.',
      intro:
        'Três programas acompanham as transformações da primeira infância, sempre com cuidado individual e continuidade.',
      cards: [
        {
          title: 'Bebê Cientista',
          age: 'Primeiros meses',
          body: 'Um berçário pensado para as necessidades biológicas, motoras, cognitivas, afetivas e socioemocionais do bebê.',
          image: 'nursery',
        },
        {
          title: 'Cientista Júnior',
          age: 'Aproximadamente 18 meses a 3 anos',
          body: 'Vida prática, linguagem, matemática, experiências sensoriais e natureza apoiam a explosão de autonomia dessa fase.',
          image: 'toddler',
        },
        {
          title: 'Cientista Sênior',
          age: '3 a 6 anos',
          body: 'Idades mistas, desafios progressivos e uma comunidade de aprendizagem fortalecem linguagem, raciocínio e cuidado coletivo.',
          image: 'prepared',
        },
      ],
      cta: 'Conheça os programas',
    },
    bilingual: {
      eyebrow: 'Bilinguismo vivido',
      title: 'English is part of the day — not a separate moment.',
      body:
        'Desde o berçário, bebês têm contato com músicas e palavras em inglês. Depois da adaptação, as turmas Júnior e Sênior participam de uma experiência de imersão, conduzida por educadores fluentes.',
      note: 'A linguagem nasce do contexto, da relação e da experiência cotidiana.',
    },
    campus: {
      eyebrow: 'Nossa casa no Brooklin',
      title: 'Uma casa com história. Um jardim para novas descobertas.',
      body:
        'A Senses ocupa a antiga casa do escritor e bibliófilo José Mindlin, onde esteve a maior biblioteca privada do Brasil. Grandes portas e janelas conectam as salas à luz natural, ao ar fresco e a 600 m² de área verde.',
      detail:
        'Entre árvores frutíferas, flores, pássaros e horta, a natureza faz parte da rotina — não apenas do cenário.',
      cta: 'Conheça nossa casa',
      imageAlt:
        'Criança da Senses cuidando de uma muda em atividade prática',
      gardenAlt: 'Crianças brincando ao ar livre no jardim da Senses',
    },
    quote: {
      text: 'Nosso trabalho é abrir horizontes e despertar o brilho que há em cada criança.',
      attribution: 'Manifesto Senses',
    },
    faq: {
      eyebrow: 'Perguntas de famílias',
      title: 'Montessori, sem mistério.',
      items: [
        {
          question: 'Montessori significa que a criança faz o que quer?',
          answer:
            'A criança pode se movimentar, conversar, escolher materiais e pedir ajuda dentro de limites claros: não machucar a si, outra pessoa ou ser vivo, nem danificar o ambiente. Liberdade e responsabilidade caminham juntas.',
        },
        {
          question: 'Como é o papel do educador?',
          answer:
            'O educador observa cada criança, apresenta atividades no momento adequado e guia seu percurso sem assumir o centro do aprendizado. Assim, protege a concentração e amplia possibilidades.',
        },
        {
          question: 'Como é um dia em uma sala Montessori?',
          answer:
            'A rotina combina um período contínuo de trabalho com materiais, atividades coletivas não obrigatórias, cuidados com o ambiente, lanche, artes, movimento, culinária, jardinagem e tempo diário ao ar livre.',
        },
      ],
      cta: 'Veja todas as dúvidas',
    },
    visit: {
      eyebrow: 'Venha sentir a Senses',
      title: 'A escolha de uma escola começa com um encontro.',
      body:
        'Conheça os ambientes, converse com nossa equipe e descubra como a proposta Montessori ganha vida em cada detalhe.',
      cta: 'Agende uma visita',
      contact: 'Fale com a escola',
    },
    footer: {
      descriptor: 'Escola e berçário Montessori bilíngue',
      addressLabel: 'Brooklin · São Paulo',
      explore: 'Explore',
      contact: 'Contato',
      legal: 'Todos os direitos reservados.',
      map: 'Abrir no mapa',
      events: 'Eventos',
      admission: 'Admissão',
    },
  },
  en: {
    lang: 'en',
    localeName: 'English',
    path: '/en/',
    alternatePath: '/',
    skip: 'Skip to content',
    meta: {
      title: 'Bilingual Montessori School in São Paulo | Senses',
      description:
        'A bilingual Montessori school and nursery in Brooklin, São Paulo, with a prepared environment for independence, discovery and whole-child development.',
    },
    nav: {
      menu: 'Menu',
      close: 'Close',
      items: [
        { label: 'Senses', href: '/en/' },
        { label: 'Approach', href: '/en/education/' },
        { label: 'Programs', href: '/en/programs/' },
        { label: 'Campus', href: '/en/campus/' },
        { label: 'Journal', href: '/blog/' },
      ],
      visit: 'Schedule a visit',
      language: 'Português',
    },
    hero: {
      eyebrow: 'Bilingual Montessori · Brooklin, São Paulo',
      title: 'Every child is born a scientist.',
      body:
        'At Senses, small hands meet a world prepared for investigating, choosing and building knowledge independently.',
      primaryCta: 'Discover Senses',
      secondaryCta: 'Schedule a visit',
      scrollLabel: 'Scroll to assemble',
      canvasLabel:
        'Animation of a child-sized wooden table being assembled piece by piece',
      fallbackAlt:
        'Assembled child-sized wooden table, a symbol of hands-on Montessori learning',
    },
    intro: {
      eyebrow: 'Education for freedom',
      title: 'Learning through the hands. Growing as a whole.',
      lead:
        'We are a bilingual school and nursery practicing Montessori in keeping with Maria Montessori’s principles. Every choice — from the educator to the furniture — sees the child as the protagonist of their own development.',
      detail:
        'Freedom here does not mean a lack of structure. It means purposeful choice within a calm, beautiful and carefully ordered environment.',
    },
    method: {
      eyebrow: 'Montessori in practice',
      title: 'An environment that says: “you can do this”.',
      body:
        'The space, materials and prepared adult work together so each child can move forward at their own pace.',
      principles: [
        {
          number: '01',
          title: 'Purposeful independence',
          body: 'Accessible materials and real choices turn curiosity into concentration, coordination and confidence.',
        },
        {
          number: '02',
          title: 'Prepared environment',
          body: 'Order, beauty and child-sized furniture make room for independent exploration and care of the shared space.',
        },
        {
          number: '03',
          title: 'Learning by doing',
          body: 'Concrete materials make language, mathematics, sensorial work and practical life experiences tangible.',
        },
        {
          number: '04',
          title: 'The educator observes',
          body: 'The adult guides intentionally, introduces new challenges and protects concentration without interrupting discovery.',
        },
      ],
    },
    programs: {
      eyebrow: 'Developmental journeys',
      title: 'An environment that grows with the child.',
      intro:
        'Three programs accompany the transformations of early childhood with individual care and continuity.',
      cards: [
        {
          title: 'Baby Scientist',
          age: 'The earliest months',
          body: 'A nursery designed around babies’ biological, motor, cognitive, emotional and social needs.',
          image: 'nursery',
        },
        {
          title: 'Junior Scientist',
          age: 'Approximately 18 months to 3 years',
          body: 'Practical life, language, mathematics, sensorial work and nature support the leap toward independence.',
          image: 'toddler',
        },
        {
          title: 'Senior Scientist',
          age: '3 to 6 years',
          body: 'Mixed ages, progressive challenges and a learning community strengthen language, reasoning and care for others.',
          image: 'prepared',
        },
      ],
      cta: 'Explore our programs',
    },
    bilingual: {
      eyebrow: 'Bilingual by experience',
      title: 'English is part of the day — not a separate moment.',
      body:
        'From nursery onward, babies hear songs and words in English. After settling in, Junior and Senior groups enter an immersive experience led by fluent educators.',
      note: 'Language grows from context, relationships and everyday experience.',
    },
    campus: {
      eyebrow: 'Our Brooklin home',
      title: 'A house with history. A garden for new discoveries.',
      body:
        'Senses occupies the former home of writer and bibliophile José Mindlin, once home to Brazil’s largest private library. Generous doors and windows connect the classrooms to natural light, fresh air and 600 m² of green space.',
      detail:
        'Among fruit trees, flowers, birds and a kitchen garden, nature belongs to the daily rhythm — not just the scenery.',
      cta: 'Explore our campus',
      imageAlt: 'A Senses child caring for a seedling during practical work',
      gardenAlt: 'Children playing outdoors in the Senses garden',
    },
    quote: {
      text: 'Our work is to widen horizons and awaken the brightness within every child.',
      attribution: 'Senses Manifesto',
    },
    faq: {
      eyebrow: 'Questions from families',
      title: 'Montessori, made clear.',
      items: [
        {
          question: 'Does Montessori mean children can do anything they want?',
          answer:
            'Children may move, talk, choose materials and ask for help within clear limits: they may not harm themselves, another person or living being, or damage the environment. Freedom and responsibility belong together.',
        },
        {
          question: 'What is the educator’s role?',
          answer:
            'The educator observes each child, presents activities at the right time and guides the journey without taking centre stage. This protects concentration and opens new possibilities.',
        },
        {
          question: 'What does a day in a Montessori classroom look like?',
          answer:
            'The rhythm combines an uninterrupted work period with materials, optional group moments, care of the environment, snack, art, movement, cooking, gardening and daily time outdoors.',
        },
      ],
      cta: 'Read all questions',
    },
    visit: {
      eyebrow: 'Come experience Senses',
      title: 'Choosing a school begins with meeting it.',
      body:
        'Explore the environments, meet our team and see how Montessori comes to life in every detail.',
      cta: 'Schedule a visit',
      contact: 'Contact the school',
    },
    footer: {
      descriptor: 'Bilingual Montessori school and nursery',
      addressLabel: 'Brooklin · São Paulo',
      explore: 'Explore',
      contact: 'Contact',
      legal: 'All rights reserved.',
      map: 'Open in maps',
      events: 'Events',
      admission: 'Admissions',
    },
  },
} as const;

export type PageContent = (typeof content)[Locale];

export function getContent(locale: Locale): PageContent {
  return content[locale];
}
