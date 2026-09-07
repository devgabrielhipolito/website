import { SideBar } from "@/src/components/system/sidebar";

export const System = () => {
  return (
    <div className="xl:w-180 w-full h-160.5 bg-amber-950-300 border-primary rounded-[30px] flex flex-col  border ">
      <div className="w-full h-18.25 p-10 flex items-center  border-primary border-b">
        <div className="flex gap-5">
          <div className="w-4 h-4 bg-red-800 rounded-full" />
          <div className="w-4 h-4 bg-amber-300 rounded-full" />
          <div className="w-4 h-4 bg-green-400 rounded-full" />
        </div>
      </div>
      <div className="h-full">
        <SideBar />
      </div>
    </div>
  );
};
