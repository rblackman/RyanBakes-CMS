import { FcList } from 'react-icons/fc';
import Rule from '../../@types/sanityRule';

export default {
	name: 'recipe',
	title: 'Recipe',
	type: 'document',
	icon: FcList,
	fieldsets: [
		{
			title: 'Recipe Metadata',
			name: 'metadata'
		},
		{
			title: 'SEO',
			name: 'seo'
		}
	],
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
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
			codegen: { required: true },
			validation: (Rule: Rule<unknown>) => Rule.required()
		},
		{
			name: 'picture',
			title: 'Picture',
			type: 'imageWithAlt',
			codegen: { required: true },
			validation: (Rule: Rule<unknown>) => Rule.required()
		},
		{
			name: 'preheat',
			title: 'Preheat',
			type: 'number',
			description: 'Oven preheat temperature in fahrenheit',
			codegen: { required: false },
			validation: (Rule: Rule<number>) => Rule.optional(),
			fieldset: 'metadata'
		},
		{
			name: 'bakeTime',
			title: 'Bake Time',
			type: 'number',
			description: 'Cook time in minutes (i.e. Time under heat)',
			codegen: { required: false },
			validation: (Rule: Rule<number>) => Rule.optional(),
			fieldset: 'metadata'
		},
		{
			name: 'totalTime',
			title: 'Total Time',
			type: 'number',
			description: 'Total time (start to finish) in minutes',
			codegen: { required: true },
			validation: (Rule: Rule<number>) => Rule.required(),
			fieldset: 'metadata'
		},
		{
			name: 'ingredients',
			type: 'array',
			title: 'Ingredients',
			of: [
				{
					type: 'ingredient'
				}
			]
		},
		{
			name: 'steps',
			type: 'array',
			title: 'Steps',
			of: [
				{
					type: 'step'
				}
			]
		},
		{
			name: 'openGraphImage',
			type: 'imageWithAlt',
			title: 'Open Graph Image',
			description: 'Image to be shown on social media.',
			fieldset: 'seo',
			options: { hotspot: true },
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		},
		{
			name: 'disallowRobots',
			type: 'boolean',
			title: 'Disallow in robots.txt',
			description: 'Hide this route for search engines',
			initialValue: false,
			fieldset: 'seo'
		}
	],
	preview: {
		select: {
			title: 'title',
			media: 'picture',
			slug: 'slug.current'
		},
		prepare({ title, media, slug }) {
			const s = slug === '/' ? '/' : `/${slug}`;
			return {
				title: `${title} (${s})`,
				media
			};
		}
	}
};
