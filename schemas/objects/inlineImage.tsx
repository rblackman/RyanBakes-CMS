import Rule, { Context } from '../../@types/sanityRule';
export default {
	title: 'Image',
	name: 'inlineImage',
	type: 'image',
	options: { hotspot: true },
	fields: [
		{
			name: 'alt',
			title: 'Alt Text',
			type: 'string',
			options: {
				isHighlighted: true
			},
			validation: (Rule: Rule<string>) =>
				Rule.custom((alt, { parent: { emptyAlt } }: Context) => {
					if (alt && alt.length > 0) {
						return true;
					}
					if ((emptyAlt as boolean) === true) {
						return true;
					}
					return 'Must provide alt text.';
				})
		},
		{
			name: 'emptyAlt',
			title: 'Empty Alt',
			type: 'boolean',
			initialValue: false
		},
		{
			name: 'size',
			title: 'Size',
			type: 'string',
			options: {
				isHighlighted: true,
				list: ['Small', 'Medium', 'Full']
			},
			initialValue: 'Large',
			codegen: { Full: true },
			validation: (Rule: Rule<unknown>) => Rule.required()
		},
		{
			name: 'position',
			title: 'Position',
			type: 'string',
			options: {
				isHighlighted: true,
				list: ['Left', 'Right', 'Block']
			},
			initialValue: 'Block',
			codegen: { required: true },
			validation: (Rule: Rule<unknown>) => Rule.required()
		},
		{
			name: 'aspectRatio',
			type: 'string',
			title: 'Aspect Ratio',
			description: 'Format should be w/h (e.g. 16/9)',
			codegen: { required: false },
			validation: (Rule: Rule<string>) =>
				Rule.optional().custom((val) => {
					if (!val || val.length === 0) {
						// optional
						return true;
					}

					const regex = /^[0-9]+\/[0-9]+$/;
					if (regex.test(val)) {
						return true;
					}
					return 'Please use the format "width/height"';
				})
		}
	],
	preview: {
		select: {
			alt: 'alt',
			media: 'asset'
		},
		prepare({ alt, media }) {
			return {
				title: 'Image',
				subtitle: alt,
				media
			};
		}
	}
};
