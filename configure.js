/**
 * @license
 * Copyright (c) 2017 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

window.urls = {
};

window.db = {
  entities: [
    'Product'
  ],
  views: {
    //'whocares?': 'Product',
  },
  model: {
    Product: [
      {
        name: "Minecraft Book",
        category: "Books",
        seller: "denile.com",
        price: "$14.50",
        shipDays: 7,
        image: "assets/products/book.png"
      },
      {
        name: "Power Tool Set",
        category: "Tools",
        seller: "denile.com",
        price: "$59.00",
        shipDays: 42,
        image: "assets/products/powertool.png"
      },
      {
        name: "Guardian of the Galaxy Figure",
        category: "Toys & Collectibles",
        seller: "denile.com",
        price: "$75.00",
        shipDays: 14,
        image: "assets/products/galaxy.png"
      }
    ]
  }
};

window.recipes = [
{
  particles: [{
    name: "Create",
    constrain: {
      "newList": "list"
    }
  },{
    name: "SaveList",
    constrain: {
      "list": "list"
    }
  },{
    name: "ShowProducts",
    constrain: {
      "list": "list"
    }
  }]
}
];