import * as vm from 'node:vm';
import React from 'react';

// needs cjs, no external deps
export async function fetchAddon_runInContext() {
  const code =
    'exports = { Addon }; function Addon(props) { return React.createElement("h1", null, [`Hello from Addon 1, ${props.name}!`]); }';

  const context = { React };
  vm.createContext(context);
  vm.runInContext(code, context);
  return context.exports;
}
