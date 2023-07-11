import Grid from '@mui/material/Grid';
import { Paper, Box } from '@mui/material';

export default function Home() {
	return (
		<>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
      <Grid item xs={12} style={{marginTop: '20px', marginBottom: '20px', textAlign:'center'}}>
					HOME
				</Grid>
				<Grid item xs={3}>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      
      <Paper elevation={3} />
    </Box>
				</Grid>
				<Grid item xs={3}>
					2
				</Grid>
				<Grid item xs={3}>
					3
				</Grid>
				<Grid item xs={3}>
					4
				</Grid>
        <Grid item xs={3}>
					5
				</Grid>
				<Grid item xs={3}>
					6
				</Grid>
				<Grid item xs={3}>
					7
				</Grid>
				<Grid item xs={3}>
					8
				</Grid>
			</Grid>
			
		</>
	);
}
