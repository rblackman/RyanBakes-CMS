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
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96
			},
			description: 'Page slug',
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'inlineImage' }, { type: 'textSection' }, { type: 'recipePreview' }],
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		}
	]
};
