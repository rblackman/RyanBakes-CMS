import React from 'react';
import { FcLink } from 'react-icons/fc';

const InternalLinkRender = ({ children }) => (
	<span>
		{children} <FcLink />
	</span>
);

export default {
	title: 'Internal link to another document',
	name: 'internalLink',
	type: 'reference',
	description: 'Locate a document you want to link to',
	to: [{ type: 'recipe' }],
	blockEditor: {
		icon: FcLink,
		render: InternalLinkRender
	}
};
