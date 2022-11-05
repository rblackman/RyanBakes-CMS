import S from '@sanity/desk-tool/structure-builder';

const hiddenDocTypes = (listItem: { getId: () => string }) =>
	!['tagsPage', 'recipesPage', 'recipe', 'unit', 'siteConfig', 'page', 'navItem'].includes(listItem.getId());

export default S.documentTypeListItems().filter(hiddenDocTypes);
