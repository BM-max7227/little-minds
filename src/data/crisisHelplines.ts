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
      { name: "Head to Health", url: "https://www.headtohealth.gov.au" },
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
      { name: "Childline India", phone: "1098", url: "https://www.childlineindia.org", description: "24/7 helpline for children in distress" },
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
      { name: "Fil Santé Jeunes", phone: "0 800 235 236", url: "https://www.filsantejeunes.com", description: "Health helpline for young people" },
      { name: "SOS Amitié", phone: "09 72 39 40 50", url: "https://www.sos-amitie.com", description: "24/7 listening service" },
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
      { name: "Alarmtelefonen for barn og unge", phone: "116 111", url: "https://www.telefonforbarnogunge.no", description: "Helpline for children and young people" },
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
