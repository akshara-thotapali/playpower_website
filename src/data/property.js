export const propertyData = {
  id: "villa-azure-horizon-malibu",
  title: "Villa Azure Horizon • Architectural Oceanfront Sanctuary",
  subtitle: "Entire luxury villa in Malibu, California, United States",
  location: "Malibu, California, United States",
  rating: 4.98,
  reviewCount: 142,
  isGuestFavorite: true,
  badgeText: "Guest favorite",
  badgeSubtext: "One of the most loved homes on HavenScape, according to guests",
  shareTitle: "Villa Azure Horizon - Malibu Luxury Retreat",
  
  host: {
    name: "Elena Rostova",
    role: "Superhost",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    isSuperhost: true,
    yearsHosting: 7,
    responseRate: "100%",
    responseTime: "within an hour",
    bio: "Architectural designer and avid coastal enthusiast. My goal is to create tranquil, luxury sanctuaries where guests can disconnect, recharge, and experience Malibu's breathtaking coast.",
    coHosts: [
      {
        name: "Julian",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
      }
    ]
  },

  specs: {
    guests: 8,
    bedrooms: 4,
    beds: 5,
    baths: 4.5,
    propertyType: "Entire Villa"
  },

  highlights: [
    {
      id: "superhost",
      iconName: "Award",
      title: "Elena is a Superhost",
      description: "Superhosts are experienced, highly rated hosts committed to providing great stays."
    },
    {
      id: "architectural",
      iconName: "Sparkles",
      title: "Featured Architectural Design",
      description: "Recognized for seamless indoor-outdoor floor-to-ceiling oceanfront architecture."
    },
    {
      id: "checkin",
      iconName: "KeyRound",
      title: "Great check-in experience",
      description: "100% of recent guests gave the check-in process a 5-star rating."
    },
    {
      id: "cancellation",
      iconName: "CalendarX",
      title: "Free cancellation for 48 hours",
      description: "Lock in this rate today with complete flexibility if your plans change."
    }
  ],

  description: `Welcome to Villa Azure Horizon, an icon of modern coastal luxury perched on the private cliffs of West Malibu. Designed by renowned modernist architects, this 6,500 sq ft sanctuary seamlessly blends interior elegance with the dramatic expanse of the Pacific Ocean.

Step through floor-to-ceiling glass sliding walls onto a multi-tiered teak deck featuring a heated infinity-edge pool, private hot tub, and sunken lounge fire pit. Inside, enjoy bespoke B&B Italia furnishings, a chef's kitchen outfitted with Sub-Zero and Gaggenau appliances, a private wine cellar, and a state-of-the-art Sonos audio system throughout.

Each of the four bedroom suites offers unobstructed ocean views, private balconies, and spa-inspired ensuite bathrooms with deep soaking tubs. Direct private steps lead down to a secluded cove on El Matador Beach.`,

  pricing: {
    nightlyRate: 1250,
    originalRate: 1450,
    currency: "$",
    cleaningFee: 350,
    serviceFee: 185,
    occupancyTaxPercent: 12,
    minNights: 2,
    maxGuests: 8
  },

  amenities: [
    { category: "Popular", items: [
      { name: "Unobstructed Ocean View", icon: "Waves" },
      { name: "Heated Infinity Pool", icon: "Sun" },
      { name: "Private Oceanfront Hot Tub", icon: "Flame" },
      { name: "High-speed Wi-Fi (500 Mbps)", icon: "Wifi" },
      { name: "Dedicated Executive Workspace", icon: "Laptop" },
      { name: "Chef's Kitchen with Sub-Zero Appliances", icon: "Utensils" },
      { name: "Sonos Architectural Audio System", icon: "Volume2" },
      { name: "Outdoor Fire Pit & Sunken Lounge", icon: "Flame" },
      { name: "Tesla Level-2 EV Charger", icon: "Zap" },
      { name: "Free On-Site Gated Parking (4 cars)", icon: "Car" }
    ]},
    { category: "Bathroom & Spa", items: [
      { name: "Freestanding Soaking Tub with Ocean Views", icon: "Bath" },
      { name: "Rainfall Walk-in Showers", icon: "ShowerHead" },
      { name: "AESOP Organic Toiletries", icon: "Sparkles" },
      { name: "Plush Egyptian Cotton Bathrobes & Towels", icon: "Shirt" },
      { name: "Hair Dryer & Dyson Airwrap", icon: "Wind" }
    ]},
    { category: "Bedroom & Laundry", items: [
      { name: "Frette 1000-Thread-Count Linens", icon: "BedDouble" },
      { name: "Blackout Motorized Shades", icon: "SunDim" },
      { name: "In-unit LG Washer & Dryer", icon: "Shirt" },
      { name: "Walk-in Closets with Hangers", icon: "Folder" }
    ]},
    { category: "Safety & Security", items: [
      { name: "24/7 Monitored Security & Gated Entry", icon: "ShieldCheck" },
      { name: "Smoke & Carbon Monoxide Detectors", icon: "Bell" },
      { name: "First Aid Kit & Fire Extinguishers", icon: "HeartPulse" }
    ]}
  ],

  images: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
      title: "Exterior Infinity Deck & Pacific Ocean Panorama",
      category: "Exterior",
      alt: "Panoramic oceanfront infinity pool deck of Villa Azure Horizon looking over Pacific Ocean"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      title: "Modernist Architectural Facade at Dusk",
      category: "Exterior",
      alt: "Sleek glass and concrete architecture of Villa Azure Horizon illuminated at dusk"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      title: "Great Room with Floor-to-Ceiling Glass Walls",
      category: "Living Room",
      alt: "Spacious interior living room with luxury white sofas and floor to ceiling ocean view windows"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      title: "Chef's Gourmet Kitchen & Marble Breakfast Bar",
      category: "Kitchen",
      alt: "Luxury custom kitchen with marble island and high end appliances"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
      title: "Master Suite with Private Ocean Balcony",
      category: "Bedrooms",
      alt: "Master bedroom suite with king size bed and wall of glass facing ocean waves"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80",
      title: "Ensuite Master Spa Bathroom with Soaking Tub",
      category: "Bathrooms",
      alt: "Freestanding white soaking tub next to window with Pacific ocean views"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
      title: "Sunken Fire Pit Lounge & Outdoor Dining",
      category: "Amenities",
      alt: "Outdoor teak terrace with dining table, sun loungers and fire pit"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      title: "Sunset Over the Heated Cliffside Pool",
      category: "Exterior",
      alt: "Sunset over Pacific horizon reflected in heated infinity edge pool"
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=80",
      title: "Guest Bedroom Suite 2 - Pacific Vista",
      category: "Bedrooms",
      alt: "Modern guest bedroom suite with king bed and coastal decor"
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
      title: "Indoor-Outdoor Dining Hall & Wine Bar",
      category: "Living Room",
      alt: "Formal dining table seating 10 adjacent to open glass terrace doors"
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
      title: "Private Gated Stairs to Cove Beach Access",
      category: "Amenities",
      alt: "Teak stair pathway descending down cliffside to private sandy beach cove"
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1600&q=80",
      title: "Evening Stargazing Deck & Architectural Lighting",
      category: "Exterior",
      alt: "Night view of illuminated oceanfront estate under starry Malibu sky"
    }
  ],

  reviews: [
    {
      id: "r1",
      userName: "Marcus Vance",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      date: "August 2026",
      rating: 5,
      comment: "Hands down the most phenomenal property we have ever stayed at. The floor-to-ceiling ocean views from the infinity pool at sunset are unforgettable. Elena and her team were beyond accommodating!"
    },
    {
      id: "r2",
      userName: "Sophia Lin",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
      date: "July 2026",
      rating: 5,
      comment: "Architectural perfection! The Sonos system, chef's kitchen, private beach stairs, and ultra-comfortable beds made our family reunion extraordinary. We will definitely be returning!"
    },
    {
      id: "r3",
      userName: "David K.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      date: "June 2026",
      rating: 5,
      comment: "Photos almost don't do it justice. Sitting by the sunken fire pit watching dolphins in the bay each morning was magical."
    }
  ]
};
