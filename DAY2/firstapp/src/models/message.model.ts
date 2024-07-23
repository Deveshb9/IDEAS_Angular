export class MessageModel {
  constructor(
    public msg: string,
    public from: string,
    public to: string,
    public imgUrl: string
  ) {}
}
