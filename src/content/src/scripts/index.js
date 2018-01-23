import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';
import websites from '../../../websites';
import downloaders from '../../../downloaders'

const proxyStore = new Store({portName: 'example'});

const website = websites[0];

const elementToInsertAfter = website.insertComponentAfter();

const insertAfter = (newNode, referenceNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

if (elementToInsertAfter) {
  const meta = website.getMeta()
  const entrypointId = `picaroon-entrypoint-${website.id}`;
  const entrypoint = document.createElement('div');
  entrypoint.id = entrypointId;
  entrypoint.className = website.entrypointClassName;
  insertAfter(entrypoint, elementToInsertAfter);
  const Entrypoint = (
    <Provider store={proxyStore}>
      <span>
        {downloaders.map(downloader => <downloader.Component meta={meta} key={downloader.id}/>)}
      </span>
    </Provider>
  )
  render(Entrypoint, document.getElementById(entrypointId));
}
