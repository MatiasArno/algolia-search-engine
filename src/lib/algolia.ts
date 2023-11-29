import algoliasearch from 'algoliasearch'
import { ALGOLIA_ADMIN_KEY, ALGOLIA_APP_ID, ALGOLIA_INDEX_NAME } from '../constants'

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);

const index = client.initIndex(ALGOLIA_INDEX_NAME);

export default index;

