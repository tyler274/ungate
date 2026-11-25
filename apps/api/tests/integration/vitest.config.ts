import tsconfigPaths from 'vite-tsconfig-paths';
import { mergeConfig } from 'vitest/config';

import baseConfig from '@ungate/dev-kit/vitest';

export default mergeConfig(baseConfig, {
	plugins: [tsconfigPaths()],
	test: {
		dir: 'tests/integration',
		fileParallelism: false,
		include: ['tests/integration/**/*.test.ts'],
		setupFiles: ['tests/integration/vitest.setup.ts'],
		globalSetup: ['tests/integration/global-setup.ts'],
		server: {
			deps: {
				external: ['better-sqlite3']
			}
		}
	}
});
