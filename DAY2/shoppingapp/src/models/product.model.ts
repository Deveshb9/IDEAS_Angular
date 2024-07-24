export class ProductModel {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public likes: number,
    public imageurl: string
  ) {}
}
