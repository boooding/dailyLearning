// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/usr/local/lib/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index.js').default
  },
  {
    "path": "/profile",
    "exact": true,
    "component": require('@/pages/profile.js').default
  },
  {
    "path": "/user",
    "exact": true,
    "component": require('@/pages/user.js').default
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
