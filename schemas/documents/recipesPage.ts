import { FcShop } from 'react-icons/fc';
import Rule from '../../@types/sanityRule';

export default {
	name: 'recipesPage',
	title: 'Recipes Page',
	type: 'document',
	icon: FcShop,
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
			name: 'intro',
			title: 'Intro',
			type: 'portableText',
			description: 'Intro text to show before featured recipes',
			codegen: { required: true },
			validation: (Rule: Rule<unknown>) => Rule.required()
		},
		{
			name: 'featuredRecipe',
			title: 'Featured Tag',
			type: 'reference',
			description: 'The main recipe to feature.',
			to: [{ type: 'recipe' }],
			codegen: { required: true },
			validation: (Rule: Rule<unknown>) => Rule.required()
		},
		{
			name: 'secondaryFeatured',
			title: 'Secondary Featured Recipes',
			type: 'array',
			description: 'Other recipes to feature.',
			of: [
				{
					type: 'reference',
					to: [{ type: 'recipe' }]
				}
			],
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.unique().required().min(2).max(6)
		}
	]
};
