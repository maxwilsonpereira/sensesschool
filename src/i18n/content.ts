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
        'Uma escola Montessori bilíngue onde ciência, afeto e autonomia fazem parte de cada descoberta.',
      primaryCta: 'Conheça a Senses',
      secondaryCta: 'Agende uma visita',
      annotations: ['observar', 'tentar', 'descobrir'],
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
    campusPage: {
      meta: {
        title: 'Nossa Casa: Escola Montessori no Brooklin | Senses',
        description:
          'Conheça a casa histórica da Senses no Brooklin, seus ambientes Montessori preparados, salas com luz natural e o jardim onde as crianças brincam ao ar livre.',
      },
      hero: {
        eyebrow: 'Nossa casa · Brooklin',
        title: 'Uma casa com história. Um jardim para novas descobertas.',
        lead:
          'A antiga casa do escritor e bibliófilo José Mindlin segue acolhendo educação — agora como um ambiente Montessori cheio de luz, ar fresco e vida.',
        cta: 'Agende uma visita',
        chaptersLabel: 'Capítulos da visita',
        chapters: [
          { number: '01', label: 'História', href: '#historia' },
          { number: '02', label: 'Salas', href: '#salas' },
          { number: '03', label: 'Jardim', href: '#jardim' },
        ],
        roomAlt:
          'Duas crianças trabalhando com materiais Montessori em uma sala da Senses',
        gardenAlt:
          'Crianças brincando sob uma grande árvore no jardim da Senses',
      },
      history: {
        title: 'Uma tradição que continua.',
        paragraphs: [
          'Nossa escola tem muita história! Estamos na casa que pertenceu ao renomado escritor e bibliófilo José Mindlin, e abrigava a maior biblioteca privada do Brasil, a “Biblioteca Brasiliana Guita e José Mindlin” que está hoje alocada na Universidade de São Paulo. Esta casa tem sua própria tradição em educação e pretendemos continuar seu legado.',
          'Nossas salas de aula possuem grandes portas e janelas para o jardim, para que toda a escola seja repleta de luz natural e ar fresco, gerando um ambiente calmo e acolhedor.',
        ],
        note: 'Uma casa preparada para acolher conhecimento — ontem e hoje.',
      },
      rooms: {
        title: 'Ambientes preparados para cada etapa.',
        intro:
          'Cada sala respeita o momento de desenvolvimento da criança e transforma escala, ordem, materiais e luz em possibilidades reais de autonomia.',
        items: [
          {
            id: 'bebe-cientista',
            title: 'Bebê Cientista',
            age: 'Primeiros meses',
            paragraphs: [
              'Nos primeiros meses de vida, as transformações e descobertas dos bebês são imensuráveis. É por isso que, aqui na Senses, o ambiente para esta faixa etária foi projetado para suprir não apenas suas necessidades biológicas, mas também as motoras, cognitivas, afetivas e socioemocionais.',
              'Mais do que passar o tempo em segurança, aqui o atendimento a cada criança é feito de maneira individual, para que os estímulos aconteçam na medida certa e no momento ideal, sempre baseados nos marcos padrões de desenvolvimento. Das paredes claras aos materiais que são manipulados, do ambiente arejado à luz natural que entra pelas janelas, tudo tem como propósito cultivar na criança o prazer pelas descobertas do mundo.',
            ],
            alt: 'Bebês da Senses sentados em mobiliário de madeira na escala da criança',
          },
          {
            id: 'cientista-junior',
            title: 'Cientista Júnior',
            age: 'Até 3 anos',
            paragraphs: [
              'Até os 3 anos, período chamado por Maria Montessori de “mente absorvente inconsciente”, a acessibilidade de todo o ambiente torna-se ainda mais essencial para o despertar da consciência e da autonomia das crianças – é neste momento que se potencializam características como a consciência corporal, o desenvolvimento da fala e o interesse em suprir algumas de suas próprias necessidades.',
              'Aqui na Senses, a sala para essa faixa etária é completamente preparada para estimular o cientista que há em cada um e promover aspectos importantes como o respeito pelo ser humano e senso de comunidade. Os móveis foram projetados especialmente para seus tamanhos, assim como a disposição dos materiais, respeitando o ritmo individual dos alunos e sempre tendo a segurança como elemento indispensável.',
            ],
            alt: 'Duas crianças da turma Júnior concentradas em materiais Montessori',
          },
          {
            id: 'cientista-senior',
            title: 'Cientista Sênior',
            age: 'Dos 3 aos 6 anos',
            paragraphs: [
              'Dos 3 aos 6 anos, período chamado por Maria Montessori de “mente absorvente consciente”, o desenvolvimento da linguagem oral e escrita, da descoberta da matemática e das relações espaciais atingem seu ápice. Nesta sala, os ambientes visam ao máximo potencializar o aperfeiçoamento de habilidades como a coordenação, concentração, organização e precisão. Nesta fase a criança participa ativamente no conceito de cuidar de si, de qualquer outro ser vivo e do ambiente.',
            ],
            alt: 'Criança da turma Sênior cuidando de uma muda em atividade prática',
          },
        ],
      },
      garden: {
        title: 'O jardim também é sala de aula.',
        paragraphs: [
          'A Senses Montessori School fica em uma bela casa no Brooklin Paulista. Temos uma área verde extensa para playground, onde crianças e bebês brincam na grama entre árvores frutíferas e flores. Em nosso jardim temos dezenas de espécies catalogadas e o som gostoso do canto dos pássaros. Nossa filosofia de ensino valoriza o contato e respeito com a natureza em sua essência. Todos os dias as crianças têm o momento de brincar no gramado, ao ar livre.',
          'Neste momento elas são livres para criar a própria brincadeira ou participar de atividades planejadas pelos professores, como práticas esportivas, experiências sensoriais ou de coordenação motora, observação de plantas e seres vivos.',
        ],
        note: 'Natureza como experiência cotidiana, não apenas cenário.',
        imageAlt:
          'Crianças correndo e brincando ao ar livre no jardim da Senses',
      },
      visit: {
        title: 'Toda casa muda quando é vivida.',
        body:
          'Venha percorrer as salas, sentir a luz, conhecer o jardim e conversar com nossa equipe sobre a experiência Montessori da Senses.',
        cta: 'Agende uma visita',
        map: 'Como chegar',
        contactLabel: 'Fale com a escola',
      },
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
        'A bilingual Montessori school where science, affection and independence are part of every discovery.',
      primaryCta: 'Discover Senses',
      secondaryCta: 'Schedule a visit',
      annotations: ['observe', 'try', 'discover'],
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
    campusPage: {
      meta: {
        title: 'Our Campus: Montessori School in Brooklin | Senses',
        description:
          'Explore Senses’ historic Brooklin home, prepared Montessori environments, naturally lit classrooms and the garden where children spend time outdoors every day.',
      },
      hero: {
        eyebrow: 'Our campus · Brooklin',
        title: 'A house with history. A garden for new discoveries.',
        lead:
          'The former home of writer and bibliophile José Mindlin continues to welcome education — now as a light-filled Montessori environment open to fresh air and nature.',
        cta: 'Schedule a visit',
        chaptersLabel: 'Chapters of the visit',
        chapters: [
          { number: '01', label: 'History', href: '#history' },
          { number: '02', label: 'Rooms', href: '#rooms' },
          { number: '03', label: 'Garden', href: '#garden' },
        ],
        roomAlt:
          'Two children working with Montessori materials in a Senses classroom',
        gardenAlt:
          'Children playing beneath a large tree in the Senses garden',
      },
      history: {
        title: 'A tradition that continues.',
        paragraphs: [
          'Our campus is also filled with history! It belonged to the renowned writer José Mindlin and was home to his famous library, the largest private library in the country, now the “Biblioteca Brasiliana Guita e José Mindlin” at the University of São Paulo (USP). Our house has its own unique tradition in education, and it inspires us to live up to it.',
          'Our classrooms have wide windows and doors facing the gardens, so every room is filled with natural sunlight and fresh air. The sight of the trees and songbirds also brings a unique feeling of comfort to day-to-day activities.',
        ],
        note: 'A house prepared to welcome knowledge — then and now.',
      },
      rooms: {
        title: 'Prepared environments for every stage.',
        intro:
          'Each room responds to the child’s stage of development, turning scale, order, materials and light into real opportunities for independence.',
        items: [
          {
            id: 'baby-scientist',
            title: 'Baby Scientist',
            age: 'The earliest months',
            paragraphs: [
              'In the first months of life, the transformations and discoveries made by babies are immeasurable. This is why, here at Senses, the environment for this age group is designed to meet not only their biological needs, but also their motor, cognitive, affective and socioemotional needs.',
              'More than spending time safely, we care for each child individually, so that stimulation happens in the right measure and at the ideal moment, based on standard and individual development benchmarks. From the clear walls to the materials that are handled, from the airy environment to the natural light that enters through the windows, everything is meant to cultivate in the child the pleasure of discovering the world.',
            ],
            alt: 'Senses babies seated in child-scale wooden furniture',
          },
          {
            id: 'junior-scientist',
            title: 'Junior Scientist',
            age: 'Up to age 3',
            paragraphs: [
              'Up to the age of three, a period called by Maria Montessori the “unconscious absorbent mind”, the accessibility of the whole environment becomes even more essential for the awakening of children’s consciousness and autonomy. At this moment, features such as body awareness, speech development and the interest in providing for some of their own needs are strengthened.',
              'Here at Senses, the room for this age group is fully prepared to stimulate the scientist in each child and promote important aspects such as respect for the human being and a sense of community. The furniture was specially designed for their sizes, as was the layout of the materials, respecting the individual pace of the students and always treating safety as an essential element.',
            ],
            alt: 'Two children in the Junior group concentrating on Montessori materials',
          },
          {
            id: 'senior-scientist',
            title: 'Senior Scientist',
            age: 'Ages 3 to 6',
            paragraphs: [
              'From three to six years of age, a period called by Maria Montessori the “conscious absorbent mind”, the development of oral and written language, the discovery of mathematics and spatial relations reach their peak.',
              'In this room, the environment aims to improve skills such as coordination, concentration, organization and accuracy. At this stage, the child actively participates in caring for oneself, other living beings and the environment.',
            ],
            alt: 'A child in the Senior group caring for a seedling during practical work',
          },
        ],
      },
      garden: {
        title: 'The garden is a classroom, too.',
        paragraphs: [
          'Senses Montessori School is located in a beautiful house in Brooklin Paulista. We have an extensive green playground where children and babies play on the grass among fruit trees and flowers. In our garden, we have dozens of catalogued species and the warm sound of birds singing. Our teaching philosophy values contact with and respect for nature in its essence.',
          'Every day children have time to play on the grass, outdoors. At this time they are free to create their own game or participate in activities planned by teachers, such as sports, sensorial or motor-skill challenges, or the observation of plants and living beings.',
        ],
        note: 'Nature as an everyday experience, not simply scenery.',
        imageAlt:
          'Children running and playing outdoors in the Senses garden',
      },
      visit: {
        title: 'Every house changes when it is lived in.',
        body:
          'Walk through the rooms, experience the light, explore the garden and speak with our team about Montessori life at Senses.',
        cta: 'Schedule a visit',
        map: 'Get directions',
        contactLabel: 'Contact the school',
      },
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

type LocalizedContent = (typeof content)[Locale];

export type PageContent = Omit<LocalizedContent, 'path' | 'alternatePath' | 'meta'> & {
  readonly path: string;
  readonly alternatePath: string;
  readonly meta: {
    readonly title: string;
    readonly description: string;
  };
};

export function getContent(locale: Locale): PageContent {
  return content[locale];
}
