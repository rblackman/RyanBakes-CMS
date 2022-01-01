import PropTypes from 'prop-types';
import React from 'react';
import { FcLink } from 'react-icons/fc';
import Rule from '../../@types/sanityRule';

const InternalLinkRender = ({ children }) => (
	<span>
		{children}{' '}
		<span role="img" aria-label="link">
			<FcLink />
		</span>
	</span>
);

InternalLinkRender.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default {
	title: 'Internal link to another document',
	name: 'internalLink',
	type: 'reference',
	description: 'Locate a document you want to link to',
	to: [{ type: 'page' }],
	blockEditor: {
		icon: FcLink,
		render: InternalLinkRender
	},
	codegen: { required: true },
	validation: (Rule: Rule<unknown>) => Rule.required()
};
