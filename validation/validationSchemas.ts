import * as Yup from 'yup';

export const connectSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required'),
    mobile: Yup.string().required('Mobile is required'),
    message: Yup.string().required('Message is required')
});


export const joinTheTaleSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required'),
    mobile: Yup.string().required('Mobile is required'),
    file: Yup.mixed().required('Document is required').test('fileType', 'Invalid file format', (value: any) => {
        if (!value) return true; // Allow empty file uploads
        const supportedFormats = ['docx', 'pdf']; // Add your supported file formats here
        const fileExtension = value.name.split('.').pop()?.toLowerCase();
        return supportedFormats.includes(fileExtension || '');
    }),

});