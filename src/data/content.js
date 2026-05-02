import {
  Swords,
  Shield,
  Flame,
  Package,
  Sparkles,
} from 'lucide-react'

export const categories = [
  {
    id: '01',
    title: 'Miniatures',
    tagline: 'Build. Paint. Conquer.',
    description:
      'Immerse yourself in the grim darkness of the far future or the epic fantasy realms of the Mortal Realms. We stock the full Games Workshop range plus terrain, basing materials, and third-party sculpts. Whether you are fielding a full Knight house or painting your first Space Marine, our tables are waiting.',
    items: [
      { name: 'Warhammer 40,000', detail: "The galaxy's most iconic sci-fi wargame. Command armies of Space Marines, Orks, Eldar, and ancient machines across sprawling battlefields. From beginner patrols to tournament-grade titans, we support every level of play." },
      { name: 'Age of Sigmar', detail: 'Epic fantasy warfare in the Mortal Realms. Dragons, daemons, and Stormcast Eternals clash in narrative-driven battles that reward bold tactics and stunningly painted armies.' },
      { name: 'Kill Team', detail: 'Tight, cinematic skirmishes in the 41st Millennium. Small squads, dense terrain, and high-stakes missions make every dice roll feel like a movie moment.' },
      { name: 'Star Wars Legion', detail: 'Ground-level Galactic Civil War combat. AT-AT walkers stomp across Hoth while Rebel commandos strike from the shadows. Easy to learn, endlessly tactical.' },
      { name: 'Marvel Crisis Protocol', detail: 'Superheroes and villains duke it out on destructible city terrain. Comic-book action meets tight skirmish rules — and the minis are gorgeous.' },
      { name: 'Star Wars Shatterpoint', detail: 'Dynamic squad combat with a kinetic twist. Iconic characters clash in fast-paced duels with momentum-based mechanics and beautiful sculpts.' },
    ],
    Icon: Swords,
  },
  {
    id: '02',
    title: 'Trading Cards',
    tagline: 'Stack the deck.',
    description:
      'From Commander pods to Pokémon leagues, our TCG space is built for competitive and casual players alike. We keep booster boxes, single-card inventory, and deck-building essentials in stock. Trade, draft, and duel every night of the week.',
    items: [
      { name: 'Magic: The Gathering', detail: 'The original trading card game and still the gold standard. Commander pods, Modern tournaments, Draft nights, and Pioneer leagues — we run them all.' },
      { name: 'Pokémon TCG', detail: "Collect, trade, and battle with the world's most beloved TCG. From vintage holos to the latest expansion, our community covers every format." },
      { name: 'One Piece Card Game', detail: 'A fast-paced anime TCG with gorgeous alt-art leaders and deep naval-combat mechanics. One of the fastest-growing scenes in the store.' },
      { name: 'Flesh & Blood', detail: 'A hero-centric TCG built for in-person play. Pitch-stack resource management and weapon-focused combat make every game feel like a duel.' },
      { name: 'Gundam TCG', detail: 'Pilot legendary mobile suits in strategic battles. Deck-building revolves around iconic pilots and their custom machines.' },
      { name: 'Yu-Gi-Oh!', detail: 'The classic combo-driven TCG. From nostalgic Blue-Eyes builds to modern meta, our duelists welcome newcomers and veterans alike.' },
    ],
    Icon: Shield,
  },
  {
    id: '03',
    title: 'RPGs',
    tagline: 'Tell your story.',
    description:
      'Two private RPG rooms, pre-built terrain, ambient lighting, and a massive library of sourcebooks. From D&D 5E and Pathfinder to indie systems like Shadowdark and Mörk Borg, our GM community runs everything from megadungeons to one-shots. New players welcome — no character sheet required to sit down.',
    items: [
      { name: 'Dungeons & Dragons 5E', detail: "The world's most popular RPG. Our GMs run everything from published megadungeons to homebrew worlds. Pre-generated sheets available for newcomers." },
      { name: 'Pathfinder 2E', detail: 'Deep character customization and crunchy tactical combat. If you love options, Pathfinder delivers with hundreds of feats, archetypes, and builds.' },
      { name: 'Shadowdark', detail: 'Old-school dungeon crawling with modern design. Torch-lit corridors, deadly traps, and fast character creation make this a rising favorite.' },
      { name: 'Dungeon Crawl Classics', detail: 'Zero-to-hero funnel play where peasants become legends. May the dice judge you. Brutal, hilarious, and unforgettable.' },
      { name: 'Blades in the Dark', detail: 'Crew-based heists in a haunted industrial city. Narrative-forward mechanics where planning is flashbacks and consequences are everything.' },
      { name: 'Mörk Borg', detail: 'Doom-metal fantasy at its bleakest and most beautiful. Rules-light, visually striking, and brutally fatal. Not for the faint of heart.' },
    ],
    Icon: Flame,
  },
  {
    id: '04',
    title: 'Board Games',
    tagline: 'Gather around the table.',
    description:
      'Our demo library has over 200 titles you can try before you buy. From gateway classics to heavy Euro strategy, we curate for every player count and complexity level. Family night, couples duels, or six-hour civilization simulators — we have a shelf for that.',
    items: [
      { name: 'Ticket to Ride', detail: 'The perfect gateway game. Accessible rules, competitive route-building, and endless replayability across dozens of map expansions.' },
      { name: 'Catan', detail: 'Trade wood for sheep and build your empire. The modern classic that launched a million game nights and still holds up beautifully.' },
      { name: 'Zombicide', detail: 'Cooperative zombie-slaying with escalating scenarios and piles of plastic miniatures. Great for groups that want to survive together.' },
      { name: 'Nemesis', detail: 'Semi-cooperative horror aboard a derelict spaceship. Hidden traitors, alien intruders, and a ticking clock. Trust no one.' },
      { name: 'Gloomhaven', detail: 'A legacy campaign dungeon crawler with card-driven tactics. Hundreds of hours of content, permanent world changes, and deep character progression.' },
      { name: 'Wingspan', detail: 'A gorgeous engine-builder about attracting birds to your wildlife preserve. Relaxing, strategic, and stunning on the table.' },
    ],
    Icon: Package,
  },
  {
    id: '05',
    title: 'Hobby Supplies',
    tagline: 'Every brushstroke matters.',
    description:
      'Full paint bar with Citadel, Vallejo, Army Painter, and AK Interactive ranges. Airbrush stations, wet palettes, primer racks, basing materials, and a library of tutorial books. Our staff are painters first — ask about color theory, glazing, or rust effects.',
    items: [
      { name: 'Citadel Paints', detail: "Games Workshop's standard range — Contrast for speed, Layer for control, Shade for depth, and Technical for texture." },
      { name: 'Vallejo', detail: 'Spanish acrylics with unmatched consistency. A favorite for airbrush work and fine detail across historical and fantasy minis.' },
      { name: 'Army Painter', detail: 'Speedpaints, primers, and hobby tools designed for efficient batch painting. Great for getting an army table-ready fast.' },
      { name: 'AK Interactive', detail: 'Weathering enamels, diorama textures, and realistic effects. Essential for bringing vehicles and terrain to life.' },
      { name: 'Terrain & Basing', detail: 'Cork, sand, static grass, resin buildings, and scratch-build supplies. Everything you need to tell a story with your base.' },
      { name: 'Miniature Cases', detail: 'Battle Foam, KR Multicase, and custom magnetized transport. Protect your painted army on the road to every tournament.' },
    ],
    Icon: Sparkles,
  },
]

export const events = [
  { day: 'Mon', name: 'Monday Night TCGs', time: '6:00 PM', detail: 'Draft, trade, and duel. All TCGs welcome. Casual tables and competitive pods available.', category: 'tcg' },
  { day: 'Tue', name: 'Warhammer 40K', time: '6:30 PM', detail: 'Matched play and narrative campaigns. Terrain set up for 2,000-point games.', category: 'miniatures' },
  { day: 'Wed', name: 'Battletech', time: '6:00 PM', detail: 'Mech combat in the Inner Sphere. Lance-scale battles with dedicated terrain mats.', category: 'miniatures' },
  { day: 'Thu', name: 'Board Game Night', time: '6:00 PM', detail: 'Bring a friend, learn a new title. Staff on hand to teach demo-library picks.', category: 'boardgames' },
  { day: 'Fri', name: 'Magic Friday', time: '6:00 PM', detail: 'FNM, Commander, and casual pods. Prize support and promo cards while supplies last.', category: 'tcg' },
  { day: 'Sat', name: 'Open Gaming', time: '10:00 AM', detail: 'All tables open — first come, first roll. RPGs, board games, and wargames all welcome.', category: 'open' },
  { day: 'Sun', name: 'Paint & Hobby', time: '12:00 PM', detail: 'Community painting session with tips and demos. Borrow tools and learn new techniques.', category: 'hobby' },
]

export const reviews = [
  { text: '"The best game store in Houston. Period."', author: '— Google Review' },
  { text: '"Incredible selection and the staff actually plays the games."', author: '— Yelp' },
  { text: '"My home away from home. I learned to paint here."', author: '— Regular' },
  { text: '"Unmatched community. You walk in a stranger, leave as kin."', author: '— Discord Member' },
  { text: '"If you play Magic or 40K, this is the only store you need."', author: '— Facebook' },
]

export const highlights = [
  { label: 'Game Systems', value: '30+', iconName: 'Swords' },
  { label: 'Demo Library', value: '200+', iconName: 'Package' },
  { label: 'Weekly Events', value: '7', iconName: 'Calendar' },
  { label: 'Happy Gamers', value: '4.9★', iconName: 'Star' },
]

export const storeInfo = {
  name: 'The Forge Hobbies & Games',
  address: '15121 Memorial Dr, Houston, TX 77079',
  phone: '(832) 544-1786',
  email: 'hello@theforgehobbyshop.com',
  hours: {
    monThu: '12PM – 10PM',
    fri: '12PM – 11PM',
    sat: '10AM – 10PM',
    sun: '12PM – 8PM',
  },
}

export const teamMembers = [
  { name: 'Marcus Cole', role: 'Founder & Lead Painter', bio: 'Started The Forge in 2018 after running community game nights in his garage. Has painted over 5,000 miniatures and still learns something new every session.' },
  { name: 'Jen Park', role: 'TCG Coordinator', bio: 'Former regional Magic judge and Pokémon professor. If there is a meta, she knows it. Runs our Friday Night Magic and trade-floor economy.' },
  { name: 'Dev Patel', role: 'RPG Director', bio: 'GM of three concurrent campaigns. Specializes in indie systems and custom terrain builds. Will happily teach you Shadowdark in twenty minutes.' },
  { name: 'Riley Ortiz', role: 'Community Manager', bio: 'Runs our Discord, events calendar, and social presence. The reason our community feels like family instead of a customer list.' },
]

export const heroImage = '/photos/forge-01.png'

export const aboutImage = '/photos/forge-11.png'

export const visitImage = '/photos/forge-12.png'

export const galleryCategories = ['All', 'Store', 'Events', 'Miniatures', 'Community']

export const galleryPhotos = [
  { id: 1, category: 'Store', title: 'The Main Floor', aspect: 'landscape', src: '/photos/forge-02.png' },
  { id: 2, category: 'Store', title: 'Paint Station', aspect: 'portrait', src: '/photos/forge-03.png' },
  { id: 3, category: 'Events', title: 'Friday Night Magic', aspect: 'landscape', src: '/photos/forge-04.png' },
  { id: 4, category: 'Events', title: '40K Tournament', aspect: 'landscape', src: '/photos/forge-05.png' },
  { id: 5, category: 'Miniatures', title: 'Painted Knight', aspect: 'portrait', src: '/photos/forge-06.png' },
  { id: 6, category: 'Miniatures', title: 'Terrain Build', aspect: 'landscape', src: '/photos/forge-07.png' },
  { id: 7, category: 'Community', title: 'Learn-to-Play Night', aspect: 'landscape', src: '/photos/forge-08.png' },
  { id: 8, category: 'Community', title: 'Sunday Paint Club', aspect: 'square', src: '/photos/forge-09.png' },
  { id: 9, category: 'Store', title: 'RPG Room A', aspect: 'landscape', src: '/photos/forge-10.png' },
  { id: 10, category: 'Store', title: 'The Forge Entrance', aspect: 'portrait', src: '/photos/forge-01.png' },
  { id: 11, category: 'Events', title: 'Board Game Marathon', aspect: 'landscape', src: '/photos/forge-11.png' },
  { id: 12, category: 'Miniatures', title: 'Army Showcase', aspect: 'landscape', src: '/photos/forge-12.png' },
]
