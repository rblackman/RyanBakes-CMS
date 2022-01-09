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
			name: 'commentary',
			title: 'Commentary',
			type: 'portableText',
			description: 'Commentary about this recipe to display at the top of the page.',
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
			name: 'serves',
			title: 'Serves',
			type: 'string',
			description: 'Input in format N-N (e.g. 2-4)',
			codegen: { required: false },
			validation: (Rule: Rule<string>) => Rule.optional(),
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
			name: 'tags',
			type: 'array',
			title: 'Tags',
			description: 'Tags this recipe falls under.',
			of: [
				{
					type: 'string'
				}
			],
			options: {
				layout: 'tags'
			},
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.unique().required()
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
			name: 'ogDescription',
			type: 'text',
			title: 'Open Graph Description',
			description: 'Page description to show when shared on social media. 110-300 characters depending on where it is being shared.',
			fieldset: 'seo',
			options: { hotspot: true },
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		},
		{
			name: 'description',
			type: 'text',
			title: 'description',
			description: 'HTML description. Should be ~200 characters.',
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
