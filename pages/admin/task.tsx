import Header from '@/components/admin/header';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import { getTask } from '../../redux/task/task-admin-slice';

// table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { formatDateToDDMMYYYY } from '@/utils/common';
import Button from '@mui/material/Button';


function createData(taskName: string, taskDescription: string, startDate: Date, endDate: Date, status: string, deadLine: string, timeIn: Date, timeOut: Date) {
    return {
        taskName, taskDescription, startDate, endDate, status, deadLine, timeIn, timeOut
    };
}

const rows = [
    createData('Bi Booklet', 'Bi booklet Description', new Date('05-11-2023'), new Date('11-11-2023'), 'Done', '5', new Date('11-12-2023'), new Date('11-12-2023'))
];


interface ResponseType {
    error?: any;
    payload?: any;
}

interface Task {
    taskName: string;
    taskDescription: string;
    startDate: Date;
    endDate: Date;
    status: string;
    deadLine: string;
    timeIn: Date;
    timeOut: Date;
}

export default function Index() {

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const userData = useSelector((state: RootState) => state.authAdmin);
    const router = useRouter();

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
                    //console.log(response.payload.data);
                    setTasks(response.payload.data)
                } else {
                    console.error('No token available');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        };

        fetchData();

    }, []);



    if (userData.token || window.localStorage.getItem('jwtToken')) {
        return (
            <>
                <Header />

                <Container component="main">
                    <div className='create-data-wrapper'>
                        <Button variant="contained" color="success">Success</Button>
                    </div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 800 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    {/* Update table headers according to your data */}
                                    <TableCell>Task Name</TableCell>
                                    <TableCell align="right">Description</TableCell>
                                    <TableCell align="right">Start Date</TableCell>
                                    <TableCell align="right">End Date</TableCell>
                                    <TableCell align="right">Status</TableCell>
                                    <TableCell align="right">Deadline</TableCell>
                                    <TableCell align="right">Time In</TableCell>
                                    <TableCell align="right">Time Out</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tasks.map((row, index) => (
                                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">{row.taskName}</TableCell>
                                        <TableCell align="right">{row.taskDescription}</TableCell>
                                        <TableCell align="right">{formatDateToDDMMYYYY(row.startDate)}</TableCell>
                                        <TableCell align="right">{formatDateToDDMMYYYY(row.endDate)}</TableCell>
                                        <TableCell align="right">{row.status}</TableCell>
                                        <TableCell align="right">{row.deadLine}</TableCell>
                                        <TableCell align="right">{formatDateToDDMMYYYY(row.timeIn)}</TableCell>
                                        <TableCell align="right">{formatDateToDDMMYYYY(row.timeOut)}</TableCell>
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