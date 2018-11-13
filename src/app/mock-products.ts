import { Product } from './product';

export const PRODUCTS: Product[] = [
    {
        id: 1,
        image: 'assets/images/product-01.jpg',
        name: 'Tee-shirt',
        category: 'Homme',
        subCategory: 'Prêt-à-porter',
        brand: 'Balmain',
        description: 'Survêtement Givenchy en très bonne état porté 2 fois',
        feature: [{
            material: '60% cotton',
            color: 'White',
            size: 'S'
        }],
        price: '165.00',
        date: new Date()
    }, {
        id: 2,
        image: 'assets/images/product-02.jpg',
        name: 'Sneakers',
        category: 'Homme',
        subCategory: 'Chaussures',
        brand: 'Balenciaga',
        description: 'Survêtement Givenchy en très bonne état porté 2 fois',
        feature: [{
            material: '60% synthétique',
            color: 'Black',
            size: '40'
        }],
        price: '380.00',
        date: new Date()
    }, {
        id: 3,
        image: 'assets/images/product-03.jpg',
        name: 'Montres',
        category: 'Homme',
        subCategory: 'Montres',
        brand: 'Rolex',
        description: 'Survêtement Givenchy en très bonne état porté 2 fois',
        feature: [{
            material: 'Acier',
            color: 'Gris',
            size: ''
        }],
        price: '10950.00',
        date: new Date()
    }, {
        id: 4,
        image: 'assets/images/product-04.jpg',
        name: 'Survêtement',
        category: 'Homme',
        subCategory: 'Prêt-à-porter',
        brand: 'Givenchy',
        description: 'Survêtement Givenchy en très bonne état porté 2 fois',
        feature: [{
            material: 'Coton',
            color: 'White',
            size: 'M'
        }],
        price: '832.00',
        date: new Date()
    }, {
        id: 5,
        image: 'assets/images/product-05.jpg',
        name: 'Survêtement',
        category: 'Homme',
        subCategory: 'Prêt-à-porter',
        brand: 'Givenchy',
        description: 'Survêtement Givenchy en très bonne état porté 2 fois',
        feature: [{
            material: 'Coton',
            color: 'White',
            size: 'M'
        }],
        price: '832.00',
        date: new Date()
    }, {
        id: 6,
        image: 'assets/images/product-06.jpg',
        name: 'Tee-shirt',
        category: 'Femme',
        subCategory: 'Prêt-à-porter',
        brand: 'Balmain',
        description: 'Survêtement Givenchy en très bonne état porté 2 fois',
        feature: [{
            material: '60% cotton',
            color: 'White',
            size: 'S'
        }],
        price: '165.00',
        date: new Date()
    }, {
        id: 7,
        image: 'assets/images/product-07.jpg',
        name: 'Sneakers',
        category: 'Femme',
        subCategory: 'Chaussures',
        brand: 'Balenciaga',
        description: 'Survêtement Givenchy en très bonne état porté 2 fois',
        feature: [{
            material: '60% synthétique',
            color: 'Black',
            size: '40'
        }],
        price: '380.00',
        date: new Date()
    }, {
        id: 8,
        image: 'assets/images/product-08.jpg',
        name: 'Montres',
        category: 'Femme',
        subCategory: 'Montres',
        brand: 'Rolex',
        description: 'Survêtement Givenchy en très bonne état porté 2 fois',
        feature: [{
            material: 'Acier',
            color: 'Gris',
            size: ''
        }],
        price: '10950.00',
        date: new Date()
    }, {
        id: 9,
        image: 'assets/images/product-09.jpg',
        name: 'Survêtement',
        category: 'Femme',
        subCategory: 'Prêt-à-porter',
        brand: 'Givenchy',
        description: 'Survêtement Givenchy en très bonne état porté 2 fois',
        feature: [{
            material: 'Coton',
            color: 'White',
            size: 'M'
        }],
        price: '832.00',
        date: new Date()
    }, {
        id: 10,
        image: 'assets/images/product-10.jpg',
        name: 'Survêtement',
        category: 'Femme',
        subCategory: 'Prêt-à-porter',
        brand: 'Givenchy',
        description: 'Survêtement Givenchy en très bonne état porté 2 fois',
        feature: [{
            material: 'Coton',
            color: 'White',
            size: 'M'
        }],
        price: '832.00',
        date: new Date()
    }, {
        id: 11,
        image: 'assets/images/product-11.jpg',
        name: 'Tee-shirt',
        category: 'Enfant',
        subCategory: 'Prêt-à-porter',
        brand: 'Balmain',
        description: 'Survêtement Givenchy en très bonne état porté 2 fois',
        feature: [{
            material: '60% cotton',
            color: 'White',
            size: 'S'
        }],
        price: '165.00',
        date: new Date()
    }, {
        id: 12,
        image: 'assets/images/product-12.jpg',
        name: 'Sneakers',
        category: 'Enfant',
        subCategory: 'Chaussures',
        brand: 'Balenciaga',
        description: 'Survêtement Givenchy en très bonne état porté 2 fois',
        feature: [{
            material: '60% synthétique',
            color: 'Black',
            size: '40'
        }],
        price: '380.00',
        date: new Date()
    }, {
        id: 13,
        image: 'assets/images/product-13.jpg',
        name: 'Montres',
        category: 'Enfant',
        subCategory: 'Montres',
        brand: 'Swatch',
        description: 'Survêtement Givenchy en très bonne état porté 2 fois',
        feature: [{
            material: 'Acier',
            color: 'Gris',
            size: ''
        }],
        price: '10950.00',
        date: new Date()
    }, {
        id: 14,
        image: 'assets/images/product-14.jpg',
        name: 'Survêtement',
        category: 'Enfant',
        subCategory: 'Prêt-à-porter',
        brand: 'Givenchy',
        description: 'Survêtement Givenchy en très bonne état porté 2 fois',
        feature: [{
            material: 'Coton',
            color: 'White',
            size: 'M'
        }],
        price: '832.00',
        date: new Date()
    }, {
        id: 15,
        image: 'assets/images/product-15.jpg',
        name: 'Survêtement',
        category: 'Enfant',
        subCategory: 'Prêt-à-porter',
        brand: 'Givenchy',
        description: 'Survêtement Givenchy en très bonne état porté 2 fois',
        feature: [{
            material: 'Coton',
            color: 'White',
            size: 'M'
        }],
        price: '832.00',
        date: new Date()
    }
]