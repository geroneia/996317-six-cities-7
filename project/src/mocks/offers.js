import nanoid from 'nanoid';

const localNewOfferId = nanoid();

const offers = [{
  'bedrooms': 3,
  'city': {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 10,
    },
    'name': 'Amsterdam',
  },
  'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  'host': {
    'avatar_url': 'img/1.png',
    'id': 3,
    'is_pro': true,
    'name': 'Angelina',
  },
  'id': localNewOfferId,
  'images': ['img/1.png', 'img/2.png'],
  'is_favorite': false,
  'is_premium': false,
  'location': {
    'latitude': 52.35514938496378,
    'longitude': 4.673877537499948,
    'zoom': 8,
  },
  'max_adults': 4,
  'preview_image': 'img/1.png',
  'price': 120,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
},
{
  'bedrooms': 1,
  'city': {
    'location': {
      'latitude': 49.16351837062501,
      'longitude': 2.325041060240048,
      'zoom': 10,
    },
    'name': 'Paris',
  },
  'description': 'A quiet Eu amet ad cupidatat enim et dolore amet minim ex excepteur.',
  'goods': ['Heating', 'Kitchen', 'Cat', 'Washing machine', 'Coffee machine'],
  'host': {
    'avatar_url': 'img/3.png',
    'id': 3,
    'is_pro': true,
    'name': 'Rick',
  },
  'id': localNewOfferId,
  'images': ['img/3.png', 'img/4.png'],
  'is_favorite': false,
  'is_premium': false,
  'location': {
    'latitude': 48.90124596102839,
    'longitude': 2.3021282846332713,
    'zoom': 8,
  },
  'max_adults': 2,
  'preview_image': 'img/3.png',
  'price': 100,
  'rating': 5,
  'title': 'Nice, cozy, warm big bed apartment',
  'type': 'apartment',
},
{
  'bedrooms': 2,
  'city': {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 10,
    },
    'name': 'Amsterdam',
  },
  'description': 'Consectetur anim elit nostrud sunt dolore esse.',
  'goods': ['Heating', 'Kitchen', 'Split system', 'Washing machine'],
  'host': {
    'avatar_url': 'img/5.png',
    'id': 3,
    'is_pro': true,
    'name': 'Morty',
  },
  'id': localNewOfferId,
  'images': ['img/5.png', 'img/6.png'],
  'is_favorite': false,
  'is_premium': false,
  'location': {
    'latitude': 52.36114492233874,
    'longitude': 4.832547797973042,
    'zoom': 8,
  },
  'max_adults': 4,
  'preview_image': 'img/5.png',
  'price': 120,
  'rating': 4.8,
  'title': 'Wood and stone place',
  'type': 'apartment',
},
{
  'bedrooms': 2,
  'city': {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 10,
    },
    'name': 'Amsterdam',
  },
  'description': 'Sint eiusmod officia officia esse deserunt anim.',
  'goods': ['Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher', 'WiFi'],
  'host': {
    'avatar_url': 'img/7.png',
    'id': 3,
    'is_pro': true,
    'name': 'Angelina',
  },
  'id': localNewOfferId,
  'images': ['img/7.png', 'img/8.png'],
  'is_favorite': true,
  'is_premium': false,
  'location': {
    'latitude': 52.30932827128466,
    'longitude': 4.7913490690654355,
    'zoom': 8,
  },
  'max_adults': 3,
  'preview_image': 'img/7.png',
  'price': 180,
  'rating': 4.5,
  'title': 'Canal View Prinsengracht',
  'type': 'apartment',
},

];

export default offers;
