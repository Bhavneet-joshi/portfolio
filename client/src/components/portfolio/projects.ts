export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  imageUrl: string;
  thumbnailUrl: string;
  githubUrl?: string;
  liveUrl: string;
  deploymentUrl?: string;
  year: number;
  client: string;
  category: "web" | "mobile" | "design";
  featured?: boolean;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "construction-website",
    title: "Construction Website",
    description: "A modern construction company website showcasing services and projects.",
    fullDescription: "A responsive website built for a construction company to showcase their services, projects, and contact information. Features a modern design with smooth animations and a user-friendly interface.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/images/projects/construction-website.png",
    thumbnailUrl: "/images/projects/construction-website-thumb.png",
    githubUrl: "https://github.com/yourusername/construction-website",
    liveUrl: "https://construction-website.vercel.app",
    year: 2024,
    client: "ABC Construction",
    category: "web",
    featured: true,
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Web Development"]
  },
  {
    id: "pass-app",
    title: "Pass",
    description: "A secure password management application with advanced features.",
    fullDescription: "A password manager application that helps users securely store and manage their passwords. Features include encryption, password generation, and cross-device synchronization.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Express"],
    imageUrl: "/images/projects/pass-app.png",
    thumbnailUrl: "/images/projects/pass-app-thumb.png",
    githubUrl: "https://github.com/yourusername/pass-app",
    liveUrl: "https://pass-app.vercel.app",
    deploymentUrl: "https://pass-app.vercel.app",
    year: 2024,
    client: "Personal Project",
    category: "web",
    featured: false,
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Express", "Web Development"]
  },
  {
    id: "communion-app",
    title: "CommApp",
    description: "A community interaction and event management platform.",
    fullDescription: "A platform designed to help communities organize events, share information, and connect members. Features include event creation, RSVP management, and community forums.",
    technologies: ["React", "TypeScript", "Firebase", "Material UI"],
    imageUrl: "/images/projects/communion-app.png",
    thumbnailUrl: "/images/projects/communion-app-thumb.png",
    githubUrl: "https://github.com/yourusername/communion-app",
    liveUrl: "https://communion-app-sigma.vercel.app",
    deploymentUrl: "https://communion-app-sigma.vercel.app",
    year: 2024,
    client: "Community Organization",
    category: "web",
    featured: true,
    tags: ["React", "TypeScript", "Firebase", "Material UI", "Web Development"]
  },
  {
    id: "e-commerce",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management and payment processing.",
    fullDescription: "An e-commerce platform that allows businesses to manage products, process payments, and handle orders. Includes features like inventory management, user authentication, and order tracking.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    imageUrl: "/images/projects/e-commerce.png",
    thumbnailUrl: "/images/projects/e-commerce-thumb.png",
    githubUrl: "https://github.com/yourusername/e-commerce",
    liveUrl: "https://e-commerce-demo.vercel.app",
    deploymentUrl: "https://e-commerce-demo.vercel.app",
    year: 2023,
    client: "Retail Business",
    category: "web",
    featured: false,
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Web Development"]
  },
  {
    id: "task-manager",
    title: "Task Manager",
    description: "A collaborative task management application for teams.",
    fullDescription: "A task management tool that helps teams organize and track their work. Features include task assignment, progress tracking, and team collaboration tools.",
    technologies: ["React", "TypeScript", "GraphQL", "Apollo"],
    imageUrl: "/images/projects/task-manager.png",
    thumbnailUrl: "/images/projects/task-manager-thumb.png",
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
    deploymentUrl: "https://task-manager-demo.vercel.app",
    year: 2023,
    client: "Tech Company",
    category: "web",
    featured: false,
    tags: ["React", "TypeScript", "GraphQL", "Apollo", "Web Development"]
  },
  {
    id: "portfolio-v1",
    title: "Portfolio Website v1",
    description: "My first portfolio website showcasing my projects and skills.",
    fullDescription: "A personal portfolio website built to showcase my projects, skills, and experience. Features a clean design with smooth animations and responsive layout.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/images/projects/portfolio-v1.png",
    thumbnailUrl: "/images/projects/portfolio-v1-thumb.png",
    githubUrl: "https://github.com/yourusername/portfolio-v1",
    liveUrl: "https://portfolio-v1.vercel.app",
    deploymentUrl: "https://portfolio-v1.vercel.app",
    year: 2022,
    client: "Personal",
    category: "web",
    featured: true,
    tags: ["HTML", "CSS", "JavaScript", "Web Development"]
  },
  {
    id: "weather-app",
    title: "Weather App",
    description: "A weather application with real-time forecasts and location-based services.",
    fullDescription: "A weather application that provides real-time weather forecasts based on user location. Features include weather alerts, hourly forecasts, and location search.",
    technologies: ["React", "OpenWeather API", "Geolocation API"],
    imageUrl: "/images/projects/weather-app.png",
    thumbnailUrl: "/images/projects/weather-app-thumb.png",
    liveUrl: "https://weather-app-demo.vercel.app",
    year: 2023,
    client: "Personal Project",
    category: "web",
    tags: ["React", "API Integration", "Web Development"]
  },
  {
    id: "recipe-finder",
    title: "Recipe Finder",
    description: "An application to discover and save recipes from various cuisines.",
    fullDescription: "A recipe discovery platform that allows users to search, save, and share recipes. Features include recipe filtering, user favorites, and meal planning.",
    technologies: ["React", "Edamam API", "Local Storage"],
    imageUrl: "/images/projects/recipe-finder.png",
    thumbnailUrl: "/images/projects/recipe-finder-thumb.png",
    liveUrl: "https://recipe-finder-demo.vercel.app",
    year: 2023,
    client: "Personal Project",
    category: "web",
    tags: ["React", "API Integration", "Web Development"]
  },
  {
    id: "ui-kit",
    title: "UI Component Library",
    description: "A collection of reusable UI components for web applications.",
    fullDescription: "A comprehensive UI component library built with React and TypeScript. Includes components like buttons, forms, modals, and navigation elements with consistent styling.",
    technologies: ["React", "TypeScript", "Storybook"],
    imageUrl: "/images/projects/ui-kit.png",
    thumbnailUrl: "/images/projects/ui-kit-thumb.png",
    liveUrl: "https://ui-kit-demo.vercel.app",
    year: 2023,
    client: "Design Agency",
    category: "design",
    tags: ["React", "TypeScript", "UI Design", "Component Library"]
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description: "A content management system for blogging and article publishing.",
    fullDescription: "A blogging platform that allows users to create, edit, and publish articles. Features include rich text editing, image uploads, and content categorization.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    imageUrl: "/images/projects/blog-platform.png",
    thumbnailUrl: "/images/projects/blog-platform-thumb.png",
    githubUrl: "https://github.com/yourusername/blog-platform",
    liveUrl: "https://blog-platform-demo.vercel.app",
    year: 2023,
    client: "Content Creator",
    category: "web",
    tags: ["React", "Node.js", "MongoDB", "Express", "Web Development"]
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    description: "A mobile application for tracking workouts and fitness goals.",
    fullDescription: "A fitness tracking application that helps users monitor their workouts, set goals, and track progress. Features include exercise logging, progress charts, and workout plans.",
    technologies: ["React Native", "Firebase", "Redux"],
    imageUrl: "/images/projects/fitness-tracker.png",
    thumbnailUrl: "/images/projects/fitness-tracker-thumb.png",
    liveUrl: "https://fitness-tracker-demo.vercel.app",
    year: 2023,
    client: "Fitness Enthusiast",
    category: "mobile",
    tags: ["React Native", "Firebase", "Redux", "Mobile Development"]
  },
  {
    id: "chat-app",
    title: "Chat Application",
    description: "A real-time messaging application with user authentication.",
    fullDescription: "A real-time chat application that allows users to send messages, create groups, and share media. Features include user authentication, message history, and online status indicators.",
    technologies: ["React", "Socket.io", "MongoDB", "Express"],
    imageUrl: "/images/projects/chat-app.png",
    thumbnailUrl: "/images/projects/chat-app-thumb.png",
    githubUrl: "https://github.com/yourusername/chat-app",
    liveUrl: "https://chat-app-demo.vercel.app",
    year: 2023,
    client: "Tech Startup",
    category: "web",
    tags: ["React", "Socket.io", "MongoDB", "Express", "Web Development"]
  },
  {
    id: "food-delivery",
    title: "Food Delivery App",
    description: "A mobile application for food ordering and delivery tracking.",
    fullDescription: "A food delivery application that allows users to browse restaurants, place orders, and track deliveries in real-time. Features include order history, payment processing, and delivery tracking.",
    technologies: ["React Native", "Firebase", "Stripe"],
    imageUrl: "/images/projects/food-delivery.png",
    thumbnailUrl: "/images/projects/food-delivery-thumb.png",
    liveUrl: "https://food-delivery-demo.vercel.app",
    year: 2023,
    client: "Restaurant Chain",
    category: "mobile",
    tags: ["React Native", "Firebase", "Stripe", "Mobile Development"]
  }
]; 