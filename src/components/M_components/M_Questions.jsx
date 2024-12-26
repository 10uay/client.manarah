import { useTranslation } from "@/utils/Imports";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BoxReveal from "@/components/magicui/box-reveal";

export const M_Questions = (props, ...questionsDefaults) => {
  const { t } = useTranslation();
  const { title, questions } = {
    ...questionsDefaults,
    ...props,
  };
  return (
    <div className="container mx-auto overflow-x-hidden">
      <div className="mb-10 md:mb-10 lg:mb-10">
        <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
          <h2 className="text-3xl lg:text-4xl max-w-[500px] mb-7 text-black font-bold capitalize">
            {t(title)}
          </h2>
        </BoxReveal>
      </div>
      <Accordion type="multiple" className="px-2 lg:px-5">
        {questions?.map((question, index) =>
          question.title ? (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="text-lg font-bold text-black border-b-[1px] w-full text-start mb-8"
            >
              <AccordionTrigger className="text-lg text-start font-bold text-black w-full pb-4 pt-0">
                {t(question.title)}
              </AccordionTrigger>
              <AccordionContent className="text-start pb-3 text-[16px] font-normal leading-6">
                {t(question.answer)}
              </AccordionContent>
            </AccordionItem>
          ) : null
        )}
      </Accordion>
    </div>
  );
};

M_Questions.displayName = "M_Questions";
