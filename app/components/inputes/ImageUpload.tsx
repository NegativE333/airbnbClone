'use client';

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global{
    var cloudinary: any;
}

interface ImageUploadProps{
    onChage: (value: string) => void;
    value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    onChage,
    value
}) => {

    const handleUpload = useCallback((result: any) => {
        onChage(result.info.secure_url);
    }, [onChage]);

    return(
        <CldUploadWidget 
            onUpload={handleUpload}
            uploadPreset="big57kte"
            options={{
                maxFiles: 1
            }}
        > 
            {({ open }) => {
                return(
                    <div
                        onClick={() => open?.()}
                        className="relative cursor-pointer hover:opacity-70 transition border-2 border-dashed p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
                    >
                        <TbPhotoPlus size={50}/>
                        <div className="font-semibold text-lg">
                            Click to upload
                        </div>
                        {value && (
                            <div className="absolute insert-0 w-full h-full">
                                <Image
                                    alt="upload"
                                    fill
                                    style={{ objectFit: 'cover'}}
                                    src={value}
                                />
                            </div>
                        )}
                    </div>
                )
            }}
        </CldUploadWidget>
    )
}

export default ImageUpload;