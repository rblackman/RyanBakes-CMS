import { Block } from '@sanity/types/dist/dts';
import { FcTemplate } from 'react-icons/fc';
import Rule from '../../@types/sanityRule';
import blockToString from '../../helpers/blockToString';

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
			const subtitle = blockToString(text);
			return {
				title: 'Text Section',
				subtitle,
				media: FcTemplate
			};
		}
	}
};
