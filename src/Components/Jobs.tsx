import { FC } from 'react';
import { IJobs } from '../interfaces'
import resume from '../resume.json'
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store'

interface IJobsShort {
    jobs: string
}

const user: IJobsShort = {
    jobs: resume.lastjobShort
}

const useStyles = makeStyles({
    table: {
        margin: '.5em 0 0 0',
    },
    text: {
        margin: '1em 0'
    }
});

export const Jobs : FC = () => {
    const classes = useStyles();
    const toggleStatus = useSelector((state: RootState) => state.versionToggle.version);
    const togglePrint = useSelector((state: RootState) => state.printToggle.print);
    if(toggleStatus) {
        return (
            <Typography variant="body1" className={classes.text}>
                {user.jobs}
            </Typography>
            )
    } else {
        return (
            <TableContainer>
                <Table size={(!toggleStatus && togglePrint) ? 'medium' : 'small'} className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell variant="footer">Дата</TableCell>
                            <TableCell variant="footer">Компания</TableCell>
                            <TableCell variant="footer">Должность</TableCell>
                            <TableCell variant="footer">Описание</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.entries(resume.lastjobFull).map((k) => {
                            const user: IJobs = {
                                date: k[1].date,
                                company: k[1].company,
                                posname: k[1].posname,
                                info: k[1].info
                            };
                            return <TableRow>
                                <TableCell variant="body">{user.date}</TableCell>
                                <TableCell variant="body">{user.company}</TableCell>
                                <TableCell variant="body">{user.posname}</TableCell>
                                <TableCell variant="body">{user.info}</TableCell>
                            </TableRow>

                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
};

