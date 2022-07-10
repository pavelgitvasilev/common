const path = require(`path`);
const slash = require(`slash`);

const pageTemplate = path.resolve(`./src/templates/page.js`);
const dsgTemplate = path.resolve(`./src/templates/using-dsg.js`);

const allPageQuery = `
{
   allWpPage {
      nodes {
        databaseId
        uri
        template {
          templateName
         }
       }
     }
}`;

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  await graphql(allPageQuery).then(({ errors, data }) => {
    if (errors) return Promise.reject(errors);

    data.allWpPage.nodes.forEach((page) => {
      if (page.template.templateName === 'Default') {
        createPage({
          path: `${page.uri}`,
          component: slash(pageTemplate),
          context: {
            databaseId: page.databaseId,
          },
        });
      }

      if (page.template.templateName === 'Using-dsg') {
        createPage({
          path: `${page.uri}`,
          component: slash(dsgTemplate),
          context: {
            databaseId: page.databaseId,
          },
        });
      }

    });
  });
}
