import * as vm from 'node:vm';
import React from 'react';

// needs --experimental-vm-modules
export async function fetchAddon_SourceTextModule() {
  const code =
    'export function Addon(props) { return React.createElement("h2", null, [`Hello from Addon 2, ${props.name}!`]); }';

  const context = { React };
  vm.createContext(context);
  const mod = new vm.SourceTextModule(code, { context });

  await mod.link(() => {}); // Possible to import dependencies
  await mod.evaluate();

  return mod.namespace;
}
