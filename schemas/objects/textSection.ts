import { Block } from '@sanity/types/dist/dts';
import { FcTemplate } from 'react-icons/fc';
import Rule from '../../@types/sanityRule';

export default {
	type: 'object',
	name: 'textSection',
	title: 'Text',
	fields: [
		{
			name: 'text',
			type: 'portableText',
			title: 'Text',
			codegen: { required: true },
			validation: (Rule: Rule<unknown>) => Rule.required()
		}
	],
	preview: {
		select: {
			text: 'text'
		},
		prepare({ text }: { text: Block[] }) {
			const subtitle = text
				.filter(({ _type }) => _type === 'block')
				.reduce((prev, { children }) => {
					return prev.concat(children.map(({ text }) => text));
				}, new Array<string>())
				.join(' ');
			return {
				title: 'Text Section',
				subtitle,
				media: FcTemplate
			};
		}
	}
};
