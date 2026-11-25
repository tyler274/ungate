import tsconfigPaths from 'vite-tsconfig-paths';
import { mergeConfig } from 'vitest/config';

import baseConfig from '@ungate/dev-kit/vitest';

export default mergeConfig(baseConfig, {
	plugins: [tsconfigPaths()],
	test: {
		dir: 'tests/unit',
		server: {
			deps: {
				external: ['better-sqlite3']
			}
		}
	}
});
