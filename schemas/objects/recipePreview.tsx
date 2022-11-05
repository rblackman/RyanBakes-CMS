import Rule from '../../@types/sanityRule';

export default {
	title: 'Recipe Preview',
	name: 'recipePreview',
	type: 'object',
	fields: [
		{
			title: 'Large',
			name: 'large',
			type: 'boolean',
			initialValue: false,
			codegen: { required: true },
			validation: (Rule: Rule<unknown>) => Rule.required()
		},
		{
			title: 'Recipe',
			name: 'recipe',
			type: 'reference',
			to: [{ type: 'recipe' }],
			codegen: { required: true },
			validation: (Rule: Rule<unknown>) => Rule.required()
		}
	]
};
