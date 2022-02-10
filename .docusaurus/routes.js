
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','7e7'),
    routes: [
      {
        path: '/docs/fake',
        component: ComponentCreator('/docs/fake','fc2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/why',
        component: ComponentCreator('/docs/why','de4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','5f1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
