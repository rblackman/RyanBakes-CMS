import S from '@sanity/desk-tool/structure-builder';
import defaultItems from './defaultItems';
import pages from './pages';
import recipes from './recipes';
import siteConfig from './siteConfig';

export default () =>
	S.list()
		.title('Ryan Bakes')
		.items([recipes, siteConfig, pages, ...defaultItems]);
