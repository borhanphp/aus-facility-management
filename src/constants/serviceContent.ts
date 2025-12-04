export interface ServiceContent {
  introduction: string[];
  whyChoose: {
    title: string;
    items: string[];
  };
  serviceAreas: string;
  process: {
    title: string;
    steps: { title: string; description: string }[];
  };
  guarantee: string;
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  'cleaning-services': {
    introduction: [
      "Welcome to AUS Facility Management, Sydney's premier provider of professional cleaning services. With over 10 years of experience serving residential and commercial clients across Greater Sydney, we've built our reputation on delivering exceptional cleaning solutions that exceed expectations every single time.",
      "Our comprehensive cleaning services cover everything from regular house cleaning and office maintenance to specialized services like end of lease cleaning, NDIS support cleaning, and post-construction cleanup. We understand that every property is unique, which is why we customize our cleaning approach to meet your specific needs, schedule, and budget.",
      "What sets us apart is our unwavering commitment to quality, reliability, and customer satisfaction. Our team of professionally trained, police-checked, and fully insured cleaners use only eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the environment. Whether you need a one-time deep clean or ongoing maintenance, we're here to make your space sparkle.",
    ],
    whyChoose: {
      title: 'Why Choose Our Cleaning Services in Sydney?',
      items: [
        '**Experienced & Professional Team**: Our cleaners undergo rigorous training and background checks to ensure you receive the highest standard of service',
        '**Eco-Friendly Products**: We use environmentally responsible, non-toxic cleaning solutions that deliver powerful results without harmful chemicals',
        '**Fully Insured & Licensed**: Comprehensive insurance coverage and proper licensing give you complete peace of mind',
        '**Flexible Scheduling**: We work around your schedule with same-day, after-hours, and weekend services available',
        '**100% Satisfaction Guarantee**: If you\'re not completely satisfied, we\'ll return and re-clean at no extra charge',
        '**Transparent Pricing**: No hidden fees or surprise charges - you\'ll know exactly what you\'re paying upfront',
        '**24/7 Emergency Response**: Available around the clock for urgent cleaning needs across Sydney',
        '**Customized Cleaning Plans**: Tailored solutions designed specifically for your property and requirements',
      ],
    },
    serviceAreas: "We proudly serve all areas across Greater Sydney, including Sydney CBD, North Shore, Eastern Suburbs, Western Sydney, Inner West, Northern Beaches, Hills District, South Sydney, and surrounding regions. No matter where you're located in Sydney, our professional cleaning team can reach you promptly and deliver exceptional results. We service both residential properties (houses, apartments, townhouses, units) and commercial premises (offices, retail stores, medical centers, schools, warehouses).",
    process: {
      title: 'Our Simple 4-Step Cleaning Process',
      steps: [
        {
          title: '1. Free Consultation & Quote',
          description:
            'Contact us via phone or our online form. We\'ll discuss your cleaning needs, property size, and specific requirements to provide an accurate, no-obligation quote within 24 hours.',
        },
        {
          title: '2. Customized Cleaning Plan',
          description:
            'Once you approve the quote, we create a detailed cleaning plan tailored to your property. We\'ll schedule a convenient time that fits your routine and assign our best team for the job.',
        },
        {
          title: '3. Professional Cleaning Service',
          description:
            'Our fully-equipped cleaning team arrives on time with all necessary supplies and equipment. They follow our comprehensive checklist to ensure every area is thoroughly cleaned to our high standards.',
        },
        {
          title: '4. Quality Inspection & Follow-Up',
          description:
            'We conduct a final inspection to ensure everything meets our quality standards. Your satisfaction is guaranteed, and we\'re always available for any follow-up or recurring service needs.',
        },
      ],
    },
    guarantee:
      'Your satisfaction is our priority. We stand behind every cleaning service with our 100% satisfaction guarantee. If you\'re not completely happy with any aspect of our work, simply let us know within 24 hours, and we\'ll return to address your concerns at no additional cost. Our team is committed to delivering spotless results that exceed your expectations every time. With AUS Facility Management, you can trust that your property is in safe, professional hands.',
  },

  'lawn-and-gardening': {
    introduction: [
      "Transform your outdoor space into a beautiful, well-maintained paradise with AUS Facility Management's professional lawn and gardening services in Sydney. With over a decade of experience in landscape maintenance and garden care, we've helped thousands of Sydney homeowners and businesses create and maintain stunning outdoor environments.",
      "Our comprehensive lawn and gardening services include everything from regular grass cutting and lawn mowing to complete landscape design, garden maintenance, weed control, and seasonal planting. We understand Sydney's unique climate and soil conditions, allowing us to provide expert care that keeps your lawn healthy and vibrant year-round.",
      "Whether you have a small courtyard garden, expansive residential lawn, or commercial landscape, our qualified horticulturists and experienced gardeners deliver exceptional results. We use professional-grade equipment, organic fertilizers, and sustainable practices to ensure your garden thrives while minimizing environmental impact.",
    ],
    whyChoose: {
      title: 'Why Choose Our Lawn & Gardening Services?',
      items: [
        '**Expert Horticulturists**: Our team includes qualified gardeners with extensive knowledge of Sydney plants and climate conditions',
        '**Eco-Friendly Practices**: We use organic fertilizers, natural pest control, and water-efficient irrigation methods',
        '**Professional Equipment**: Commercial-grade mowers, trimmers, and landscaping tools for superior results',
        '**Regular Maintenance Plans**: Flexible weekly, fortnightly, or monthly service schedules to suit your needs',
        '**Comprehensive Services**: From basic mowing to complete landscape transformations',
        '**Native Plant Specialists**: Expertise in Australian native plants that thrive in Sydney\'s environment',
        '**Seasonal Garden Care**: Year-round maintenance adapted to seasonal requirements',
        '**Free Garden Consultations**: Professional advice on improving your outdoor space at no cost',
      ],
    },
    serviceAreas: "Our lawn and gardening services cover all Sydney metropolitan areas and surrounding suburbs, including North Shore, Eastern Suburbs, Northern Beaches, Inner West, Western Sydney, Hills District, South Sydney, and the CBD. We service residential properties of all sizes, from small inner-city courtyards to large estate gardens, as well as commercial properties, strata complexes, schools, and parks. Our mobile service means we bring all necessary equipment and expertise directly to your location.",
    process: {
      title: 'Our Garden Care Process',
      steps: [
        {
          title: '1. Property Assessment',
          description:
            'We visit your property to assess lawn condition, garden layout, soil quality, and your specific requirements. This allows us to create a customized maintenance plan.',
        },
        {
          title: '2. Customized Service Plan',
          description:
            'Based on your garden\'s needs and your preferences, we design a comprehensive service plan including mowing frequency, treatments needed, and seasonal tasks.',
        },
        {
          title: '3. Professional Garden Care',
          description:
            'Our experienced team arrives with professional equipment to deliver meticulous lawn and garden maintenance, from precise mowing to detailed pruning and weeding.',
        },
        {
          title: '4. Ongoing Optimization',
          description:
            'We continuously monitor your garden\'s health, adjusting treatments and care as seasons change to ensure optimal growth and appearance year-round.',
        },
      ],
    },
    guarantee:
      'We guarantee beautiful, healthy lawns and gardens with our professional care. If you\'re not satisfied with any aspect of our gardening service, we\'ll return to address it immediately at no extra charge. Our team takes pride in creating outdoor spaces that enhance your property\'s appeal and value. With regular maintenance from AUS Facility Management, your garden will be the envy of the neighborhood.',
  },

  'pest-control-and-termite': {
    introduction: [
      "Protect your Sydney property from unwanted pests with AUS Facility Management's comprehensive pest control and termite management services. As licensed pest control professionals with over 10 years of experience, we provide safe, effective solutions for residential and commercial properties across Greater Sydney.",
      "Our expert technicians are trained in the latest pest control techniques and use environmentally responsible products that eliminate pests while keeping your family and pets safe. From common household pests like cockroaches, ants, and spiders to serious threats like termites, rodents, and bed bugs, we have the expertise and equipment to handle any infestation.",
      "We don't just treat the symptoms – we identify and address the root causes of pest problems to provide long-lasting protection. Our integrated pest management approach combines inspection, treatment, prevention, and ongoing monitoring to keep your property pest-free year-round.",
    ],
    whyChoose: {
      title: 'Why Choose Our Pest Control Services?',
      items: [
        '**Fully Licensed Technicians**: All our pest controllers hold proper Australian licensing and certifications',
        '**Family & Pet Safe**: We use approved, low-toxicity products that are safe when applied correctly',
        '**Comprehensive Inspections**: Thorough property assessments to identify all pest activity and entry points',
        '**Advanced Treatment Methods**: Latest technology and proven techniques for effective pest elimination',
        '**Termite Specialists**: Expert termite detection, treatment, and prevention using thermal imaging and baiting systems',
        '**Warranty Protection**: Our services include warranty periods for guaranteed peace of mind',
        '**Emergency Response**: 24/7 availability for urgent pest problems requiring immediate attention',
        '**Preventative Programs**: Quarterly maintenance plans to stop pests before they become problems',
      ],
    },
    serviceAreas: "We provide pest control and termite services throughout Sydney including all metropolitan suburbs and surrounding areas. Our service coverage extends from Sydney CBD to North Shore, Eastern Suburbs, Western Sydney, Northern Beaches, Inner West, Hills District, and South Sydney. We service residential homes, apartments, townhouses, commercial buildings, warehouses, restaurants, hotels, schools, and healthcare facilities. No property is too large or small for our professional pest management solutions.",
    process: {
      title: 'Our Pest Control Process',
      steps: [
        {
          title: '1. Detailed Inspection',
          description:
            'Our licensed technicians conduct a comprehensive property inspection to identify pest types, infestation levels, entry points, and conducive conditions. For termites, we use thermal imaging and moisture meters.',
        },
        {
          title: '2. Customized Treatment Plan',
          description:
            'We develop a targeted treatment strategy based on inspection findings, property type, and pest species. You\'ll receive a detailed quote and explanation of recommended treatments.',
        },
        {
          title: '3. Professional Treatment',
          description:
            'Our technicians apply treatments using appropriate methods - whether spraying, baiting, dusting, or fumigation. We follow strict safety protocols and Australian standards for all applications.',
        },
        {
          title: '4. Follow-Up & Prevention',
          description:
            'We schedule follow-up inspections to ensure treatment effectiveness and provide recommendations for preventing future infestations. Ongoing monitoring plans are available for continuous protection.',
        },
      ],
    },
    guarantee:
      'All our pest control treatments come with service warranties. If pests return within the warranty period, we\'ll re-treat your property at no additional charge. For termite treatments, we provide extended warranties and annual inspections to ensure your property remains protected. Our technicians are fully insured, and we guarantee safe, effective pest management that complies with all Australian regulations. Your protection and satisfaction are our top priorities.',
  },

  'facility-management': {
    introduction: [
      "Streamline your property operations with AUS Facility Management's comprehensive facility management services in Sydney. As a full-service facility management provider with over 10 years of industry experience, we handle all aspects of building maintenance, operations, and compliance for commercial and residential properties across Sydney.",
      "Our integrated facility management approach covers everything from routine maintenance and emergency repairs to building compliance, vendor management, and strategic planning. We manage electrical, plumbing, HVAC, painting, handyman services, cleaning coordination, security management, and more - all under one roof for your convenience.",
      "Whether you manage a single office building, multiple retail locations, industrial facilities, or large residential complexes, our professional team ensures your property operates efficiently, safely, and cost-effectively. We reduce downtime, extend equipment life, and optimize your facility's performance while you focus on your core business.",
    ],
    whyChoose: {
      title: 'Why Choose Our Facility Management Services?',
      items: [
        '**Single Point of Contact**: One dedicated account manager for all your facility needs',
        '**Licensed Trade Professionals**: Qualified electricians, plumbers, HVAC technicians, and building specialists',
        '**24/7 Emergency Response**: Round-the-clock availability for urgent repairs and maintenance issues',
        '**Preventive Maintenance Programs**: Scheduled maintenance that prevents costly breakdowns and extends equipment life',
        '**Compliance Management**: We ensure your property meets all Australian building codes and safety regulations',
        '**Cost Savings**: Optimized vendor contracts, reduced energy consumption, and fewer emergency repairs save you money',
        '**Technology-Enabled**: Modern facility management software for real-time tracking and reporting',
        '**Customized Solutions**: Flexible service packages tailored to your property type and budget',
      ],
    },
    serviceAreas: "Our facility management services span all of Greater Sydney including CBD, North Shore, Eastern Suburbs, Western Sydney, Northern Beaches, Inner West, Hills District, and South Sydney. We manage diverse property types including office buildings, retail centers, shopping complexes, industrial warehouses, manufacturing facilities, medical centers, aged care facilities, educational institutions, government buildings, and residential apartment complexes. From single properties to multi-site portfolios, we deliver professional facility management solutions.",
    process: {
      title: 'Our Facility Management Approach',
      steps: [
        {
          title: '1. Property Assessment',
          description:
            'We conduct a comprehensive evaluation of your facility including building systems, maintenance history, compliance status, and operational challenges to understand your needs.',
        },
        {
          title: '2. Strategic Planning',
          description:
            'Our team develops a customized facility management plan covering preventive maintenance schedules, compliance requirements, vendor coordination, and budget optimization strategies.',
        },
        {
          title: '3. Implementation & Execution',
          description:
            'We deploy our professional team and implement systems for maintenance coordination, emergency response, vendor management, and regular reporting to keep your facility running smoothly.',
        },
        {
          title: '4. Continuous Optimization',
          description:
            'Through regular performance reviews, analytics, and client feedback, we continuously improve our services to enhance efficiency, reduce costs, and maximize your property\'s value.',
        },
      ],
    },
    guarantee:
      'We stand behind our facility management services with comprehensive service level agreements (SLAs) that guarantee response times, quality standards, and performance metrics. Our licensed technicians and fully insured operations give you complete peace of mind. We\'re committed to reducing your total facility operating costs by 15-30% through preventive maintenance, energy optimization, and efficient vendor management. Your facility\'s success is our success.',
  },

  'construction-services': {
    introduction: [
      "Bring your building dreams to life with AUS Facility Management's professional construction services in Sydney. As licensed builders with over 10 years of experience, we deliver quality construction projects from concept to completion, specializing in residential new builds, renovations, extensions, and commercial fit-outs across Sydney.",
      "Our comprehensive construction services include single and double storey homes, granny flats, townhouses, semi-detached houses, home extensions, kitchen and bathroom renovations, knockdown rebuilds, and all types of home improvements. We combine innovative design, quality craftsmanship, and project management expertise to create spaces that exceed your expectations.",
      "Whether you're planning a small renovation or a complete new build, our dedicated team of licensed builders, qualified tradespeople, and experienced project managers ensure your project is delivered on time, within budget, and to the highest quality standards. We handle all aspects including design consultation, council approvals, construction, and final handover.",
    ],
    whyChoose: {
      title: 'Why Choose Our Construction Services?',
      items: [
        '**Fully Licensed Builders**: All work complies with NSW building regulations and Australian standards',
        '**Comprehensive Insurance**: Public liability and workers compensation coverage for complete protection',
        '**Fixed Price Contracts**: Transparent pricing with no hidden costs or surprise charges',
        '**Quality Craftsmanship**: Experienced tradespeople delivering superior workmanship on every project',
        '**Design Consultation**: Professional design services to optimize your space and budget',
        '**Project Management**: Dedicated managers coordinating all trades, materials, and timelines',
        '**Extended Warranties**: Structural warranties up to 7 years and workmanship warranties up to 5 years',
        '**Council Approval Assistance**: We handle all development applications and approvals',
      ],
    },
    serviceAreas: "We provide construction services throughout Sydney including North Shore, Eastern Suburbs, Northern Beaches, Inner West, Western Sydney, Hills District, South Sydney, and CBD areas. Our projects range from prestigious waterfront properties in Eastern Suburbs to family homes in Western Sydney and everything in between. We service residential clients, property developers, commercial businesses, and strata complexes across Greater Sydney and surrounding regions.",
    process: {
      title: 'Our Construction Process',
      steps: [
        {
          title: '1. Initial Consultation',
          description:
            'We meet to discuss your vision, budget, timeline, and site conditions. Our team provides expert advice on design options, material selections, and realistic project expectations.',
        },
        {
          title: '2. Design & Planning',
          description:
            'We create detailed plans and 3D renderings, obtain necessary council approvals, and provide a comprehensive fixed-price quote covering all aspects of construction.',
        },
        {
          title: '3. Construction Phase',
          description:
            'Our skilled team begins construction with regular updates and quality inspections at each milestone. We coordinate all trades, materials, and ensure strict safety compliance throughout.',
        },
        {
          title: '4. Completion & Handover',
          description:
            'Final inspections, defect rectification, and thorough cleaning are completed before handover. We provide all warranties, maintenance guides, and ongoing support.',
        },
      ],
    },
    guarantee:
      'All our construction work is backed by comprehensive warranties including structural warranties (up to 7 years as per NSW regulations), workmanship warranties (2-5 years), and manufacturer warranties on materials and fixtures. We\'re fully licensed and insured, giving you complete protection and peace of mind. Our commitment to quality means we don\'t consider the job complete until you\'re 100% satisfied with the result. We build lasting relationships, not just buildings.',
  },

  'job-recruitment': {
    introduction: [
      "Connect with Sydney's best facility management talent through AUS Facility Management's professional recruitment services. With over 10 years of experience in the industry, we understand the unique staffing challenges faced by facility management, cleaning, maintenance, construction, and property services businesses across Sydney.",
      "Our comprehensive recruitment services help Sydney employers find qualified, reliable staff for positions ranging from cleaners and maintenance technicians to facility managers and construction professionals. We handle the entire recruitment process including advertising, screening, interviewing, reference checking, and onboarding to save you time and ensure quality hires.",
      "For job seekers, we offer access to a wide range of employment opportunities with leading Sydney companies in facility management and related industries. Whether you're seeking permanent full-time positions, part-time work, casual roles, or contract opportunities, we match your skills and career goals with the right employers.",
    ],
    whyChoose: {
      title: 'Why Choose Our Recruitment Services?',
      items: [
        '**Industry Specialists**: Deep understanding of facility management and property services staffing needs',
        '**Thorough Screening**: Comprehensive background checks, reference verification, and qualification validation',
        '**Fast Placements**: Efficient process typically delivers qualified candidates within 1-2 weeks',
        '**Quality Candidates**: We match skills, experience, and culture fit for long-term success',
        '**Flexible Staffing**: Permanent, temporary, casual, and contract positions available',
        '**Training Support**: We can arrange induction and ongoing training for placed candidates',
        '**Compliance Assured**: All candidates meet legal working requirements and relevant licensing',
        '**Ongoing Support**: Post-placement follow-up to ensure satisfaction for both parties',
      ],
    },
    serviceAreas: "Our recruitment services cover all Sydney metropolitan areas and surrounding regions including CBD, North Shore, Eastern Suburbs, Western Sydney, Northern Beaches, Inner West, Hills District, and South Sydney. We place candidates across diverse industries including facility management, commercial cleaning, property maintenance, construction, landscaping, pest control, and related service sectors. We work with employers from small businesses to large corporations, strata management companies, and government organizations.",
    process: {
      title: 'Our Recruitment Process',
      steps: [
        {
          title: '1. Needs Assessment',
          description:
            'For employers: We understand your staffing requirements, company culture, and position details. For job seekers: We discuss your skills, experience, qualifications, and career goals.',
        },
        {
          title: '2. Candidate Sourcing & Screening',
          description:
            'We advertise positions, review applications, conduct initial interviews, verify references, check qualifications, and perform background screening to identify top candidates.',
        },
        {
          title: '3. Interviews & Selection',
          description:
            'Shortlisted candidates are presented to employers with detailed profiles. We coordinate interviews, gather feedback, and facilitate the selection process efficiently.',
        },
        {
          title: '4. Placement & Follow-Up',
          description:
            'We manage offer negotiations, onboarding coordination, and initial employment period. Regular follow-ups ensure successful integration and long-term satisfaction.',
        },
      ],
    },
    guarantee:
      'We guarantee quality placements with replacement guarantees for permanent positions. If a placed candidate leaves within the guarantee period (typically 90 days), we\'ll find a replacement at no additional fee. All candidates are thoroughly screened, reference-checked, and verified to meet your requirements. Our success is measured by successful, long-term employment matches that benefit both employers and employees. We\'re committed to building Sydney\'s facility management workforce.',
  },
};

