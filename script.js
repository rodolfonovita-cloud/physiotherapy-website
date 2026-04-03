// Translation system
const translations = {
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-madeira': 'Madeira',
        'nav-services': 'Services',
        'nav-expertise': 'Expertise',
        'nav-contact': 'Contact',
        'hero-title': 'Move Better, Feel Stronger, Live Pain-Free',
        'hero-subtitle': 'Professional physiotherapy with evidence-based, hands-on treatment',
        'hero-book': 'Book Consultation',
        'hero-learn': 'Learn More',
        'about-title': 'About Me',
        'about-para1': 'A licensed physiotherapist with 4+ years of experience, specializing in Manual Therapy for Neuromusculoskeletal Disorders. Providing personalized care both in-clinic and at home, focusing on improving movement, strength, and reducing pain.',
        'about-para2': 'I hold a specialization in Manual Therapy for Neuromusculoskeletal Disorders and I am currently completing an advanced postgraduate program in Clinical Research and Advanced Manual Therapy.',
        'about-para3': 'My work spans across private practice, both in-clinic and home-based care, allowing me to provide personalized treatment tailored to each patient\'s needs and lifestyle.',
        'about-languages': 'Fluent in Portuguese and English, can also use translation tools to ensure clear communication with all patients.',
        'about-quote': '"Sometimes, all we need is a small push toward a pain-free life."',
        'professional-card': 'Professional Card Nº 9556',
        'professional-number': 'Nº 9556',
        'madeira-title': 'Madeira Island - Active Paradise',
        'madeira-desc': 'Madeira Island is a paradise with endless activities and breathtaking landscapes. Adventure awaits at every turn but sometimes, even in paradise, mistakes happen',
        'madeira-subtitle': 'Here to Help, Whether You\'re Visiting or Living Here',
        'madeira-para1': 'Are you here on vacation enjoying our island\'s incredible outdoor activities? Or perhaps you\'re lucky enough to call Madeira home? Whatever your situation, injuries don\'t take holidays.',
        'madeira-para2': 'From falls on our challenging trails to sprains from levadas adventures, I understand the unique demands of Madeira\'s active lifestyle. Our expertise in sports rehabilitation and manual therapy is perfectly suited to get you back to exploring our beautiful island.',
        'madeira-cta': '🌴 Don\'t let an injury ruin your Madeira experience. Stay in touch with us for expert care that understands our island\'s active lifestyle.',
        'madeira-activity-biking-title': 'Mountain Biking',
        'madeira-activity-biking-desc': 'Trail injuries & recovery',
        'madeira-activity-canyoning-title': 'Canyoning',
        'madeira-activity-canyoning-desc': 'Fall recovery & upper limb rehabilitation',
        'madeira-activity-hiking-title': 'Hiking',
        'madeira-activity-hiking-desc': 'Joint & muscle care',
        'madeira-activity-water-title': 'Water Sports',
        'madeira-activity-water-desc': 'Aquatic therapy & rehab',
        'services-title': 'What We Offer',
        'services-desc': 'I focus on evidence-based, hands-on therapy combined with individualized rehabilitation plans to ensure long-term results — not just temporary relief.',
        'service-manual-title': 'Manual Therapy',
        'service-manual-desc': 'Specialized hands-on techniques for neuromusculoskeletal disorders with advanced therapeutic approaches.',
        'service-personal-title': 'Personalized Care',
        'service-personal-desc': 'Comprehensive treatment plans featuring lifestyle modifications, patient education, and targeted exercises designed specifically for your unique needs and recovery journey.',
        'service-home-title': 'Home-Based Care',
        'service-home-desc': 'Convenient home visit services for those who prefer treatment in the comfort of their own space.',
        'service-home-quote': '"From the valley to the mountain and from the sea to the mountains. 🎶"',
        'service-collab-title': 'Collaborative Care',
        'service-collab-desc': 'Working with nurses and other healthcare specialists to provide comprehensive, coordinated treatment for complex cases.',
        'service-collab-cta': 'Do you need a Nurse?',
        'service-collab-cta2': 'Contact us',
        'expertise-title': 'Areas of Expertise',
        'expertise-sports': 'Sports Injuries',
        'expertise-sports-desc': 'Performance recovery and rehabilitation for athletes of all levels.',
        'expertise-sports-list1': '• Sprains & strains',
        'expertise-sports-list2': '• Post-surgery rehab',
        'expertise-sports-list3': '• Performance optimization',
        'expertise-geriatric': 'Geriatric Care',
        'expertise-geriatric-desc': 'Mobility improvement and quality of life enhancement for seniors.',
        'expertise-geriatric-list1': '• Fall prevention',
        'expertise-geriatric-list2': '• Gain of Mobility and Independence',
        'expertise-geriatric-list3': '• Balance training',
        'expertise-musculo': 'Musculoskeletal',
        'expertise-musculo-desc': 'Comprehensive management of chronic pain and musculoskeletal conditions.',
        'expertise-musculo-list1': '• Back & neck pain',
        'expertise-musculo-list2': '• Joint disorders',
        'expertise-musculo-list3': '• Chronic pain relief',
        'expertise-visceral': 'Visceral Osteopathy',
        'expertise-visceral-desc': 'Holistic integrative treatment approaches for whole-body wellness.',
        'expertise-visceral-list1': '• Organ mobility',
        'expertise-visceral-list2': '• Holistic assessment',
        'expertise-visceral-list3': '• Integrative therapy',
        'contact-title': 'Get in Touch',
        'contact-subtitle': 'Start Your Journey to Recovery',
        'contact-desc': 'Ready to take the first step toward a pain-free life? Contact me today to schedule your consultation.',
        'contact-name': 'Your Name',
        'contact-email': 'Your Email',
        'contact-phone': 'Your Phone',
        'contact-message': 'Tell me about your condition...',
        'contact-submit': 'Send Message',
        'contact-location': 'Rua das Hortas 55, Sala U - Clínica Médica Paulo Sales',
        'contact-homecare': 'At home based care available',
        'contact-whatsapp': 'Contact via WhatsApp',
        'footer-title': 'Physio Novita',
        'footer-tagline': 'Professional physiotherapy for a better quality of life',
        'footer-copyright': '© 2024 Physio Novita. All rights reserved.'
    },
    pt: {
        'nav-home': 'Início',
        'nav-about': 'Sobre',
        'nav-madeira': 'Madeira',
        'nav-services': 'Serviços',
        'nav-expertise': 'Especialidade',
        'nav-contact': 'Contacto',
        'hero-title': 'Mova-se Melhor, Sinta-se Mais Forte, Viva Sem Dor',
        'hero-subtitle': 'Fisioterapia profissional com tratamento baseado em evidências e terapia manual',
        'hero-book': 'Agendar Consulta',
        'hero-learn': 'Saiba Mais',
        'about-title': 'Sobre Mim',
        'about-para1': 'Fisioterapeuta licenciado com 4+ anos de experiência, especializado em Terapia Manual para Distúrbios Neuromusculoesqueléticos. Prestando cuidados personalizados tanto em clínica como em domicílio, focando na melhoria do movimento, força e redução da dor.',
        'about-languages': 'Fluente em português e inglês, pode também usar ferramentas de tradução para garantir comunicação clara com todos os pacientes.',
        'about-quote': '"Às vezes, tudo o que precisamos é de um pequeno empurrão em direção a uma vida sem dor."',
        'professional-card': 'Cédula Profissional Nº 9556',
        'professional-number': 'Nº 9556',
        'madeira-title': 'Ilha da Madeira - Paraíso Ativo',
        'madeira-desc': 'A Ilha da Madeira é um paraíso com atividades infinitas e paisagens deslumbrantes. A aventura espera a cada curva mas às vezes, mesmo no paraíso, acidentes acontecem',
        'madeira-subtitle': 'Aqui para Ajudar, Seja Você Visitante ou Morador',
        'madeira-para1': 'Está aqui de férias a desfrutar das nossas incríveis atividades ao ar livre? Ou talvez tenha a sorte de chamar a Madeira o seu lar? Seja qual for a sua situação, lesões não tiram férias.',
        'madeira-para2': 'Desde quedas nas nossas trilhas desafiadoras até entorses ao aventurar-se nas levadas, compreendo as exigências únicas do estilo de vida ativo da Madeira. A nossa especialidade em reabilitação desportiva e terapia manual é perfeitamente adequada para você voltar a explorar a nossa bela ilha.',
        'madeira-cta': '🌴 Não deixe uma lesão estragar a sua experiência na Madeira. Mantenha-se em contacto connosco para cuidados especializados que entendem o nosso estilo de vida ativo na ilha.',
        'madeira-activity-biking-title': 'BTT',
        'madeira-activity-biking-desc': 'Lesões em trilhas & recuperação',
        'madeira-activity-canyoning-title': 'Canyoning',
        'madeira-activity-canyoning-desc': 'Recuperação de quedas & reabilitação de membros superiores',
        'madeira-activity-hiking-title': 'Caminhadas',
        'madeira-activity-hiking-desc': 'Cuidados articulares & musculares',
        'madeira-activity-water-title': 'Desportos Aquáticos',
        'madeira-activity-water-desc': 'Terapia aquática & reabilitação',
        'services-title': 'O Que Oferecemos',
        'services-desc': 'Foco em terapia manual baseada em evidências combinada com planos de reabilitação individualizados para garantir resultados a longo prazo — não apenas alívio temporário.',
        'service-manual-title': 'Terapia Manual',
        'service-manual-desc': 'Técnicas manuais especializadas para distúrbios neuromusculoesqueléticos com abordagens terapêuticas avançadas.',
        'service-personal-title': 'Cuidados Personalizados',
        'service-personal-desc': 'Planos de tratamento abrangentes com modificações de estilo de vida, educação do paciente e exercícios direcionados, desenhados especificamente para as suas necessidades únicas e jornada de recuperação.',
        'service-home-title': 'Cuidados em Domicílio',
        'service-home-desc': 'Serviços convenientes de visita a domicílio para aqueles que preferem tratamento no conforto do seu próprio espaço.',
        'service-home-quote': '"Do vale à montanha e do mar à serra 🎶"',
        'service-collab-title': 'Cuidado Colaborativo',
        'service-collab-desc': 'Trabalhando com enfermeiros e outros especialistas de saúde para fornecer tratamento abrangente e coordenado para casos complexos.',
        'service-collab-cta': 'Precisa de um Enfermeiro?',
        'service-collab-cta2': 'Contacte-nos',
        'expertise-title': 'Áreas de Experiência',
        'expertise-sports': 'Lesões Desportivas',
        'expertise-sports-desc': 'Recuperação de desempenho e reabilitação para atletas de todos os níveis.',
        'expertise-sports-list1': '• Entorses & distensões',
        'expertise-sports-list2': '• Reabilitação pós-cirúrgica',
        'expertise-sports-list3': '• Otimização de desempenho',
        'expertise-geriatric': 'Cuidados Geriátricos',
        'expertise-geriatric-desc': 'Melhoria da mobilidade e qualidade de vida para idosos.',
        'expertise-geriatric-list1': '• Prevenção de quedas',
        'expertise-geriatric-list2': '• Ganhos de Mobilidade e Independência',
        'expertise-geriatric-list3': '• Treino de equilíbrio',
        'expertise-musculo': 'Musculoesquelético',
        'expertise-musculo-desc': 'Manejo abrangente de dor crónica e condições musculoesqueléticas.',
        'expertise-musculo-list1': '• Dor nas costas & pescoço',
        'expertise-musculo-list2': '• Perturbações articulares',
        'expertise-musculo-list3': '• Alívio da dor crónica',
        'expertise-visceral': 'Osteopatia Visceral',
        'expertise-visceral-desc': 'Abordagens terapêuticas integrativas holísticas para bem-estar de todo o corpo.',
        'expertise-visceral-list1': '• Mobilidade de órgãos',
        'expertise-visceral-list2': '• Avaliação holística',
        'expertise-visceral-list3': '• Terapia integrativa',
        'contact-title': 'Entre em Contacto',
        'contact-subtitle': 'Comece a Sua Jornada de Recuperação',
        'contact-desc': 'Pronto para dar o primeiro passo em direção a uma vida sem dor? Entre em contacto comigo hoje para agendar a sua consulta.',
        'contact-name': 'O seu Nome',
        'contact-email': 'O seu Email',
        'contact-phone': 'O seu Telefone',
        'contact-message': 'Conte-me sobre a sua condição...',
        'contact-submit': 'Enviar Mensagem',
        'contact-location': 'Rua das Hortas 55, Sala U - Clínica Médica Paulo Sales',
        'contact-homecare': 'Cuidados domiciliares disponíveis',
        'contact-whatsapp': 'Contactar via WhatsApp',
        'footer-title': 'Physio Novita',
        'footer-tagline': 'Fisioterapia profissional para uma melhor qualidade de vida',
        'footer-copyright': '© 2024 Physio Novita. Todos os direitos reservados.'
    },
    fr: {
        'nav-home': 'Accueil',
        'nav-about': 'À Propos',
        'nav-madeira': 'Madère',
        'nav-services': 'Services',
        'nav-expertise': 'Expertise',
        'nav-contact': 'Contact',
        'hero-title': 'Bougez Mieux, Ressentez-vous Plus Fort, Vivez Sans Douleur',
        'hero-subtitle': 'Physiothérapie professionnelle avec traitement basé sur des preuves et thérapie manuelle',
        'hero-book': 'Réserver Consultation',
        'hero-learn': 'En Savoir Plus',
        'about-title': 'À Propos de Moi',
        'about-para1': 'Un physiothérapeute agréé avec 4+ ans d\'expérience, spécialisé en Thérapie Manuelle pour les Troubles Neuromusculosquelettiques. Fournissant des soins personnalisés en cabinet et à domicile, en se concentrant sur l\'amélioration du mouvement, de la force et la réduction de la douleur.',
        'about-languages': 'Fluent en portugais et anglais, peut également utiliser des outils de traduction pour assurer une communication claire avec tous les patients.',
        'about-quote': '"Parfois, tout ce dont nous avons besoin est un petit pas vers une vie sans douleur."',
        'professional-card': 'Carte Professionnelle Nº 9556',
        'professional-number': 'Nº 9556',
        'madeira-title': 'Île de Madère - Paradis Actif',
        'madeira-desc': 'L\'île de Madère est un paradis avec des activités infinies et des paysages à couper le souffle. L\'aventure attend à chaque tournant mais parfois, même au paradis, les accidents arrivent',
        'madeira-subtitle': 'Ici pour Aider, Que Vous Soyez Visiteur ou Résident',
        'madeira-para1': 'Êtes-vous ici en vacances profitant de nos incroyables activités de plein air ? Ou peut-être avez-vous la chance d\'appeler Madère votre maison ? Quelle que soit votre situation, les blessures ne prennent pas de vacances.',
        'madeira-para2': 'Des chutes sur nos sentiers difficiles aux entorses lors d\'aventures de levadas, je comprends les exigences uniques du style de vie actif de Madère. Notre expertise en réadaptation sportive et thérapie manuelle est parfaitement adaptée pour vous remettre à explorer notre belle île.',
        'madeira-cta': '🌴 Ne laissez pas une blessure gâcher votre expérience à Madère. Contactez-nous pour des soins experts qui comprennent notre style de vie insulaire actif.',
        'madeira-activity-biking-title': 'VTT',
        'madeira-activity-biking-desc': 'Blessures de sentiers & récupération',
        'madeira-activity-canyoning-title': 'Canyoning',
        'madeira-activity-canyoning-desc': 'Récupération de chutes & réadaptation des membres supérieurs',
        'madeira-activity-hiking-title': 'Randonnée',
        'madeira-activity-hiking-desc': 'Soins articulaires & musculaires',
        'madeira-activity-water-title': 'Sports Aquatiques',
        'madeira-activity-water-desc': 'Thérapie aquatique & réadaptation',
        'services-title': 'Ce Que Nous Offrons',
        'services-desc': 'Je me concentre sur la thérapie manuelle basée sur des preuves combinée avec des plans de réadaptation individualisés pour assurer des résultats à long terme — pas seulement un soulagement temporaire.',
        'service-manual-title': 'Thérapie Manuelle',
        'service-manual-desc': 'Techniques manuelles spécialisées pour les troubles neuromusculosquelettiques avec des approches thérapeutiques avancées.',
        'service-personal-title': 'Soins Personnalisés',
        'service-personal-desc': 'Plans de traitement complets intégrant des modifications de style de vie, l\'éducation des patients et des exercices ciblés, conçus spécifiquement pour vos besoins uniques et votre parcours de récupération.',
        'service-home-title': 'Soins à Domicile',
        'service-home-desc': 'Services de visite à domicile pratiques pour ceux qui préfèrent un traitement dans le confort de leur propre espace.',
        'service-home-quote': '"De la vallée à la montagne et de la mer à la montagne. 🎶"',
        'service-collab-title': 'Soins Collaboratifs',
        'service-collab-desc': 'Travaillant avec des infirmières et d\'autres spécialistes de la santé pour fournir un traitement complet et coordonné pour les cas complexes.',
        'service-collab-cta': 'Besoin d\'une Infirmière?',
        'service-collab-cta2': 'Contactez-nous',
        'expertise-title': 'Domaines d\'Expertise',
        'expertise-sports': 'Blessures Sportives',
        'expertise-sports-desc': 'Récupération de performance et réadaptation pour athlètes de tous niveaux.',
        'expertise-sports-list1': '• Entorses & foulures',
        'expertise-sports-list2': '• Réadaptation post-chirurgicale',
        'expertise-sports-list3': '• Optimisation des performances',
        'expertise-geriatric': 'Soins Gériatriques',
        'expertise-geriatric-desc': 'Amélioration de la mobilité et qualité de vie pour les personnes âgées.',
        'expertise-geriatric-list1': '• Prévention des chutes',
        'expertise-geriatric-list2': '• Gain de Mobilité et d\'Indépendance',
        'expertise-geriatric-list3': '• Entraînement d\'équilibre',
        'expertise-musculo': 'Musculosquelettique',
        'expertise-musculo-desc': 'Gestion complète de la douleur chronique et des conditions musculosquelettiques.',
        'expertise-musculo-list1': '• Douleurs dorsales & cervicales',
        'expertise-musculo-list2': '• Troubles articulaires',
        'expertise-musculo-list3': '• Soulagement de la douleur chronique',
        'expertise-visceral': 'Ostéopathie Viscérale',
        'expertise-visceral-desc': 'Approches thérapeutiques intégratives holistiques pour le bien-être de tout le corps.',
        'expertise-visceral-list1': '• Mobilité des organes',
        'expertise-visceral-list2': '• Évaluation holistique',
        'expertise-visceral-list3': '• Thérapie intégrative',
        'contact-title': 'Contactez-nous',
        'contact-subtitle': 'Commencez Votre Voyage de Récupération',
        'contact-desc': 'Prêt à faire le premier pas vers une vie sans douleur ? Contactez-moi aujourd\'hui pour planifier votre consultation.',
        'contact-name': 'Votre Nom',
        'contact-email': 'Votre Email',
        'contact-phone': 'Votre Téléphone',
        'contact-message': 'Parlez-moi de votre condition...',
        'contact-submit': 'Envoyer le Message',
        'contact-location': 'Rua das Hortas 55, Sala U - Clínica Médica Paulo Sales',
        'contact-homecare': 'Soins à domicile disponibles',
        'contact-whatsapp': 'Contacter via WhatsApp',
        'footer-title': 'Physio Novita',
        'footer-tagline': 'Physiothérapie professionnelle pour une meilleure qualité de vie',
        'footer-copyright': '© 2024 Physio Novita. Tous droits réservés.'
    },
    de: {
        'nav-home': 'Startseite',
        'nav-about': 'Über Mich',
        'nav-madeira': 'Madeira',
        'nav-services': 'Dienstleistungen',
        'nav-expertise': 'Expertise',
        'nav-contact': 'Kontakt',
        'about-title': 'Über Mich',
        'about-para1': 'Ein lizenzierter Physiotherapeut mit 4+ Jahren Erfahrung, spezialisiert auf Manuelle Therapie bei neuromuskuloskelettalen Störungen. Bietende personalisierte Pflege sowohl in der Klinik als auch zu Hause, mit Fokus auf Verbesserung von Bewegung, Kraft und Schmerzlinderung.',
        'about-para2': 'Ich habe eine Spezialisierung in Manueller Therapie für Neuromuskuloskelettale Störungen und absolviere derzeit ein fortgeschrittenes Postgraduiertenprogramm in Klinischer Forschung und Fortgeschrittener Manueller Therapie.',
        'about-para3': 'Meine Arbeit umfasst die Privatpraxis, sowohl in der Klinik als auch bei Hausbesuchen, was es mir ermöglicht, personalisierte Behandlungen anzubieten, die auf die Bedürfnisse und den Lebensstil jedes Patienten zugeschnitten sind.',
        'about-languages': 'Fließend in Portugiesisch und Englisch, kann auch Übersetzungsdienste nutzen, um eine klare Kommunikation mit allen Patienten zu gewährleisten.',
        'about-quote': '"Manchmal brauchen wir nur einen kleinen Schubs in Richtung eines schmerzfreien Lebens."',
        'professional-card': 'Berufskarte Nº 9556',
        'professional-number': 'Nº 9556',
        'madeira-title': 'Madeira-Insel - Aktives Paradies',
        'madeira-desc': 'Die Madeira-Insel ist ein Paradies mit endlosen Aktivitäten und atemberaubenden Landschaften. Das Abenteuer wartet an jeder Ecke aber manchmal passieren selbst im Paradies Fehler',
        'madeira-subtitle': 'Hier, Um Zu Helfen, Ob Sie Besuchen Oder Wohnen',
        'madeira-para1': 'Sind Sie hier im Urlaub und genießen Sie die unglaublichen Outdoor-Aktivitäten unserer Insel? Oder haben Sie vielleicht das Glück, Madeira Ihr Zuhause zu nennen? Was auch immer Ihre Situation ist, Verletzungen machen keinen Urlaub.',
        'madeira-para2': 'Von Stürzen auf unseren anspruchsvollen Wegen bis zu Verstauchungen bei levadas Abenteuern verstehe ich die einzigartigen Anforderungen des aktiven Lebensstils von Madeira. Unsere Expertise in Sportrehabilitation und manueller Therapie ist perfekt geeignet, um Sie zurück zum Erkunden unserer schönen Insel zu bringen.',
        'madeira-cta': '🌴 Lassen Sie nicht eine Verletzung Ihr Madeira-Erlebnis ruinieren. Bleiben Sie mit uns in Kontakt für Expertenpflege, die unseren aktiven Insel-Lebensstil versteht.',
        'madeira-activity-biking-title': 'Mountainbiking',
        'madeira-activity-biking-desc': 'Wegverletzungen & Wiederherstellung',
        'madeira-activity-canyoning-title': 'Canyoning',
        'madeira-activity-canyoning-desc': 'Sturzrehabilitation & Rehabilitation der oberen Gliedmaßen',
        'madeira-activity-hiking-title': 'Wandern',
        'madeira-activity-hiking-desc': 'Gelenk- & Muskelpflege',
        'madeira-activity-water-title': 'Wassersport',
        'madeira-activity-water-desc': 'Aquatherapie & Rehabilitation',
        'services-title': 'Was Wir Bieten',
        'services-desc': 'Ich konzentriere mich auf evidenzbasierte, manuelle Therapie kombiniert mit individualisierten Rehabilitationsplänen, um langfristige Ergebnisse zu gewährleisten — nicht nur vorübergehende Linderung.',
        'service-manual-title': 'Manuelle Therapie',
        'service-manual-desc': 'Spezialisierte manuelle Techniken für neuromuskuloskelettale Störungen mit fortgeschrittenen therapeutischen Ansätzen.',
        'service-personal-title': 'Personalisierte Pflege',
        'service-personal-desc': 'Umfassende Behandlungspläne mit Lebensstiländerungen, Patientenschulung und gezielten Übungen, die speziell auf Ihre einzigartigen Bedürfnisse und Ihren Genesungsweg zugeschnitten sind.',
        'service-home-title': 'Hausbesuche',
        'service-home-desc': 'Bequeme Hausbesuchsdienste für diejenigen, die eine Behandlung im Komfort ihres eigenen Raumes bevorzugen.',
        'service-home-quote': '"Vom Tal zum Berg und vom Meer zu den Bergen. 🎶"',
        'service-collab-title': 'Zusammenarbeitende Pflege',
        'service-collab-desc': 'Zusammenarbeit mit Krankenschwestern und anderen Gesundheitsspezialisten um umfassende, koordinierte Behandlung für komplexe Fälle zu bieten.',
        'service-collab-cta': 'Benötigen Sie eine Krankenschwester?',
        'service-collab-cta2': 'Kontaktieren Sie uns',
        'expertise-title': 'Fachgebiete',
        'expertise-sports': 'Sportverletzungen',
        'expertise-sports-desc': 'Leistungs-wiederherstellung und Rehabilitation für Athleten aller Niveaus.',
        'expertise-sports-list1': '• Verstauchungen & Zerrungen',
        'expertise-sports-list2': '• Post-OP-Reha',
        'expertise-sports-list3': '• Leistungs-optimierung',
        'expertise-geriatric': 'Geriatrische Pflege',
        'expertise-geriatric-desc': 'Mobilitätsverbesserung und Lebensqualitätsverbesserung für Senioren.',
        'expertise-geriatric-list1': '• Sturzprävention',
        'expertise-geriatric-list2': '• Gewinn von Mobilität und Unabhängigkeit',
        'expertise-geriatric-list3': '• Gleichgewichtstraining',
        'expertise-musculo': 'Muskuloskelettal',
        'expertise-musculo-desc': 'Umfassendes Management von chronischen Schmerzen und muskuloskelettalen Erkrankungen.',
        'expertise-musculo-list1': '• Rücken- & Nackenschmerzen',
        'expertise-musculo-list2': '• Gelenkerkrankungen',
        'expertise-musculo-list3': '• Chronische Schmerzlinderung',
        'expertise-visceral': 'Viszerale Osteopathie',
        'expertise-visceral-desc': 'Holistische integrative Behandlungsansätze für ganzheitliches Wohlbefinden.',
        'expertise-visceral-list1': '• Organmobilität',
        'expertise-visceral-list2': '• Ganzheitliche Bewertung',
        'expertise-visceral-list3': '• Integrative Therapie',
        'contact-title': 'Kontaktieren Sie Uns',
        'contact-subtitle': 'Beginnen Sie Ihre Wiederherstellungsreise',
        'contact-desc': 'Bereit für den ersten Schritt in Richtung eines schmerzfreien Lebens? Kontaktieren Sie mich heute, um Ihren Termin zu planen.',
        'contact-name': 'Ihr Name',
        'contact-email': 'Ihre E-Mail',
        'contact-phone': 'Ihre Telefonnummer',
        'contact-message': 'Erzählen Sie mir von Ihrem Zustand...',
        'contact-submit': 'Nachricht Senden',
        'contact-location': 'Rua das Hortas 55, Sala U - Clínica Médica Paulo Sales',
        'contact-homecare': 'Hausbesuche verfügbar',
        'contact-whatsapp': 'Kontaktieren Sie uns via WhatsApp',
        'footer-title': 'Physio Novita',
        'footer-tagline': 'Professionelle Physiotherapie für eine bessere Lebensqualität',
        'footer-copyright': '© 2024 Physio Novita. Alle Rechte vorbehalten.'
    },
    es: {
        'nav-home': 'Inicio',
        'nav-about': 'Acerca de Mí',
        'nav-madeira': 'Madeira',
        'nav-services': 'Servicios',
'nav-expertise': 'Experiencia',
'nav-contact': 'Contacto',
'hero-title': 'Muévete Mejor, Siéntete Más Fuerte, Vive Sin Dolor',
'hero-subtitle': 'Fisioterapia profesional con tratamiento basado en evidencia y terapia manual',
'hero-book': 'Reservar Consulta',
'hero-learn': 'Aprende Más',
'about-title': 'Acerca de Mí',
'about-para1': 'Un fisioterapeuta licenciado con 4+ años de experiencia, especializado en Terapia Manual para Trastornos Neuromusculoesqueléticos. Proporcionando atención personalizada tanto en clínica como en domicilio, enfocándose en mejorar el movimiento, la fuerza y reducir el dolor.',
'about-languages': 'Fluente en portugués e inglés, también puede usar herramientas de traducción para garantizar una comunicación clara con todos los pacientes.',
'about-quote': '"A veces, todo lo que necesitamos es un pequeño empujón hacia una vida sin dolor."',
        'professional-card': 'Tarjeta Profesional Nº 9556',
        'professional-number': 'Nº 9556',
'madeira-title': 'Isla de Madeira - Paraíso Activo',
'service-personal-desc': 'Planes de tratamiento individualizados adaptados a tus necesidades específicas, estilo de vida y objetivos de recuperación.',
'service-home-title': 'Atención a Domicilio',
'service-home-desc': 'Servicios convenientes de visita a domicilio para aquellos que prefieren tratamiento en la comodidad de su propio espacio.',
'expertise-title': 'Áreas de Experiencia',
'expertise-sports': 'Lesiones Deportivas',
'expertise-sports-desc': 'Recuperación de rendimiento y rehabilitación para atletas de todos los niveles.',
'expertise-sports-list1': '• Esguinces & distensiones',
'expertise-sports-list2': '• Rehabilitación post-cirugía',
'expertise-sports-list3': '• Optimización del rendimiento',
'expertise-geriatric': 'Cuidados Geriátricos',
'expertise-geriatric-desc': 'Mejora de la movilidad y calidad de vida para personas mayores.',
'expertise-geriatric-list1': '• Prevención de caídas',
'expertise-geriatric-list2': '• Ganhos de Movilidad e Independencia',
'expertise-geriatric-list3': '• Entrenamiento de equilibrio',
'expertise-musculo': 'Musculoesquelético',
'expertise-musculo-desc': 'Manejo integral del dolor crónico y condiciones musculoesqueléticas.',
'expertise-musculo-list1': '• Dolor de espalda & cuello',
'expertise-musculo-list2': '• Trastornos articulares',
'expertise-musculo-list3': '• Alivio del dolor crónico',
'expertise-visceral': 'Osteopatía Visceral',
'expertise-visceral-desc': 'Enfoques terapéuticos integrativos holísticos para el bienestar de todo el cuerpo.',
'expertise-visceral-list1': '• Movilidad de órganos',
'expertise-visceral-list2': '• Evaluación holística',
'expertise-visceral-list3': '• Terapia integrativa',
'contact-title': 'Ponte en Contacto',
'contact-subtitle': 'Comienza Tu Viaje de Recuperación',
'contact-desc': '¿Listo para dar el primer paso hacia una vida sin dolor? Contáctame hoy para programar tu consulta.',
'contact-name': 'Tu Nombre',
'contact-email': 'Tu Correo',
'contact-phone': 'Tu Teléfono',
'contact-message': 'Háblame de tu condición...',
        'madeira-para2': 'Desde lesiones de mountain biking en nuestros senderos desafiantes hasta tensiones de canyoning en aventuras de levadas, entiendo las demandas únicas del estilo de vida activo de Madeira. Nuestra experiencia en rehabilitación deportiva y terapia manual es perfectamente adecuada para devolverte la exploración de nuestra hermosa isla.',
        'madeira-cta': '🌴 No dejes que una lesión arruine tu experiencia en Madeira. Mantente en contacto con nosotros para atención experta que entiende nuestro estilo de vida activo en la isla.',
        'madeira-activity-biking-title': 'Mountain Biking',
        'madeira-activity-biking-desc': 'Lesiones de senderos & recuperación',
        'madeira-activity-canyoning-title': 'Canyoning',
        'madeira-activity-canyoning-desc': 'Recuperación de caídas & rehabilitación de extremidades superiores',
        'madeira-activity-hiking-title': 'Senderismo',
        'madeira-activity-hiking-desc': 'Cuidado articular & muscular',
        'madeira-activity-water-title': 'Deportes Acuáticos',
        'madeira-activity-water-desc': 'Terapia acuática & rehabilitación',
        'services-title': 'Lo Que Ofrecemos',
        'services-desc': 'Me concentro en terapia manual basada en evidencia combinada con planes de rehabilitación individualizados para garantizar resultados a largo plazo — no solo alivio temporal.',
        'service-manual-title': 'Terapia Manual',
        'service-manual-desc': 'Técnicas manuales especializadas para trastornos neuromusculoesqueléticos con enfoques terapéuticos avanzados.',
        'service-personal-title': 'Atención Personalizada',
        'service-personal-desc': 'Planes de tratamiento integrales que incluyen modificaciones de estilo de vida, educación del paciente y ejercicios específicos, diseñados especialmente para tus necesidades únicas y tu camino de recuperación.',
        'service-home-title': 'Atención a Domicilio',
        'service-home-desc': 'Servicios convenientes de visita a domicilio para aquellos que prefieren tratamiento en la comodidad de su propio espacio.',
        'service-home-quote': '"Del valle a la montaña y del mar a las montañas. 🎶"',
        'service-collab-title': 'Atención Colaborativa',
        'service-collab-desc': 'Trabajando con enfermeras y otros especialistas de la salud para proporcionar tratamiento integral y coordinado para casos complejos.',
        'service-collab-cta': '¿Necesita una Enfermera?',
        'service-collab-cta2': 'Contáctenos',
        'expertise-title': 'Áreas de Experiencia',
        'expertise-sports': 'Lesiones Deportivas',
        'expertise-sports-desc': 'Recuperación de rendimiento y rehabilitación para atletas de todos los niveles.',
        'expertise-sports-list1': '• Esguinces & distensiones',
        'expertise-sports-list2': '• Rehabilitación post-cirugía',
        'expertise-sports-list3': '• Optimización del rendimiento',
        'expertise-geriatric': 'Cuidados Geriátricos',
        'expertise-geriatric-desc': 'Mejora de la movilidad y calidad de vida para personas mayores.',
        'expertise-geriatric-list1': '• Prevención de caídas',
        'expertise-geriatric-list2': '• Ganhos de Movilidad e Independencia',
        'expertise-geriatric-list3': '• Entrenamiento de equilibrio',
        'expertise-musculo': 'Musculoesquelético',
        'expertise-musculo-desc': 'Manejo integral del dolor crónico y condiciones musculoesqueléticas.',
        'expertise-musculo-list1': '• Dolor de espalda & cuello',
        'expertise-musculo-list2': '• Trastornos articulares',
        'expertise-musculo-list3': '• Alivio del dolor crónico',
        'expertise-visceral': 'Osteopatía Visceral',
        'expertise-visceral-desc': 'Enfoques terapéuticos integrativos holísticos para el bienestar de todo el cuerpo.',
        'expertise-visceral-list1': '• Movilidad de órganos',
        'expertise-visceral-list2': '• Evaluación holística',
        'expertise-visceral-list3': '• Terapia integrativa',
        'contact-title': 'Ponte en Contacto',
        'contact-subtitle': 'Comienza Tu Viaje de Recuperación',
        'contact-desc': '¿Listo para dar el primer paso hacia una vida sin dolor? Contáctame hoy para programar tu consulta.',
        'contact-name': 'Tu Nombre',
        'contact-email': 'Tu Correo',
        'contact-phone': 'Tu Teléfono',
        'contact-message': 'Háblame de tu condición...',
        'contact-submit': 'Enviar Mensaje',
        'contact-location': 'Rua das Hortas 55, Sala U - Clínica Médica Paulo Sales',
        'contact-homecare': 'Atención a domicilio disponible',
        'contact-whatsapp': 'Contactar vía WhatsApp',
        'footer-title': 'Physio Novita',
        'footer-tagline': 'Fisioterapia profesional para una mejor calidad de vida',
        'footer-copyright': '© 2024 Physio Novita. Todos los derechos reservados.'
    }
};

let currentLanguage = 'en';

// Language switcher functionality
const languageBtn = document.getElementById('language-btn');
const languageDropdown = document.getElementById('language-dropdown');
const currentLangSpan = document.getElementById('current-lang');

// Toggle language dropdown
function toggleLanguageDropdown() {
    const languageDropdown = document.getElementById('language-dropdown');
    if (languageDropdown) {
        languageDropdown.classList.toggle('hidden');
    }
}

// Toggle language dropdown
languageBtn.addEventListener('click', () => {
    languageDropdown.classList.toggle('hidden');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
        languageDropdown.classList.add('hidden');
    }
});

// Handle language selection
document.querySelectorAll('.lang-option').forEach(button => {
    button.addEventListener('click', () => {
        const selectedLang = button.dataset.lang;
        changeLanguage(selectedLang);
        languageDropdown.classList.add('hidden');
    });
});

// Handle mobile language selection
document.querySelectorAll('.mobile-lang-option').forEach(button => {
    button.addEventListener('click', () => {
        const selectedLang = button.dataset.lang;
        changeLanguage(selectedLang);
        hideMobileLanguageDropdown();
    });
});

function changeLanguage(lang) {
    currentLanguage = lang;
    currentLangSpan.textContent = lang.toUpperCase();
    
    // Update mobile language display
    const mobileCurrentLangSpan = document.getElementById('mobile-current-lang');
    if (mobileCurrentLangSpan) {
        mobileCurrentLangSpan.textContent = lang.toUpperCase();
    }
    
    // Hide mobile language dropdown after selection
    hideMobileLanguageDropdown();
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update all elements with data-translate-placeholder attribute
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.dataset.translatePlaceholder;
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update page title
    document.title = lang === 'en' ? 'Physiotherapy Clinic - Professional Care' :
                    lang === 'pt' ? 'Clínica de Fisioterapia - Cuidados Profissionais' :
                    lang === 'fr' ? 'Clinique de Physiothérapie - Soins Professionnels' :
                    lang === 'de' ? 'Physiotherapie-Klinik - Professionelle Pflege' :
                    'Clínica de Fisioterapia - Atención Profesional';
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Load saved language preference
function loadLanguagePreference() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLang);
}

// Simple mobile functions for onclick
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLanguageDropdown = document.getElementById('mobile-language-dropdown');
    
    // Close language dropdown when opening menu
    if (mobileLanguageDropdown && !mobileLanguageDropdown.classList.contains('hidden')) {
        mobileLanguageDropdown.classList.add('hidden');
    }
    
    // Toggle menu
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

function toggleMobileLanguage() {
    const mobileLanguageDropdown = document.getElementById('mobile-language-dropdown');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Close menu when opening language dropdown
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
    
    // Toggle language dropdown
    if (mobileLanguageDropdown) {
        mobileLanguageDropdown.classList.toggle('hidden');
    }
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLanguageDropdown = document.getElementById('mobile-language-dropdown');
    const mobileMenuButton = event.target.closest('button[onclick*="toggleMobileMenu"]');
    const mobileLanguageButton = event.target.closest('button[onclick*="toggleMobileLanguage"]');
    
    // Close menu if clicking outside
    if (!event.target.closest('#mobile-menu') && !mobileMenuButton && mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
    
    // Close language dropdown if clicking outside
    if (!event.target.closest('#mobile-language-dropdown') && !mobileLanguageButton && mobileLanguageDropdown && !mobileLanguageDropdown.classList.contains('hidden')) {
        mobileLanguageDropdown.classList.add('hidden');
    }
});

// Hide mobile language dropdown after selection
function hideMobileLanguageDropdown() {
    const mobileLanguageDropdown = document.getElementById('mobile-language-dropdown');
    if (mobileLanguageDropdown) {
        mobileLanguageDropdown.classList.add('hidden');
    }
}

// Initialize language system
document.addEventListener('DOMContentLoaded', () => {
    loadLanguagePreference();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Mobile menu button clicked'); // Debug
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Mobile menu link clicked'); // Debug
                mobileMenu.classList.add('hidden');
            });
        });

        // Close mobile menu when clicking outside (but not on language dropdown)
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && !mobileLanguageBtn.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Mobile language dropdown (separate from mobile menu)
    const mobileLanguageBtn = document.getElementById('mobile-language-btn');
    const mobileLanguageDropdown = document.getElementById('mobile-language-dropdown');

    if (mobileLanguageBtn && mobileLanguageDropdown) {
        mobileLanguageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Mobile language button clicked'); // Debug
            mobileLanguageDropdown.classList.toggle('hidden');
        });

        // Mobile language options
        const mobileLangOptions = mobileLanguageDropdown.querySelectorAll('.mobile-lang-option');
        mobileLangOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Mobile language option clicked'); // Debug
                const lang = option.getAttribute('data-lang');
                changeLanguage(lang);
                mobileLanguageDropdown.classList.add('hidden');
            });
        });

        // Close mobile language dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileLanguageBtn.contains(e.target) && !mobileLanguageDropdown.contains(e.target)) {
                mobileLanguageDropdown.classList.add('hidden');
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Fade in elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Initialize language preference when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure DOM is fully loaded
    setTimeout(() => {
        loadLanguagePreference();
        // Double-check language persistence after 2 seconds
        setTimeout(() => {
            const savedLang = localStorage.getItem('preferredLanguage') || 'en';
            if (currentLanguage !== savedLang) {
                changeLanguage(savedLang);
            }
        }, 2000);
    }, 100);
});
