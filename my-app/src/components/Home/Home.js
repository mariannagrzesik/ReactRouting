import Grid from "@mui/material/Grid";
import {
	Paper,
	Box,
	Card,
	Typography,
	CardActions,
	Button,
	CardContent,
	CardMedia,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AppleIcon from '@mui/icons-material/Apple';
import HomeCard from "../HomeCard/HomeCard";
import BlenderIcon from '@mui/icons-material/Blender';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import CloudIcon from '@mui/icons-material/Cloud';

export default function Home() {
	return (
		<>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid
					item
					xs={12}
					style={{
						marginTop: "20px",
						marginBottom: "20px",
						textAlign: "center",
					}}
				>
					HOME
				</Grid>
				<Grid item xs={3}>
					<HomeCard title="Marian" text="blablabla" icon={<PetsIcon />} />
				</Grid>
				<Grid item xs={3}>
					<HomeCard title="Mati" text="blablabla" icon={<AcUnitIcon />}  />
				</Grid>
				<Grid item xs={3}>
					<HomeCard title="Luca" text="blablabla" icon={<AirportShuttleIcon />}/>
				</Grid>
				<Grid item xs={3}>
					<HomeCard title="Bartek" text="blablabla" icon={<AppleIcon />}/>
				</Grid>
				<Grid item xs={3}>
					<HomeCard title=" Ązej" text="blablabla" icon={<BedtimeIcon />}/>
				</Grid>
				<Grid item xs={3}>
					<HomeCard title="Kacper" text="blablabla" icon={<BlenderIcon />}/>
				</Grid>
				<Grid item xs={3}>
					<HomeCard title="Baltazar" text="blablabla" icon={<BrightnessLowIcon />}/>
				</Grid>
				<Grid item xs={3}>
					<HomeCard title="Jasiek" text="blablabla" icon={<CloudIcon />}/>
				</Grid>
			</Grid>
		</>
	);
}
