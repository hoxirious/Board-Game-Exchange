import { Button, buttonVariants } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { ImagePlus, X } from 'lucide-react'
import Image from 'next/image'

import { useEffect, useState } from 'react'

export interface SelectedPhoto {
    file: File,
    url: string
}

const PhotosSelector = (
    { defaultValue, onChange } : 
    { 
        defaultValue : SelectedPhoto[],
        onChange: Function
    }) => {
    const [ selectedPhotos, setSelectedPhotos ] = useState<SelectedPhoto[]>([]);

    function handleSelectPhotos(e) {
        const newPhotos : SelectedPhoto[] = [];
        const length = e.target.files.length;

        // TODO: refactor can be used by handleDrop too
        for(let i = 0; i < length; i++) {
            const file = e.target.files[i]
            const fileSizeKB = file.size / 1024
            if (fileSizeKB <= 1024) {
                newPhotos.push({ 
                    file: e.target.files[i],    
                    url: URL.createObjectURL(e.target.files[i])
                });
            }
            else {
                alert('File size exceeds 1MB limit')
            }
        }
    
        setSelectedPhotos((oldPhotos) => [...oldPhotos, ...newPhotos]);
    }

    function handleDrop(e) {
        e.preventDefault();

        const newPhotos : SelectedPhoto[] = [];

        if (e.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            [...e.dataTransfer.items].forEach((item, i) => {
                // If dropped items aren't files, reject them
                if (item.kind === "file") {
                const file = item.getAsFile();
                newPhotos.push({ 
                    file: file,    
                    url: URL.createObjectURL(file)
                });
                }
            });
        } else {
            // Use DataTransfer interface to access the file(s)
            [...e.dataTransfer.files].forEach((file, i) => {
                newPhotos.push({ 
                    file: file,    
                    url: URL.createObjectURL(file)
                });
            });
        }

        setSelectedPhotos((oldPhotos) => [...oldPhotos, ...newPhotos]);
    }
    
    function deletePhoto(index) {
        setSelectedPhotos(s => s.filter((_, i) => i !== index));
    }

    // add defaultValue to selectedPhotos
    useEffect(() => {
        if(!defaultValue) return;

        setSelectedPhotos((oldPhotos : SelectedPhotos[]) => {
            return [...oldPhotos, ...defaultValue];
        });
    },[defaultValue]);

    useEffect(() => {
        console.log(selectedPhotos);
        onChange(selectedPhotos);
    }, [selectedPhotos])

    return (
        <>
            <div className="flex justify-between items-end">
                <h2 className="text-xl font-semibold">Photos</h2>
                <span className="text-sm">{selectedPhotos.length}/10</span>
            </div>
            <div
                onDragOver={(e) => {e.preventDefault();}} 
                onDrop={(e) => {handleDrop(e)}} 
                className="grid content-center bg-white w-full p-8 text-center rounded border border-black border-dashed md:aspect-[4/3]">
                <ImagePlus className="w-16 h-16 mb-2 mx-auto" />
                <div>
                    <div className="hidden md:block w-fit mx-auto">
                        {/* TODO: implement drag and drop. */}
                        <p className="text-lg font-semibold">Drag and Drop Pictures</p>
                        <div className="flex items-center">
                            <span className="border border-black h-0 flex-grow">&nbsp;</span>
                            <p className="p-2">or</p>
                            <span className="border border-black h-0 flex-grow">&nbsp;</span>
                        </div>
                    </div>
                    <Label className={cn(buttonVariants({ variant: '', size: '', className: '' }))} htmlFor="uploadPhotos">Browse Photos</Label>
                    <input id="uploadPhotos" type="file" accept="image/*" multiple onChange={handleSelectPhotos} className="hidden"></input>
                </div>
            </div>
            <div className="grid grid-cols-5 grid-rows-2 gap-4 my-4">
                {/* Thumbnails */}
                {selectedPhotos && selectedPhotos.map((photo, index) => (
                    <Label key={index} htmlFor={`post-picture-${index}`} className="rounded relative overflow-hidden aspect-square items-center">
                        <Image 
                            className="align-middle w-full"
                            src={photo.url}
                            width={80}
                            height={80}
                            alt="board game picture"></Image>
                        {/* TODO: existing pictures must be selected on load */}
                        <Button 
                            id={`post-picture-${index}`}
                            value={photo.url}
                            onClick={() => deletePhoto(index)}
                            name="post_pictures"
                            type="button" variant="outline" className="absolute top-1 right-1 rounded-full p-0 h-6 w-6 text-danger hover:text-danger">
                            <X className="w-3 aspect-square"/>
                        </Button>
                    </Label>
                ))}
                
            </div>
        </>
    )
}

export default PhotosSelector