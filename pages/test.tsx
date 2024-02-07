import React, { useState, ChangeEvent, FormEvent } from 'react';

const apiEndpoint = `${process.env.NEXT_PUBLIC_API_URL}`;

const ImageUploadForm: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            console.log(e.target.files[0]);
            setSelectedImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedImage) {
            alert('Please select an image first.');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedImage);
        console.log('formData', formData);

        try {
            const response = await fetch(`${apiEndpoint}join-the-tale`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                alert('Image uploaded successfully: ' + data.path);
            } else {
                alert('Upload failed');
            }
        } catch (error: any) {
            console.error('Error uploading the image:', error);
            alert('Error uploading the image.');
        }
    };

    return (
        <form onSubmit={handleSubmit} >
            <input type="file" name='file' accept="image/*" onChange={handleImageChange} />
            <button type="submit">Upload Image</button>
        </form>
    );
};

export default ImageUploadForm;
