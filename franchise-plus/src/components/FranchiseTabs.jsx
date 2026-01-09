import React, { useState } from "react";
import { franchiseTabsData } from "../data/franchiseTabsData";

const FranchiseTabs = () => {
  const [active, setActive] = useState("Pre-Opening");

  const tabs = franchiseTabsData;
  const activeTab = tabs.find((tab) => tab.title === active);

  return (
    <section className="max-w-full w-full px-4 sm:px-6 lg:px-8 py-20 bg-linear-to-t from-black via-gray-950 to-gray-900 text-white ">
      <div className="max-w-7xl w-full mx-auto">
        {/* Section Heading */}

        <div className="text-center mb-16 uppercase leading-1">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Comprehensive{" "}
            <span className="bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Franchise Support
            </span>
          </h2>
          <span className="text-sm text-zinc-400">
            We don't just give you a franchise – we partner with you for
            long-term success
          </span>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab.title}
              onClick={() => setActive(tab.title)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer
              ${
                active === tab.title
                  ? "bg-linear-to-r from-amber-500 to-amber-600 text-black scale-105 shadow-lg shadow-amber-900/50"
                  : "bg-gray-800/80 text-gray-300 border border-amber-500/30 hover:border-amber-400 hover:bg-gray-700/80 hover:scale-105"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab.cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-800/60 backdrop-blur-sm rounded-lg p-8 overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-700/50"
              >
                {/* TOP BORDER */}
                <span className="absolute top-0 left-1/2 h-0.5 w-0 bg-amber-400 transition-all duration-700 group-hover:left-0 group-hover:w-full" />

                {/* BOTTOM BORDER */}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-amber-400 transition-all duration-700 group-hover:left-0 group-hover:w-full" />

                {/* LEFT BORDER */}
                <span className="absolute left-0 top-1/2 w-0.5 h-0 bg-amber-400 transition-all duration-700 group-hover:top-0 group-hover:h-full" />

                {/* RIGHT BORDER */}
                <span className="absolute right-0 top-1/2 w-0.5 h-0 bg-amber-400 transition-all duration-700 group-hover:top-0 group-hover:h-full" />

                {/* CONTENT */}
                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-amber-500/20 border border-amber-500/40 mb-6 group-hover:bg-amber-500/30 group-hover:scale-110 transition-all duration-300">
                    <Icon className="text-amber-400" size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {card.heading}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">{card.text}</p>
                </div>

                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-amber-500/10 transition-all duration-500 pointer-events-none rounded-lg" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FranchiseTabs;
