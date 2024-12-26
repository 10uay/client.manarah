import M_Benefits from "@/components/M_components/M_Benefits";
import M_DBMS from "@/components/M_components/M_DBMS";
import M_Intro_One from "@/components/M_components/M_Intro_One";
import M_Steps from "@/components/M_components/M_Steps";
import M_Work_With from "@/components/M_components/M_Work_With";
import M_Get_A_Service from "@/components/M_components/M_Get_A_Service";
import M_Intro_Three from "@/components/M_components/M_Intro_Three";
// import M_Slider_Images from "@/components/M_components/M_Slider_Images";
import M_Slider from "@/components/M_components/M_Slider";
import M_Section_One from "@/components/M_components/M_Section_One";
import M_Intro_Four from "@/components/M_components/M_Intro_Four";
import M_Intro_Five from "@/components/M_components/M_Intro_Five";
import M_Game from "@/components/M_components/M_Game";
import M_Section_Two from "@/components/M_components/M_Section_Two";

export default function Solutions({ data, domain }) {
  console.log(data.M_Section_Two);
  return (
    <div className="flex flex-col lg:gap-36 gap-24">
      {data.solutions_components.M_Intro_One && (
        <M_Intro_One info={data.M_Intro_One} domain={domain} />
      )}

      {data.solutions_components.M_Intro_Three && (
        <M_Intro_Three info={data.M_Intro_Three} domain={domain} />
      )}

      {data.solutions_components.M_Intro_Four && (
        <M_Intro_Four info={data.M_Intro_Four} domain={domain} />
      )}

      {data.solutions_components.M_Intro_Five && (
        <M_Intro_Five info={data.M_Intro_Five} domain={domain} />
      )}

      {data.solutions_components.M_Steps &&
        data.M_Steps.map((info, index) => (
          <M_Steps info={info} key={index} domain={domain} />
        ))}

      {data.solutions_components.M_Work_With && <M_Work_With />}

      {data.solutions_components.M_Benefits && (
        <M_Benefits info={data.M_Benefits} domain={domain} />
      )}

      {/* {data.solutions_components.M_Additional_Section && (
        <M_Additional_Section info={data.additional_section} />
      )} */}

      {data.solutions_components.M_DBMS &&
        data.M_DBMS.map((info, index) => (
          <M_DBMS info={info} domain={domain} key={index} />
        ))}

      {data.solutions_components.M_Section_One && (
        <M_Section_One info={data.M_Section_One} domain={domain} />
      )}

      {data.solutions_components.M_Section_Two &&
        data.M_Section_Two.map((info, index) => (
          <M_Section_Two info={info} domain={domain} key={index} />
        ))}

      {data.solutions_components.M_Game && (
        <M_Game info={data.M_Game} domain={domain} />
      )}

      {data.solutions_components.M_Slider && <M_Slider info={data.M_Slider} />}

      {/* {data.solutions_components.M_Slider_Images && (
        <M_Slider_Images info={data.M_Slider_Images} domain={domain} />
      )} */}

      {data.solutions_components.M_Get_A_Service && (
        <M_Get_A_Service info={data.M_Get_A_Service} domain={domain} />
      )}
    </div>
  );
}
