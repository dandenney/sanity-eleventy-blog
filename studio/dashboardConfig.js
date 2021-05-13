export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '609d480b41d9021f6adb33a9',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ciq52oxn',
                  apiId: 'fe40f6ab-190d-4ff4-8e3a-bf7623fa56bf'
                },
                {
                  buildHookId: '609d480c160902f5caac4b0b',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-twou4zab',
                  apiId: '0e306114-774f-4831-a1c7-c93071944472'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dandenney/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-twou4zab.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
