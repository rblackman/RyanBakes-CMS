import Rule from '../../@types/sanityRule';

export default {
	title: 'Portable Text',
	name: 'portableText',
	type: 'array',
	of: [
		{
			type: 'block',
			styles: [
				{ title: 'Normal', value: 'normal' },
				{ title: 'H2', value: 'h2' },
				{ title: 'H3', value: 'h3' },
				{ title: 'H4', value: 'h4' },
				{ title: 'Quote', value: 'blockquote' }
			],
			marks: {
				decorators: [
					{ title: 'Strong', value: 'strong' },
					{ title: 'Emphasis', value: 'em' }
				],
				annotations: [{ type: 'externalLink' }]
			}
		}
	],
	codegen: { required: true },
	validation: (Rule: Rule<unknown>) => Rule.required()
};
