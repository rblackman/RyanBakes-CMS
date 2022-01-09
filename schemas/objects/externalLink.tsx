import React from 'react';
import { FcGlobe } from 'react-icons/fc';
import Rule from '../../@types/sanityRule';

const LinkRender = ({ children }) => (
	<span>
		{children} <FcGlobe />
	</span>
);

export default {
	title: 'URL',
	name: 'externalLink',
	type: 'object',
	fields: [
		{
			title: 'URL',
			name: 'href',
			type: 'url',
			validation: (Rule: Rule<string>) =>
				Rule.uri({
					allowRelative: true,
					scheme: ['https', 'http', 'mailto', 'tel']
				})
		}
	],
	blockEditor: {
		icon: FcGlobe,
		render: LinkRender
	}
};
