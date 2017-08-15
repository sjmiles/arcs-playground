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
  ${host} [head] {
    padding: 8px;
  }
</style>
  `;

  let template = `
${styles}
<div master-detail>
  <div head>
    <span>Yo, Master & Detail</span>
  </div>
  <div slotid="show" on-click="_onClick"></div>
  <div slotid="detail">Details</div>
</div>
    `.trim();

  return class extends DomParticle {
    get template() {
      return template;
    }
    _onClick(e, state) {
      console.log(e);
    }
  };

});
