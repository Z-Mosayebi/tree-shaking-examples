export default {
    input: 'src/index.js',  // Entry point for the source file
    output: {
      file: 'dist/bundle.js',  // Output directory and file name
      format: 'es',            // Module format
    },
    treeshake: true,           // Enable tree shaking
  };
  