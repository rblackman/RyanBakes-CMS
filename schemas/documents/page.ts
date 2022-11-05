import { FcDocument } from 'react-icons/fc';
import Rule from '../../@types/sanityRule';

export default {
	name: 'page',
	title: 'Page',
	type: 'document',
	icon: FcDocument,
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			description: 'Title of the page.',
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		}
	]
};
