const path = require(`path`);
const slash = require(`slash`);

const pageTemplate = path.resolve(`./src/templates/page.js`);
const cardsTemplate = path.resolve(`./src/templates/cards.js`);

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

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
    });
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    await graphql(allPageQuery).then(({ errors, data }) => {
        if (errors) return Promise.reject(errors);

        data.allWpPage.nodes.forEach((page) => {
            if (page.template.templateName === 'Page') {
                createPage({
                    path: `${page.uri.replace('/wp', '')}`,
                    component: slash(pageTemplate),
                    context: {
                        databaseId: page.databaseId,
                    },
                });
            }

            if (page.template.templateName === 'Cards') {
                createPage({
                    path: `${page.uri.replace('/wp', '')}`,
                    component: slash(cardsTemplate),
                    context: {
                        databaseId: page.databaseId,
                    },
                });
            }
        });
    });
};
