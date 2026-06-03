export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  price: number;
  image: string;
  images: string[];
  badge?: string;
  description: string;
  details: string[];
  sku: string;
  hot?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  subcategories: string[];
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceSection {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}
