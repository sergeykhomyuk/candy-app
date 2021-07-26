export interface CollectionItemModel {
  id: string;
  createdAt: Date;
  image?: string;
  text: string;
  ownerName: string;
  ownerImage: string;
  likes: number;
  comments: number;
}
