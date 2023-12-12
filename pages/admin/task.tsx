import Header from '@/components/admin/header';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import { Container, Modal, Box } from '@mui/material';
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import { getTask } from '../../redux/task/task-admin-slice';
import TaskFormModal from '../../components/admin/task-form-modal';

// table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { formatDateToDDMMYYYY } from '@/utils/common';
import Image from 'next/image';



function createData(clientName: string, taskName: string, taskDescription: string, startDate: Date, endDate: Date, status: string, deadLine: string, timeIn: Date, timeOut: Date) {
    return {
        clientName, taskName, taskDescription, startDate, endDate, status, deadLine, timeIn, timeOut
    };
}

const rows = [
    createData('Bi Client', 'Bi Booklet', 'Bi booklet Description', new Date('05-11-2023'), new Date('11-11-2023'), 'Done', '5', new Date('11-12-2023'), new Date('11-12-2023'))
];


interface ResponseType {
    error?: any;
    payload?: any;
}

interface Task {
    clientName: string;
    taskName: string;
    taskDescription: string;
    startDate: Date;
    endDate: Date;
    status: string;
    deadLine: string;
    timeIn: Date;
    timeOut: Date;
    imageDataUrl: string;
}

export default function Index() {

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const userData = useSelector((state: RootState) => state.authAdmin);
    const router = useRouter();
    const [toggle, setToggle] = useState<Boolean>(false);

    const [tasks, setTasks] = useState<Task[]>([]);
    const [error, setError] = useState('');

    if (!userData.token || !(window.localStorage.getItem('jwtToken'))) {
        router.push('/admin/login');
        return false;
    }

    useEffect(() => {
        const fetchData = async () => {

            try {
                if (userData && userData.token) {
                    const response: ResponseType = await dispatch(getTask(userData.token));
                    setTasks(response.payload.data)
                } else {
                    console.error('No token available');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        };

        fetchData();

    }, [toggle]);


    if (userData.token || window.localStorage.getItem('jwtToken')) {
        return (
            <>
                <Header />

                <Container component="main">
                    <TaskFormModal onClick={() => setToggle(!toggle)} />
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 800 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Client Name</TableCell>
                                    <TableCell>Task Name</TableCell>
                                    <TableCell align="right">Description</TableCell>
                                    <TableCell align="right">Start Date</TableCell>
                                    <TableCell align="right">End Date</TableCell>
                                    <TableCell align="right">Status</TableCell>
                                    <TableCell align="right">Deadline</TableCell>
                                    <TableCell align="right">Image</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Array.isArray(tasks) && tasks.map((row, index) => (
                                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">{row.clientName}</TableCell>
                                        <TableCell component="th" scope="row">{row.taskName}</TableCell>
                                        <TableCell align="right">{row.taskDescription}</TableCell>
                                        <TableCell align="right">{formatDateToDDMMYYYY(row.startDate)}</TableCell>
                                        <TableCell align="right">{formatDateToDDMMYYYY(row.endDate)}</TableCell>
                                        <TableCell align="right">{row.status}</TableCell>
                                        <TableCell align="right">{row.deadLine}</TableCell>
                                        <TableCell align="right">
                                            {row.imageDataUrl && <a href={row.imageDataUrl} target="_blank">
                                                <img src={row.imageDataUrl} alt="Description of the image" width={50} height={50} />
                                            </a>}
                                        </TableCell>
                                        <TableCell align="right">{'Edit'}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Container>

            </>
        );
    }

}