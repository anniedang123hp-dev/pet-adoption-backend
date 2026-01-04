import { Router, Request, Response } from 'express';

const router = Router();

interface Device {
    id: number;
    name: string;
    status: 'Online' | 'Offline';
}

const devices: Device[] = [
    { id: 1, name: 'Camera 1', status: 'Online' },
    { id: 2, name: 'Camera 2', status: 'Offline' }
];



router.get('/', (req: Request, res: Response) => {
    res.json(devices);
});

router.post('/', (req: Request, res: Response) => {
    const newDevice: Device = req.body;
    devices.push(newDevice);
    res.status(201).json(newDevice);
});

export default router;
