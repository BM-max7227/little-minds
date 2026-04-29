export interface HelplineEntry {
  name: string;
  phone?: string;
  text?: string;
  url?: string;
  description?: string;
}

export interface CountryHelplines {
  country: string;
  code: string;
  emergency: string;
  helplines: HelplineEntry[];
  directories: { name: string; url: string }[];
}

export const crisisHelplines: CountryHelplines[] = [
  {
    country: "United Kingdom",
    code: "GB",
    emergency: "999",
    helplines: [
      { name: "Childline", phone: "0800 1111", url: "https://www.childline.org.uk", description: "Free helpline for children and young people" },
      { name: "Samaritans", phone: "116 123", url: "https://www.samaritans.org", description: "24/7 emotional support" },
      { name: "Young Minds Crisis Messenger", text: "Text YM to 85258", url: "https://www.youngminds.org.uk", description: "Free 24/7 text support for young people" },
      { name: "SHOUT Crisis Text Line", text: "Text SHOUT to 85258", url: "https://giveusashout.org", description: "Free 24/7 text support" },
    ],
    directories: [
      { name: "NHS Mental Health Services", url: "https://www.nhs.uk/mental-health/children-and-young-adults/mental-health-support/" },
      { name: "Counselling Directory", url: "https://www.counselling-directory.org.uk" },
    ],
  },
  {
    country: "United States",
    code: "US",
    emergency: "911",
    helplines: [
      { name: "988 Suicide & Crisis Lifeline", phone: "988", url: "https://988lifeline.org", description: "24/7 crisis support for all ages" },
      { name: "Crisis Text Line", text: "Text HOME to 741741", url: "https://www.crisistextline.org", description: "Free 24/7 text support" },
      { name: "Childhelp National Child Abuse Hotline", phone: "1-800-422-4453", url: "https://www.childhelp.org", description: "24/7 help for children in abuse situations" },
      { name: "NAMI Helpline", phone: "1-800-950-6264", url: "https://www.nami.org", description: "Mental health information and referrals" },
    ],
    directories: [
      { name: "Psychology Today Therapist Finder", url: "https://www.psychologytoday.com/us/therapists" },
      { name: "SAMHSA Treatment Locator", url: "https://findtreatment.gov" },
    ],
  },
  {
    country: "Canada",
    code: "CA",
    emergency: "911",
    helplines: [
      { name: "Kids Help Phone", phone: "1-800-668-6868", text: "Text CONNECT to 686868", url: "https://kidshelpphone.ca", description: "24/7 support for young people" },
      { name: "Crisis Services Canada", phone: "1-833-456-4566", text: "Text 45645", url: "https://www.crisisservicescanada.ca", description: "24/7 crisis support" },
    ],
    directories: [
      { name: "Psychology Today Canada", url: "https://www.psychologytoday.com/ca/therapists" },
    ],
  },
  {
    country: "Australia",
    code: "AU",
    emergency: "000",
    helplines: [
      { name: "Kids Helpline", phone: "1800 55 1800", url: "https://kidshelpline.com.au", description: "24/7 support for young people aged 5 to 25" },
      { name: "Beyond Blue", phone: "1300 22 4636", url: "https://www.beyondblue.org.au", description: "Anxiety and depression support" },
      { name: "Lifeline", phone: "13 11 14", text: "Text 0477 13 11 14", url: "https://www.lifeline.org.au", description: "24/7 crisis support" },
    ],
    directories: [
      { name: "Medicare Mental Health", url: "https://www.medicarementalhealth.gov.au" },
    ],
  },
  {
    country: "New Zealand",
    code: "NZ",
    emergency: "111",
    helplines: [
      { name: "Youthline", phone: "0800 376 633", text: "Text 234", url: "https://www.youthline.co.nz", description: "Support for young people" },
      { name: "What's Up", phone: "0800 942 8787", url: "https://www.whatsup.co.nz", description: "Helpline for children and teens" },
      { name: "Lifeline NZ", phone: "0800 543 354", url: "https://www.lifeline.org.nz", description: "24/7 crisis support" },
    ],
    directories: [
      { name: "Mental Health Foundation NZ", url: "https://mentalhealth.org.nz" },
    ],
  },
  {
    country: "Ireland",
    code: "IE",
    emergency: "112 / 999",
    helplines: [
      { name: "Childline Ireland", phone: "1800 66 66 66", url: "https://www.childline.ie", description: "Free helpline for children and young people" },
      { name: "Samaritans Ireland", phone: "116 123", url: "https://www.samaritans.org", description: "24/7 emotional support" },
      { name: "Jigsaw", url: "https://jigsaw.ie", description: "Youth mental health support" },
    ],
    directories: [
      { name: "HSE Mental Health Services", url: "https://www2.hse.ie/mental-health/" },
    ],
  },
  {
    country: "South Africa",
    code: "ZA",
    emergency: "10111",
    helplines: [
      { name: "Childline South Africa", phone: "116", url: "https://www.childlinesa.org.za", description: "Free helpline for children" },
      { name: "SADAG", phone: "0800 567 567", url: "https://www.sadag.org", description: "Depression and anxiety support" },
      { name: "Lifeline South Africa", phone: "0861 322 322", url: "https://lifelinesa.co.za", description: "24/7 crisis support" },
    ],
    directories: [
      { name: "SADAG Find Help", url: "https://www.sadag.org/index.php?option=com_content&view=article&id=2841&Itemid=494" },
    ],
  },
  {
    country: "India",
    code: "IN",
    emergency: "112",
    helplines: [
      { name: "Childline India", phone: "1098", description: "24/7 government helpline for children in distress" },
      { name: "iCall", phone: "9152987821", url: "https://icallhelpline.org", description: "Psychosocial support helpline" },
      { name: "Vandrevala Foundation", phone: "1860 2662 345", url: "https://www.vandrevalafoundation.com", description: "24/7 mental health support" },
    ],
    directories: [
      { name: "NIMHANS", url: "https://nimhans.ac.in" },
    ],
  },
  {
    country: "Germany",
    code: "DE",
    emergency: "112",
    helplines: [
      { name: "Nummer gegen Kummer (Kids)", phone: "116 111", url: "https://www.nummergegenkummer.de", description: "Helpline for children and teens" },
      { name: "Telefonseelsorge", phone: "0800 111 0 111", url: "https://www.telefonseelsorge.de", description: "24/7 crisis support" },
    ],
    directories: [
      { name: "Deutsche Depressionshilfe", url: "https://www.deutsche-depressionshilfe.de" },
    ],
  },
  {
    country: "France",
    code: "FR",
    emergency: "112",
    helplines: [
      { name: "3114 National Suicide Prevention Number", phone: "3114", url: "https://3114.fr", description: "Free 24/7 suicide prevention support across France" },
      { name: "Fil Santé Jeunes", phone: "0 800 235 236", url: "https://www.filsantejeunes.com", description: "Free anonymous support for young people ages 12–25, 9am–11pm" },
      { name: "SOS Amitié", phone: "09 72 39 40 50", url: "https://www.sosamitie.org/besoin-aide/telephone", description: "Emotional listening support from trained volunteers" },
    ],
    directories: [
      { name: "Psycom", url: "https://www.psycom.org" },
    ],
  },
  {
    country: "Netherlands",
    code: "NL",
    emergency: "112",
    helplines: [
      { name: "Kindertelefoon", phone: "0800 0432", url: "https://www.kindertelefoon.nl", description: "Helpline for children" },
      { name: "113 Zelfmoordpreventie", phone: "0900 0113", url: "https://www.113.nl", description: "Crisis support" },
    ],
    directories: [
      { name: "GGZ Netherlands", url: "https://www.ggzstandaarden.nl" },
    ],
  },
  {
    country: "Spain",
    code: "ES",
    emergency: "112",
    helplines: [
      { name: "Teléfono de la Esperanza", phone: "717 003 717", url: "https://www.telefonodelaesperanza.org", description: "Emotional crisis support" },
      { name: "ANAR Foundation (Children)", phone: "900 20 20 10", url: "https://www.anar.org", description: "Helpline for children and teens" },
    ],
    directories: [
      { name: "ANAR Foundation", url: "https://www.anar.org" },
    ],
  },
  {
    country: "Italy",
    code: "IT",
    emergency: "112",
    helplines: [
      { name: "Telefono Azzurro (Children)", phone: "19696", url: "https://www.azzurro.it", description: "Helpline for children and teens" },
      { name: "Telefono Amico", phone: "02 2327 2327", url: "https://www.telefonoamico.it", description: "Emotional support helpline" },
    ],
    directories: [],
  },
  {
    country: "Japan",
    code: "JP",
    emergency: "110",
    helplines: [
      { name: "Childline Japan", phone: "0120 99 7777", url: "https://childline.or.jp", description: "Free helpline for children" },
      { name: "TELL Lifeline", phone: "03-5774-0992", url: "https://telljp.com", description: "Support in English and Japanese" },
    ],
    directories: [
      { name: "TELL Japan", url: "https://telljp.com" },
    ],
  },
  {
    country: "Brazil",
    code: "BR",
    emergency: "190",
    helplines: [
      { name: "CVV (Centro de Valorização da Vida)", phone: "188", url: "https://www.cvv.org.br", description: "24/7 emotional support" },
      { name: "Disque 100 (Children)", phone: "100", description: "Helpline for children's rights" },
    ],
    directories: [],
  },
  {
    country: "Mexico",
    code: "MX",
    emergency: "911",
    helplines: [
      { name: "Línea de la Vida", phone: "800 911 2000", description: "24/7 crisis support" },
      { name: "SAPTEL", phone: "55 5259 8121", url: "https://www.saptel.org.mx", description: "Emotional support helpline" },
    ],
    directories: [],
  },
  {
    country: "Philippines",
    code: "PH",
    emergency: "911",
    helplines: [
      { name: "Bantay Bata (Children)", phone: "163", url: "https://bantaybata163.com", description: "Child welfare helpline" },
      { name: "NCMH Crisis Hotline", phone: "0917-899-8727", description: "Mental health crisis support" },
    ],
    directories: [],
  },
  {
    country: "Singapore",
    code: "SG",
    emergency: "999",
    helplines: [
      { name: "Tinkle Friend (Children)", phone: "1800 274 4788", url: "https://www.tinklefriend.sg", description: "Helpline for primary school children" },
      { name: "Samaritans of Singapore", phone: "1-767", url: "https://www.sos.org.sg", description: "24/7 crisis support" },
    ],
    directories: [],
  },
  {
    country: "Malaysia",
    code: "MY",
    emergency: "999",
    helplines: [
      { name: "Talian Kasih (Children)", phone: "15999", description: "Help for women and children" },
      { name: "Befrienders KL", phone: "03-7627 2929", url: "https://www.befrienders.org.my", description: "24/7 emotional support" },
    ],
    directories: [],
  },
  {
    country: "United Arab Emirates",
    code: "AE",
    emergency: "999",
    helplines: [
      { name: "Child Protection Hotline", phone: "800 988", description: "Child safety and protection" },
      { name: "Mental Health Helpline", phone: "800 4673", description: "Dubai Health Authority mental health support" },
    ],
    directories: [],
  },
  {
    country: "Sweden",
    code: "SE",
    emergency: "112",
    helplines: [
      { name: "BRIS (Children)", phone: "116 111", url: "https://www.bris.se", description: "Helpline for children and young people" },
      { name: "Mind Självmordslinjen", phone: "90101", url: "https://mind.se", description: "Crisis support" },
    ],
    directories: [],
  },
  {
    country: "Norway",
    code: "NO",
    emergency: "112",
    helplines: [
      { name: "Alarmtelefonen for barn og unge", phone: "116 111", url: "https://www.116111.no", description: "Helpline for children and young people" },
      { name: "Mental Helse", phone: "116 123", url: "https://www.mentalhelse.no", description: "Mental health support" },
    ],
    directories: [],
  },
  {
    country: "Denmark",
    code: "DK",
    emergency: "112",
    helplines: [
      { name: "Børnetelefonen", phone: "116 111", url: "https://bornetelefonen.dk", description: "Helpline for children" },
      { name: "Livslinien", phone: "70 201 201", url: "https://www.livslinien.dk", description: "Crisis support" },
    ],
    directories: [],
  },
  {
    country: "Finland",
    code: "FI",
    emergency: "112",
    helplines: [
      { name: "MLL Children's Phone", phone: "116 111", url: "https://www.mll.fi", description: "Helpline for children and young people" },
      { name: "Crisis Helpline", phone: "09 2525 0111", url: "https://mieli.fi", description: "Mental health crisis support" },
    ],
    directories: [],
  },
  {
    country: "Poland",
    code: "PL",
    emergency: "112",
    helplines: [
      { name: "Telefon Zaufania dla Dzieci", phone: "116 111", description: "Helpline for children and young people" },
      { name: "Telefon Zaufania", phone: "116 123", description: "Crisis support" },
    ],
    directories: [],
  },
  {
    country: "Portugal",
    code: "PT",
    emergency: "112",
    helplines: [
      { name: "SOS Criança", phone: "116 111", description: "Helpline for children" },
      { name: "SOS Voz Amiga", phone: "213 544 545", description: "Emotional support" },
    ],
    directories: [],
  },
  {
    country: "Kenya",
    code: "KE",
    emergency: "999",
    helplines: [
      { name: "Childline Kenya", phone: "116", url: "https://www.childlinekenya.co.ke", description: "Free helpline for children" },
      { name: "Befrienders Kenya", phone: "+254 722 178 177", description: "Crisis support" },
    ],
    directories: [],
  },
  {
    country: "Nigeria",
    code: "NG",
    emergency: "112",
    helplines: [
      { name: "SURPIN", phone: "+234 806 210 6493", description: "Suicide prevention helpline" },
      { name: "Mental Health Foundation Nigeria", phone: "+234 809 111 6264", description: "Mental health support" },
    ],
    directories: [],
  },
  {
    country: "Pakistan",
    code: "PK",
    emergency: "115",
    helplines: [
      { name: "Umang Helpline", phone: "0311 7786264", description: "Mental health support" },
      { name: "Rozan Counselling", phone: "0800 22444", url: "https://rozan.org", description: "Support for children and families" },
    ],
    directories: [],
  },
  {
    country: "South Korea",
    code: "KR",
    emergency: "112",
    helplines: [
      { name: "Child Emergency Hotline", phone: "112", description: "Child abuse and emergency support" },
      { name: "Mental Health Crisis Line", phone: "1577-0199", description: "24/7 mental health support" },
    ],
    directories: [],
  },
  {
    country: "Argentina",
    code: "AR",
    emergency: "911",
    helplines: [
      { name: "Centro de Asistencia al Suicida", phone: "135", url: "https://www.asistenciaalsuicida.org.ar", description: "24/7 suicide prevention" },
      { name: "Línea 102 (Children)", phone: "102", description: "Helpline for children and teens" },
    ],
    directories: [],
  },
  {
    country: "Chile",
    code: "CL",
    emergency: "131",
    helplines: [
      { name: "Fono Infancia", phone: "800 200 818", url: "https://www.fonoinfancia.cl", description: "Support for children and families" },
      { name: "Salud Responde", phone: "600 360 7777", description: "Health and mental health support" },
    ],
    directories: [],
  },
  {
    country: "Colombia",
    code: "CO",
    emergency: "123",
    helplines: [
      { name: "Línea 106 (Children)", phone: "106", description: "Helpline for children and teens" },
      { name: "Línea 141 ICBF", phone: "141", description: "Child welfare support" },
    ],
    directories: [],
  },
  {
    country: "Peru",
    code: "PE",
    emergency: "105",
    helplines: [
      { name: "Línea 100", phone: "100", description: "Family violence and child abuse helpline" },
      { name: "Infosalud", phone: "113", description: "Mental health support" },
    ],
    directories: [],
  },
  {
    country: "Ecuador",
    code: "EC",
    emergency: "911",
    helplines: [
      { name: "Línea 100 (DINAPEN)", phone: "100", description: "Child protection helpline" },
    ],
    directories: [],
  },
  {
    country: "Venezuela",
    code: "VE",
    emergency: "911",
    helplines: [
      { name: "CECODAP", phone: "0212-951-5798", url: "https://cecodap.org", description: "Children's rights and wellbeing" },
    ],
    directories: [],
  },
  {
    country: "Costa Rica",
    code: "CR",
    emergency: "911",
    helplines: [
      { name: "Línea 1147 (Children)", phone: "1147", description: "Helpline for children and teens" },
      { name: "Aquí Estoy", phone: "2272-3774", description: "Emotional crisis support" },
    ],
    directories: [],
  },
  {
    country: "Uruguay",
    code: "UY",
    emergency: "911",
    helplines: [
      { name: "Línea Azul (Children)", phone: "0800 5050", description: "Child abuse and support helpline" },
      { name: "Último Recurso", phone: "0800 0767", url: "https://www.ultimorecurso.com.uy", description: "Crisis support" },
    ],
    directories: [],
  },
  {
    country: "Paraguay",
    code: "PY",
    emergency: "911",
    helplines: [
      { name: "Fono Ayuda (Children)", phone: "147", description: "Helpline for children and families" },
    ],
    directories: [],
  },
  {
    country: "Bolivia",
    code: "BO",
    emergency: "110",
    helplines: [
      { name: "Línea 156 (Children)", phone: "156", description: "Child protection helpline" },
    ],
    directories: [],
  },
  {
    country: "Guatemala",
    code: "GT",
    emergency: "110",
    helplines: [
      { name: "Línea 1546 PGN", phone: "1546", description: "Child protection helpline" },
    ],
    directories: [],
  },
  {
    country: "Panama",
    code: "PA",
    emergency: "911",
    helplines: [
      { name: "Línea 147 (Children)", phone: "147", description: "Child and family support" },
    ],
    directories: [],
  },
  {
    country: "Dominican Republic",
    code: "DO",
    emergency: "911",
    helplines: [
      { name: "Línea Vida", phone: "1-809-200-0711", description: "Emotional crisis support" },
      { name: "CONANI Línea de Protección", phone: "809-227-7700", description: "Child protection" },
    ],
    directories: [],
  },
  {
    country: "Austria",
    code: "AT",
    emergency: "112",
    helplines: [
      { name: "Rat auf Draht (Children)", phone: "147", url: "https://www.rataufdraht.at", description: "Helpline for children and teens" },
      { name: "Telefonseelsorge", phone: "142", description: "24/7 crisis support" },
    ],
    directories: [],
  },
  {
    country: "Switzerland",
    code: "CH",
    emergency: "112",
    helplines: [
      { name: "Pro Juventute (Children)", phone: "147", url: "https://www.projuventute.ch", description: "Helpline for children and teens" },
      { name: "Die Dargebotene Hand", phone: "143", url: "https://www.143.ch", description: "24/7 crisis support" },
    ],
    directories: [],
  },
  {
    country: "Belgium",
    code: "BE",
    emergency: "112",
    helplines: [
      { name: "Awel (Children)", phone: "102", url: "https://www.awel.be", description: "Helpline for children and teens" },
      { name: "Centre de Prévention du Suicide", phone: "0800 32 123", url: "https://www.preventionsuicide.be", description: "Crisis support (French)" },
      { name: "Zelfmoordlijn", phone: "1813", url: "https://www.zelfmoord1813.be", description: "Crisis support (Dutch)" },
    ],
    directories: [],
  },
  {
    country: "Czech Republic",
    code: "CZ",
    emergency: "112",
    helplines: [
      { name: "Linka bezpečí (Children)", phone: "116 111", url: "https://www.linkabezpeci.cz", description: "Safety line for children" },
      { name: "Linka duševní tísně", phone: "116 123", description: "Mental distress helpline" },
    ],
    directories: [],
  },
  {
    country: "Slovakia",
    code: "SK",
    emergency: "112",
    helplines: [
      { name: "Linka detskej istoty (Children)", phone: "116 111", url: "https://www.ldi.sk", description: "Child safety line" },
      { name: "Linka dôvery", phone: "116 123", description: "Crisis helpline" },
    ],
    directories: [],
  },
  {
    country: "Hungary",
    code: "HU",
    emergency: "112",
    helplines: [
      { name: "Kék Vonal (Children)", phone: "116 111", url: "https://www.kek-vonal.hu", description: "Helpline for children" },
      { name: "Lelki Elsősegély", phone: "116 123", description: "Emotional first aid" },
    ],
    directories: [],
  },
  {
    country: "Romania",
    code: "RO",
    emergency: "112",
    helplines: [
      { name: "Telefonul Copilului (Children)", phone: "116 111", url: "https://www.telefonulcopilului.ro", description: "Child helpline" },
      { name: "Telefonul Sufletului", phone: "116 123", description: "Emotional support" },
    ],
    directories: [],
  },
  {
    country: "Bulgaria",
    code: "BG",
    emergency: "112",
    helplines: [
      { name: "National Child Helpline", phone: "116 111", description: "Helpline for children" },
      { name: "Crisis Line", phone: "116 123", description: "Emotional crisis support" },
    ],
    directories: [],
  },
  {
    country: "Croatia",
    code: "HR",
    emergency: "112",
    helplines: [
      { name: "Hrabri Telefon (Children)", phone: "116 111", url: "https://www.hrabritelefon.hr", description: "Helpline for children" },
    ],
    directories: [],
  },
  {
    country: "Serbia",
    code: "RS",
    emergency: "112",
    helplines: [
      { name: "Nadel (Children)", phone: "116 111", description: "Helpline for children" },
      { name: "Centar Srce", phone: "0800 300 303", url: "https://www.centarsrce.org", description: "Emotional support" },
    ],
    directories: [],
  },
  {
    country: "Slovenia",
    code: "SI",
    emergency: "112",
    helplines: [
      { name: "TOM Telefon (Children)", phone: "116 111", url: "https://www.e-tom.si", description: "Helpline for children and teens" },
      { name: "Zaupni telefon", phone: "116 123", description: "Crisis support" },
    ],
    directories: [],
  },
  {
    country: "Greece",
    code: "GR",
    emergency: "112",
    helplines: [
      { name: "Smile of the Child", phone: "1056", url: "https://www.hamogelo.gr", description: "24/7 helpline for children" },
      { name: "National Helpline", phone: "116 123", description: "Emotional crisis support" },
    ],
    directories: [],
  },
  {
    country: "Turkey",
    code: "TR",
    emergency: "112",
    helplines: [
      { name: "ALO 183 (Children)", phone: "183", description: "Social support and child helpline" },
      { name: "Yaşam Hattı", phone: "182", description: "Crisis support" },
    ],
    directories: [],
  },
  {
    country: "Israel",
    code: "IL",
    emergency: "100",
    helplines: [
      { name: "ERAN", phone: "1201", url: "https://www.eran.org.il", description: "Emotional first aid" },
      { name: "Natal", phone: "1-800-363-363", url: "https://www.natal.org.il", description: "Trauma and crisis support" },
    ],
    directories: [],
  },
  {
    country: "Egypt",
    code: "EG",
    emergency: "122",
    helplines: [
      { name: "Child Helpline Egypt", phone: "16000", description: "National child helpline" },
    ],
    directories: [],
  },
  {
    country: "Morocco",
    code: "MA",
    emergency: "15",
    helplines: [
      { name: "DGSN Child Protection", phone: "19", description: "Child protection services" },
    ],
    directories: [],
  },
  {
    country: "Tunisia",
    code: "TN",
    emergency: "197",
    helplines: [
      { name: "Child Protection Helpline", phone: "1809", description: "Child welfare support" },
    ],
    directories: [],
  },
  {
    country: "Ghana",
    code: "GH",
    emergency: "999",
    helplines: [
      { name: "Childline Ghana", phone: "0800 800 800", description: "Free helpline for children" },
    ],
    directories: [],
  },
  {
    country: "Uganda",
    code: "UG",
    emergency: "999",
    helplines: [
      { name: "Childline Uganda", phone: "116", description: "Free helpline for children" },
    ],
    directories: [],
  },
  {
    country: "Tanzania",
    code: "TZ",
    emergency: "114",
    helplines: [
      { name: "Childline Tanzania", phone: "116", description: "Free helpline for children" },
    ],
    directories: [],
  },
  {
    country: "Ethiopia",
    code: "ET",
    emergency: "911",
    helplines: [
      { name: "Child Helpline Ethiopia", phone: "116", description: "Free helpline for children" },
    ],
    directories: [],
  },
  {
    country: "Rwanda",
    code: "RW",
    emergency: "112",
    helplines: [
      { name: "Isange One Stop Centre", phone: "3512", description: "Support for children and families" },
    ],
    directories: [],
  },
  {
    country: "Zambia",
    code: "ZM",
    emergency: "999",
    helplines: [
      { name: "Childline Zambia", phone: "116", description: "Free helpline for children" },
      { name: "Lifeline Zambia", phone: "0977 770 510", description: "Crisis support" },
    ],
    directories: [],
  },
  {
    country: "Zimbabwe",
    code: "ZW",
    emergency: "999",
    helplines: [
      { name: "Childline Zimbabwe", phone: "116", url: "https://www.childline.org.zw", description: "Free helpline for children" },
    ],
    directories: [],
  },
  {
    country: "Mozambique",
    code: "MZ",
    emergency: "119",
    helplines: [
      { name: "Linha da Criança", phone: "116", description: "Child helpline" },
    ],
    directories: [],
  },
  {
    country: "Bangladesh",
    code: "BD",
    emergency: "999",
    helplines: [
      { name: "Child Helpline 1098", phone: "1098", description: "National child helpline" },
      { name: "Kaan Pete Roi", phone: "9612 119 911", description: "Bengali emotional support" },
    ],
    directories: [],
  },
  {
    country: "Sri Lanka",
    code: "LK",
    emergency: "119",
    helplines: [
      { name: "Childline Sri Lanka", phone: "1929", description: "Child protection helpline" },
      { name: "Sumithrayo", phone: "011 268 2535", url: "https://www.sumithrayo.org", description: "Emotional support" },
    ],
    directories: [],
  },
  {
    country: "Nepal",
    code: "NP",
    emergency: "100",
    helplines: [
      { name: "Child Helpline Nepal", phone: "1098", description: "National child helpline" },
    ],
    directories: [],
  },
  {
    country: "Thailand",
    code: "TH",
    emergency: "191",
    helplines: [
      { name: "Childline Thailand", phone: "1387", description: "Child protection helpline" },
      { name: "Samaritans Thailand", phone: "02-713-6793", description: "24/7 emotional support" },
    ],
    directories: [],
  },
  {
    country: "Vietnam",
    code: "VN",
    emergency: "113",
    helplines: [
      { name: "Child Helpline Vietnam", phone: "111", description: "National child helpline" },
    ],
    directories: [],
  },
  {
    country: "Indonesia",
    code: "ID",
    emergency: "112",
    helplines: [
      { name: "Telepon Pelayanan Sosial Anak (TePSA)", phone: "129", description: "Child welfare helpline" },
      { name: "Into The Light", url: "https://www.intothelightid.org", description: "Suicide prevention resources" },
    ],
    directories: [],
  },
  {
    country: "Taiwan",
    code: "TW",
    emergency: "110",
    helplines: [
      { name: "Child Protection Hotline", phone: "113", description: "Child and family support" },
      { name: "Lifeline Taiwan", phone: "1925", description: "24/7 crisis support" },
    ],
    directories: [],
  },
  {
    country: "Hong Kong",
    code: "HK",
    emergency: "999",
    helplines: [
      { name: "Samaritans Hong Kong", phone: "2389 2222", url: "https://www.samaritans.org.hk", description: "24/7 emotional support" },
      { name: "Suicide Prevention Services", phone: "2382 0000", url: "https://www.sps.org.hk", description: "Crisis support" },
    ],
    directories: [],
  },
  {
    country: "China",
    code: "CN",
    emergency: "110",
    helplines: [
      { name: "Beijing Psychological Crisis Hotline", phone: "010-8295-1332", description: "Mental health crisis support" },
      { name: "National Mental Health Hotline", phone: "400-161-9995", description: "Mental health support" },
    ],
    directories: [],
  },
  {
    country: "Saudi Arabia",
    code: "SA",
    emergency: "911",
    helplines: [
      { name: "Child Helpline (NCCA)", phone: "116111", description: "National child helpline" },
      { name: "920033360 Mental Health", phone: "920033360", description: "Mental health support" },
    ],
    directories: [],
  },
  {
    country: "Qatar",
    code: "QA",
    emergency: "999",
    helplines: [
      { name: "Qatar Child Protection", phone: "919", description: "Child protection hotline" },
    ],
    directories: [],
  },
  {
    country: "Kuwait",
    code: "KW",
    emergency: "112",
    helplines: [
      { name: "Social Emergency Line", phone: "147", description: "Social and family support" },
    ],
    directories: [],
  },
  {
    country: "Bahrain",
    code: "BH",
    emergency: "999",
    helplines: [
      { name: "Child Protection Centre", phone: "998", description: "Child protection services" },
    ],
    directories: [],
  },
  {
    country: "Jordan",
    code: "JO",
    emergency: "911",
    helplines: [
      { name: "Family Protection Hotline", phone: "110", description: "Family and child protection" },
    ],
    directories: [],
  },
  {
    country: "Lebanon",
    code: "LB",
    emergency: "112",
    helplines: [
      { name: "Embrace Lifeline", phone: "1564", url: "https://www.embracelebanon.org", description: "Mental health and crisis support" },
      { name: "Himaya (Children)", phone: "1714", url: "https://www.himaya.org", description: "Child protection" },
    ],
    directories: [],
  },
  {
    country: "Iceland",
    code: "IS",
    emergency: "112",
    helplines: [
      { name: "Barnaverndarstofa (Children)", phone: "112", description: "Child protection services" },
      { name: "Rauði Krossinn", phone: "1717", url: "https://www.raudikrossinn.is", description: "Emotional support line" },
    ],
    directories: [],
  },
  {
    country: "Lithuania",
    code: "LT",
    emergency: "112",
    helplines: [
      { name: "Vaiko linija (Children)", phone: "116 111", url: "https://www.vaikulinija.lt", description: "Child helpline" },
      { name: "Jaunimo linija", phone: "8 800 28888", url: "https://www.jaunimolinija.lt", description: "Youth helpline" },
    ],
    directories: [],
  },
  {
    country: "Latvia",
    code: "LV",
    emergency: "112",
    helplines: [
      { name: "Uzticības tālrunis (Children)", phone: "116 111", description: "Child helpline" },
      { name: "Krīzes tālrunis", phone: "116 123", description: "Crisis support" },
    ],
    directories: [],
  },
  {
    country: "Estonia",
    code: "EE",
    emergency: "112",
    helplines: [
      { name: "Lasteabi (Children)", phone: "116 111", url: "https://www.lasteabi.ee", description: "Child helpline" },
      { name: "Eluliin", phone: "116 123", description: "Crisis support" },
    ],
    directories: [],
  },
  {
    country: "Luxembourg",
    code: "LU",
    emergency: "112",
    helplines: [
      { name: "Kanner-Jugendtelefon", phone: "116 111", url: "https://www.kjt.lu", description: "Helpline for children and teens" },
      { name: "SOS Détresse", phone: "45 45 45", url: "https://www.454545.lu", description: "Crisis support" },
    ],
    directories: [],
  },
  {
    country: "Malta",
    code: "MT",
    emergency: "112",
    helplines: [
      { name: "Supportline 179", phone: "179", description: "Mental health and emotional support" },
      { name: "Kellimni.com", url: "https://www.kellimni.com", description: "Online chat support for young people" },
    ],
    directories: [],
  },
  {
    country: "Cyprus",
    code: "CY",
    emergency: "112",
    helplines: [
      { name: "Children's Helpline", phone: "116 111", description: "Child helpline" },
      { name: "Crisis Line", phone: "1410", description: "Emotional crisis support" },
    ],
    directories: [],
  },
  {
    country: "Jamaica",
    code: "JM",
    emergency: "119",
    helplines: [
      { name: "Office of the Children's Registry", phone: "888-PROTECT (776-8328)", description: "Child protection hotline" },
    ],
    directories: [],
  },
  {
    country: "Trinidad and Tobago",
    code: "TT",
    emergency: "999",
    helplines: [
      { name: "Childline Trinidad", phone: "800-4321", description: "Free helpline for children" },
      { name: "Lifeline Trinidad", phone: "800-5588", description: "Crisis support" },
    ],
    directories: [],
  },
  {
    country: "Fiji",
    code: "FJ",
    emergency: "911",
    helplines: [
      { name: "Child Helpline Fiji", phone: "1325", description: "Free helpline for children" },
    ],
    directories: [],
  },
  {
    country: "Papua New Guinea",
    code: "PG",
    emergency: "000",
    helplines: [
      { name: "Childline PNG", phone: "1-Tok-Pisin 71508000", description: "Child welfare support" },
    ],
    directories: [],
  },
  {
    country: "Cambodia",
    code: "KH",
    emergency: "119",
    helplines: [
      { name: "Child Helpline Cambodia", phone: "1280", description: "Child protection helpline" },
    ],
    directories: [],
  },
  {
    country: "Myanmar",
    code: "MM",
    emergency: "199",
    helplines: [
      { name: "Child Helpline Myanmar", phone: "1295", description: "Child welfare support" },
    ],
    directories: [],
  },
  {
    country: "Mongolia",
    code: "MN",
    emergency: "102",
    helplines: [
      { name: "Child Helpline Mongolia", phone: "108", description: "National child helpline" },
    ],
    directories: [],
  },
  {
    country: "Afghanistan",
    code: "AF",
    emergency: "119",
    helplines: [
      { name: "Afghanistan Child Helpline", phone: "142", description: "Child protection services" },
    ],
    directories: [],
  },
  {
    country: "Iraq",
    code: "IQ",
    emergency: "104",
    helplines: [
      { name: "Child Protection Helpline", phone: "116", description: "Child welfare support" },
    ],
    directories: [],
  },
  {
    country: "Algeria",
    code: "DZ",
    emergency: "14 (police) / 14 (SAMU)",
    helplines: [
      { name: "SOS Détresse Algérie", phone: "0560 10 65 10", description: "Listening and emotional support line" },
      { name: "Sidra (Forem)", phone: "3033", description: "Free support line for children and families" },
      { name: "Nada Network for Child Rights", phone: "3033", url: "https://www.nadarights.org", description: "Child protection helpline" },
    ],
    directories: [
      { name: "Ministry of Health Algeria", url: "https://www.sante.gov.dz" },
    ],
  },
];

const COUNTRY_STORAGE_KEY = "little-minds-country";

export function getSavedCountry(): string | null {
  try {
    return localStorage.getItem(COUNTRY_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function saveCountry(code: string) {
  try {
    localStorage.setItem(COUNTRY_STORAGE_KEY, code);
  } catch {}
}

export function getHelplinesForCountry(code: string): CountryHelplines | undefined {
  return crisisHelplines.find((c) => c.code === code);
}
