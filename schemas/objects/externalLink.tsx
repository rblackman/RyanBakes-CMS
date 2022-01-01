import PropTypes from 'prop-types';
import React from 'react';
import { FcGlobe } from 'react-icons/fc';
import Rule from '../../@types/sanityRule';

const LinkRender = ({ children }) => (
	<span>
		{children}{' '}
		<span role="img" aria-label="web">
			<FcGlobe />
		</span>
	</span>
);

LinkRender.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

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
	codegen: { required: true },
	validation: (Rule: Rule<unknown>) => Rule.required(),
	blockEditor: {
		icon: FcGlobe,
		render: LinkRender
	}
};
