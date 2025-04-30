export interface IProducts {
  category: string;
  essence: string;
  amount: string;
  price: string;
  imageSrc: string;
  images?: string[];
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
interface Category {
  id: number;
  name: string;
  parent_id: number | null;
  slug: string;
  url_path: string;
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
  categories: {
    data: Category[];
  };
}

export interface ProductContextProps {
  products: IProducts[];
  error: string | null;
  loading: boolean;
}