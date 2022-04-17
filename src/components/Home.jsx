import Chart from "./Chart";
import "./home.css";
import { userData } from "../dummyData";

export default function Home() {
  return (
    <div className="home">
      <Chart data={userData} title="Annual Chart" grid dataKey="Active User"/>
      
    </div>
  );
}
