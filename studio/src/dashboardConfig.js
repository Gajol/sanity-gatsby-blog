export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60aea48cdd7f350090c5f20c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-xwib5a64",
                  apiId: "24cfcb3f-3103-4d80-87d8-588c8b51d84f",
                },
                {
                  buildHookId: "60aea48cc966a90090b78c4a",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-n8kzkyxt",
                  apiId: "f1244361-d2e7-4dec-8918-f5e5f746549f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Gajol/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-n8kzkyxt.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
