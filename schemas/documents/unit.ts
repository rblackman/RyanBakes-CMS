import { CgMathDivide } from 'react-icons/cg';
import { FaWeightHanging } from 'react-icons/fa';
import { FcRuler } from 'react-icons/fc';
import Rule from '../../@types/sanityRule';

export default {
	title: 'Unit',
	name: 'unit',
	type: 'document',
	icon: FcRuler,
	fields: [
		{
			name: 'name',
			type: 'string',
			title: 'Name',
			description: 'Unit long name.',
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		},
		{
			name: 'abbreviation',
			type: 'string',
			title: 'Abbreviation',
			description: 'Unit abbreviation',
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		},
		{
			name: 'system',
			type: 'string',
			title: 'Measurement System',
			icon: FcRuler,
			options: {
				list: ['Imperial', 'Metric']
			},
			initialValue: 'Metric',
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		},
		{
			name: 'type',
			type: 'string',
			title: 'Unit Type',
			icon: FaWeightHanging,
			options: {
				list: ['Volume', 'Weight']
			},
			initialValue: 'Weight',
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		},
		{
			name: 'display',
			type: 'string',
			title: 'Display',
			icon: CgMathDivide,
			options: {
				list: ['Fraction', 'Decimal']
			},
			initialValue: 'Decimal',
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		},
		{
			name: 'exempt',
			type: 'boolean',
			title: 'Exempt',
			description: 'Do not show ingredients.',
			initialValue: false,
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		}
	],
	orderings: [
		{
			title: 'Name',
			name: 'name',
			by: [{ field: 'name', direction: 'asc' }]
		}
	],
	preview: {
		select: {
			name: 'name',
			type: 'type',
			abbreviation: 'abbreviation'
		},
		prepare({ name, type: subtitle, abbreviation }: { name: string; type: string; abbreviation: string }) {
			const title = `${name} (${abbreviation})`;
			return {
				title,
				subtitle,
				icon: FcRuler
			};
		}
	}
};
