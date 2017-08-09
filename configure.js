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
  "../entities/Restaurant": "entities/Restaurant",
  "../particles/CreateRestaurants": "http://localhost/projects/arcs/arcs-playground/particles/CreateRestaurants",
  "../particles/ShowRestaurants": "http://localhost/projects/arcs/arcs-playground/particles/ShowRestaurants"
};

window.db = {
  entities: [
    'Restaurant'
  ],
  views: {
  },
  model: {
    Restaurant: [
      {
        name: "McDonald's",
        image: 'assets/restaurants/mcdonalds.png'
      },
      {
        name: "Arby's",
        image: 'assets/restaurants/mcdonalds.png'
      }
    ]
  }
};

window.recipes = [
{
  particles: [{
    name: "CreateRestaurants",
    constrain: {
      "newList": "list"
    }
  },{
    name: "SaveList",
    constrain: {
      "list": "list"
    }
  },{
    name: "ShowRestaurants",
    constrain: {
      "list": "list"
    }
  }]
}
];