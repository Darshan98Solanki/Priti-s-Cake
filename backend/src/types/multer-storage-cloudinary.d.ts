declare module 'multer-storage-cloudinary' {
    import { StorageEngine } from 'multer';
    import { ConfigOptions, UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';

    export interface CloudinaryStorageOptions {
        cloudinary: any;
        params?: {
            folder?: string;
            format?: string;
            public_id?: string;
            [key: string]: any;
        };
    }

    export class CloudinaryStorage implements StorageEngine {
        constructor(options: CloudinaryStorageOptions);
        _handleFile(
            req: Express.Request,
            file: Express.Multer.File,
            callback: (error?: any, info?: Partial<Express.Multer.File>) => void
        ): void;
        _removeFile(
            req: Express.Request,
            file: Express.Multer.File,
            callback: (error: Error) => void
        ): void;
    }
}
