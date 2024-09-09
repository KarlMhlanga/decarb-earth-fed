import Navbar from '../components/Navbar';
import DashboardGraphs from '../components/DashboardGraphs';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Welcome, [User]!</h2>
        <DashboardGraphs />
      </main>
    </div>
  );
}
