export function HeroFirst() {
  const stats = [
    { number: "5,96,61,832", label: "MyGov Sa", note: "" },
    { number: "18.14+", label: "Submissions in Tasks", note: "Lakh" },
    { number: "55.94+", label: "Comments in Discussions", note: "Lakh" },
    { number: "39.07+", label: "Votes in Polls", note: "Lakh" },
    { number: "307.26+", label: "Participation in Quiz", note: "Lakh" },
    { number: "254.25+", label: "Pledges Taken", note: "Lakh" },
  ];

  return (
    <div className="bg-white border-t py-6 px-4 flex flex-col items-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              {item.number}
              {item.note && (
                <span className="text-base font-normal text-gray-600 ml-1">
                  {item.note}
                </span>
              )}
            </h2>
            <p className="text-sm text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>

      {/* WhatsApp Join Button */}
      <div className="mt-6 flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-6 h-6"
        />
        <p className="text-green-700 font-medium">
          JOIN <span className="text-sky-600 font-semibold">MyGov</span> ON WhatsApp
        </p>
      </div>
    </div>
  );
}
