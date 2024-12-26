import Portfolio_Intro from "./components/Portfolio_Intro";
import Portfolio_Pagination from "./components/Portfolio_Pagination";

export default function Portfolio({ portfolio, domain }) {
  return (
    <div className="flex flex-col gap-10">
      <Portfolio_Intro domain={domain} />
      <Portfolio_Pagination portfolio={portfolio} domain={domain}/>
    </div>
  );
}
