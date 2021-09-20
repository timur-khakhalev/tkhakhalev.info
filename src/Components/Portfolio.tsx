import {FC} from 'react';
import { IPortfolio } from '../interfaces'
import resume from '../resume.json'
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GitHub } from '@mui/icons-material';
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store'




const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    cardFull: {
        minHeight: '16em',
        margin: '1em',
        textAlign: 'justify',
    },
    card: {
        minHeight: '10em',
        margin: '1em'
    }
});
export const Portfolio: FC = () => {
    const classes = useStyles();
    const toggleStatus = useSelector((state: RootState) => state.versionToggle.version);
    const togglePrint = useSelector((state: RootState) => state.printToggle.print);

    return (
        <div>
            <Typography variant="h4">
                Мои проекты
            </Typography>
            <Grid direction="row"
                justifyContent="center"
                alignItems="center"
                className={classes.root}
                container>
            
                    {Object.entries(toggleStatus ? resume.portfolioShort : resume.portfolioFull).map((k) => {
                            const user: IPortfolio = {
                                name: k[1].name,
                                link: k[1].link,
                                text: k[1].text
                            };                            
                            return <Grid item xs={12} sm={12} lg={4} md={12}>
                                <Card sx={{height: {md: 'auto'}}} variant="outlined" className={toggleStatus || togglePrint ? classes.card : classes.cardFull}>
                                    <CardContent>
                                        <Typography variant="h6">
                                            <Button size="large" startIcon={<GitHub/>} variant="text" href={user.link}>{user.name}</Button>
                                        </Typography>
                                        <Typography>
                                            {user.text}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                    })}
                        
            </Grid>
        </div>
    );
};