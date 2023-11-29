import { Request, Response } from 'express';
import CommerceModel from '../models/church';

abstract class CommerceController {
	static async createNew(req: Request, res: Response) {
		const newCommerce = await CommerceModel.createNew(req.body);

		return res.status(201).json(newCommerce);
	}

	static async getByID(req: Request, res: Response) {
		const { id } = req.params;

		const result = await CommerceModel.getByID(id);

		return res.json(result);
	}

	static async getNearLocation(req: Request, res: Response) {
		const { lat, lng, radius } = req.query;

		const result = await CommerceModel.getNearLocation({ lat, lng, radius });

		return res.json(result);
	}

	static async updateByID(req: Request, res: Response) {
		const { id } = req.params;
		const updatedCommerce = await CommerceModel.updateByID(id, req.body);

		return res.status(200).json(updatedCommerce);
	}
}

export default CommerceController;
