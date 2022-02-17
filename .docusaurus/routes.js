
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','402'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/','e9a'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/flow_datastore',
        component: ComponentCreator('/docs/flow_datastore','db2'),
        exact: true
      },
      {
        path: '/docs/flow_datastore2',
        component: ComponentCreator('/docs/flow_datastore2','714'),
        exact: true
      },
      {
        path: '/docs/flow_datastory_mdx',
        component: ComponentCreator('/docs/flow_datastory_mdx','944'),
        exact: true
      },
      {
        path: '/docs/getting-started/install',
        component: ComponentCreator('/docs/getting-started/install','6c9'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/getting-started/tutorials/',
        component: ComponentCreator('/docs/getting-started/tutorials/','d36'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/getting-started/tutorials/season-1-the-local-experience/',
        component: ComponentCreator('/docs/getting-started/tutorials/season-1-the-local-experience/','fc7'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/getting-started/tutorials/season-1-the-local-experience/episode00',
        component: ComponentCreator('/docs/getting-started/tutorials/season-1-the-local-experience/episode00','781'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/getting-started/tutorials/season-1-the-local-experience/episode01',
        component: ComponentCreator('/docs/getting-started/tutorials/season-1-the-local-experience/episode01','eab'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/getting-started/tutorials/season-1-the-local-experience/episode02',
        component: ComponentCreator('/docs/getting-started/tutorials/season-1-the-local-experience/episode02','995'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/getting-started/tutorials/season-1-the-local-experience/episode03',
        component: ComponentCreator('/docs/getting-started/tutorials/season-1-the-local-experience/episode03','f84'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/getting-started/tutorials/season-1-the-local-experience/episode04',
        component: ComponentCreator('/docs/getting-started/tutorials/season-1-the-local-experience/episode04','ab0'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/getting-started/tutorials/season-2-scaling-out-and-up/',
        component: ComponentCreator('/docs/getting-started/tutorials/season-2-scaling-out-and-up/','d8e'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot',
        component: ComponentCreator('/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot','925'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode05',
        component: ComponentCreator('/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode05','800'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode06',
        component: ComponentCreator('/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode06','6f6'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode07',
        component: ComponentCreator('/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode07','39d'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/going-to-production-with-metaflow/coordinating-larger-metaflow-projects',
        component: ComponentCreator('/docs/going-to-production-with-metaflow/coordinating-larger-metaflow-projects','881'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/going-to-production-with-metaflow/scheduling-metaflow-flows',
        component: ComponentCreator('/docs/going-to-production-with-metaflow/scheduling-metaflow-flows','ef7'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/internals-of-metaflow/technical-overview',
        component: ComponentCreator('/docs/internals-of-metaflow/technical-overview','452'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/internals-of-metaflow/testing-philosophy',
        component: ComponentCreator('/docs/internals-of-metaflow/testing-philosophy','b5e'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/introduction/contributing-to-metaflow',
        component: ComponentCreator('/docs/introduction/contributing-to-metaflow','8bf'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/introduction/getting-in-touch',
        component: ComponentCreator('/docs/introduction/getting-in-touch','26e'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/introduction/release-notes',
        component: ComponentCreator('/docs/introduction/release-notes','31c'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/introduction/roadmap',
        component: ComponentCreator('/docs/introduction/roadmap','f8a'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/introduction/what-is-metaflow',
        component: ComponentCreator('/docs/introduction/what-is-metaflow','0ad'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/introduction/why-metaflow',
        component: ComponentCreator('/docs/introduction/why-metaflow','1db'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/metaflow-on-aws/',
        component: ComponentCreator('/docs/metaflow-on-aws/','e76'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/metaflow-on-aws/deploy-to-aws',
        component: ComponentCreator('/docs/metaflow-on-aws/deploy-to-aws','d91'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/metaflow-on-aws/metaflow-sandbox',
        component: ComponentCreator('/docs/metaflow-on-aws/metaflow-sandbox','53f'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/metaflow/basics',
        component: ComponentCreator('/docs/metaflow/basics','c15'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/metaflow/client',
        component: ComponentCreator('/docs/metaflow/client','c78'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/metaflow/data',
        component: ComponentCreator('/docs/metaflow/data','cbb'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/metaflow/debugging',
        component: ComponentCreator('/docs/metaflow/debugging','dba'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/metaflow/dependencies',
        component: ComponentCreator('/docs/metaflow/dependencies','17b'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/metaflow/failures',
        component: ComponentCreator('/docs/metaflow/failures','8bb'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/metaflow/scaling',
        component: ComponentCreator('/docs/metaflow/scaling','cfa'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/metaflow/tagging',
        component: ComponentCreator('/docs/metaflow/tagging','307'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/metaflow/visualizing-results/',
        component: ComponentCreator('/docs/metaflow/visualizing-results/','62a'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/metaflow/visualizing-results/advanced-shareable-cards-with-card-templates',
        component: ComponentCreator('/docs/metaflow/visualizing-results/advanced-shareable-cards-with-card-templates','a26'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/metaflow/visualizing-results/easy-custom-reports-with-card-components',
        component: ComponentCreator('/docs/metaflow/visualizing-results/easy-custom-reports-with-card-components','63d'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/metaflow/visualizing-results/effortless-task-inspection-with-default-cards',
        component: ComponentCreator('/docs/metaflow/visualizing-results/effortless-task-inspection-with-default-cards','f97'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docs/r/',
        component: ComponentCreator('/docs/r/','19b'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docs/r/getting-started/development-environment',
        component: ComponentCreator('/docs/r/getting-started/development-environment','2ee'),
        exact: true
      },
      {
        path: '/docs/r/getting-started/install',
        component: ComponentCreator('/docs/r/getting-started/install','526'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docs/r/getting-started/tutorials/',
        component: ComponentCreator('/docs/r/getting-started/tutorials/','3b4'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docs/r/getting-started/tutorials/season-1-the-local-experience/',
        component: ComponentCreator('/docs/r/getting-started/tutorials/season-1-the-local-experience/','aca'),
        exact: true
      },
      {
        path: '/docs/r/getting-started/tutorials/season-1-the-local-experience/episode00',
        component: ComponentCreator('/docs/r/getting-started/tutorials/season-1-the-local-experience/episode00','256'),
        exact: true
      },
      {
        path: '/docs/r/getting-started/tutorials/season-1-the-local-experience/episode01',
        component: ComponentCreator('/docs/r/getting-started/tutorials/season-1-the-local-experience/episode01','e3f'),
        exact: true
      },
      {
        path: '/docs/r/getting-started/tutorials/season-1-the-local-experience/episode02',
        component: ComponentCreator('/docs/r/getting-started/tutorials/season-1-the-local-experience/episode02','297'),
        exact: true
      },
      {
        path: '/docs/r/getting-started/tutorials/season-1-the-local-experience/episode03',
        component: ComponentCreator('/docs/r/getting-started/tutorials/season-1-the-local-experience/episode03','1b9'),
        exact: true
      },
      {
        path: '/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/',
        component: ComponentCreator('/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/','9b2'),
        exact: true
      },
      {
        path: '/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/episode04',
        component: ComponentCreator('/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/episode04','30a'),
        exact: true
      },
      {
        path: '/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/episode05',
        component: ComponentCreator('/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/episode05','9cf'),
        exact: true
      },
      {
        path: '/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/episode06',
        component: ComponentCreator('/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/episode06','65d'),
        exact: true
      },
      {
        path: '/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/episode07',
        component: ComponentCreator('/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/episode07','e0c'),
        exact: true
      },
      {
        path: '/docs/r/going-to-production-with-metaflow/scheduling-metaflow-flows',
        component: ComponentCreator('/docs/r/going-to-production-with-metaflow/scheduling-metaflow-flows','039'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docs/r/introduction/contributing-to-metaflow',
        component: ComponentCreator('/docs/r/introduction/contributing-to-metaflow','74d'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docs/r/introduction/getting-in-touch',
        component: ComponentCreator('/docs/r/introduction/getting-in-touch','905'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docs/r/introduction/release-notes',
        component: ComponentCreator('/docs/r/introduction/release-notes','93e'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docs/r/introduction/roadmap',
        component: ComponentCreator('/docs/r/introduction/roadmap','370'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docs/r/introduction/what-is-metaflow',
        component: ComponentCreator('/docs/r/introduction/what-is-metaflow','1a7'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docs/r/introduction/why-metaflow',
        component: ComponentCreator('/docs/r/introduction/why-metaflow','5e0'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docs/r/introduction/wip-contributing-to-metaflow',
        component: ComponentCreator('/docs/r/introduction/wip-contributing-to-metaflow','20b'),
        exact: true
      },
      {
        path: '/docs/r/metaflow-on-aws/',
        component: ComponentCreator('/docs/r/metaflow-on-aws/','035'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docs/r/metaflow-on-aws/deploy-to-aws',
        component: ComponentCreator('/docs/r/metaflow-on-aws/deploy-to-aws','d81'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docs/r/metaflow-on-aws/metaflow-sandbox',
        component: ComponentCreator('/docs/r/metaflow-on-aws/metaflow-sandbox','212'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docs/r/metaflow/basics',
        component: ComponentCreator('/docs/r/metaflow/basics','294'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docs/r/metaflow/client',
        component: ComponentCreator('/docs/r/metaflow/client','eb3'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docs/r/metaflow/debugging',
        component: ComponentCreator('/docs/r/metaflow/debugging','30d'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docs/r/metaflow/failures',
        component: ComponentCreator('/docs/r/metaflow/failures','155'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docs/r/metaflow/scaling',
        component: ComponentCreator('/docs/r/metaflow/scaling','6dd'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docs/r/metaflow/tagging',
        component: ComponentCreator('/docs/r/metaflow/tagging','38a'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docs/r/SUMMARY',
        component: ComponentCreator('/docs/r/SUMMARY','a98'),
        exact: true
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
