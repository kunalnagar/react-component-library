import path from 'path'

import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import glob from 'glob'
import babel from 'rollup-plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import atImport from 'postcss-import'

const ROOT_DIRECTORY = 'src'

// The is file at the top that exports everything that should be exposed to the
// library that imports this module.
const ROOT_FILE_PATH = `${ROOT_DIRECTORY}/index.ts`

// Any file with the name `index.ts` will create a chunk in the rollup build.
// If an app imports something from that chunk, _only_ that chunk will show up
// in the build of the app, as long as tree-shaking in whatever builds that app.
// This is the default with create-react-app (which uses webpack).
const indexFiles = glob.sync(`${ROOT_DIRECTORY}/**/index.ts`)

let input = indexFiles.reduce((componentMap, currentPath) => {
  const currentPathSplit = currentPath.split(path.sep)
  const componentName =
    currentPath === ROOT_FILE_PATH
      ? 'index'
      : // The name of the chunk is the parent file's folder name. This means that
        // collisions could occur in certain situations (e.g.,
        // `src/a/Component/index.ts` and `src/b/Component/index.ts` would both
        // have their chunks named "Component"). You should try to avoid this, but
        // it shouldn't necessarily be an issue, since in this case the chunk
        // would also be given a hash (e.g. "Component.89s87dfs.js").
        currentPathSplit[currentPathSplit.length - 2]

  if (!componentName) {
    return componentMap
  }

  return {
    ...componentMap,
    [componentName]: currentPath,
  }
}, {})

export default {
  cache: false,
  input,
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    external({
      preferBuiltins: false,
    }),
    babel({
      exclude: /node_modules/,
      externalHelpers: true, // Exclude babel helpers.
      plugins: ['external-helpers'],
    }),
    json(),
    resolve({
      customResolveOptions: { moduleDirectories: ['src', 'node_modules'] },
    }),
    postcss({
      plugins: [atImport()],
    }),
    typescript({
      clean: true,
      typescript: require('ttypescript'),
    }),
    url(),
  ],
}
