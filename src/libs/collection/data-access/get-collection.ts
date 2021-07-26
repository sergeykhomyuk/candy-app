import { CollectionItemModel } from '../core';
import collectionApiConfig from './collection-api.config';
import mapCollectionItem from './map-collection-item';

const getCollection = (): Promise<CollectionItemModel[]> =>
  fetch(collectionApiConfig.url)
    .then((response) => response.json())
    .then((response) => response.map(mapCollectionItem));

/* () =>
  Promise.resolve([
    {
      id: '1',
      createdAt: '2020-03-17T09:51:42.577Z',
      image: 'http://lorempixel.com/640/480/animals',
      text: 'withdrawal Strategist Tasty',
      ownerName: 'Stephania Metz',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/michaelabehsera/128.jpg',
      likes: 39,
      comments: 47,
    },
    {
      id: '2',
      createdAt: '2020-03-17T05:25:22.906Z',
      image: undefined,
      text: 'discrete',
      ownerName: 'Malinda Cruickshank',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/scott_riley/128.jpg',
      likes: 100,
      comments: 72,
    },
    {
      id: '3',
      createdAt: '2020-03-16T15:37:09.280Z',
      image: 'http://lorempixel.com/400/200/transport',
      text: 'models',
      ownerName: 'Charlotte Kovacek',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ahmetsulek/128.jpg',
      likes: 9,
      comments: 86,
    },
    {
      id: '4',
      createdAt: '2020-03-16T23:57:32.098Z',
      image: 'http://lorempixel.com/480/480/sports',
      text: 'Salad envisioneer',
      ownerName: 'Leonard Huel DVM',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adamnac/128.jpg',
      likes: 66,
      comments: 49,
    },
    {
      id: '5',
      createdAt: '2020-03-16T21:29:32.783Z',
      image: 'http://lorempixel.com/640/480/transport',
      text: 'Director',
      ownerName: 'Casandra Kuhlman',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/gauchomatt/128.jpg',
      likes: 72,
      comments: 89,
    },
    {
      id: '6',
      createdAt: '2020-03-17T04:38:40.400Z',
      image: 'http://lorempixel.com/640/480/cats',
      text: 'Florida navigate',
      ownerName: 'Carlotta Herzog',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/mhaligowski/128.jpg',
      likes: 25,
      comments: 5,
    },
    {
      id: '7',
      createdAt: '2020-03-17T05:15:55.020Z',
      image: 'http://lorempixel.com/640/480/business',
      text: 'Manager parsing Quality-focused',
      ownerName: 'Julio Conroy',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/catarino/128.jpg',
      likes: 49,
      comments: 50,
    },
    {
      id: '8',
      createdAt: '2020-03-17T01:30:42.826Z',
      image: 'http://lorempixel.com/640/480/technics',
      text: 'turquoise',
      ownerName: 'Noble Rath',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/nellleo/128.jpg',
      likes: 19,
      comments: 23,
    },
    {
      id: '9',
      createdAt: '2020-03-17T08:21:11.853Z',
      image: 'http://lorempixel.com/640/480/food',
      text: 'disintermediate Morocco end-to-end',
      ownerName: 'Julien Boehm',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/oskarlevinson/128.jpg',
      likes: 14,
      comments: 51,
    },
    {
      id: '10',
      createdAt: '2020-03-16T23:26:15.243Z',
      image: 'http://lorempixel.com/640/480/food',
      text: 'Awesome',
      ownerName: 'Mrs. Scottie Waelchi',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/abdulhyeuk/128.jpg',
      likes: 97,
      comments: 1,
    },
    {
      id: '11',
      createdAt: '2020-03-16T15:52:49.391Z',
      image: 'http://lorempixel.com/640/480/city',
      text: 'Industrial',
      ownerName: 'Richie Sanford',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/mymyboy/128.jpg',
      likes: 8,
      comments: 81,
    },
    {
      id: '12',
      createdAt: '2020-03-17T01:15:04.581Z',
      image: 'http://lorempixel.com/640/480/transport',
      text: 'withdrawal',
      ownerName: 'Mrs. Cassidy Gleichner',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/jmfsocial/128.jpg',
      likes: 6,
      comments: 75,
    },
    {
      id: '13',
      createdAt: '2020-03-16T15:53:43.482Z',
      image: 'http://lorempixel.com/640/480/animals',
      text: 'Networked feed Turkey',
      ownerName: 'Barney Parker',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/chaabane_wail/128.jpg',
      likes: 17,
      comments: 72,
    },
    {
      id: '14',
      createdAt: '2020-03-16T23:52:14.502Z',
      image: 'http://lorempixel.com/640/480/food',
      text: 'navigating Bike',
      ownerName: 'Justice Bosco',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/sircalebgrove/128.jpg',
      likes: 84,
      comments: 81,
    },
    {
      id: '15',
      createdAt: '2020-03-16T23:57:04.654Z',
      image: 'http://lorempixel.com/640/480/nature',
      text: 'payment impactful Grocery',
      ownerName: 'Marta Gislason',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/nsamoylov/128.jpg',
      likes: 71,
      comments: 84,
    },
    {
      id: '16',
      createdAt: '2020-03-16T22:13:51.587Z',
      image: 'http://lorempixel.com/640/480/transport',
      text: 'Louisiana Generic',
      ownerName: 'Connie Reilly',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/d_kobelyatsky/128.jpg',
      likes: 7,
      comments: 45,
    },
    {
      id: '17',
      createdAt: '2020-03-17T07:25:10.135Z',
      image: 'http://lorempixel.com/640/480/animals',
      text: 'Avon executive',
      ownerName: 'Jared Kuhn',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/juangomezw/128.jpg',
      likes: 40,
      comments: 53,
    },
    {
      id: '18',
      createdAt: '2020-03-17T10:46:31.431Z',
      image: 'http://lorempixel.com/640/480/transport',
      text: 'Configuration deposit',
      ownerName: 'Sandrine Christiansen',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/craigrcoles/128.jpg',
      likes: 30,
      comments: 89,
    },
    {
      id: '19',
      createdAt: '2020-03-17T02:49:32.253Z',
      image: 'http://lorempixel.com/640/480/people',
      text: 'SCSI',
      ownerName: 'Libby Wisozk Jr.',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/prrstn/128.jpg',
      likes: 69,
      comments: 37,
    },
    {
      id: '20',
      createdAt: '2020-03-17T11:39:53.931Z',
      image: 'http://lorempixel.com/640/480/transport',
      text: 'SSL violet',
      ownerName: 'Florencio Beahan IV',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/shinze/128.jpg',
      likes: 77,
      comments: 24,
    },
    {
      id: '21',
      createdAt: '2020-03-17T06:58:23.613Z',
      image: 'http://lorempixel.com/640/480/city',
      text: 'Bond Markets Units European Composite Unit (EURCO) system',
      ownerName: 'Ms. Vickie Powlowski',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/shoaib253/128.jpg',
      likes: 36,
      comments: 93,
    },
    {
      id: '22',
      createdAt: '2020-03-17T03:48:00.408Z',
      image: 'http://lorempixel.com/640/480/business',
      text: 'pink',
      ownerName: 'Favian Lebsack',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/madysondesigns/128.jpg',
      likes: 64,
      comments: 16,
    },
    {
      id: '23',
      createdAt: '2020-03-16T23:24:12.791Z',
      image: 'http://lorempixel.com/640/480/nightlife',
      text: 'Small Frozen Ball structure Anguilla',
      ownerName: 'Brianne Franecki',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/michalhron/128.jpg',
      likes: 7,
      comments: 55,
    },
    {
      id: '24',
      createdAt: '2020-03-17T04:04:53.742Z',
      image: 'http://lorempixel.com/640/480/animals',
      text: 'National Ergonomic Metal Salad',
      ownerName: 'Queen Dare II',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/mufaddal_mw/128.jpg',
      likes: 1,
      comments: 79,
    },
    {
      id: '25',
      createdAt: '2020-03-17T06:44:03.536Z',
      image: 'http://lorempixel.com/640/480/fashion',
      text: 'Sleek Park Auto Loan Account',
      ownerName: 'Jailyn Bailey',
      ownerImage:
        'https://s3.amazonaws.com/uifaces/faces/twitter/spacewood_/128.jpg',
      likes: 6,
      comments: 52,
    },
  ]).then((response) => response.map(mapCollectionItem)); */
// fetch(collectionApiConfig.url).then(response => response.json() as Promise<CollectionItem[]>);

export default getCollection;
