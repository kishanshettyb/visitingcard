import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row overflow-scroll">
      <div className="lg:basis-1/4 "></div>
      <div className="lg:basis-1/2">
        <div className="border border-slate-50 p-4 rounded-lg bg-white shadow-2xl m-10 shadow-orange-200">
          <Image
            src="/kavya.jpg"
            width={1000}
            height={1000}
            className="rounded-lg w-full h-[300px] object-cover"
            alt="Kavya Yadav"
          />
          <div className="border border-slate-200 my-2 rounded-lg">
            <div className="flex flex-col text-center justify-center items-centerw-full gap-x-2 p-2 border border-x-0 border-t-0">
              <div className="font-bold opacity-80 text-lg">Kavya Yadav</div>
              <div className="font-semibold text-md opacity-70 italic">
                I And You Being Together Foundation
              </div>
              <div className="font-semibold opacity-60 text-xs">
                Designation
              </div>
            </div>

            <div className="flex w-full gap-x-2 p-2 border border-x-0 border-t-0">
              <div className="font-semibold opacity-50">Contact:</div>
              <div className="font-semibold opacity-80">+91 9900022506</div>
            </div>
            <div className="flex w-full gap-x-2 p-2 border border-x-0 border-t-0">
              <div className="font-semibold opacity-50">Email:</div>
              <div className="font-semibold opacity-80">
                iandukavya@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="mx-10">
          <ContactForm />
        </div>
      </div>
      <div className="lg:basis-1/4"></div>
    </div>
  );
}
