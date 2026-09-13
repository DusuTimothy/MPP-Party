/**
 * Party Data and Content Configuration
 * Structured to mirror the NITDA (National Information Technology Development Agency) UI Architecture
 * Party: My Political Party (MPP)
 * Authentic Nigerian campaign imagery and fictional placeholder personnel
 */

export const PARTY_INFO = {
  name: "My Political Party",
  acronym: "MPP",
  tagline: "[Insert party slogan]",
  subTagline: "Fostering Democratic Renewal, Grassroots Empowerment & Accountable Governance",
  headquarters: "Plot 1044 Civic Freedom Boulevard, Central Business District, Abuja FCT, Nigeria",
  phone: "+234 (0) 800 677 7278",
  altPhone: "+234 (0) 816 840 1851",
  email: "info@mpp-party.org",
  pressEmail: "press@mpp-party.org",
  electionDate: "2027-11-20T08:00:00", // 2027 General Elections
  established: "2023",
  srapTenure: "Strategic Democratic Roadmap & Action Plan (SDRAP 2024–2027)",
};

// Hero Carousel Slides (NITDA Banner Style with Nigerian Campaign Rally Images)
export const HERO_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1920&q=80",
    badge: "National Convention & Civic Declaration",
    title: "United for Democratic Renewal & Grassroots Empowerment",
    subtitle: "Championing a people-first Nigeria through ethical public stewardship, inclusive governance, and transparent representative democracy.",
    ctaText: "Join MPP Today",
    secondaryCtaText: "Read Strategic Roadmap",
    primaryCta: "Read Strategic Roadmap",
    primaryLink: "/about",
    secondaryCta: "Join MPP",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1920&q=80",
    badge: "Grassroots Ward Assemblies",
    title: "Empowering 774 Local Government Areas Nationwide",
    subtitle: "From rural agrarian cooperatives to urban innovation hubs, we are building local political power that delivers real community infrastructure.",
    ctaText: "Volunteer Now",
    secondaryCtaText: "Find Local Chapter",
    primaryCta: "Our Programmes",
    primaryLink: "/get-involved",
    secondaryCta: "Find Your Ward",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80",
    badge: "2027 Election Preparations",
    title: "Vetted Candidates, Integrity First, Transparent Primaries",
    subtitle: "Discover our certified candidates who have completed mandatory public asset disclosures and signed the MPP Binding Code of Conduct.",
    ctaText: "Join MPP",
    secondaryCtaText: "Meet Candidates",
    primaryCta: "Candidate Directory",
    primaryLink: "/elections",
    secondaryCta: "Voter Check",
  },
];

// NITDA "Key Links" / Quick Access Cards (Directly below Hero)
export const KEY_LINKS = [
  {
    id: "voter-check",
    title: "Voter Card Accreditation",
    subtitle: "Verify Ward & Polling Unit",
    icon: "FaIdCard",
    link: "/elections",
  },
  {
    id: "press-release",
    title: "Official Press Releases",
    subtitle: "Secretariat Bulletins & Media",
    icon: "FaBullhorn",
    link: "/news",
  },
  {
    id: "candidate-search",
    title: "Certified Candidates",
    subtitle: "Search Nominees by LGA",
    icon: "FaUserCheck",
    link: "/elections",
  },
  {
    id: "interventions",
    title: "Our Intervention Programmes",
    subtitle: "Civic & Community Projects",
    icon: "FaHandsHelping",
    link: "/get-involved",
  },
  {
    id: "constitution",
    title: "Party Constitution & Policies",
    subtitle: "Statutory Rules & Guidelines",
    icon: "FaFileContract",
    link: "/about",
  },
  {
    id: "forms",
    title: "Download Statutory Forms",
    subtitle: "Nomination & Member Forms",
    icon: "FaDownload",
    link: "/get-involved",
  },
];

// NITDA Strategic Roadmap & Action Plan (SDRAP 2024–2027) 8 Pillars
export const SDRAP_PILLARS = [
  { id: 1, title: "Fostering Internal Democracy & Open Primaries", code: "Pillar 1" },
  { id: 2, title: "Building Robust Grassroots Ward Secretariats", code: "Pillar 2" },
  { id: 3, title: "Strengthening Civic Education & Voter Literacy", code: "Pillar 3" },
  { id: 4, title: "Promoting Inclusive Women & Youth Leadership", code: "Pillar 4" },
  { id: 5, title: "Promoting Campaign Finance Transparency", code: "Pillar 5" },
  { id: 6, title: "Formulating Sound Public Economic Policies", code: "Pillar 6" },
  { id: 7, title: "Digital Party Infrastructure & E-Voting Systems", code: "Pillar 7" },
  { id: 8, title: "Constitutional Advocacy & Electoral Reform", code: "Pillar 8" },
];

// "From The National Chairman's Desk" (Mirroring NITDA's "From The Director General's Desk")
export const CHAIRMAN_DESK = {
  name: "Dr. Oluwaseun Adeleke",
  role: "National Chairman & Party Leader",
  office: "Office of the National Chairman, MPP National Headquarters, Abuja",
  image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=800&q=80",
  quote: "A political party must not exist simply as an election-cycle vehicle; it must function as a perpetual institution of civic mentorship, ethical accountability, and grassroots transformation.",
  message: `On behalf of the National Executive Council of My Political Party (MPP), I welcome you to our official civic portal. Our party was birthed from the collective aspirations of patriotic Nigerians determined to forge a transparent, equitable, and forward-looking society.

In alignment with our Strategic Democratic Roadmap & Action Plan (SDRAP 2024–2027), we are systematically decentralizing party governance, digitizing our nationwide membership register, and enforcing rigorous asset-declaration audits for all nominated public candidates.

Whether you are a student, farmer, civil servant, market trader, or diaspora patriot, MPP provides you an uninhibited platform to influence public policy and organize for national development. Join us as we build a stronger, fairer democracy together.`,
  signatureText: "Dr. Oluwaseun Adeleke, Ph.D.",
};

// Aliased Featured Leader for backward compatibility
export const FEATURED_LEADER = {
  ...CHAIRMAN_DESK,
  title: CHAIRMAN_DESK.role,
  shortBio: "Dr. Oluwaseun Adeleke is a respected civic economist, public administrator, and advocate for transparent institutional reform. With over two decades of experience in community development policy and economic planning, he has steered MPP toward becoming an inclusive, values-driven coalition dedicated to integrity and sustainable democratic growth.",
  extendedBio: CHAIRMAN_DESK.message,
  achievements: [
    "Spearheaded the 100% Digital Membership Register initiative",
    "Pioneered the Grassroots Civic Forum across 774 local councils",
    "Co-authored the National Clean Energy Transition whitepaper",
    "Instituted 40% affirmative action for women and youth candidates",
  ],
};

// NITDA "Our Services / Pillars" (6 Service Block Cards)
export const PARTY_SERVICES = [
  {
    id: 1,
    title: "Grassroots Ward Mobilisation",
    description: "Establishing democratic assembly councils across all 8,812 electoral wards to debate local developmental priorities and coordinate voter desks.",
    icon: "FaUsers",
    link: "/get-involved",
  },
  {
    id: 2,
    title: "Candidate Vetting & Asset Clearance",
    description: "Enforcing statutory moral audits and public asset disclosures for all aspirants contesting municipal, legislative, and gubernatorial elections.",
    icon: "FaUserShield",
    link: "/elections",
  },
  {
    id: 3,
    title: "Civic & Digital Leadership Academy",
    description: "Training over 100,000 young leaders annually in public policy formulation, municipal budget tracking, and legislative bill drafting.",
    icon: "FaGraduationCap",
    link: "/about",
  },
  {
    id: 4,
    title: "Grassroots Cooperative Micro-Grants",
    description: "Facilitating interest-free community credit schemes and solar equipment access for agricultural cooperatives and women-led micro-enterprises.",
    icon: "FaSeedling",
    link: "/get-involved",
  },
  {
    id: 5,
    title: "Legal Voter Protection & Citizen Helpdesk",
    description: "Deploying accredited legal volunteers and rapid-response polling monitors to safeguard the vote and enforce electoral law compliance.",
    icon: "FaBalanceScale",
    link: "/elections",
  },
  {
    id: 6,
    title: "Municipal Clean Water & Solar Infrastructure",
    description: "Collaborating with local councils to rehabilitate community boreholes, streetlights, and primary health center solar power reserves.",
    icon: "FaSolarPanel",
    link: "/get-involved",
  },
];

// NITDA "Upcoming Activities & Events" (Events Section)
export const UPCOMING_EVENTS = [
  {
    id: 1,
    day: "28",
    month: "OCT",
    year: "2026",
    title: "Annual National Policy Convention & Manifesto Review",
    venue: "International Conference Centre (ICC), Central Area, Abuja FCT",
    category: "Statutory Convention",
    time: "09:00 AM – 05:00 PM",
    badge: "National Event",
  },
  {
    id: 2,
    day: "14",
    month: "NOV",
    year: "2026",
    title: "South-West Zonal Town Hall on Agricultural Infrastructure",
    venue: "Civic Centre Hall, Victoria Island, Lagos State",
    category: "Zonal Dialogue",
    time: "10:00 AM – 03:30 PM",
    badge: "Public Assembly",
  },
  {
    id: 3,
    day: "05",
    month: "DEC",
    year: "2026",
    title: "National Youth Civic Hackathon & Digital Democracy Summit",
    venue: "Innovation Hub Auditorium, Bompai, Kano State",
    category: "Youth Wing",
    time: "09:30 AM – 04:00 PM",
    badge: "Innovation",
  },
];

// NITDA "Facts & Figures" (Animated Counter Section)
export const FACTS_STATS = [
  {
    id: 1,
    value: 36,
    suffix: " + FCT",
    label: "State Secretariats",
    description: "Fully staffed administrative zonal secretariats",
  },
  {
    id: 2,
    value: 774,
    suffix: "",
    label: "Local Governments",
    description: "Active local organizing chapters across all LGAs",
  },
  {
    id: 3,
    value: 2500000,
    suffix: "+",
    display: "2.5M+",
    label: "Registered Members",
    description: "Verified digitized biometric membership cards",
  },
  {
    id: 4,
    value: 45000,
    suffix: "+",
    display: "45K+",
    label: "Community Volunteers",
    description: "Grassroots door-to-door civic educators",
  },
  {
    id: 5,
    value: 480,
    suffix: "+",
    label: "Vetted Candidates",
    description: "Nominees certified under our Public Ethics Audit",
  },
  {
    id: 6,
    value: 100,
    suffix: "%",
    label: "Ward Presence",
    description: "Coverage across all 8,812 electoral wards",
  },
];

// Aliased STATS for backward compatibility
export const STATS = FACTS_STATS.slice(0, 4);

// Get Involved Cards
export const GET_INVOLVED_CARDS = [
  {
    id: "candidates",
    title: "Know Your Candidates",
    description: "Explore the verified backgrounds, legislative manifestos, and public town-hall schedules of MPP nominees running for office in your constituency.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=700&q=80",
    cta: "Explore Candidates",
    link: "/elections",
    highlight: "Electoral Transparency",
  },
  {
    id: "volunteer",
    title: "Volunteer in Your Ward",
    description: "Join over 45,000 neighborhood volunteers conducting door-to-door listening campaigns, voter assistance desks, and civic workshops.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=700&q=80",
    cta: "Sign Up as Volunteer",
    link: "/get-involved",
    highlight: "Grassroots Impact",
  },
  {
    id: "register",
    title: "Register to Vote",
    description: "Verify your electoral ward, check your voter card accreditation status, and learn critical deadlines for the upcoming national and state ballots.",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=700&q=80",
    cta: "Check Voter Guide",
    link: "/elections",
    highlight: "Civic Duty",
  },
];

// NITDA Working Committee / Service Departments (Committee Members)
export const COMMITTEE_MEMBERS = [
  {
    id: 1,
    name: "Adaeze Okonkwo",
    role: "National Secretary",
    badge: "Executive Council",
    department: "Directorate of Party Administration",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    bio: "Oversees national party administration, statutory conventions, and inter-party civic alliances.",
    email: "national.secretary@mpp-party.org",
  },
  {
    id: 2,
    name: "Kwame Mensah",
    role: "Deputy National Chairman",
    badge: "Operations",
    department: "Directorate of Field Operations & Zonal Coordination",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    bio: "Coordinates regional zonal secretariats and voter outreach programs across northern and southern corridors.",
    email: "deputy.chair@mpp-party.org",
  },
  {
    id: 3,
    name: "Fatima Al-Hassan",
    role: "National Women Leader",
    badge: "Mobilisation",
    department: "Directorate of Women Affairs & Social Mobilisation",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    bio: "Champions equal female representation, maternal health advocacy, and women entrepreneurship initiatives.",
    email: "women.affairs@mpp-party.org",
  },
  {
    id: 4,
    name: "Tariq Danjuma",
    role: "National Youth Organiser",
    badge: "Youth Wing",
    department: "Directorate of Youth Innovation & Student Affairs",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    bio: "Leads digital campaigning, student union alliances, and the party's nationwide internship academy.",
    email: "youth.wing@mpp-party.org",
  },
  {
    id: 5,
    name: "Chioma Eze",
    role: "National Treasurer",
    badge: "Finance",
    department: "Directorate of Treasury & Campaign Finance",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80",
    bio: "Ensures compliance with campaign finance disclosures, independent audit standards, and member dues management.",
    email: "treasury@mpp-party.org",
  },
  {
    id: 6,
    name: "Marcus Balogun",
    role: "Director of Strategy & Policy",
    badge: "Research",
    department: "Directorate of Research, Manifesto & Public Policy",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    bio: "Heads policy taskforces formulating our legislative roadmap, healthcare reforms, and green jobs program.",
    email: "strategy@mpp-party.org",
  },
];

// FAQ Accordion items
export const FAQ_ITEMS = [
  {
    id: 1,
    question: "What is My Political Party (MPP) and what is its mandate?",
    answer: "My Political Party (MPP) is a progressive democratic platform registered to advance ethical leadership, civic transparency, and community-driven economic progress across Nigeria. Our motto is '[Insert party slogan]'.",
  },
  {
    id: 2,
    question: "How do I register as an accredited member of MPP?",
    answer: "Registration is open and completely free for all Nigerian citizens aged 18 and above. You can register online through our Member Portal or at any of our 36 state secretariats and 774 LGA offices to obtain your digital membership credential.",
  },
  {
    id: 3,
    question: "What is the Strategic Democratic Roadmap & Action Plan (SDRAP)?",
    answer: "SDRAP 2024–2027 is the party's 4-year strategic masterplan formulated to foster internal democracy, strengthen grassroots ward secretariats, enforce campaign finance transparency, and cultivate youth and women public leadership.",
  },
  {
    id: 4,
    question: "How are candidates chosen for general and local elections?",
    answer: "MPP upholds direct, transparent internal member primaries. Candidates must also undergo a thorough Public Ethics and Asset Audit by our independent Vetting Directorate before nomination.",
  },
  {
    id: 5,
    question: "How does MPP fund its activities and community projects?",
    answer: "We are funded primarily through voluntary, small-dollar grassroots contributions and transparent member dues. In compliance with our transparency charter, all financial statements are independently audited and published annually.",
  },
];
