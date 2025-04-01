export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  imageUrl: string;
  thumbnailUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  year: number;
  client: string;
  category: "web" | "mobile" | "design" | "other";
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "MedCare",
    description: "A user-friendly platform for seamless medicine donation and distribution.",
    fullDescription: "Created a user-friendly platform for seamless medicine donation and distribution using Bootstrap, Node.js, MySQL, and Tailwind CSS. The application allows users to donate unused medicines and connects those in need with available donations through an intuitive interface.",
    technologies: ["Bootstrap", "Node.js", "MySQL", "Tailwind CSS", "Material UI"],
    imageUrl: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    githubUrl: "https://github.com/Bhavneet-joshi/MedCare",
    liveUrl: "https://medcare-bhavneet.replit.app",
    year: 2023,
    client: "Healthcare Initiative",
    category: "web",
    featured: true
  },
  {
    id: "2",
    title: "Picture Pass",
    description: "Dynamic image browsing app with API integration and responsive design.",
    fullDescription: "Used React.js for dynamic data integration from external APIs. Employed Tailwind CSS and Material UI for an adaptive, visually appealing interface. The application features responsive design principles to ensure optimal viewing across all device types.",
    technologies: ["React.js", "Tailwind CSS", "Material UI", "APIs"],
    imageUrl: "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    githubUrl: "https://github.com/Bhavneet-joshi/PicturePass",
    liveUrl: "https://picturepass-bhavneet.replit.app",
    year: 2023,
    client: "Photography Enthusiasts",
    category: "web",
    featured: true
  },
  {
    id: "3",
    title: "Newspaper Distribution",
    description: "Full-stack app for managing newspaper distribution, billing, and assignments.",
    fullDescription: "Crafting the Newspaper App offered immersive exposure to full-stack development, synergizing Java's backend logic with SQL's database management for a robust system encompassing newspaper distribution, billing, and assignments. Strategizing the schema for Customers, Hawkers, Newspapers, and Billings underscored the significance of meticulous database design.",
    technologies: ["Java", "SQL", "Database Design", "Backend Development"],
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    githubUrl: "https://github.com/Bhavneet-joshi/Newspaper",
    liveUrl: "https://newspaper-bhavneet.replit.app",
    year: 2022,
    client: "Media Distribution Services",
    category: "web",
    featured: true
  },
  {
    id: "4",
    title: "SQL Query Project",
    description: "Complex SQL queries and procedures for optimized data retrieval and analysis.",
    fullDescription: "Acquired extensive experience in creating complex SQL queries, including procedures and subqueries, to optimize data retrieval, manipulation, and analysis. Developed solutions for maintaining and administering relational software focused on ASRS systems.",
    technologies: ["SQL", "Database Management", "Procedures", "Subqueries"],
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    liveUrl: "https://sqlqueries-bhavneet.replit.app",
    year: 2024,
    client: "SMCK",
    category: "other",
    featured: false
  },
  {
    id: "5",
    title: "Financial Data Visualization",
    description: "Data visualization project using Matplotlib and Plotly during Accenture internship.",
    fullDescription: "During the Accenture Virtual Internship, developed visualizations of financial data using Matplotlib and Plotly. Gained experience in the Software Development Lifecycle (SDLC) and explored various roles in the tech sector through practical applications and mentorship.",
    technologies: ["Python", "Matplotlib", "Plotly", "Data Analysis"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    liveUrl: "https://financedata-bhavneet.replit.app",
    year: 2023,
    client: "Accenture",
    category: "design",
    featured: true
  },
  {
    id: "6",
    title: "Real Estate Platform",
    description: "A web platform for property listings, searches, and virtual tours.",
    fullDescription: "This Real Estate Platform revolutionizes property search and acquisition with its comprehensive features. It includes detailed property listings with high-quality images, advanced search filters based on location, price, and amenities, virtual 3D tours of properties, mortgage calculator and financing resources, and agent contact functionality. The platform is built with Next.js for performance and SEO optimization, and it uses a scalable backend with MongoDB for data management. The modern interface is designed with Tailwind CSS for a responsive user experience across all devices.",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Three.js", "MapBox API"],
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com/realestate",
    year: 2022,
    client: "HomeFinder Realty",
    category: "web"
  },
  {
    id: "7",
    title: "Corporate Website Redesign",
    description: "Complete redesign of a corporate website for improved user experience.",
    fullDescription: "This project involved a comprehensive redesign of a corporate website to enhance user experience and reflect the company's updated brand identity. The redesign focused on simplified navigation, responsive layouts for all devices, improved content organization, and modern visual design. The new website features enhanced performance metrics, accessibility compliance, and integrated marketing tools. Built with Gatsby for fast loading times and WordPress as a headless CMS for content management flexibility, the site provides a seamless experience for both visitors and content administrators.",
    technologies: ["Gatsby", "React", "WordPress", "GSAP", "Styled Components"],
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com/corporate",
    year: 2023,
    client: "GlobalTech Industries",
    category: "web"
  },
  {
    id: "8",
    title: "Product Design for Smart Home Device",
    description: "UI/UX and physical product design for an innovative smart home controller.",
    fullDescription: "This project encompassed both physical product design and digital interface design for a smart home controller. The work involved creating an intuitive physical interface with ergonomic considerations, designing a companion mobile app for remote control, developing a cohesive design language across hardware and software, user testing and iteration refinement, and packaging design. The design process prioritized user-centered design principles to ensure that both the physical device and digital interface work seamlessly together, creating an intuitive and enjoyable user experience for controlling various smart home functions.",
    technologies: ["Industrial Design", "UI/UX Design", "Figma", "Sketch", "3D Modeling"],
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055e2dae1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1558002038-1055e2dae1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com/smarthome-design",
    year: 2022,
    client: "HomeConnect Technologies",
    category: "design"
  },
  {
    id: "9",
    title: "AI-Powered Content Platform",
    description: "A platform that uses AI to generate and curate personalized content.",
    fullDescription: "The AI-Powered Content Platform leverages artificial intelligence to deliver personalized content experiences. The system analyzes user preferences and behavior to recommend relevant articles, videos, and podcasts. It features machine learning algorithms for content categorization, a content management system with automated tagging, personalization engines that adapt to user interests over time, and analytics dashboards for content performance monitoring. The platform is built using Python and TensorFlow for the AI components, with React for the frontend and Django for the backend services.",
    technologies: ["Python", "TensorFlow", "React", "Django", "PostgreSQL", "Redis"],
    imageUrl: "https://images.unsplash.com/photo-1677442135736-27d6aead7c4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1677442135736-27d6aead7c4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com/ai-content",
    githubUrl: "https://github.com/example/ai-content",
    year: 2023,
    client: "MediaTech Innovations",
    category: "web"
  },
  {
    id: "10",
    title: "Music Production App",
    description: "A digital audio workstation for music production on mobile devices.",
    fullDescription: "This Music Production App transforms mobile devices into powerful music creation tools. It features multi-track recording and editing capabilities, a library of virtual instruments and sound effects, beat matching and tempo adjustment tools, cloud synchronization for project access across devices, and sharing options for collaboration. The application is built with Swift for iOS and Kotlin for Android, with C++ for the audio processing engine to ensure high-performance and low-latency sound processing capabilities essential for music production.",
    technologies: ["Swift", "Kotlin", "C++", "Audio Processing", "UI Design"],
    imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com/music-app",
    year: 2022,
    client: "AudioCraft Studios",
    category: "mobile"
  },
  {
    id: "11",
    title: "Restaurant Management System",
    description: "An all-in-one solution for restaurant operations and customer management.",
    fullDescription: "The Restaurant Management System provides comprehensive tools for efficient restaurant operations. It includes reservation and table management, order processing and kitchen communication, inventory and supply chain management, staff scheduling and performance tracking, and customer relationship management with loyalty programs. The system is built with Vue.js for the frontend interfaces, Laravel for the backend API, and MySQL for data storage. It offers both web-based admin interfaces and tablet/mobile solutions for on-floor staff, creating a seamless operational flow from customer arrival to departure.",
    technologies: ["Vue.js", "Laravel", "MySQL", "WebSockets", "Payment Integration"],
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/example/restaurant-system",
    year: 2023,
    client: "Culinary Management Solutions",
    category: "web"
  },
  {
    id: "12",
    title: "Augmented Reality Education App",
    description: "An AR app that transforms learning through interactive 3D visualizations.",
    fullDescription: "This Augmented Reality Education App revolutionizes learning by bringing complex concepts to life through interactive 3D visualizations. It features AR models of scientific, historical, and mathematical concepts, interactive lessons with progressive difficulty levels, quiz and assessment modules, progress tracking for students and educators, and offline content access for learning without internet connectivity. The app is built using Unity for 3D development, ARKit for iOS and ARCore for Android integration, with a Node.js backend for content management and user progress synchronization.",
    technologies: ["Unity", "ARKit", "ARCore", "C#", "Node.js", "3D Modeling"],
    imageUrl: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com/ar-education",
    year: 2023,
    client: "EduTech Innovations",
    category: "mobile"
  }
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find(project => project.id === id);
}

export function getRelatedProjects(id: string, limit: number = 2): Project[] {
  const project = getProjectById(id);
  if (!project) return [];
  
  // Find projects in the same category, excluding the current project
  const relatedProjects = PROJECTS
    .filter(p => p.id !== id && p.category === project.category)
    .slice(0, limit);
  
  // If we don't have enough related projects, add some from other categories
  if (relatedProjects.length < limit) {
    const remainingCount = limit - relatedProjects.length;
    const otherProjects = PROJECTS
      .filter(p => p.id !== id && p.category !== project.category && !relatedProjects.some(rp => rp.id === p.id))
      .slice(0, remainingCount);
    
    relatedProjects.push(...otherProjects);
  }
  
  return relatedProjects;
}

export function getFeaturedProjects(limit: number = 3): Project[] {
  return PROJECTS
    .filter(project => project.featured)
    .slice(0, limit);
}