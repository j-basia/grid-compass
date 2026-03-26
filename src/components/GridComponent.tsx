import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Cancel } from '@mui/icons-material';
import '../css/GridComponent.css'
import { AppSettings } from '../store/config';
import { Icons } from '../enum/enum';
import { getIcon } from '../helper/helper';

export interface GridComponentProps {
    direction: string;
    gridSize?: number
}

const GridComponent = ({ 
    direction,
    gridSize = AppSettings.GridSize,
 } : GridComponentProps) => {
    const coordinate = direction?.split(' ')[0];
    const directionName = direction?.split(' ')[1]?.toUpperCase();
    const icon = getIcon(directionName as keyof typeof Icons) || Cancel;

    return (
        <>
            {Array.from(Array(gridSize)).map((_, columnIndex) => (
                <Grid key={columnIndex} className='grid-container' container spacing={{ xs: 2, md: 3 }} size={12}>
                    {Array.from(Array(gridSize)).map((_, rowIndex) => (
                        <Grid key={columnIndex + '-' + rowIndex} size={12 / gridSize} className='grid'>
                            <Paper variant='outlined' className='grid-content'>
                                {
                                    coordinate == rowIndex + ',' + Math.abs(columnIndex - gridSize + 1) ?
                                        icon : ''
                                }
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            ))}
        </>
    )
}

export default GridComponent