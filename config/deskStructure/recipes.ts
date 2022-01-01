import S from '@sanity/desk-tool/structure-builder';
import { FcList } from 'react-icons/fc';

export default S.listItem().title('Recipes').icon(FcList).child(S.documentTypeList('recipe').title('Recipes'));
