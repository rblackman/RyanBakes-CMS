import Rule from '../../@types/sanityRule';

export default {
	title: 'Simple Portable Text',
	name: 'simplePortableText',
	type: 'array',
	of: [
		{
			title: 'Block',
			type: 'block',
			styles: [],
			lists: [],
			marks: {
				decorators: [
					{ title: 'Strong', value: 'strong' },
					{ title: 'Emphasis', value: 'em' },
					{ title: 'Code', value: 'code' }
				]
			}
		}
	],
	codegen: { required: true },
	validation: (Rule: Rule<unknown>) => Rule.required()
};
