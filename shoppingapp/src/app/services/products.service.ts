import { ProductModel } from '../models/product.model';

export class ProductService {
  productslist: ProductModel[] = [
    {
      id: 1,
      title: 'Racket',
      price: 1000,
      rating: 4,
      likes: 200,
      imageurl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLL0GCyIYJJ8WnKsmvUKoymewmQmqUdIYYQ&s',
      quantity: 2,
    },
    {
      id: 2,
      title: 'Shuttles',
      price: 500,
      rating: 3,
      likes: 150,
      imageurl:
        'https://cdnmedia.racquets4u.com/media/iopt/catalog/product/cache/cd3f430ba3d61418b233993754ed59dd/y/o/yonex-as-10-badminton-shuttlecock_1.webp',
      quantity: 4,
    },
    {
      id: 3,
      title: 'Kit bag',
      price: 2000,
      rating: 4,
      likes: 100,
      imageurl:
        'https://www.sportsuncle.com/image/cache/catalog/images/apacs/2607kb-blue4-800x800.webp',
      quantity: 0,
    },
    {
      id: 4,
      title: 'Shoes',
      price: 1050,
      rating: 2,
      likes: 300,
      imageurl: 'https://www.yonex.com/media/catalog/category/shose-23_1.jpg',
      quantity: 5,
    },
    {
      id: 5,
      title: 'Grip',
      price: 250,
      rating: 5,
      likes: 300,
      imageurl:
        'https://www.yonex.com/media/catalog/product/i/n/int_ac102-60_011-5_1.png?quality=80&fit=bounds&height=819&width=600&canvas=600:819',
      quantity: 0,
    },
  ];
}
