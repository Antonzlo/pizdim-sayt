import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import { Star, Award, Flame, ShieldCheck, Zap, Swords, GraduationCap, Info } from "lucide-react";

const data = [
    { name: "Marlowww", points: 405, region: "NA" },
    { name: "ItzRealMe", points: 330, region: "NA" },
    { name: "Swight", points: 260, region: "NA" },
    { name: "coldified", points: 226, region: "EU" },
    { name: "Kylaz", points: 222, region: "EU" },
    { name: "BlvckWlf", points: 206, region: "EU" },
    { name: "Lurrn", points: 186, region: "EU" },
];

const tierDescriptions = [
    { name: "Combat Grandmaster", color: "text-yellow-400", icon: Star, minPoints: 400, description: "Obtained 400+ total points." },
    { name: "Combat Master", color: "text-orange-400", icon: Award, minPoints: 250, description: "Obtained 250+ total points." },
    { name: "Combat Ace", color: "text-pink-400", icon: Flame, minPoints: 100, description: "Obtained 100+ total points." },
    { name: "Combat Specialist", color: "text-purple-400", icon: ShieldCheck, minPoints: 50, description: "Obtained 50+ total points." },
    { name: "Combat Cadet", color: "text-blue-400", icon: Zap, minPoints: 20, description: "Obtained 20+ total points." },
    { name: "Combat Novice", color: "text-indigo-300", icon: Swords, minPoints: 10, description: "Obtained 10+ total points." },
    { name: "Rookie", color: "text-gray-400", icon: GraduationCap, minPoints: 0, description: "Starting rank for players with less than 10 points." },
];

function getTier(points) {
    return tierDescriptions.find((t) => points >= t.minPoints);
}

function Modal({ visible, onClose }) {
    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
                visible ? "bg-black bg-opacity-50 opacity-100" : "opacity-0 pointer-events-none"
            }`}>
            <div
                className={`bg-[#1e1e2f] p-6 rounded-xl max-w-md w-full border border-gray-700 relative transform transition-all duration-300 ${
                    visible ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}>
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-white">
                    ✖
                </button>
                <TierInfoBox />
            </div>
        </div>
    );
}

function TierInfoBox() {
    const [activeTab, setActiveTab] = useState("Titles");
    return (
        <div>
            <div className="flex mb-4">
                <button onClick={() => setActiveTab("Titles")} className={`flex-1 py-2 ${activeTab === "Titles" ? "bg-[#2a2a40] text-white" : "bg-[#161625] text-gray-400"}`}>
                    Titles
                </button>
                <button onClick={() => setActiveTab("Points")} className={`flex-1 py-2 ${activeTab === "Points" ? "bg-[#2a2a40] text-white" : "bg-[#161625] text-gray-400"}`}>
                    Points
                </button>
            </div>
            <div className="text-sm text-gray-300">
                {activeTab === "Titles" && (
                    <>
                        <h3 className="font-semibold text-white mb-3">
                            How to obtain <span className="underline">Achievement Titles</span>
                        </h3>
                        <ul className="space-y-2">
                            {tierDescriptions.map((tier, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <tier.icon size={16} className={tier.color} />
                                    <span className={`font-bold ${tier.color}`}>{tier.name}</span> — {tier.description}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                {activeTab === "Points" && <p className="text-gray-400">Point system explanation coming soon...</p>}
            </div>
        </div>
    );
}

function Table({ onInfoClick }) {
    const [sortKey, setSortKey] = useState("points");
    const [sortAsc, setSortAsc] = useState(false);
    const [search, setSearch] = useState("");

    const filtered = data.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

    const sortedData = [...filtered].sort((a, b) => {
        const valA = a[sortKey];
        const valB = b[sortKey];
        return sortAsc ? valA - valB : valB - valA;
    });

    const handleSort = (key) => {
        if (sortKey === key) setSortAsc(!sortAsc);
        else {
            setSortKey(key);
            setSortAsc(true);
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-[#1e1e2f] rounded-xl overflow-hidden shadow-lg">
                <div className="px-6 py-4 border-b border-gray-700 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <h2 className="text-lg font-semibold text-white">Player Rankings</h2>
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search player..."
                            className="bg-[#1e1e2f] border border-gray-600 px-3 py-1 rounded text-sm text-white placeholder-gray-400"
                        />
                        <button onClick={onInfoClick} className="flex items-center gap-1 text-sm text-gray-300 hover:text-white">
                            <Info size={16} /> Information
                        </button>
                    </div>
                </div>
                <table className="w-full text-sm text-left text-gray-300">
                    <thead className="text-xs uppercase bg-[#2a2a40] text-gray-400">
                        <tr>
                            <th className="px-6 py-3">#</th>
                            <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort("name")}>
                                Player
                            </th>
                            <th className="px-6 py-3">Tier</th>
                            <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort("points")}>
                                Points {sortKey === "points" ? (sortAsc ? "↑" : "↓") : ""}
                            </th>
                            <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort("region")}>
                                Region
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((p, i) => {
                            const tier = getTier(p.points);
                            return (
                                <tr key={i} className="bg-[#26263d] border-b border-gray-700 hover:bg-[#2f2f48]">
                                    <td className="px-6 py-3 font-bold text-yellow-400">{i + 1}.</td>
                                    <td className="px-6 py-3 font-semibold text-white">{p.name}</td>
                                    <td className={`px-6 py-3 flex items-center gap-1 ${tier.color}`}>
                                        <tier.icon size={16} /> {tier.name}
                                    </td>
                                    <td className="px-6 py-3 text-green-400">{p.points}</td>
                                    <td className="px-6 py-3">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${p.region === "NA" ? "bg-red-500" : "bg-green-600"}`}>{p.region}</span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function Navigation() {
    const tabs = ["Overall", "LTMs", "Vanilla", "UHC", "Pot", "NethOP", "SMP", "Sword", "Axe", "Mace"];
    return (
        <div className="flex overflow-x-auto gap-4 mt-6 px-6">
            {tabs.map((tab, i) => (
                <div key={i} className="text-white whitespace-nowrap px-4 py-2 rounded-full bg-[#2a2a40] hover:bg-[#3a3a50] cursor-pointer">
                    {tab}
                </div>
            ))}
        </div>
    );
}

function Header() {
    return (
        <header className="bg-[#161625] py-4 shadow-md">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                <div className="text-yellow-400 font-bold text-xl">MCTIERS</div>
                <nav className="flex items-center gap-6 text-gray-300">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "text-white font-bold" : "")}>
                        Rankings
                    </NavLink>
                    <a href="#" className="hover:text-white">
                        Discords
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Router>
            <div className="min-h-screen bg-[#10101a] text-white">
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Navigation />
                                <Table onInfoClick={() => setModalVisible(true)} />
                                <Modal visible={modalVisible} onClose={() => setModalVisible(false)} />
                            </>
                        }
                    />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
}
