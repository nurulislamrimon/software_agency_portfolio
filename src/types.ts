export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  mockupType: "dashboard" | "mobile" | "ai-chat";
  colorTheme: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  techStack: string[];
  deliveryTime: string;
  status: "available" | "popular" | "new";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
  rating: number;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  duration: string;
  outcomes: string[];
}
