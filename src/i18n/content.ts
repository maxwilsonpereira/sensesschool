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
        'Escola e berçário Montessori bilíngue no Brooklin, São Paulo. Ambiente preparado, inglês vivido todos os dias e autonomia com responsabilidade.',
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
        'Na Senses, Montessori e uma experiência bilíngue vivida todos os dias criam as condições para investigar, escolher e construir conhecimento com autonomia.',
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
        'Somos uma escola e berçário bilíngue que pratica Montessori com fidelidade aos princípios de Maria Montessori. Ciência do desenvolvimento, observação atenta e afeto orientam cada escolha — do adulto ao ambiente — para que a criança seja protagonista do próprio desenvolvimento.',
      detail:
        'Liberdade aqui não é ausência de limites. É poder escolher com propósito, perceber consequências, tentar de novo e conquistar por si — dentro de um ambiente calmo, belo e cuidadosamente organizado.',
    },
    method: {
      eyebrow: 'Montessori na prática',
      title: 'Um ambiente que diz: “você consegue”.',
      body:
        'O espaço, os materiais e o adulto preparado trabalham juntos: a criança explora, percebe, ajusta e avança em seu próprio ritmo.',
      principles: [
        {
          number: '01',
          title: 'Liberdade com responsabilidade',
          body: 'Escolhas reais, limites claros e materiais acessíveis transformam curiosidade em concentração, coordenação e confiança.',
        },
        {
          number: '02',
          title: 'Ambiente preparado',
          body: 'Ordem, beleza e mobiliário na escala da criança criam condições para explorar e cuidar do espaço com independência.',
        },
        {
          number: '03',
          title: 'Tentar, ajustar, conquistar',
          body: 'Materiais concretos permitem perceber o erro, ajustar o caminho e compreender linguagem, matemática, sentidos e vida prática por experiência própria.',
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
        'Três programas acompanham as transformações da primeira infância com cuidado individual, continuidade e respeito ao tempo de cada criança.',
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
        'Desde o berçário, o inglês aparece em músicas, palavras, relações e descobertas. Depois da adaptação, as turmas Júnior e Sênior vivem uma experiência de imersão conduzida por educadores fluentes — integrada à rotina Montessori, nunca tratada como uma aula isolada.',
      note: 'A criança não apenas estuda outro idioma: começa a usá-lo com contexto, vínculo e confiança.',
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
    leadership: {
      eyebrow: 'Uma visão que orienta a escola',
      name: 'Mariana Ruske',
      role: 'Fundadora e diretora da Senses',
      title: 'Ciência e humanidade, na mesma direção.',
      body:
        'Engenheira, pedagoga e especialista em neurociência do comportamento, Mariana levou o pensamento científico para a educação: observar antes de intervir, compreender o desenvolvimento e criar condições para que cada criança pense, tente, ajuste e conquiste por si.',
      note:
        'Essa visão orienta o ambiente, a formação dos adultos e a parceria com cada família.',
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
      title: 'Escolher uma escola começa por conhecê-la de perto.',
      body:
        'Conheça os ambientes, converse com nossa equipe e descubra se a proposta Montessori bilíngue da Senses faz sentido para a sua família.',
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
        'A bilingual Montessori school and nursery in Brooklin, São Paulo, with a prepared environment, English woven into daily life and purposeful independence.',
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
        'At Senses, Montessori and a bilingual experience lived every day create the conditions to investigate, choose and build knowledge independently.',
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
        'We are a bilingual school and nursery practicing Montessori faithfully to Maria Montessori’s principles. Developmental science, close observation and affection guide every choice — from the adult to the environment — so children can lead their own development.',
      detail:
        'Freedom here does not mean a lack of limits. It means choosing with purpose, noticing consequences, trying again and achieving for oneself — within a calm, beautiful and carefully ordered environment.',
    },
    method: {
      eyebrow: 'Montessori in practice',
      title: 'An environment that says: “you can do this”.',
      body:
        'The space, materials and prepared adult work together: the child explores, notices, adjusts and moves forward at their own pace.',
      principles: [
        {
          number: '01',
          title: 'Freedom with responsibility',
          body: 'Real choices, clear limits and accessible materials turn curiosity into concentration, coordination and confidence.',
        },
        {
          number: '02',
          title: 'Prepared environment',
          body: 'Order, beauty and child-sized furniture make room for independent exploration and care of the shared space.',
        },
        {
          number: '03',
          title: 'Try, adjust, achieve',
          body: 'Concrete materials let children notice an error, adjust their approach and understand language, mathematics, sensorial work and practical life through direct experience.',
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
        'Three programs accompany the transformations of early childhood with individual care, continuity and respect for each child’s timing.',
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
        'From nursery onward, English is woven into songs, words, relationships and discovery. After settling in, Junior and Senior groups enter an immersive experience led by fluent educators — integrated into Montessori life, never treated as a separate lesson.',
      note: 'Children do not simply study another language: they begin to use it through context, connection and confidence.',
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
    leadership: {
      eyebrow: 'A vision that guides the school',
      name: 'Mariana Ruske',
      role: 'Founder and director of Senses',
      title: 'Science and humanity, moving in the same direction.',
      body:
        'An engineer, educator and behavioral-neuroscience specialist, Mariana brought scientific thinking into education: observe before intervening, understand development and create the conditions for each child to think, try, adjust and achieve for themselves.',
      note:
        'This vision shapes the environment, the preparation of adults and the partnership with every family.',
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
      title: 'Choosing a school begins by experiencing it firsthand.',
      body:
        'Explore the environments, meet our team and discover whether Senses’ bilingual Montessori approach feels right for your family.',
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
