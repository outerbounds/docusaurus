
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
    component: ComponentCreator('/docs','63b'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/','6ce'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/install',
        component: ComponentCreator('/docs/getting-started/install','a24'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/tutorials/',
        component: ComponentCreator('/docs/getting-started/tutorials/','bf2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/tutorials/season-1-the-local-experience/',
        component: ComponentCreator('/docs/getting-started/tutorials/season-1-the-local-experience/','a20'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/tutorials/season-1-the-local-experience/episode00',
        component: ComponentCreator('/docs/getting-started/tutorials/season-1-the-local-experience/episode00','07b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/tutorials/season-1-the-local-experience/episode01',
        component: ComponentCreator('/docs/getting-started/tutorials/season-1-the-local-experience/episode01','81a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/tutorials/season-1-the-local-experience/episode02',
        component: ComponentCreator('/docs/getting-started/tutorials/season-1-the-local-experience/episode02','75f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/tutorials/season-1-the-local-experience/episode03',
        component: ComponentCreator('/docs/getting-started/tutorials/season-1-the-local-experience/episode03','f91'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/tutorials/season-1-the-local-experience/episode04',
        component: ComponentCreator('/docs/getting-started/tutorials/season-1-the-local-experience/episode04','861'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/tutorials/season-2-scaling-out-and-up/',
        component: ComponentCreator('/docs/getting-started/tutorials/season-2-scaling-out-and-up/','46d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot',
        component: ComponentCreator('/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot','4e5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode05',
        component: ComponentCreator('/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode05','873'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode06',
        component: ComponentCreator('/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode06','e32'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode07',
        component: ComponentCreator('/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode07','7c9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/going-to-production-with-metaflow/coordinating-larger-metaflow-projects',
        component: ComponentCreator('/docs/going-to-production-with-metaflow/coordinating-larger-metaflow-projects','d8a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/going-to-production-with-metaflow/scheduling-metaflow-flows',
        component: ComponentCreator('/docs/going-to-production-with-metaflow/scheduling-metaflow-flows','67c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/internals-of-metaflow/technical-overview',
        component: ComponentCreator('/docs/internals-of-metaflow/technical-overview','627'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/internals-of-metaflow/testing-philosophy',
        component: ComponentCreator('/docs/internals-of-metaflow/testing-philosophy','2af'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/introduction/contributing-to-metaflow',
        component: ComponentCreator('/docs/introduction/contributing-to-metaflow','ecc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/introduction/getting-in-touch',
        component: ComponentCreator('/docs/introduction/getting-in-touch','608'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/introduction/release-notes',
        component: ComponentCreator('/docs/introduction/release-notes','c00'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/introduction/roadmap',
        component: ComponentCreator('/docs/introduction/roadmap','c40'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/introduction/what-is-metaflow',
        component: ComponentCreator('/docs/introduction/what-is-metaflow','223'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/introduction/why-metaflow',
        component: ComponentCreator('/docs/introduction/why-metaflow','686'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/metaflow-on-aws/',
        component: ComponentCreator('/docs/metaflow-on-aws/','791'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/metaflow-on-aws/deploy-to-aws',
        component: ComponentCreator('/docs/metaflow-on-aws/deploy-to-aws','9da'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/metaflow-on-aws/metaflow-sandbox',
        component: ComponentCreator('/docs/metaflow-on-aws/metaflow-sandbox','e6f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/metaflow/basics',
        component: ComponentCreator('/docs/metaflow/basics','5c4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/metaflow/client',
        component: ComponentCreator('/docs/metaflow/client','b3d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/metaflow/data',
        component: ComponentCreator('/docs/metaflow/data','70b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/metaflow/debugging',
        component: ComponentCreator('/docs/metaflow/debugging','ba2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/metaflow/dependencies',
        component: ComponentCreator('/docs/metaflow/dependencies','6be'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/metaflow/failures',
        component: ComponentCreator('/docs/metaflow/failures','975'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/metaflow/scaling',
        component: ComponentCreator('/docs/metaflow/scaling','445'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/metaflow/tagging',
        component: ComponentCreator('/docs/metaflow/tagging','642'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/metaflow/visualizing-results/',
        component: ComponentCreator('/docs/metaflow/visualizing-results/','74e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/metaflow/visualizing-results/advanced-shareable-cards-with-card-templates',
        component: ComponentCreator('/docs/metaflow/visualizing-results/advanced-shareable-cards-with-card-templates','dba'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/metaflow/visualizing-results/easy-custom-reports-with-card-components',
        component: ComponentCreator('/docs/metaflow/visualizing-results/easy-custom-reports-with-card-components','237'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/metaflow/visualizing-results/effortless-task-inspection-with-default-cards',
        component: ComponentCreator('/docs/metaflow/visualizing-results/effortless-task-inspection-with-default-cards','b5a'),
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
