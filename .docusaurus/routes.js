
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus/__docusaurus/debug',
    component: ComponentCreator('/docusaurus/__docusaurus/debug','cd2'),
    exact: true
  },
  {
    path: '/docusaurus/__docusaurus/debug/config',
    component: ComponentCreator('/docusaurus/__docusaurus/debug/config','136'),
    exact: true
  },
  {
    path: '/docusaurus/__docusaurus/debug/content',
    component: ComponentCreator('/docusaurus/__docusaurus/debug/content','b6c'),
    exact: true
  },
  {
    path: '/docusaurus/__docusaurus/debug/globalData',
    component: ComponentCreator('/docusaurus/__docusaurus/debug/globalData','038'),
    exact: true
  },
  {
    path: '/docusaurus/__docusaurus/debug/metadata',
    component: ComponentCreator('/docusaurus/__docusaurus/debug/metadata','5f4'),
    exact: true
  },
  {
    path: '/docusaurus/__docusaurus/debug/registry',
    component: ComponentCreator('/docusaurus/__docusaurus/debug/registry','ab4'),
    exact: true
  },
  {
    path: '/docusaurus/__docusaurus/debug/routes',
    component: ComponentCreator('/docusaurus/__docusaurus/debug/routes','cf4'),
    exact: true
  },
  {
    path: '/docusaurus/blog/archive',
    component: ComponentCreator('/docusaurus/blog/archive','ae5'),
    exact: true
  },
  {
    path: '/docusaurus/docs',
    component: ComponentCreator('/docusaurus/docs','790'),
    routes: [
      {
        path: '/docusaurus/docs',
        component: ComponentCreator('/docusaurus/docs','c61'),
        exact: true
      },
      {
        path: '/docusaurus/docs/api/metaflow',
        component: ComponentCreator('/docusaurus/docs/api/metaflow','583'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/client/core',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/client/core','cf2'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/client/filecache',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/client/filecache','1ea'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/datastore/content_addressed_store',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/datastore/content_addressed_store','34b'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/datastore/datastore_storage',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/datastore/datastore_storage','b29'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/datastore/flow_datastore',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/datastore/flow_datastore','5df'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/datastore/inputs',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/datastore/inputs','b51'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/datastore/task_datastore',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/datastore/task_datastore','12d'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/datatools/s3',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/datatools/s3','ac1'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/datatools/s3util',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/datatools/s3util','a29'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/decorators',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/decorators','4f6'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/flowspec',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/flowspec','589'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/includefile',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/includefile','066'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/metadata',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/metadata','924'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/metaflow_environment',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/metaflow_environment','322'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/metaflow_version',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/metaflow_version','d53'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/monitor',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/monitor','d4b'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/package',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/package','ee7'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/parameters',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/parameters','250'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/aws/aws_utils',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/aws/aws_utils','01b'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/aws/batch/batch_decorator',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/aws/batch/batch_decorator','6de'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/aws/eks/kubernetes',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/aws/eks/kubernetes','a27'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/aws/eks/kubernetes_decorator',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/aws/eks/kubernetes_decorator','5d5'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/cards/card_cli',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/cards/card_cli','268'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/cards/card_client',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/cards/card_client','e51'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/cards/card_datastore',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/cards/card_datastore','f52'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/cards/card_modules/basic',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/cards/card_modules/basic','b86'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/cards/card_modules/card',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/cards/card_modules/card','987'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/cards/card_modules/chevron/main',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/cards/card_modules/chevron/main','b89'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/cards/card_modules/chevron/renderer',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/cards/card_modules/chevron/renderer','8be'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/cards/card_modules/chevron/tokenizer',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/cards/card_modules/chevron/tokenizer','b39'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/cards/card_modules/components',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/cards/card_modules/components','572'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/cards/card_modules/renderer_tools',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/cards/card_modules/renderer_tools','0f5'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/cards/component_serializer',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/cards/component_serializer','9b0'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/cards/exception',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/cards/exception','7c9'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/catch_decorator',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/catch_decorator','ace'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/conda/conda_flow_decorator',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/conda/conda_flow_decorator','d6c'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/conda/conda_step_decorator',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/conda/conda_step_decorator','763'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/env_escape/communication/bytestream',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/env_escape/communication/bytestream','382'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/env_escape/communication/channel',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/env_escape/communication/channel','084'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/env_escape/communication/utils',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/env_escape/communication/utils','84d'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/env_escape/exception_transferer',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/env_escape/exception_transferer','66b'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/env_escape/stub',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/env_escape/stub','0f8'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/environment_decorator',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/environment_decorator','1fb'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/frameworks/pytorch',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/frameworks/pytorch','23b'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/resources_decorator',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/resources_decorator','d02'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/retry_decorator',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/retry_decorator','b51'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/test_unbounded_foreach_decorator',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/test_unbounded_foreach_decorator','4a8'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/plugins/timeout_decorator',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/plugins/timeout_decorator','4a5'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/runtime',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/runtime','6e0'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/sidecar',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/sidecar','520'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/sidecar_worker',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/sidecar_worker','ad0'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/task',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/task','f42'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/unbounded_foreach',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/unbounded_foreach','3df'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/util',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/util','b20'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/api/metaflow/vendor',
        component: ComponentCreator('/docusaurus/docs/api/metaflow/vendor','711'),
        exact: true,
        'sidebar': "apiMetaflow"
      },
      {
        path: '/docusaurus/docs/flow_datastore',
        component: ComponentCreator('/docusaurus/docs/flow_datastore','08c'),
        exact: true
      },
      {
        path: '/docusaurus/docs/flow_datastore2',
        component: ComponentCreator('/docusaurus/docs/flow_datastore2','aa5'),
        exact: true
      },
      {
        path: '/docusaurus/docs/flow_datastory_mdx',
        component: ComponentCreator('/docusaurus/docs/flow_datastory_mdx','a6f'),
        exact: true
      },
      {
        path: '/docusaurus/docs/python',
        component: ComponentCreator('/docusaurus/docs/python','8d0'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/getting-started/install',
        component: ComponentCreator('/docusaurus/docs/python/getting-started/install','d58'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/getting-started/tutorials',
        component: ComponentCreator('/docusaurus/docs/python/getting-started/tutorials','866'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/getting-started/tutorials/season-1-the-local-experience',
        component: ComponentCreator('/docusaurus/docs/python/getting-started/tutorials/season-1-the-local-experience','28e'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/getting-started/tutorials/season-1-the-local-experience/episode00',
        component: ComponentCreator('/docusaurus/docs/python/getting-started/tutorials/season-1-the-local-experience/episode00','0ca'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/getting-started/tutorials/season-1-the-local-experience/episode01',
        component: ComponentCreator('/docusaurus/docs/python/getting-started/tutorials/season-1-the-local-experience/episode01','92b'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/getting-started/tutorials/season-1-the-local-experience/episode02',
        component: ComponentCreator('/docusaurus/docs/python/getting-started/tutorials/season-1-the-local-experience/episode02','2b0'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/getting-started/tutorials/season-1-the-local-experience/episode03',
        component: ComponentCreator('/docusaurus/docs/python/getting-started/tutorials/season-1-the-local-experience/episode03','f57'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/getting-started/tutorials/season-1-the-local-experience/episode04',
        component: ComponentCreator('/docusaurus/docs/python/getting-started/tutorials/season-1-the-local-experience/episode04','8d6'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/getting-started/tutorials/season-2-scaling-out-and-up',
        component: ComponentCreator('/docusaurus/docs/python/getting-started/tutorials/season-2-scaling-out-and-up','f99'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot',
        component: ComponentCreator('/docusaurus/docs/python/getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot','930'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/getting-started/tutorials/season-2-scaling-out-and-up/episode05',
        component: ComponentCreator('/docusaurus/docs/python/getting-started/tutorials/season-2-scaling-out-and-up/episode05','0e4'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/getting-started/tutorials/season-2-scaling-out-and-up/episode06',
        component: ComponentCreator('/docusaurus/docs/python/getting-started/tutorials/season-2-scaling-out-and-up/episode06','b38'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/getting-started/tutorials/season-2-scaling-out-and-up/episode07',
        component: ComponentCreator('/docusaurus/docs/python/getting-started/tutorials/season-2-scaling-out-and-up/episode07','0f6'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/going-to-production-with-metaflow/coordinating-larger-metaflow-projects',
        component: ComponentCreator('/docusaurus/docs/python/going-to-production-with-metaflow/coordinating-larger-metaflow-projects','652'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/going-to-production-with-metaflow/scheduling-metaflow-flows',
        component: ComponentCreator('/docusaurus/docs/python/going-to-production-with-metaflow/scheduling-metaflow-flows','007'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/internals-of-metaflow/technical-overview',
        component: ComponentCreator('/docusaurus/docs/python/internals-of-metaflow/technical-overview','fe6'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/internals-of-metaflow/testing-philosophy',
        component: ComponentCreator('/docusaurus/docs/python/internals-of-metaflow/testing-philosophy','0d2'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/introduction/contributing-to-metaflow',
        component: ComponentCreator('/docusaurus/docs/python/introduction/contributing-to-metaflow','5b9'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/introduction/getting-in-touch',
        component: ComponentCreator('/docusaurus/docs/python/introduction/getting-in-touch','0de'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/introduction/release-notes',
        component: ComponentCreator('/docusaurus/docs/python/introduction/release-notes','91c'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/introduction/roadmap',
        component: ComponentCreator('/docusaurus/docs/python/introduction/roadmap','b2b'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/introduction/what-is-metaflow',
        component: ComponentCreator('/docusaurus/docs/python/introduction/what-is-metaflow','e97'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/introduction/why-metaflow',
        component: ComponentCreator('/docusaurus/docs/python/introduction/why-metaflow','889'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/metaflow-on-aws',
        component: ComponentCreator('/docusaurus/docs/python/metaflow-on-aws','1df'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/metaflow-on-aws/deploy-to-aws',
        component: ComponentCreator('/docusaurus/docs/python/metaflow-on-aws/deploy-to-aws','33a'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/metaflow-on-aws/metaflow-sandbox',
        component: ComponentCreator('/docusaurus/docs/python/metaflow-on-aws/metaflow-sandbox','dfa'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/metaflow/basics',
        component: ComponentCreator('/docusaurus/docs/python/metaflow/basics','e4d'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/metaflow/client',
        component: ComponentCreator('/docusaurus/docs/python/metaflow/client','f83'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/metaflow/data',
        component: ComponentCreator('/docusaurus/docs/python/metaflow/data','e3d'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/metaflow/debugging',
        component: ComponentCreator('/docusaurus/docs/python/metaflow/debugging','019'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/metaflow/dependencies',
        component: ComponentCreator('/docusaurus/docs/python/metaflow/dependencies','c55'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/metaflow/failures',
        component: ComponentCreator('/docusaurus/docs/python/metaflow/failures','4e5'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/metaflow/scaling',
        component: ComponentCreator('/docusaurus/docs/python/metaflow/scaling','70a'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/metaflow/tagging',
        component: ComponentCreator('/docusaurus/docs/python/metaflow/tagging','f89'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/metaflow/visualizing-results',
        component: ComponentCreator('/docusaurus/docs/python/metaflow/visualizing-results','e83'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/metaflow/visualizing-results/advanced-shareable-cards-with-card-templates',
        component: ComponentCreator('/docusaurus/docs/python/metaflow/visualizing-results/advanced-shareable-cards-with-card-templates','170'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/metaflow/visualizing-results/easy-custom-reports-with-card-components',
        component: ComponentCreator('/docusaurus/docs/python/metaflow/visualizing-results/easy-custom-reports-with-card-components','f21'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/python/metaflow/visualizing-results/effortless-task-inspection-with-default-cards',
        component: ComponentCreator('/docusaurus/docs/python/metaflow/visualizing-results/effortless-task-inspection-with-default-cards','ec0'),
        exact: true,
        'sidebar': "python"
      },
      {
        path: '/docusaurus/docs/r',
        component: ComponentCreator('/docusaurus/docs/r','ea9'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/getting-started/development-environment',
        component: ComponentCreator('/docusaurus/docs/r/getting-started/development-environment','c71'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/getting-started/install',
        component: ComponentCreator('/docusaurus/docs/r/getting-started/install','97c'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/getting-started/tutorials',
        component: ComponentCreator('/docusaurus/docs/r/getting-started/tutorials','75e'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/getting-started/tutorials/season-1-the-local-experience',
        component: ComponentCreator('/docusaurus/docs/r/getting-started/tutorials/season-1-the-local-experience','2fc'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/getting-started/tutorials/season-1-the-local-experience/episode00',
        component: ComponentCreator('/docusaurus/docs/r/getting-started/tutorials/season-1-the-local-experience/episode00','783'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/getting-started/tutorials/season-1-the-local-experience/episode01',
        component: ComponentCreator('/docusaurus/docs/r/getting-started/tutorials/season-1-the-local-experience/episode01','a6d'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/getting-started/tutorials/season-1-the-local-experience/episode02',
        component: ComponentCreator('/docusaurus/docs/r/getting-started/tutorials/season-1-the-local-experience/episode02','9c5'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/getting-started/tutorials/season-1-the-local-experience/episode03',
        component: ComponentCreator('/docusaurus/docs/r/getting-started/tutorials/season-1-the-local-experience/episode03','3aa'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/getting-started/tutorials/season-2-scaling-out-and-up',
        component: ComponentCreator('/docusaurus/docs/r/getting-started/tutorials/season-2-scaling-out-and-up','190'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/episode04',
        component: ComponentCreator('/docusaurus/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/episode04','34e'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/episode05',
        component: ComponentCreator('/docusaurus/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/episode05','307'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/episode06',
        component: ComponentCreator('/docusaurus/docs/r/getting-started/tutorials/season-2-scaling-out-and-up/episode06','fd4'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/going-to-production-with-metaflow/scheduling-metaflow-flows',
        component: ComponentCreator('/docusaurus/docs/r/going-to-production-with-metaflow/scheduling-metaflow-flows','da5'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/introduction/contributing-to-metaflow',
        component: ComponentCreator('/docusaurus/docs/r/introduction/contributing-to-metaflow','03e'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/introduction/getting-in-touch',
        component: ComponentCreator('/docusaurus/docs/r/introduction/getting-in-touch','3b7'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/introduction/release-notes',
        component: ComponentCreator('/docusaurus/docs/r/introduction/release-notes','491'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/introduction/roadmap',
        component: ComponentCreator('/docusaurus/docs/r/introduction/roadmap','a23'),
        exact: true
      },
      {
        path: '/docusaurus/docs/r/introduction/what-is-metaflow',
        component: ComponentCreator('/docusaurus/docs/r/introduction/what-is-metaflow','8c9'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/introduction/why-metaflow',
        component: ComponentCreator('/docusaurus/docs/r/introduction/why-metaflow','3e9'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/introduction/wip-contributing-to-metaflow',
        component: ComponentCreator('/docusaurus/docs/r/introduction/wip-contributing-to-metaflow','347'),
        exact: true
      },
      {
        path: '/docusaurus/docs/r/metaflow-on-aws',
        component: ComponentCreator('/docusaurus/docs/r/metaflow-on-aws','eb2'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/metaflow-on-aws/deploy-to-aws',
        component: ComponentCreator('/docusaurus/docs/r/metaflow-on-aws/deploy-to-aws','d49'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/metaflow-on-aws/metaflow-sandbox',
        component: ComponentCreator('/docusaurus/docs/r/metaflow-on-aws/metaflow-sandbox','de0'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/metaflow/basics',
        component: ComponentCreator('/docusaurus/docs/r/metaflow/basics','533'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/metaflow/client',
        component: ComponentCreator('/docusaurus/docs/r/metaflow/client','9fc'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/metaflow/debugging',
        component: ComponentCreator('/docusaurus/docs/r/metaflow/debugging','aa8'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/metaflow/failures',
        component: ComponentCreator('/docusaurus/docs/r/metaflow/failures','d02'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/metaflow/scaling',
        component: ComponentCreator('/docusaurus/docs/r/metaflow/scaling','93d'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/metaflow/tagging',
        component: ComponentCreator('/docusaurus/docs/r/metaflow/tagging','b1c'),
        exact: true,
        'sidebar': "r"
      },
      {
        path: '/docusaurus/docs/r/SUMMARY',
        component: ComponentCreator('/docusaurus/docs/r/SUMMARY','6f1'),
        exact: true
      },
      {
        path: '/docusaurus/docs/some_code',
        component: ComponentCreator('/docusaurus/docs/some_code','508'),
        exact: true
      }
    ]
  },
  {
    path: '/docusaurus/',
    component: ComponentCreator('/docusaurus/','bcd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
