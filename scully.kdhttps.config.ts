import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "kdhttps",
  outDir: './dist/static',
  routes: {
    "/blog/:slug": {
      type: 'json',
      slug: {
        url: 'https://mean-star.herokuapp.com/blogs/publisher/5ec7cc7eee39a5001244805b',
        property: 'title'
      },
    }
  }
};
