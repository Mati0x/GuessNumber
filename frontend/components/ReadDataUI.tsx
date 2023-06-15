import { useIsMounted } from "../hooks/useIsMounted";
export const ReadDataUI = ({ stats }) => {
  const isMounted = useIsMounted();

  return (
    <div className="mx-auto max-w-7xl ">
      <div className="flex flex-col space-y-3">
        {isMounted &&
          stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 sm:px-6 lg:px-8  rounded-lg hover:shadow-lg hover:border-2 cursor-pointer transition-all ease-in-out"
            >
              <p className="text-2xl font-thin leading-6 text-black">
                {stat.name}
              </p>
              <p className="mt-2 flex justify-between  items-baseline gap-x-2 ">
                <span className="text-4xl font-medium font-mono tracking-tight text-white ">
                  {stat.value}
                </span>
                {stat.symbol ? (
                  <span className="text-sm text-gray-700 font-mono">
                    {stat.symbol}
                  </span>
                ) : null}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};
