const contentful = require("contentful");
const path = require('path');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: 'cdn.contentful.com',
  });
  
  const res = await client.getEntries({
    content_type: 'page',
    include: 10,
    limit: 1000,
  });
  const content = res.items;
  const pages = content.map(buildTree);

  pages.forEach(page => {
    createPage({
      path: page.props.slug ? page.props.slug.replace('index', '/') : '/',
      component: path.resolve('./src/templates/dynamic-page.js'),
      context: {
        buildContext: {
          componentTree: page,
        },
      },
    });
  })
}

function buildTree(entry) {
  if (!entry || !entry.sys) {
    return entry;
  }

  const props = {};
  for (let key in entry.fields) {
    const value = entry.fields[key];
    props[key] = Array.isArray(value) ? value.map(buildTree) : buildTree(value);
  }

  return {
    componentType:
      entry.sys.type === 'Entry'
        ? entry.sys.contentType.sys.id
        : entry.sys.type,
    entryId: entry.sys.id,
    props,
  };
}