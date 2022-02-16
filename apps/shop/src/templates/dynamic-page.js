import { buildComponent } from '../utils/buildComponent';

const DynamicPage = ({
  pageContext: {
    buildContext: { componentTree },
  },
}) => {
  console.log({ componentTree });
  if (componentTree) {
    return buildComponent(componentTree);
  }
  console.log('DynamicPage data error!');
  console.log('DynamicPage data error: ', JSON.stringify(componentTree));
  return false;
};

export default DynamicPage;
