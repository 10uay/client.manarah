import M_Benefits from "@/components/M_components/M_Benefits";
import M_DBMS from "@/components/M_components/M_DBMS";
import M_Get_A_Service from "@/components/M_components/M_Get_A_Service";
import M_Intro_Four from "@/components/M_components/M_Intro_Four";
import M_Intro_One from "@/components/M_components/M_Intro_One";
import M_Intro_Two from "@/components/M_components/M_Intro_Two";
import { M_Questions } from "@/components/M_components/M_Questions";
import M_Section_One from "@/components/M_components/M_Section_One";
import M_Section_Three from "@/components/M_components/M_Section_Three";
import M_Section_Two from "@/components/M_components/M_Section_Two";
import M_Slider from "@/components/M_components/M_Slider";
import M_Steps from "@/components/M_components/M_Steps";

export default function Service({ data, domain }) {
  return (
    <div className="flex flex-col lg:gap-28 gap-24 px-3">
      {data?.services_components.M_Intro_One && (
        <M_Intro_One info={data.M_Intro_One} domain={domain} />
      )}
      {data?.services_components.M_Intro_Two && (
        <M_Intro_Two info={data.M_Intro_Two} />
      )}
      {data?.services_components.M_Intro_Four && (
        <M_Intro_Four info={data.M_Intro_Four} domain={domain} />
      )}

      {data?.services_components.M_Section_One && (
        <M_Section_One info={data.M_Section_One} domain={domain} />
      )}

      {data?.services_components.M_DBMS &&
        data?.M_DBMS?.map(
          (info, index) =>
            info.title && <M_DBMS info={info} domain={domain} key={index} />
        )}

      {data?.services_components.M_Slider && (
        <M_Slider info={data.M_Slider} />
      )}

      {data?.services_components.M_Steps &&
        data?.M_Steps?.map((info, index) => (
          <M_Steps info={info} key={index} domain={domain} />
        ))}

      {data?.services_components.M_Benefits && (
        <M_Benefits info={data.M_Benefits} domain={domain} />
      )}

      {data?.services_components.M_Section_Two && (
        <M_Section_Two info={data.M_Section_Two} domain={domain} />
      )}
      {data?.services_components.M_Section_Three && (
        <M_Section_Three info={data.M_Section_Three} domain={domain} />
      )}

      {data?.services_components.M_Questions && (
        <M_Questions {...data.M_Questions} domain={domain} />
      )}

      {data?.services_components.M_Get_A_Service && (
        <M_Get_A_Service info={data.M_Get_A_Service} domain={domain} />
      )}
    </div>
  );
}
