import { Request, Response } from 'express';

const handle405Error = (req: Request, res: Response) =>
	res.status(405).json({ error: 'Method not allowd' });

export default handle405Error;
