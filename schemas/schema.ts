// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';
import recipe from './documents/recipe';
import siteConfig from './documents/siteConfig';
import unit from './documents/unit';
import blockContent from './objects/blockContent';
import externalLink from './objects/externalLink';
import imageWithAlt from './objects/imageWithAlt';
import ingredient from './objects/ingredient';
import inlineImage from './objects/inlineImage';
import internalLink from './objects/internalLink';
import portableText from './objects/portableText';
import simplePortableText from './objects/simplePortableText';
import step from './objects/step';
import textSection from './objects/textSection';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: 'default',
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		// objects
		blockContent,
		internalLink,
		externalLink,
		portableText,
		simplePortableText,
		imageWithAlt,
		ingredient,
		inlineImage,
		step,
		textSection,
		// documents
		recipe,
		siteConfig,
		unit
	])
});
