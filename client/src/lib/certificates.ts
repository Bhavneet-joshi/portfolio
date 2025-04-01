export interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  imageUrl: string;
  verificationUrl?: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    id: "devml",
    title: "Machine Learning using Python & SKLearn",
    organization: "DevTown & GDSC KIIT Chapter",
    date: "January 2023",
    description: "7-days FREE Bootcamp on Machine Learning using Python & SKLearn",
    imageUrl: "/assets/devml.png",
    verificationUrl: "https://cert.devtown.in/verify/DFGJUK"
  },
  {
    id: "gooml",
    title: "Machine Learning using Python & SKLearn",
    organization: "Google Developer Student Clubs",
    date: "January 2023",
    description: "Successfully completed 7-days bootcamp with DevTown on Machine Learning using Python & SKLearn",
    imageUrl: "/assets/gooml.png",
    verificationUrl: "https://cert.devtown.in/verify/ZSh1YK"
  },
  {
    id: "h1",
    title: "Harry Potter Invisibility Cloak with Python and OpenCV",
    organization: "DevTown & GDSC KIIT Chapter",
    date: "January 2023",
    description: "7-days FREE Bootcamp on Harry Potter Invisibility Cloak with Python and OpenCV",
    imageUrl: "/assets/h1.png",
    verificationUrl: "https://cert.devtown.in/verify/7dWHG"
  },
  {
    id: "h2",
    title: "Harry Potter Invisibility Cloak with Python and OpenCV",
    organization: "Google Developer Student Clubs",
    date: "January 2023",
    description: "Successfully completed 7-days bootcamp with DevTown on Harry Potter Invisibility Cloak with Python and OpenCV",
    imageUrl: "/assets/h2.png",
    verificationUrl: "https://cert.devtown.in/verify/7GHkp"
  },
  {
    id: "h3",
    title: "Harry Potter Invisibility Cloak with Python and OpenCV",
    organization: "Microsoft Learn Student Ambassador",
    date: "January 2023",
    description: "In recognition of attendance and completion of the Microsoft Student Ambassadors Harry Potter Invisibility Cloak with Python and OpenCV Bootcamp",
    imageUrl: "/assets/h3.png",
    verificationUrl: "https://cert.devtown.in/verify/2HfwIT"
  },
  {
    id: "jrdev",
    title: "JavaScript & React.JS",
    organization: "DevTown & GDSC KIIT Chapter",
    date: "January 2023",
    description: "7-days FREE Bootcamp on JavaScript & React.JS",
    imageUrl: "/assets/jrdev.png",
    verificationUrl: "https://cert.devtown.in/verify/7S4BJK"
  },
  {
    id: "jrgoo",
    title: "JavaScript & React.js",
    organization: "Google Developer Student Clubs",
    date: "January 2023",
    description: "Successfully completed 7-days bootcamp with DevTown on JavaScript & React.js",
    imageUrl: "/assets/jrgoo.png",
    verificationUrl: "https://cert.devtown.in/verify/2NSZtM"
  },
  {
    id: "jrmic",
    title: "JavaScript & React.js Bootcamp",
    organization: "Microsoft Learn Student Ambassador",
    date: "January 2023",
    description: "In recognition of attendance and completion of the Microsoft Student Ambassadors JavaScript & React.js Bootcamp",
    imageUrl: "/assets/jrmic.png",
    verificationUrl: "https://cert.devtown.in/verify/ZTE4VJ"
  },
  {
    id: "micml",
    title: "Machine Learning using Python & SKLearn Bootcamp",
    organization: "Microsoft Learn Student Ambassador",
    date: "January 2023",
    description: "In recognition of attendance and completion of the Microsoft Student Ambassadors Machine Learning using Python & SKLearn Bootcamp",
    imageUrl: "/assets/micml.png",
    verificationUrl: "https://cert.devtown.in/verify/ZnbmG"
  },
  {
    id: "p1",
    title: "Tinder Clone using HTML & CSS",
    organization: "Google Developer Student Clubs",
    date: "February 2023",
    description: "Successfully completed 7-days bootcamp with DevTown on Tinder Clone using HTML & CSS",
    imageUrl: "/assets/p1.png",
    verificationUrl: "https://cert.devtown.in/verify/2nuCA"
  },
  {
    id: "p2",
    title: "Tinder Clone using HTML & CSS",
    organization: "DevTown & GDSC KIIT Chapter",
    date: "February 2023",
    description: "7-days FREE Bootcamp on Tinder Clone using HTML & CSS",
    imageUrl: "/assets/p2.png",
    verificationUrl: "https://cert.devtown.in/verify/7RjzNq"
  },
  {
    id: "p3",
    title: "Tinder Clone using HTML & CSS Bootcamp",
    organization: "Microsoft Learn Student Ambassador",
    date: "February 2023",
    description: "In recognition of attendance and completion of the Microsoft Student Ambassadors Tinder Clone using HTML & CSS Bootcamp",
    imageUrl: "/assets/p3.png",
    verificationUrl: "https://cert.devtown.in/verify/7Srs"
  }
];

export function getCertificateById(id: string): Certificate | undefined {
  return CERTIFICATES.find(cert => cert.id === id);
}

export function getCertificatesByTag(tag: string): Certificate[] {
  // This is a placeholder for future filtering by tags/categories
  return CERTIFICATES;
}