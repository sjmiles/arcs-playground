// @license
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt

"use strict";

var host = `[master-detail]`;

defineParticle(({DomParticle, resolver}) => {

  let styles = `
<style>
</style>
  `;

  let template = `
${styles}
<div master-detail>
  <div head>
    <span>Yo, Master & Detail</span>
  </div>

  <x-list items="{{items}}">${productTemplate}</x-list>

</div>
    `.trim();

  return class extends DomParticle {
    get template() {
      return template;
    }
    _willReceiveProps(props) {
      this._setState({
        // TODO(sjmiles): rawData provides POJO access, but shortcuts schema-enforcing getters
        items: props.list.map(({rawData}) => {
          let item = Object.assign({}, rawData);
          item.image = resolver && resolver(item.image);
          return item;
        })
      });
    }
    _render(props, state) {
      return {
        items: state.items
      };
    }
    _onClick(e, state) {
      console.log(e);
    }
  };

});
