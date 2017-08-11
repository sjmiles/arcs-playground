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
  "assets/restaurants": "assets/restaurants",
  //
  "../entities/Restaurant": "entities/Restaurant",
  "../entities/Selection": "entities/Selection",
  //
  "../particles/MasterDetail": "particles/MasterDetail",
  "../particles/ShowRestaurants": "particles/ShowRestaurants"
};

window.db = {
  entities: [
    'Restaurant',
    'Selection'
  ],
  views: {
    //'selection': 'Selection'
  },
  model: {
    Selection: [
      {
        name: ""
      }
    ],
    Restaurant: [
      {
        name: "McDonuts",
        image: 'assets/restaurants/fastfood.jpg'
      },
      {
        name: "Barby's",
        image: 'assets/restaurants/fastfood.jpg'
      },
      {
        name: "Burger Fling",
        image: 'assets/restaurants/fastfood.jpg'
      }
    ]
  }
};

window.recipes = [
{
  particles: [{
    name: "MasterDetail",
    constrain: {
      "list": "list"
    }
  },{
    name: "ShowRestaurants",
    constrain: {
      "list": "list",
      "selection": "selection"
    }
  }]
}
];