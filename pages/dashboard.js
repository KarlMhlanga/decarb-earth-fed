import Navbar from '../components/navbar';
import DashboardGraphs from '../components/DashboardGraphs';

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <h1>Welcome, [User]</h1>
      <DashboardGraphs />
    </>
  );
}
