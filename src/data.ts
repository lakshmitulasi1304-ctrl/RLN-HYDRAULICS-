import heroBg from './components/images/rln_hero_bg_1779506695421.png';
import pumpImg from './components/images/rln_hydraulic_pump_1779506714213.png';
import valvesImg from './components/images/rln_hydraulic_valves_1779506731510.png';
import powerPackImg from './components/images/rln_power_pack_1779506748895.png';
import workshopImg from './components/images/rln_workshop_assembly_1779506766409.png';

import { ProductBrand, ProductItem, IndustryServed, GalleryItem, Testimonial } from './types';

export const HERO_DATA = {
  title: "R.L.N Hydraulics",
  tagline: "Authorized Dealers of Premium Hydraulic Solutions",
  subheading: "Providing High-Performance Hydraulic Pumps, Valves, Cylinders, Power Packs, and Industrial Hydraulic Components to fuel heavy engineering, manufacturing, and automation.",
  heroImage: heroBg,
  ctaPrimary: "Explore Products",
  ctaSecondary: "Contact Us"
};

export const ABOUT_DATA = {
  brief: "R.L.N Hydraulics is a trusted supplier and authorized partner of world-class hydraulic products and industrial hydraulic solutions. We provide reliable hydraulic systems, pressure control solutions, hydraulic accessories, and industrial components for manufacturing, automation, construction, and heavy machinery industries.",
  cards: [
    {
      id: "trusted_solutions",
      title: "Trusted Industrial Solutions",
      description: "Engineering-grade performance designed for severe environments and high-duty cycles.",
      color: "border-blue-100 bg-blue-50/50"
    },
    {
      id: "quality_products",
      title: "Quality Products",
      description: "Direct sourcing from leading global brands ensuring strict ISO and OEM compliance standards.",
      color: "border-slate-200 bg-white"
    },
    {
      id: "expert_support",
      title: "Expert Support",
      description: "Full technical consultations from mechanical specialists to size, source, and calibrate your systems.",
      color: "border-blue-100 bg-blue-50/50"
    },
    {
      id: "reliable_service",
      title: "Reliable Service",
      description: "Optimized turnaround times, comprehensive maintenance plans, and responsive supply chain operations.",
      color: "border-slate-200 bg-white"
    }
  ]
};

export const BRANDS_DATA: ProductBrand[] = [
  {
    id: "yuken",
    name: "YUKEN INDIA LIMITED",
    label: "Authorised Dealer For",
    description: "Japanese precision fluid power technology, offering premium industrial valve systems and hydraulic pumps configured for severe continuous service.",
    products: [
      "Hydraulic Pumps",
      "Pressure Control Valves",
      "Directional Control Valves",
      "Proportional Valves",
      "Modular Valves"
    ],
    logoBg: "from-blue-50 to-white hover:border-blue-600 hover:shadow-lg"
  },
  {
    id: "prism",
    name: "PRISM HYDRAULICS P LTD.",
    label: "Authorised Dealer For",
    description: "Advanced heavy-duty flow regulation and high pressure fluid systems manufactured to survive extreme industrial workloads.",
    products: [
      "High Pressure Plunger Pumps",
      "High Pressure Control Valves",
      "Directional Valves",
      "Pressure Switches"
    ],
    logoBg: "from-slate-50 to-white hover:border-blue-600 hover:shadow-lg"
  },
  {
    id: "boss",
    name: "BOSS GEAR PUMPS",
    label: "Authorised Dealer For",
    description: "Precision-engineered gear delivery systems optimized for general machine tools and dynamic mobile construction fleets.",
    products: [
      "Industrial Gear Pumps",
      "Mobile Gear Pumps"
    ],
    logoBg: "from-blue-50 to-white hover:border-blue-600 hover:shadow-lg"
  },
  {
    id: "bondioli",
    name: "BONDIOLI AND PAVESI INDIA PVT.LTD.",
    label: "Authorised Dealer For",
    description: "Superior European fluid control, closed loop systems, and high performance hydrostatic drive motors.",
    products: [
      "Closed Loop Pumps",
      "Mobile Control Valve",
      "Air To Oil Coolers",
      "Gear And Piston Motors Etc."
    ],
    logoBg: "from-slate-50 to-white hover:border-blue-600 hover:shadow-lg"
  },
  {
    id: "bhagwati",
    name: "BHAGWATI FILTERS PVT. LIMITED",
    label: "Authorised Dealer For",
    description: "Ensuring deep system cleanliness with state-of-the-art particulate filtration assemblies to protect premium hydraulic spools.",
    products: [
      "Pressure Line Filters",
      "Duplex Filters",
      "Filter Elements"
    ],
    logoBg: "from-blue-50 to-white hover:border-blue-600 hover:shadow-lg"
  },
  {
    id: "vbc",
    name: "VBC Hydraulics",
    label: "Authorised Dealer For",
    description: "Performance-oriented hydraulic gear pumps, motors, flow dividers, and specialty accessories designed for system efficiency and long duty-cycle life.",
    products: [
      "Hydraulic Gear Pumps",
      "Hydro Motors",
      "Flow Dividers",
      "Hydraulic Accessories"
    ],
    logoBg: "from-slate-50 to-white hover:border-blue-600 hover:shadow-lg"
  },
  {
    id: "stockiest",
    name: "Hydraulic Components Inventory",
    label: "Stockiest For",
    description: "Ready stock of robust connectors, precision pressure detectors, and key rotational components directly from verified OEM manufacturers.",
    products: [
      "Pressure Gauges",
      "Hydraulic Fittings",
      "Hydraulic Accessories",
      "Hydro Motors"
    ],
    logoBg: "from-slate-50 to-white hover:border-blue-600 hover:shadow-lg"
  },
  {
    id: "manufacturer",
    name: "RLN Hydraulics Special Build",
    label: "Manufacturers Of",
    description: "Our in-house design and integration segment constructing dependable power sources, actuators, and flow distribution assemblies tailored to heavy industry requirements.",
    products: [
      "Hydraulic Power Packs",
      "Hydraulic Cylinders",
      "Manifold Block Assembly"
    ],
    logoBg: "from-blue-50 to-indigo-50 hover:border-blue-600 hover:shadow-lg"
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "p1",
    name: "Industrial Hydraulic Pumps",
    category: "Hydraulic Pumps",
    description: "High-efficiency piston, vane, and gear pumps designed for continuous duty industrial applications, delivering optimal flow rates and working pressures under severe demand.",
    specifications: ["Max working pressure: Up to 350 bar", "Displacement volume: 5 to 250 cc/rev", "Speed range: Up to 3600 RPM", "Low noise signature emission"],
    image: pumpImg,
    features: ["Robust pressure compensation", "Long bearing design lifetime", "Available in single and multiple configurations"],
    brands: ["YUKEN INDIA LIMITED", "PRISM HYDRAULICS P LTD.", "BOSS GEAR PUMPS"]
  },
  {
    id: "p2",
    name: "Precision Control Valves",
    category: "Control Valves",
    description: "Expertly engineered directional, flow, and pressure control valves. Enables precise flow throttling, rapid switching under full pressure, and secure fluid lockups.",
    specifications: ["Flow capability: Up to 600 L/min", "Standard modular subplate mounting", "Coil Voltages available: 12VDC, 24VDC, 110VAC, 220VAC"],
    image: valvesImg,
    features: ["Solenoid-operated configuration", "Low spool leakage leakage margins", "Manual override pins on all coils"],
    brands: ["YUKEN INDIA LIMITED", "PRISM HYDRAULICS P LTD.", "BONDIOLI AND PAVESI INDIA PVT.LTD."]
  },
  {
    id: "p3",
    name: "Electro-Hydraulic Servo & Proportional Valves",
    category: "Servo Valves",
    description: "Premium proportional pressure and flow control valves, featuring integrated electronic amplifiers. Essential for high-accuracy closed-loop position/force automation.",
    specifications: ["Hysteresis: < 1.0%", "Frequency response: Up to 120 Hz", "Control Input parameter: ±10V or 4-20mA"],
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=600&auto=format&fit=crop",
    features: ["OBE (On-Board Electronics) availability", "Extremely dynamic feedback loop response", "High contamination resistance design"],
    brands: ["YUKEN INDIA LIMITED"]
  },
  {
    id: "p4",
    name: "Heavy-Duty Hydraulic Cylinders",
    category: "Hydraulic Cylinders",
    description: "Mill-duty and tie-rod hydraulic cylinders customized for high strength, wear resistance, and long leak-free service cycles in dirt-heavy working plants.",
    specifications: ["Bore sizes: Ø40mm to Ø400mm", "Stroke range: Up to 6000mm", "Operating fluid temp range: -20°C to 120°C", "Dual-lip high-integrity polyurethane sealing"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
    features: ["Induction hardened chrome-plated rods", "Adjustable stroke cushioning buffers", "Custom mount flanges, clevises or trunnions"],
    brands: ["YUKEN INDIA LIMITED"]
  },
  {
    id: "p5",
    name: "Engineered Hydraulic Power Packs",
    category: "Power Packs",
    description: "Complete stand-alone power systems integrating electric motors, modular reservoirs, oil filters, and manifold valves, fully integrated for customized factory requirements.",
    specifications: ["Reservoir volume capacity: 10L to 2000L", "Motor capacity: 1 HP to 150 HP", "Manifold configuration tailoring to sequence"],
    image: powerPackImg,
    features: ["Integrated temperature sensor triggers", "Durable powder coated steel reservoir body", "Assembled under rigorous high-pressure testing"],
    brands: ["YUKEN INDIA LIMITED", "PRISM HYDRAULICS P LTD."]
  },
  {
    id: "p6",
    name: "Industrial Pressure Gauges & Instrumentation",
    category: "Pressure Gauges",
    description: "Precision glycerin-filled stainless steel pressure monitoring, tracking and alarm instruments. Impervious to severe hydraulic spikes, machine vibrations, and pulses.",
    specifications: ["Accuracy scale class: ±1.0% / ±1.6%", "Measurement scale: 0 to 1000 bar", "Dial Diameter dimensions: 63mm, 100mm, 150mm"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop",
    features: ["Full glycerin filling for needle stabilization", "Full stainless steel casing construction", "Bottom and back connection models"],
    brands: ["Hydraulic Components Inventory"]
  },
  {
    id: "p7",
    name: "High Torque Hydro Motors & Orbit Motors",
    category: "Hydro Motors",
    description: "High-torque low-speed (HTLS) orbit motors and dynamic high-speed radial/axial piston hydraulic motors. Built to drive conveyors, mixers, drill heads, and heavy drives.",
    specifications: ["Max speed ranges: 15 RPM to 4000 RPM", "Torque rating: Up to 2500 Nm", "Standard spline/keyed output shafts"],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop",
    features: ["Exceptional starting torque capability", "High radial shaft load threshold", "Dual rotation bi-directional valves compatibility"],
    brands: ["BONDIOLI AND PAVESI INDIA PVT.LTD.", "Hydraulic Components Inventory"]
  },
  {
    id: "p8",
    name: "Industrial Heat Exchangers & Fluid Coolers",
    category: "Heat Exchangers",
    description: "High-efficiency shell-and-tube or plate-type hydraulic fluid coolers. Designed to sustain hydraulic oil within optimal operating viscosity ranges, avoiding seal leaks.",
    specifications: ["Cooling capacity: Up to 250 kW", "Max operating pressure: Oil 20 bar / Water 10 bar", "Premium copper tubes or thermal aluminum fins"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    features: ["Optimized baffle designs for higher heat transfer", "Easily removable header covers for descaling", "Compact footprint integration"],
    brands: ["BONDIOLI AND PAVESI INDIA PVT.LTD."]
  },
  {
    id: "p9",
    name: "Hydraulic Accessories & Piping Fittings",
    category: "Hydraulic Accessories",
    description: "Complete list of essential piping connectors, quick disconnect couplers, high pressure steel fittings, suction strainers, and level indicators for fluid circuit buildouts.",
    specifications: ["Threading standards: BSP, NPT, Metric DIN", "Pressure rating: Up to 700 bar", "Materials: Carbon steel with trivalent zinc plating"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
    features: ["Leak-free soft seal bite type connectors", "Heavy-gauge oil level indicators with dials", "Removable bypass valve suction strainer filters"],
    brands: ["Hydraulic Components Inventory"]
  }
];

export const INDUSTRIES_SERVED: IndustryServed[] = [
  {
    id: "ind_machine_tools",
    name: "Machine Tools",
    iconName: "Settings",
    description: "High-precision pressure valves, flow spools, and custom manifolds for automated clamping, rapid feed controls, and precision tooling operations.",
    applications: ["Automated Tooling Workstations", "Linear Slide Feeds", "Hydraulic Squeeze Jigs"]
  },
  {
    id: "ind_steel_industry",
    name: "Steel Industry",
    iconName: "Hammer",
    description: "Heavy-duty cylinders and high-volume gear/vane pumps constructed to withstand intense radiant heat and heavy loading in rolling mill and casting line systems.",
    applications: ["Continuous Cast Furnace Actuators", "Roller Gap Pressure Lines", "Slab Lifters & Conveyors"]
  },
  {
    id: "ind_power_plant",
    name: "Power Plant",
    iconName: "Zap",
    description: "Safety-aligned bypass valve spools, backup power controls, and heavy accumulator circuit setups designed for non-stop uptime in generation complexes.",
    applications: ["Steam Turbine Bypass Actuators", "High-Reliability Safety Gates", "Bulk Material Fuel Lifter Fluids"]
  },
  {
    id: "ind_electric_cable",
    name: "Electric Cable Industry",
    iconName: "Cpu",
    description: "Precision constant-tension wire pulling motors, extrusion line hydraulic synchronizers, and high-stability spool winding drives.",
    applications: ["Constant-Tension Direct Pullers", "Extruding Nozzle Adjustments", "Dynamic High-Speed Reel Spoolers"]
  },
  {
    id: "ind_plastic_industry",
    name: "Plastic Industry",
    iconName: "Factory",
    description: "Proportional speed control valves, injection cylinder actuators, and clean modular reservoirs tuned for high-duty injection molding mills.",
    applications: ["Plunger Injection Lines", "High-Clamp Mold Actuation", "Ejection Feed Solenoids"]
  },
  {
    id: "ind_construction",
    name: "Construction",
    iconName: "HardHat",
    description: "Severe-weather, dirt-impervious hydraulic parts engineered for heavy concrete pumps, piling rigs, and infrastructure excavation vehicles.",
    applications: ["Excavator Boom Cylinders", "High-Output Concrete Pumps", "Hydraulic Winch Assemblies"]
  },
  {
    id: "ind_stone_crushing",
    name: "Stone Crushing Industry",
    iconName: "Wrench",
    description: "High-tonnage hydraulic tensioning systems, dust-sealed high-pressure fittings, and high-torque orbit motors designed for heavy jaw and cone crushing machinery.",
    applications: ["Jaw Crusher Tension Cylinders", "Dust-Sealed Hydraulic Plugs", "Feed Conveyor Hydraulic Drives"]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal1",
    title: "Diagnostic Testing Bench",
    category: "workshop",
    image: workshopImg,
    description: "State-of-the-art diagnostic test rig for pressure calibrating hydraulic control valves and proportional units."
  },
  {
    id: "gal2",
    title: "Dual Heavy Duty Cylinders",
    category: "systems",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop",
    description: "High tonnage hydraulic cylinders being packaged for shipping to a regional steel forge refinery."
  },
  {
    id: "gal3",
    title: "Centralized Power Solution",
    category: "systems",
    image: powerPackImg,
    description: "A custom 500-Liter hydraulic power pack with low noise vane pumps, custom manifolds, and high heat exchangers."
  },
  {
    id: "gal4",
    title: "Proportional Valve Calibration",
    category: "valves",
    image: valvesImg,
    description: "Yuken proportional valve with electronic feedback loop setup, undergoing response-time diagnostics."
  },
  {
    id: "gal5",
    title: "Custom Hydraulic Pump Assembly",
    category: "pumps",
    image: pumpImg,
    description: "Refurbished dynamic gear pump units being calibrated on high RPM test drives for volumetric flow verification."
  },
  {
    id: "gal6",
    title: "System Workshop Repair Area",
    category: "workshop",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop",
    description: "Our dedicated workshop containing milling, clean-rooms for spool sealing, and dynamic load testing equipment."
  }
];

export const WHY_CHOOSE_US_STATS = [
  { id: "s1", number: "15+", label: "Premium Brands", description: "Direct supply line agreements with global brands." },
  { id: "s2", number: "99.8%", label: "Operational Integrity", description: "Minimal component return rates for manufacturing clients." },
  { id: "s3", number: "250+", label: "Power Packs Custom Designed", description: "Bespoke engineered solutions constructed and load-tested in our workshop." },
  { id: "s4", number: "24-Hour", label: "Diagnostic Fast Response", description: "Dedicated specialist support within crucial windows." },
  { id: "s5", number: "100%", label: "OEM Quality Guarantee", description: "Every supply is certified 100% genuine original with traceability." },
  { id: "s6", number: "5000+", label: "Active Project Operations", description: "Supplying automated components in key factories nationwide." }
];
