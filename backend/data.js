import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'AdminKhoa',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      image: '/images/Admin.JPG',
      isAdmin: true,
    },
    {
      name: 'Rafa',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      image: '/images/RafaPup.JPG',
      isAdmin: false,
    },
    {
      name: 'Roger',
      email: 'roger@example.com',
      password: bcrypt.hashSync('123456'),
      image: '/images/RafaPup.JPG',
      isAdmin: false,
    },
  ],
  news: [
    {
      title: 'Why people love to travel to PV',
      slug: 'travelPV',
      category: 'travel',
      image: '/images/travelPV.JPG',
      area: 'malecon',
      numReviews: 35,
      description:
        'The nature beauties and its excellent infrastructure make Puerto Vallarta one of the most popular tourinst destination in Mexico. Nearly 5 millions tourists arrive each year by land, see, and air. Here tourists finds an authentic smile that is  difficult to discover in other places. This is where you can enjoy a great vacation at an affordable price.',
    },
    {
      title: 'Is Puerto Vallarta Safe to live?',
      slug: 'safetyPV',
      category: 'living',
      image: '/images/safetyPV.JPG',
      area: 'Puerto Vallarta',
      numReviews: 15,
      description:
        'Puerto Vallarta is a relatively small and quiet city where you rarely hear about violent crimes. You will occasionally hear about petty theft or home robberies, but tourists have very little to worry about as long as they use common sense and follow a few simple safety guidelines. At the moment, Puerto Vallarta has a very low crime rates - lower than Miami, Las Vegas and Los Angeles. Violent crime is not an issue here. But the Pacific Coast can become pretty volatile in hurricane season which runs Jun to Nov. This is something tourists need to be aware of. Another thing to consider is safety when swimming. Tides, currents and jelly fish are all things to watch out for. Paying atten to  the flags on beaches is a must.',
    },
  ],
  products: [
    {
      //_id: '4',
      name: 'Boscobel Austin Rose',
      slug: 'Boscobel',
      category: 'shrub',
      image: '/images/Boscobel.png',
      price: 65,
      countInStock: 5,
      brand: 'David Asutin',
      rating: 4.5,
      numReviews: 80,
      description: 'strong fragrant rose',
    },
    {
      //_id: '4',
      name: 'Scepter Isle',
      slug: 'ScepterIsle',
      category: 'shrub',
      image: '/images/ScepterdIsle.png',
      price: 65,
      countInStock: 5,
      brand: 'David Asutin',
      rating: 4.5,
      numReviews: 200,
      description: 'exception bloomer',
    },
    {
      //_id: '4',
      name: 'Munstead Wood',
      slug: 'MunsteadWood',
      category: 'shrub',
      image: '/images/MunsteadWood.png',
      price: 65,
      countInStock: 5,
      brand: 'David Asutin',
      rating: 4.5,
      numReviews: 100,
      description: 'strong fragrant rose',
    },
    {
      //_id: '4',
      name: 'Crown Princess Margareta',
      slug: 'CrownPrincessMargareta',
      category: 'climbing',
      image: '/images/CrownPrincessMargareta.png',
      price: 65,
      countInStock: 5,
      brand: 'David Asutin',
      rating: 4.5,
      numReviews: 110,
      description: 'strong fragrant rose',
    },
    {
      //_id: '4',
      name: 'The Poet Wife',
      slug: 'ThePoetWife',
      category: 'shrub',
      image: '/images/ThePoetWife.png',
      price: 65,
      countInStock: 5,
      brand: 'David Asutin',
      rating: 4.5,
      numReviews: 190,
      description: 'strong fragrant rose',
    },
    {
      //_id: '4',
      name: 'Eustacia Vye',
      slug: 'EustaciaVye',
      category: 'shrub',
      image: '/images/EustaciaVye.png',
      price: 65,
      countInStock: 5,
      brand: 'David Asutin',
      rating: 4.5,
      numReviews: 10,
      description: 'strong fragrant rose',
    },
    {
      //_id: '4',
      name: 'Sophy Rose',
      slug: 'SophyRose',
      category: 'shrub',
      image: '/images/SophyRose.png',
      price: 65,
      countInStock: 5,
      brand: 'David Asutin',
      rating: 4.5,
      numReviews: 100,
      description: 'strong fragrant rose',
    },
    {
      //_id: '4',
      name: 'Olivia Rose Austin',
      slug: 'OliviaRoseAustin',
      category: 'shrub',
      image: '/images/OliviaRoseAustin.png',
      price: 65,
      countInStock: 5,
      brand: 'David Asutin',
      rating: 4.5,
      numReviews: 9,
      description: 'strong fragrant rose',
    },
  ],
  cars: [
    {
      name: 'Ferrari',
      slug: 'Ferrari',
      category: 'sport',
      image: '/images/Ferrari.JPG',
      description: 'luxury sport car',
      price: 500,
      rating: 5,
      numReviews: 209,
    },
    {
      name: 'Lamborghini',
      slug: 'Lamborghini',
      category: 'sport',
      image: '/images/Lamborghini.JPG',
      description: 'luxury sport car',
      price: 570,
      rating: 5,
      numReviews: 510,
    },
    {
      name: 'Lotus',
      slug: 'Lotus',
      category: 'sport',
      image: '/images/Lotus.JPG',
      description: 'luxury sport car',
      price: 550,
      rating: 5,
      numReviews: 345,
    },
    {
      name: 'Truck',
      slug: 'Truck',
      category: 'truck',
      image: '/images/PickupTruck.JPG',
      description: 'old pickup truck',
      price: 550,
      rating: 5,
      numReviews: 345,
    },
  ],
  rentalproperties: [
    {
      name: 'Casa Kimberly',
      slug: 'CasaKimberly',
      category: 'house',
      image: '/images/CasaKimberly.png',
      area: 'Gringo Gulch',
      description: 'historic house, great view',
      price: 200,
      url_BnB: 'https://casakimberly.com/',
      rating: 5,
      numReviews: 101,
    },
    {
      name: 'Casa Porfin',
      slug: 'CasaPorfin',
      category: 'house',
      image: '/images/CasaPorfin.png',
      area: 'Romantic Zone',
      description: 'classic Mexican home, close to ocean',
      price: 170,
      url_BnB:
        'https://www.airbnb.ca/rooms/37089993?source_impression_id=p3_1651754681_MEJ0rWlFc6OBmceO',
      rating: 4.5,
      numReviews: 20,
    },
    {
      name: 'Sayan Penthouse',
      slug: 'SayanPenthouse',
      category: 'condo',
      image: '/images/SayanPenthouse.png',
      area: 'Conchachina',
      description: 'morden condo building, ocean view',
      price: 275,
      url_BnB:
        'https://www.airbnb.ca/rooms/plus/21764580?source_impression_id=p3_1651755007_barj7ARcNdM9dEn7',
      rating: 5,
      numReviews: 70,
    },
    {
      name: 'Villa Sevilla',
      slug: 'VillaServilla',
      category: 'villa',
      image: '/images/VillaSevilla.png',
      area: 'Conchachina',
      description: 'morden condo building, ocean view',
      price: 275,
      url_BnB: 'https://mexhome.com/property/14166/?sold',
      rating: 5,
      numReviews: 63,
    },
  ],
};

export default data;