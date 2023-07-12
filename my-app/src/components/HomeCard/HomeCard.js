import { Card, Typography, CardContent } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";

export default function HomeCard(props) {
	const { title, text, icon } = props;
	return (
		<Card sx={{ maxWidth: 345 }} style={{ textAlign: "center" }}>
			<CardContent>
				<Typography gutterBottom component="div">
					{icon}
				</Typography>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{text}
				</Typography>
			</CardContent>
		</Card>
	);
}
