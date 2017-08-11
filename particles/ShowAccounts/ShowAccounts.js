// @license
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt

"use strict";

defineParticle(({DomParticle}) => {

  let template = `
<div show-products>
  Found <span>{{count}}</span> item(s).
  <x-list items="{{items}}">
    <template>
      <div>
        <span>{{name}}</span>: <span>{{balance}}</span>
      </div>
    </template>
  </x-list>
</div>
    `.trim();

  return class extends DomParticle {
    get template() {
      return template;
    }
    _render(props, state) {
      let items = props.list.map(({rawData}) => {
        return Object.assign({}, rawData);
      });
      return {
        items,
        count: items.length
      };
    }
  };

});
