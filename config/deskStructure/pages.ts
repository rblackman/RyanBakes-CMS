import S from '@sanity/desk-tool/structure-builder';
import { FcDocument } from 'react-icons/fc';

export default S.listItem().title('Pages').icon(FcDocument).child(S.documentTypeList('page').title('Pages'));
