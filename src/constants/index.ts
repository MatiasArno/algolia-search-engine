const ENVIRONMENT = process.env.ENVIRONMENT || 'unknown';

const PORT = Number(process.env.PORT) || 64000;

const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID || '';

const ALGOLIA_ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY || '';

const ALGOLIA_INDEX_NAME = 'churches';

const isDevelopEnvironment = () => ENVIRONMENT === 'development';

export {
	ENVIRONMENT,
	PORT,
	ALGOLIA_ADMIN_KEY,
	ALGOLIA_APP_ID,
	ALGOLIA_INDEX_NAME,
	isDevelopEnvironment,
};
