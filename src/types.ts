export interface ProductBrand {
  id: string;
  name: string;
  label: string; // e.g., "Authorized Dealer"
  description: string;
  products: string[];
  logoBg: string; // Background visual styling card
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications: string[];
  image: string;
  features: string[];
  brands: string[];
}

export interface IndustryServed {
  id: string;
  name: string;
  iconName: string; // Lucide icon reference
  description: string;
  applications: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'systems' | 'valves' | 'pumps' | 'workshop';
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  feedback: string;
  rating: number;
}

export interface InquiryMessage {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  submittedAt: string;
  status: 'Inbox' | 'Processed';
}
