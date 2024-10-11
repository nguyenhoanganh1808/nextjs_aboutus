import Banner from "./components/banner";
import ContactForm from "./components/contact-form";
import PaymentGateWay from "./components/payment-gateway";
import ServiceDetails from "./components/service-details";
import SolutionsForBusiness from "./components/solutions-for-business";
import StatsOverview from "./components/stats-overview";
import WhyUs from "./components/why-us";

export default function Home() {
  return (
    <>
      <Banner />
      <SolutionsForBusiness />
      <ServiceDetails />
      <StatsOverview />
      <WhyUs />
      <PaymentGateWay />
      <ContactForm />
    </>
  );
}
