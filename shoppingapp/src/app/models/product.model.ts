export class ProductModel {
  constructor(
    public id: number = 0,
    public title: string = '',
    public price: number = 0,
    public rating: number = 0,
    public likes: number = 0,
    public imageurl: string = '',
    public quantity: number = 0
  ) {}
}
