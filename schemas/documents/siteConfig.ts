import { FcSettings } from 'react-icons/fc';
import Rule from '../../@types/sanityRule';

export default {
	name: 'siteConfig',
	type: 'document',
	title: 'Site Configuration',
	description: 'Configure global site settings.',
	icon: FcSettings,
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Site Title',
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		},
		{
			name: 'url',
			type: 'url',
			title: 'URL',
			description: 'The main site URL. Used to create canonical url.',
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		},
		{
			name: 'lang',
			title: 'Site Language',
			type: 'string',
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		},
		{
			name: 'mainNav',
			title: 'Main Nav',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'navItem' }]
				}
			],
			codegen: { required: true },
			validation: (rule: Rule<unknown>) => rule.required().min(1)
		},
		{
			name: 'homepage',
			title: 'Homepage',
			type: 'reference',
			to: [{ type: 'page' }],
			codegen: { required: true },
			validation: (Rule: Rule<unknown>) => Rule.required()
		}
	]
};
