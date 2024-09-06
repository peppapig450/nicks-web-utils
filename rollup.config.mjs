import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.cjs.js', // CommonJS (for Node)
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: 'dist/index.esm.js', // ES Module (for bundlers)
                format: 'esm',
                sourcemap: true
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript()
        ],
    },
    // TypeScript declaration  files configuration
    {
        input: 'dist/dts/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm'}],
        plugins: [dts()],
    }
];