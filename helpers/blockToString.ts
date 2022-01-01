import { Block } from '@sanity/types/dist/dts';

export default function blockToString(text: Block[]): string {
	return text
		.filter(({ _type }) => _type === 'block')
		.reduce((prev, { children }) => {
			return prev.concat(children.map(({ text }) => text));
		}, new Array<string>())
		.join(' ');
}

export function blocksToString(blocks: { text: Block[] }[], separator: string = ' / '): string {
	return blocks.map(({ text }) => blockToString(text)).join(separator);
}
