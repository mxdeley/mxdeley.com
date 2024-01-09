export default function Timeline() {
  return (
    <div className="p-8">
      <div className="flex flex-col items-center">
        <div className="text-stone-50 text-2xl font-bold mb-8">Timeline</div>
        <div className="flex flex-col items-center relative">
          <div className="absolute h-full border-l-2 border-fuchsia-700" />
          {/* One */}
          <div className="flex flex-row justify-between w-full mb-10">
            <div className="w-1/2 pr-4">
              <div className="bg-stone-900 p-4 rounded-md shadow-md text-right">
                <div className="text-fuchsia-700 text-sm mb-2">1999</div>
                <div className="text-white font-semibold text-lg mb-2">
                  Born at Derby Hospital
                </div>
                <p className="text-stone-300 text-sm">
                  Started my journey in the world of technology at XYZ
                  University, pursuing a degree in Computer Science.
                </p>
              </div>
            </div>
            <div className="w-1/2 pl-4" />
          </div>
          {/* Two */}
          <div className="flex flex-row justify-between w-full mb-10">
            <div className="w-1/2 pr-4" />
            <div className="w-1/2 pl-4">
              <div className="bg-stone-900 p-4 rounded-md shadow-md">
                <div className="text-fuchsia-700 text-sm mb-2">2004</div>
                <div className="text-stone-50 font-semibold text-lg mb-2">
                  Joined Primary School
                </div>
                <p className="text-stone-300 text-sm">
                  Completed a summer internship at ABC Corporation, where I
                  worked on web development projects.
                </p>
              </div>
            </div>
          </div>
          {/* Three */}
          <div className="flex flex-row justify-between w-full mb-10">
            <div className="w-1/2 pr-4">
              <div className="bg-stone-900 p-4 rounded-md shadow-md text-right">
                <div className="text-fuchsia-700 text-sm mb-2">2011</div>
                <div className="text-white font-semibold text-lg mb-2">
                  Joined Secondary School
                </div>
                <p className="text-stone-300 text-sm">
                  Started my journey in the world of technology at XYZ
                  University, pursuing a degree in Computer Science.
                </p>
              </div>
            </div>
            <div className="w-1/2 pl-4" />
          </div>
          {/* Four */}
          <div className="flex flex-row justify-between w-full mb-10">
            <div className="w-1/2 pr-4" />
            <div className="w-1/2 pl-4">
              <div className="bg-stone-900 p-4 rounded-md shadow-md">
                <div className="text-fuchsia-700 text-sm mb-2">2016</div>
                <div className="text-stone-50 font-semibold text-lg mb-2">
                  First Internship
                </div>
                <p className="text-stone-300 text-sm">
                  Completed a summer internship at ABC Corporation, where I
                  worked on web development projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
