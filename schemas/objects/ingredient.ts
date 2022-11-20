import { FcCheckmark } from 'react-icons/fc';
import Rule from '../../@types/sanityRule';
export default {
	title: 'Ingredient',
	name: 'ingredient',
	type: 'object',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		},
		{
			name: 'amount',
			title: 'Amount',
			type: 'string',
			codegen: { required: true },
			validation: (Rule: Rule<string>) => Rule.required()
		},
		{
			name: 'unit',
			title: 'Unit',
			type: 'reference',
			to: [{ type: 'unit' }],
			codegen: { required: true },
			validation: (Rule: Rule<unknown>) => Rule.required()
		},
		{
			name: 'notes',
			title: 'Notes',
			type: 'string',
			codegen: { required: false },
			validation: (Rule: Rule<string>) => Rule.optional()
		},
		{
			name: 'usedInSteps',
			title: 'Used In Steps',
			type: 'array',
			of: [{ type: 'number' }],
			codegen: { required: false },
			validation: (Rule: Rule<string>) => Rule.optional()
		}
	],
	codegen: { required: true },
	validation: (Rule: Rule<unknown>) => Rule.required(),
	preview: {
		select: {
			name: 'name',
			amount: 'amount',
			unit: 'unit.abbreviation',
			usedInSteps: 'usedInSteps'
		},
		prepare({ name: title, amount, unit, usedInSteps }) {
			console.log('unit', unit);

			let subtitle: string;
			if (usedInSteps) {
				subtitle = `${amount}${unit} (Step${usedInSteps.length > 1 ? 's' : ''}: ${usedInSteps.join(', ')})`;
			} else {
				subtitle = `${amount}${unit} (Not Associated with Step)`;
			}

			return {
				title,
				subtitle,
				icon: FcCheckmark
			};
		}
	}
};
