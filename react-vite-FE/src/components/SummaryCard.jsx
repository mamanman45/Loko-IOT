import { Box, Card, CardContent, Typography } from "@mui/material";

export default function SummaryCard({ icon, total, number, text }) {
  const percentage = (number / total) * 100;

  return (
    <Card sx={{ width: "100%", backgroundColor: "#C4CDC1" }}>
      <CardContent>
        <Box display={"flex"} justifyContent={"space-between"} marginBottom={1}>
          {icon}
          <Typography sx={{ color: "#28363D" }}>{percentage}%</Typography>
        </Box>
        <Typography variant="h3" sx={{ color: "#28363D" }}>
          {number}
        </Typography>
        <Typography variant="h5" sx={{ color: "#28363D" }}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
