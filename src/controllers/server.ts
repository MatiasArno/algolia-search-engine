import { Request, Response } from 'express';
import pkg from '../../package.json';

abstract class ServerController {
	static async getStatus(req: Request, res: Response) {
		const { version, author, name, description } = pkg;

        const serverStatusInfo = {
            name, 
            description,
            version,
            author,
            database: 'connected'
        }

        return res.status(200).json(serverStatusInfo);
	}
}

export default ServerController;
