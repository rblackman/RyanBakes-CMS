import Rule, { Context } from '../../@types/sanityRule';
export default {
	title: 'Image',
	name: 'imageWithAlt',
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
		}
	],
	preview: {
		select: {
			subtitle: 'alt',
			media: 'image'
		},
		prepare({ subtitle, media }) {
			return {
				title: 'Image',
				subtitle,
				media
			};
		}
	}
};
