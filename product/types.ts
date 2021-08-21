interface Option {
  label: string;
  values: string[];
}
export interface Product {
  id: string;
  image: string;
  price: number;
  name: string;
  description:string;
  options: Option[];
}