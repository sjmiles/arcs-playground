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
  "../entities/Account": "entities/Account",
  "../particles/CreateAccounts": "./particles/CreateAccounts",
  "../particles/ShowAccounts": "./particles/ShowAccounts"
};

window.db = {
  entities: [
    'Account'
  ],
  views: {
  },
  model: {
    Account: [
      {
        name: "Fred's Bank",
        balance: "20.30"
      },
      {
        name: "Savings and Koan",
        balance: "9876.54"
      }
    ]
  }
};

window.recipes = [
{
  //name: "Create shortlist with [product, ...]",
  particles: [{
    name: "CreateAccounts",
    constrain: {
      "newList": "list"
    }
  },{
    name: "SaveList",
    constrain: {
      "list": "list"
    }
  },{
    name: "ShowAccounts",
    constrain: {
      "list": "list"
    }
  }]
}
];