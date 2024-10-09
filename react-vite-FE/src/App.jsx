import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { cssReset } from "./styles";
import SummaryCard from "./components/SummaryCard";
import { Build, RailwayAlert, Train, TrendingUp } from "@mui/icons-material";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Grid2 } from "@mui/material";
import { getLatestSummary } from "./services/apis";

function App() {
  const [summaryData, setSummaryData] = useState([]);
  const [totalLoko, setTotalLoko] = useState("");
  const [lokoAktif, setLokoAktif] = useState("");
  const [lokoNonaktif, setLokoNonaktif] = useState("");
  const [lokoMaintenance, setLokoMaintenance] = useState("");

  useEffect(() => {
    async function fetchLatestSummary() {
      try {
        const response = await getLatestSummary();
        setSummaryData(response.data);
        setTotalLoko(response.data.at(0).totalLoko);
        setLokoAktif(response.data.at(0).totalAktif);
        setLokoNonaktif(response.data.at(0).totalNonaktif);
        setLokoMaintenance(response.data.at(0).totalMaintenance);
      } catch (error) {
        console.log(error.message);
        // bisa ditambahkan error handling yang lebih proper
      }
    }
    fetchLatestSummary();
  }, []);

  return (
    <>
      <style>{cssReset}</style>
      <Navbar />
      {/* Card Latest Summary */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        paddingLeft={3}
        paddingRight={3}
      >
        <Grid2 container spacing={2}>
          <Grid2 item size={{ xs: 6, sm: 6, md: 3 }}>
            <SummaryCard
              icon={<TrendingUp sx={{ color: "#28363D" }} />}
              total={totalLoko}
              number={totalLoko}
              text={"Total Lokomotif"}
            />
          </Grid2>
          <Grid2 item size={{ xs: 6, sm: 6, md: 3 }}>
            <SummaryCard
              icon={<Train sx={{ color: "#28363D" }} />}
              total={totalLoko}
              number={lokoAktif}
              text={"Total Aktif"}
            />
          </Grid2>
          <Grid2 item size={{ xs: 6, sm: 6, md: 3 }}>
            <SummaryCard
              icon={<RailwayAlert sx={{ color: "#28363D" }} />}
              total={totalLoko}
              number={lokoNonaktif}
              text={"Total Nonaktif"}
            />
          </Grid2>
          <Grid2 item size={{ xs: 6, sm: 6, md: 3 }}>
            <SummaryCard
              icon={<Build sx={{ color: "#28363D" }} />}
              total={totalLoko}
              number={lokoMaintenance}
              text={"Total Maintenance"}
            />
          </Grid2>
        </Grid2>
        {/* Pie Chart */}
        <Box
          sx={{ backgroundColor: "#C4CDC1" }}
          display={"flex"}
          alignItems={"center"}
          marginTop={2}
          paddingLeft={3}
          paddingRight={3}
          borderRadius={"12px"}
        >
          <PieChart
            series={[
              {
                data: [
                  {
                    id: 0,
                    value: lokoAktif,
                    label: "Loko Akftif",
                    color: "#2F575D",
                  },
                  {
                    id: 1,
                    value: lokoNonaktif,
                    label: "Loko Nonaktif",
                    color: "#658B6F",
                  },
                  {
                    id: 2,
                    value: lokoMaintenance,
                    label: "Loko Maintenance",
                    color: "#6D9197",
                  },
                ],
                innerRadius: 30,
                paddingAngle: 1,
                outerRadius: 250,
              },
            ]}
            width={900}
            height={600}
          />
        </Box>
      </Box>
    </>
  );
}

export default App;
