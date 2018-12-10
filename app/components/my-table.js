import Component from '@ember/component';

export default Component.extend({
  sorts: [
    {
      valuePath: 'price',
      isAscending: true,
    },
    {
      valuePath: 'product',
      isAscending: false,
    }
  ],
  columns: [
    {
      name: 'Product',
      valuePath: 'product'
    },
    {
      name: 'Price',
      valuePath: 'price'
    },
    {
      name: 'First Name',
      valuePath: 'firstName'
    },
    {
      name: 'Last Name',
      valuePath: 'lastName'
    }
  ],

  rows: [
    {
      product: 'Nikon BlackRapid Quick-Draw Strap',
      price: '157',
      firstName: 'Noah',
      lastName: 'Garcia'
    },
    {
      product: 'Designer Skin Sticker for the Xbox One Console With Two Wireless Controller Decals Infected',
      price: '139',
      firstName: 'Marguerite',
      lastName: 'Santiago'
    },
    {
      product: 'Game of Thrones House Stark Ring Direwolf Wolf Ring Sz 11',
      price: '165',
      firstName: 'Andrew',
      lastName: 'Green'
    },
    {
      product: 'Designer Skin Sticker for the Xbox One Console With Two Wireless Controller Decals Brittany',
      price: '268',
      firstName: 'Antonia',
      lastName: 'Robbins'
    },
    {
      product: 'Inmate 1142980 "The Desiree Lee Story"',
      price: '296',
      firstName: 'Guadalupe',
      lastName: 'White'
    },
    {
      product: 'ChargeTech - Tower Floor Stand Cell Phone Charging Station w/ Universal Charging Tips Included',
      price: '98',
      firstName: 'Cheryl',
      lastName: 'Stevens'
    },
    {
      product: 'Cruise: A Thriller',
      price: '110',
      firstName: 'Brooke',
      lastName: 'Ortiz'
    },
    {
      product: 'New BMW M3 E46 3-Series White 7000K LED Halo Rings Angel Eyes XENON kit',
      price: '220',
      firstName: 'Patti',
      lastName: 'Patrick'
    },
    {
      product: 'Pioneer TSSWX2502 10-Inch Shallow-Mount Pre-Loaded Enclosure Sub Woofer',
      price: '130',
      firstName: 'Debbie',
      lastName: 'Kelley'
    },
    {
      product: 'Everest Signature Waist Pack, Standard',
      price: '300',
      firstName: 'Dominick',
      lastName: 'Leonard',
    }
  ]
});
