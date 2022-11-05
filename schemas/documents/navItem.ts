import { FcViewDetails } from 'react-icons/fc';
import Rule from '../../@types/sanityRule';

export default {
	name: 'navItem',
	title: 'Navigation Item',
	type: 'document',
	icon: FcViewDetails,
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
			description: 'Name to show in the navigation menu.',
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		},
		{
			name: 'page',
			title: 'Page',
			type: 'reference',
			to: [{ type: 'page' }],
			codegen: { required: true },
			validation: (Rule: Rule<unknown>) => Rule.required()
		}
	]
};
