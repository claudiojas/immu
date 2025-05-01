// export interface ProductI {
//   essence: string;
//   amount: string;
//   price: string;
//   imageSrc: string;
//   title: string;
//   id: number;
//   name: string;
// }

export type ProductCardProps = {
  images: { thumb: { url: string } }[]; 
  title: string;
  description: string;
  price: string;
  id?: number;
  amount?: string;
  essence?: string;
  category?:string;
};