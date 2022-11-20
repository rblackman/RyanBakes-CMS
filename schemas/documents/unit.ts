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
			name: 'noUnit',
			type: 'boolean',
			title: 'No Unit',
			description: 'Do not show unit.',
			initialValue: false,
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		},
		{
			name: 'noCount',
			type: 'boolean',
			title: 'No Count',
			description: 'Do not show count.',
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
			system: 'system',
			display: 'display',
			noUnit: 'noUnit',
			noCount: 'noCount',
			abbreviation: 'abbreviation'
		},
		prepare({
			name,
			type,
			system,
			display,
			abbreviation,
			noUnit
		}: {
			name: string;
			type: string;
			display: string;
			system: string;
			abbreviation: string;
			noUnit: boolean;
		}) {
			let title = name;
			let subtitle: string;

			if (noUnit) {
				subtitle = '';
			} else {
				name += ` ${abbreviation}`;
				subtitle = `${type} / ${system} / ${display}`;
			}

			return {
				title,
				subtitle,
				icon: FcRuler
			};
		}
	}
};
