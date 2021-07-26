import { CollectionItemModel } from '../core';

const mapCollectionItem = ({
  id,
  createdAt,
  image,
  text,
  ownerName,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ownerImage,
  likes,
  comments,
}: {
  id: string;
  createdAt: string;
  image?: string;
  text: string;
  ownerName: string;
  ownerImage: string;
  likes: number;
  comments: number;
}): CollectionItemModel => ({
  id,
  createdAt: new Date(createdAt),
  image,
  text,
  ownerName,
  // ownerImage is broken (403 error) -> replace with random avatars from randomuser.me
  ownerImage: `https://randomuser.me/api/portraits/${
    Math.random() > 0.5 ? 'men' : 'women'
  }/${Math.round(Math.random() * 40)}.jpg`,
  likes,
  comments,
});

export default mapCollectionItem;
