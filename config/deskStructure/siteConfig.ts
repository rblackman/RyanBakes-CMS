import S from '@sanity/desk-tool/structure-builder';
import { FcGlobe, FcRuler, FcSettings } from 'react-icons/fc';

export default S.listItem()
	.title('Settings')
	.icon(FcSettings)
	.child(
		S.list()
			.title('Items')
			.items([
				S.listItem().title('Global Settings').icon(FcGlobe).child(S.document().schemaType('siteConfig').documentId('siteConfig')),
				S.listItem().title('Measurements').icon(FcRuler).child(S.documentTypeList('unit').title('All Units'))
				//S.listItem().icon(FcTodoList).title('Navigation').child(S.documentTypeList('navItem').title('Nav Items'))
			])
	);
