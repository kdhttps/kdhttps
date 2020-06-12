import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "kdhttps",
  outDir: './dist/static',
  routes: {
    "/blog/:slug": {
      type: 'json',
      slug: {
        url: 'https://jsonplaceholder.typicode.com/users',
        property: 'id'
      }
    }
  }
};
