import index from '../lib/algolia';
import { getRandomUUID } from '../utils/uuid-generator';

abstract class CommerceModel {
	static async createNew(data: any) {
		const objectID = getRandomUUID();

		return await index.saveObject({ objectID, ...data });
	}

	static async getByID(id: string) {
		const result = (await index.search(id)) as any;
		const { name, category, _geoloc, _objectID } = result.hits[0];

		return { name, category, _geoloc, _objectID };
	}

	static async getNearLocation(location: any) {
		const { lat, lng, radius } = location;

		const { hits } = await index.search('', {
			aroundLatLng: `${lat}, ${lng}`,
			aroundRadius: radius,
		});

		return hits;
	}

	static async updateByID(id: string, data: any) {
		return await index.saveObject({ objectID: id, ...data });
	}
}

export default CommerceModel;
