import BountiesList from "../../components/BountiesList";
import PageHero from "../../components/PageHero";

export default function Home() {
  const infos = [
    {
      value: "4",
      label: "In progress"
    },
    {
      value: "1130",
      label: "Closed Bounties"
    },
    {
      value: "92.304,230",
      label: "In the network",
      currency: "BEPRO"
    },
    {
      value: "12,320",
      label: "Members"
    }
  ];

  return (
    <div className="pt-5">
      <PageHero
        title="Bounties"
        subtitle="Find a bounty that you want to work on, create a solution and get paid"
        infos={infos}
      />

      <BountiesList />
    </div>
  )
}
