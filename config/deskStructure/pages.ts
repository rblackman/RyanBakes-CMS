import S from '@sanity/desk-tool/structure-builder';
import { FcBookmark, FcDocument, FcFolder, FcShop } from 'react-icons/fc';

export default S.listItem()
	.title('Pages')
	.icon(FcFolder)
	.child(
		S.list()
			.title('Page Types')
			.items([
				S.listItem().title('Tags Page').icon(FcBookmark).child(S.document().title('Tags Page').schemaType('tagsPage').documentId('tagsPage')),
				S.listItem().title('Recipes Page').icon(FcShop).child(S.document().title('Recipes Page').schemaType('recipesPage').documentId('recipesPage')),
				S.listItem().title('Pages').icon(FcDocument).child(S.documentTypeList('page'))
			])
	);
