export type CertificateCategory = "web" | "mobile" | "design" | "other";

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  imageUrl: string;
  verificationUrl?: string;
  category: CertificateCategory;
}

export const CERTIFICATES: Certificate[] = [
  {
    id: "devml",
    title: "Machine Learning using Python & SKLearn",
    organization: "DevTown & GDSC KIIT Chapter",
    date: "January 2023",
    description: "7-days FREE Bootcamp on Machine Learning using Python & SKLearn",
    imageUrl: "/assets/devml.png",
    verificationUrl: "https://cert.devtown.in/verify/DFGJUK",
    category: "other"
  },
  {
    id: "gooml",
    title: "Machine Learning using Python & SKLearn",
    organization: "Google Developer Student Clubs",
    date: "January 2023",
    description: "Successfully completed 7-days bootcamp with DevTown on Machine Learning using Python & SKLearn",
    imageUrl: "/assets/gooml.png",
    verificationUrl: "https://cert.devtown.in/verify/ZSh1YK",
    category: "other"
  },
  {
    id: "webani1",
    title: "Web Dev Animation Project",
    organization: "DevTown",
    date: "February 2023",
    description: "Successfully completed web development animation project bootcamp",
    imageUrl: "/assets/webani dev.png",
    verificationUrl: "https://cert.devtown.in/verify/7dWHG",
    category: "web"
  },
  {
    id: "webani2",
    title: "Web Development Animation Project",
    organization: "Google Developer Student Clubs",
    date: "February 2023",
    description: "Successfully completed web development animation project bootcamp with GDSC",
    imageUrl: "/assets/webani goo.png",
    verificationUrl: "https://cert.devtown.in/verify/7GHkp",
    category: "web"
  },
  {
    id: "webani3",
    title: "Web Development Animation Project",
    organization: "Microsoft Learn Student Ambassador",
    date: "February 2023",
    description: "In recognition of attendance and completion of the Microsoft Student Ambassadors Web Development Animation Project Bootcamp",
    imageUrl: "/assets/webani mic.png",
    verificationUrl: "https://cert.devtown.in/verify/2HfwIT",
    category: "web"
  },
  {
    id: "jrdev",
    title: "JavaScript & React.JS",
    organization: "DevTown & GDSC KIIT Chapter",
    date: "January 2023",
    description: "7-days FREE Bootcamp on JavaScript & React.JS",
    imageUrl: "/assets/jrdev.png",
    verificationUrl: "https://cert.devtown.in/verify/7S4BJK",
    category: "web"
  },
  {
    id: "jrgoo",
    title: "JavaScript & React.js",
    organization: "Google Developer Student Clubs",
    date: "January 2023",
    description: "Successfully completed 7-days bootcamp with DevTown on JavaScript & React.js",
    imageUrl: "/assets/jrgoo.png",
    verificationUrl: "https://cert.devtown.in/verify/2NSZtM",
    category: "web"
  },
  {
    id: "jrmic",
    title: "JavaScript & React.js Bootcamp",
    organization: "Microsoft Learn Student Ambassador",
    date: "January 2023",
    description: "In recognition of attendance and completion of the Microsoft Student Ambassadors JavaScript & React.js Bootcamp",
    imageUrl: "/assets/jrmic.png",
    verificationUrl: "https://cert.devtown.in/verify/ZTE4VJ",
    category: "web"
  },
  {
    id: "micml",
    title: "Machine Learning using Python & SKLearn Bootcamp",
    organization: "Microsoft Learn Student Ambassador",
    date: "January 2023",
    description: "In recognition of attendance and completion of the Microsoft Student Ambassadors Machine Learning using Python & SKLearn Bootcamp",
    imageUrl: "/assets/micml.png",
    verificationUrl: "https://cert.devtown.in/verify/ZnbmG",
    category: "other"
  },
  {
    id: "p1",
    title: "Tinder Clone using HTML & CSS",
    organization: "Google Developer Student Clubs",
    date: "February 2023",
    description: "Successfully completed 7-days bootcamp with DevTown on Tinder Clone using HTML & CSS",
    imageUrl: "/assets/p1.png",
    verificationUrl: "https://cert.devtown.in/verify/2nuCA",
    category: "web"
  },
  {
    id: "p2",
    title: "Tinder Clone using HTML & CSS",
    organization: "DevTown & GDSC KIIT Chapter",
    date: "February 2023",
    description: "7-days FREE Bootcamp on Tinder Clone using HTML & CSS",
    imageUrl: "/assets/p2.png",
    verificationUrl: "https://cert.devtown.in/verify/7RjzNq",
    category: "web"
  },
  {
    id: "p3",
    title: "Tinder Clone using HTML & CSS Bootcamp",
    organization: "Microsoft Learn Student Ambassador",
    date: "February 2023",
    description: "In recognition of attendance and completion of the Microsoft Student Ambassadors Tinder Clone using HTML & CSS Bootcamp",
    imageUrl: "/assets/p3.png",
    verificationUrl: "https://cert.devtown.in/verify/7Srs",
    category: "web"
  },
  {
    id: "screenshot",
    title: "Web Development Certificate",
    organization: "DevTown",
    date: "January 2023",
    description: "Certificate of completion for web development bootcamp",
    imageUrl: "/assets/Screenshot 2023-01-23 212217.png",
    verificationUrl: "https://cert.devtown.in/verify/7Srs",
    category: "web"
  }
];

export function getCertificateById(id: string): Certificate | undefined {
  return CERTIFICATES.find(cert => cert.id === id);
}

export function getCertificatesByTag(): Certificate[] {
  // This is a placeholder for future filtering by tags/categories
  return CERTIFICATES;
}

export function getCertificatesByCategory(category: CertificateCategory): Certificate[] {
  return CERTIFICATES.filter(cert => cert.category === category);
}