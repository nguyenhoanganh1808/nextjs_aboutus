import Banner from "./components/banner";
import ServiceDetails from "./components/service-details";
import SolutionsForBusiness from "./components/solutions-for-business";
import StatsOverview from "./components/stats-overview";

export default function Home() {
  return (
    <>
      <Banner />
      <SolutionsForBusiness />
      <ServiceDetails />
      <StatsOverview />
    </>
  );
}
