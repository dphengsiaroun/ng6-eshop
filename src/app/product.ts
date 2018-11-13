export class Product {
    id: number;
    image: string;
    name: string;
    category: string;
    subCategory: string;
    brand: string;
    description: string;
    feature: Array<{ material: string, color: string, size: string }>;
    price: string;
    date: Date = new Date();
}