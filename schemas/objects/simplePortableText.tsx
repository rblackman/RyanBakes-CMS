import React from 'react';
import { FaDivide } from 'react-icons/fa';
import Rule from '../../@types/sanityRule';

const fractionRender = ({ children }) => {
	return (
		<span>
			[{children} <FaDivide />]
		</span>
	);
};

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
					{ title: 'Code', value: 'code' },
					{
						title: 'Fraction',
						value: 'fraction',
						blockEditor: {
							icon: FaDivide,
							render: fractionRender
						}
					}
				]
			}
		}
	],
	codegen: { required: true },
	validation: (Rule: Rule<unknown>) => Rule.required()
};
