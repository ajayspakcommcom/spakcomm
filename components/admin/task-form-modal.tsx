import React, { useState } from 'react';
import { Modal, Box, Button, Typography, TextField, FormControl, InputLabel } from '@mui/material';
import { useDispatch } from 'react-redux';
import { postTask } from '../../redux/task/task-admin-slice';
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Image from 'next/image';

interface ClientName {
    value: string;
    label: string;
}

const clients: ClientName[] = [
    { value: 'alupac', label: 'alupac' },
    { value: 'aluwrap', label: 'aluwrap' },
    { value: 'asb', label: 'asb' },
    { value: 'avc', label: 'avc' },
    { value: 'sahara star', label: 'sahara star' },
    { value: 'bi', label: 'bi' },
    { value: 'bsv', label: 'bsv' },
    { value: 'cipla', label: 'cipla' },
    { value: 'polycrack', label: 'polycrack' },
    { value: 'esenpro', label: 'esenpro' },
];

interface componentProps {
    onClick: () => void;
}

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface ResponseType {
    error?: any;
    payload?: any;
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const Index: React.FC<componentProps> = ({ onClick }) => {

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const userData = useSelector((state: RootState) => state.authAdmin);

    const [clientName, setClientName] = useState('');
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [status, setStatus] = useState('');
    const [deadLine, setDeadLine] = useState('');
    const [imageDataUrl, setImageDataUrl] = useState('');


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result;
                if (typeof result === 'string') {
                    setImageDataUrl(result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const [errors, setErrors] = useState({ clientName: '', taskName: '', taskDescription: '', startDate: '', endDate: '', status: '', deadLine: '' });

    const validate = () => {
        let tempErrors = { clientName: '', taskName: '', taskDescription: '', startDate: '', endDate: '', status: '', deadLine: '' };
        let isValid = true;

        if (!clientName) {
            tempErrors.clientName = 'Client name is required'
            isValid = false;
            return false;
        }

        if (!taskName) {
            tempErrors.taskName = 'task name is required'
            isValid = false;
            return false;
        }

        if (!taskDescription) {
            tempErrors.taskDescription = 'task description is required'
            isValid = false;
            return false;
        }

        if (!startDate) {
            tempErrors.startDate = 'Start date is required'
            isValid = false;
            return false;
        }

        if (!endDate) {
            tempErrors.endDate = 'End date is required'
            isValid = false;
            return false;
        }

        if (!status) {
            tempErrors.status = 'Status is required'
            isValid = false;
            return false;
        }

        if (!deadLine) {
            tempErrors.deadLine = 'DeadLine is required'
            isValid = false;
            return false;
        }

        setErrors(tempErrors);
        return isValid;
    }

    const formHandler = () => {
        validate();
    };


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const token = userData.token || window.localStorage.getItem('jwtToken') || '';

        if (validate()) {

            const objData = { clientName: clientName, taskName: taskName, taskDescription: taskDescription, startDate: startDate, endDate: endDate, status: status, deadLine: deadLine, token: token, imageDataUrl: imageDataUrl };

            const resp: ResponseType = await dispatch(postTask({ ...objData }));

            console.log(resp);


            if (resp.payload.status === 200) {
                onClick()
            }

            resp.error ? 'Error' : 'No Error';

        } else {
            console.log('Form is invalid');
        }
    };

    return (
        <div>
            <Modal open={true} onClose={formHandler} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">

                <Box sx={modalStyle}
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}>
                    <IconButton onClick={onClick} sx={{ position: 'absolute', right: 8, top: 8 }}>
                        <CloseIcon />
                    </IconButton>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 3 }}>Submit Your Task</Typography>
                    <FormControl fullWidth>

                        <FormControl fullWidth sx={{ mb: 3 }}>
                            <InputLabel id="demo-simple-select-label">Client Name</InputLabel>
                            <Select
                                label="Client Name"
                                variant="outlined"
                                value={clientName}
                                onChange={(e) => setClientName(e.target.value)}
                            >
                                {
                                    clients.map((item) => (
                                        <MenuItem key={item.value} value={item.value}>
                                            {item.label}
                                        </MenuItem>
                                    ))
                                }

                            </Select>
                        </FormControl>


                        <TextField
                            label="Task Name"
                            variant="outlined"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            error={!!errors.taskName}
                            helperText={errors.taskName}
                            sx={{ mb: 3 }}
                        />

                        <TextField
                            label="Task Description"
                            variant="outlined"
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            multiline
                            rows={3}
                            error={!!errors.taskDescription}
                            helperText={errors.taskDescription}
                            sx={{ mb: 3 }}
                        />



                        <TextField
                            type='date'
                            label="Start Date"
                            variant="outlined"
                            value={startDate instanceof Date ? startDate.toISOString().split('T')[0] : ''}
                            onChange={(e) => setStartDate(e.target.value ? new Date(e.target.value) : null)}
                            error={!!errors.startDate}
                            helperText={errors.startDate}
                            sx={{ mb: 3 }}
                        />

                        <TextField
                            type='date'
                            label="End Date"
                            variant="outlined"
                            value={endDate instanceof Date ? endDate.toISOString().split('T')[0] : ''}
                            onChange={(e) => setEndDate(e.target.value ? new Date(e.target.value) : null)}
                            error={!!errors.endDate}
                            helperText={errors.endDate}
                            sx={{ mb: 3 }}
                        />

                        <TextField
                            label="Status"
                            variant="outlined"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            error={!!errors.status}
                            helperText={errors.status}
                            sx={{ mb: 3 }}
                        />

                        <TextField
                            label="DeadLine"
                            variant="outlined"
                            value={deadLine}
                            onChange={(e) => setDeadLine(e.target.value)}
                            error={!!errors.deadLine}
                            helperText={errors.deadLine}
                        />
                        <br />
                        <input type="file" id='image' name='image' onChange={handleFileChange} accept="image/*" className='preview-input-image' />
                        <br />
                        {imageDataUrl && <Image src={imageDataUrl} alt="Description of the image" width={70} height={70} />}

                        <Button type="submit" variant="contained" onClick={formHandler} sx={{ mt: 4 }}>Submit</Button>
                    </FormControl>
                </Box>
            </Modal>

        </div>
    );
}

export default Index;