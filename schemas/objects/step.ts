import { FcCheckmark } from 'react-icons/fc';
import Rule from '../../@types/sanityRule';
import { blocksToString } from '../../helpers/blockToString';
export default {
	title: 'Step',
	name: 'step',
	type: 'object',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'inlineImage' }, { type: 'textSection' }],
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		}
	],
	codegen: { required: true },
	validation: (Rule: Rule<unknown>) => Rule.required(),
	preview: {
		select: {
			title: 'title',
			sections: 'content'
		},
		prepare({ title, sections }) {
			let subtitle = '';
			let media: unknown | null = null;
			const text = sections.filter(({ _type }) => _type === 'textSection');
			const image = sections.filter(({ _type }) => _type === 'inlineImage');

			if (text.length > 0) {
				subtitle = blocksToString(text);
			}

			if (image.length > 0) {
				media = image[0].asset;
			}

			return {
				title,
				subtitle,
				media,
				icon: FcCheckmark
			};
		}
	}
};
