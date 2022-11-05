import { FcBookmark } from 'react-icons/fc';
import Rule from '../../@types/sanityRule';

export default {
	name: 'tagsPage',
	title: 'Tags Page',
	type: 'document',
	icon: FcBookmark,
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			description: 'Title of the page.',
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		},
		{
			name: 'featuredTag',
			title: 'Featured Tag',
			type: 'string',
			description: 'The main tag to feature.',
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		},
		{
			name: 'secondaryFeature',
			title: 'Secondary Featured Tags',
			type: 'array',
			description: 'Other tags to feature.',
			of: [
				{
					type: 'string'
				}
			],
			options: {
				layout: 'tags'
			},
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.unique().required().min(2).max(6)
		}
	]
};
