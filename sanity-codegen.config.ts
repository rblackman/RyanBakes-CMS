import { SanityCodegenConfig } from 'sanity-codegen';

const config: SanityCodegenConfig = {
    schemaPath: './schemas/schema.ts',
    outputPath: './schema-dist/index.ts'
};

export default config;