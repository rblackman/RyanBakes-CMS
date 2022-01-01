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
			title: 'Site Language',
			name: 'lang',
			type: 'string',
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		}
	]
};
