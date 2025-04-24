export interface ProductI {
  essence: string;
  amount: string;
  price: string;
  imageSrc: string;
  title: string;
  id: number;
}

interface Variation {
  name: string;
  value: string;
}

interface Sku {
  price_sale: number;
  variations: Variation[];
}

interface ImageData {
  thumb: {
    url: string;
  };
}

export interface YampiProduct {
  id: number;
  name: string;
  images?: {
    data: ImageData[];
  };
  skus?: {
    data: Sku[];
  };
}

export interface ProductContextProps {
  products: ProductI[];
  error: string | null;
  loading: boolean;
}