import { useState } from 'react'
import Grid from '@mui/material/Grid';
import GridComponent from './components/GridComponent';
import InputComponent from './components/InputComponent';

import './App.css'

function App() {
  const [direction, setDirection] = useState('');

  return (
    <>
      <div className="px-1 py-1">
        <Grid container spacing={2}>
          <Grid size={12}>
            <InputComponent setDirection={setDirection} />
          </Grid>
          <Grid size={12}>
            <GridComponent direction={direction} />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default App
