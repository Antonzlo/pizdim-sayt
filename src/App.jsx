import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { Info, ShieldCheck, Flame, Zap, Award, Star, GraduationCap, Swords } from "lucide-react";
import { BASE_URL } from "./config.js";

const data = [
    { name: "Marlowww", points: 405, region: "NA" },
    { name: "ItzRealMe", points: 330, region: "NA" },
    { name: "Swight", points: 260, region: "NA" },
    { name: "coldified", points: 556, region: "EU" },
    { name: "Kylaz", points: 222, region: "EU" },
    { name: "BlvckWlf", points: 206, region: "EU" },
    { name: "Lurrn", points: 186, region: "EU" },
    { name: "xNestorio", points: 487, region: "NA" },
    { name: "TapL", points: 455, region: "NA" },
    { name: "Fruit", points: 398, region: "NA" },
    { name: "Preston", points: 376, region: "NA" },
    { name: "Vikkstar123", points: 298, region: "EU" },
    { name: "LachlanYT", points: 287, region: "OCE" },
    { name: "JeromeASF", points: 265, region: "NA" },
    { name: "BajanCanadian", points: 243, region: "NA" },
    { name: "xBayani", points: 198, region: "NA" },
    { name: "Graser10", points: 175, region: "NA" },
    { name: "HuskyMudkipz", points: 156, region: "NA" },
    { name: "Straub", points: 134, region: "EU" },
    { name: "xRpMx13", points: 112, region: "EU" },
    { name: "NoahCraftFTW", points: 98, region: "NA" },
    { name: "Dolphin", points: 87, region: "EU" },
    { name: "Tybzi", points: 76, region: "EU" },
    { name: "Purpled", points: 65, region: "NA" },
    { name: "GeorgeNotFound", points: 54, region: "EU" },
    { name: "Sapnap", points: 43, region: "NA" },
    { name: "BadBoyHalo", points: 32, region: "NA" },
    { name: "Skeppy", points: 21, region: "NA" },
    { name: "A6d", points: 15, region: "EU" },
    { name: "Spifey", points: 8, region: "OCE" },
];

const categoryData = {
    "Overall": data,
    "LTMs": [
        { name: "Dream", points: 612, region: "NA" },
        { name: "Technoblade", points: 589, region: "NA" },
        { name: "Quackity", points: 456, region: "NA" },
        { name: "Wilbur", points: 387, region: "EU" },
        { name: "Tommy", points: 298, region: "EU" },
        { name: "Tubbo", points: 276, region: "EU" },
        { name: "Ranboo", points: 234, region: "NA" },
        { name: "Philza", points: 198, region: "EU" },
        { name: "Fundy", points: 167, region: "EU" },
        { name: "Niki", points: 134, region: "EU" },
    ],
    "Vanilla": [
        { name: "Illumina", points: 534, region: "NA" },
        { name: "PeteZahHutt", points: 487, region: "NA" },
        { name: "Fruitberries", points: 445, region: "EU" },
        { name: "Sapnap", points: 398, region: "NA" },
        { name: "Punz", points: 356, region: "NA" },
        { name: "Antfrost", points: 289, region: "NA" },
        { name: "5up", points: 234, region: "NA" },
        { name: "CaptainSparklez", points: 198, region: "NA" },
        { name: "Seapeekay", points: 167, region: "EU" },
        { name: "Wisp", points: 145, region: "NA" },
    ],
    "UHC": [
        { name: "Verzide", points: 623, region: "EU" },
        { name: "Huahwi", points: 578, region: "NA" },
        { name: "Graser10", points: 456, region: "NA" },
        { name: "Straub", points: 398, region: "EU" },
        { name: "Grape", points: 334, region: "NA" },
        { name: "Kiingtong", points: 287, region: "NA" },
        { name: "Tofuu", points: 234, region: "NA" },
        { name: "TheCampingRusher", points: 198, region: "NA" },
        { name: "Preston", points: 167, region: "NA" },
        { name: "Lachlan", points: 134, region: "OCE" },
    ],
    "Pot": [
        { name: "StimpyPvP", points: 634, region: "NA" },
        { name: "Verzide", points: 589, region: "EU" },
        { name: "Danteh", points: 456, region: "NA" },
        { name: "Cayden", points: 398, region: "NA" },
        { name: "Tylarzz", points: 334, region: "NA" },
        { name: "AlonsoAG", points: 287, region: "EU" },
        { name: "Rhynez", points: 234, region: "EU" },
        { name: "xfarganx", points: 198, region: "EU" },
        { name: "Sweatgod", points: 167, region: "NA" },
        { name: "Rejects", points: 134, region: "NA" },
    ],
    "NethOP": [
        { name: "xNestorio", points: 598, region: "NA" },
        { name: "Huahwi", points: 534, region: "NA" },
        { name: "Danteh", points: 456, region: "NA" },
        { name: "Graser10", points: 398, region: "NA" },
        { name: "ComboDombo", points: 334, region: "NA" },
        { name: "Kiingtong", points: 287, region: "NA" },
        { name: "Straub", points: 234, region: "EU" },
        { name: "Grape", points: 198, region: "NA" },
        { name: "Tofuu", points: 167, region: "NA" },
        { name: "Preston", points: 134, region: "NA" },
    ],
    "SMP": [
        { name: "Philza", points: 645, region: "EU" },
        { name: "Technoblade", points: 598, region: "NA" },
        { name: "Dream", points: 534, region: "NA" },
        { name: "Wilbur", points: 456, region: "EU" },
        { name: "Tommy", points: 398, region: "EU" },
        { name: "Tubbo", points: 334, region: "EU" },
        { name: "Ranboo", points: 287, region: "NA" },
        { name: "Fundy", points: 234, region: "EU" },
        { name: "Niki", points: 198, region: "EU" },
        { name: "BadBoyHalo", points: 167, region: "NA" },
    ],
    "Sword": [
        { name: "Verzide", points: 612, region: "EU" },
        { name: "StimpyPvP", points: 567, region: "NA" },
        { name: "Huahwi", points: 456, region: "NA" },
        { name: "Danteh", points: 398, region: "NA" },
        { name: "Cayden", points: 334, region: "NA" },
        { name: "Tylarzz", points: 287, region: "NA" },
        { name: "AlonsoAG", points: 234, region: "EU" },
        { name: "Rhynez", points: 198, region: "EU" },
        { name: "xfarganx", points: 167, region: "EU" },
        { name: "Sweatgod", points: 134, region: "NA" },
    ],
    "Axe": [
        { name: "Technoblade", points: 634, region: "NA" },
        { name: "Dream", points: 578, region: "NA" },
        { name: "Illumina", points: 456, region: "NA" },
        { name: "Fruitberries", points: 398, region: "EU" },
        { name: "PeteZahHutt", points: 334, region: "NA" },
        { name: "Punz", points: 287, region: "NA" },
        { name: "Sapnap", points: 234, region: "NA" },
        { name: "Antfrost", points: 198, region: "NA" },
        { name: "5up", points: 167, region: "NA" },
        { name: "Seapeekay", points: 134, region: "EU" },
    ],
    "Mace": [
        { name: "Kylaz", points: 645, region: "EU" },
        { name: "coldified", points: 589, region: "EU" },
        { name: "BlvckWlf", points: 456, region: "EU" },
        { name: "Lurrn", points: 398, region: "EU" },
        { name: "Marlowww", points: 334, region: "NA" },
        { name: "ItzRealMe", points: 287, region: "NA" },
        { name: "Swight", points: 234, region: "NA" },
        { name: "xNestorio", points: 198, region: "NA" },
        { name: "TapL", points: 167, region: "NA" },
        { name: "Fruit", points: 134, region: "NA" },
    ]
};

function PlayerAvatar({ playerName, size = "w-6 h-6" }) {
    const [imageError, setImageError] = useState(false);
    
    if (imageError) {
        return (
            <div className={`${size} rounded-full bg-gray-500 text-white flex items-center justify-center text-xs font-bold`}>
                {playerName.charAt(0).toUpperCase()}
            </div>
        );
    }
    
    return (
        <img
            src={`https://mctiers.com/avatars/${playerName.toLowerCase()}.png`}
            alt="avatar"
            className={`${size} rounded-full`}
            onError={() => setImageError(true)}
        />
    );
}

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

function getRegionColor(region) {
    switch (region) {
        case "NA": return "bg-red-500";
        case "EU": return "bg-green-600";
        case "OCE": return "bg-blue-500";
        default: return "bg-gray-500";
    }
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
                            {tierDescriptions.map((tier) => (
                                <li key={tier.name} className="flex items-center gap-2">
                                    <tier.icon size={16} className={tier.color} />
                                    <span className={`font-bold ${tier.color}`}>{tier.name}</span> — {tier.description}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                {activeTab === "Points" && (
                    <div>
                        <h3 className="font-semibold text-white mb-3">
                            How <span className="underline">Points</span> are calculated
                        </h3>
                        <div className="space-y-3 text-sm">
                            <div>
                                <h4 className="font-semibold text-white mb-1">Win/Loss Points:</h4>
                                <ul className="text-gray-300 space-y-1 ml-4">
                                    <li>• Win: +10 points</li>
                                    <li>• Loss: -5 points</li>
                                    <li>• Draw: +2 points</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-1">Performance Bonuses:</h4>
                                <ul className="text-gray-300 space-y-1 ml-4">
                                    <li>• First Kill: +3 points</li>
                                    <li>• Most Kills: +5 points</li>
                                    <li>• Clutch Win: +7 points</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-1">Special Events:</h4>
                                <ul className="text-gray-300 space-y-1 ml-4">
                                    <li>• Tournament Win: +50 points</li>
                                    <li>• Event Participation: +5 points</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function TopThreeCards({ players }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {players.map((player, index) => {
                const tier = getTier(player.points);
                const colors = ["bg-gradient-to-r from-yellow-400 to-yellow-600", "bg-gradient-to-r from-blue-400 to-blue-600", "bg-gradient-to-r from-orange-400 to-orange-600"];
                const shadows = ["shadow-yellow-500/50", "shadow-blue-500/50", "shadow-orange-500/50"];

                return (
                    <div key={player.name} className={`relative p-4 rounded-xl text-white ${colors[index]} ${shadows[index]} shadow-lg flex flex-col items-center`}>
                        <div className="absolute top-2 left-2 text-4xl font-bold opacity-50">{index + 1}</div>
                        <div className="border-4 border-white rounded-full mb-2">
                            <PlayerAvatar playerName={player.name} size="w-16 h-16" />
                        </div>
                        <div className="text-lg font-bold">{player.name}</div>
                        <div className={`text-sm ${tier.color} flex items-center gap-1 mt-1`}>
                            <tier.icon size={16} /> {tier.name}
                        </div>
                        <div className="text-sm text-gray-200 mt-1">{player.points} points</div>
                    </div>
                );
            })}
        </div>
    );
}

function Table({ onInfoClick, activeCategory }) {
    const [sortKey, setSortKey] = useState("points");
    const [sortAsc, setSortAsc] = useState(false);
    const [search, setSearch] = useState("");

    const currentData = categoryData[activeCategory] || data;

    const sortedData = useMemo(() => {
        const filtered = currentData.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

        return [...filtered].sort((a, b) => {
            const valA = a[sortKey];
            const valB = b[sortKey];
            if (sortKey === "region") {
                return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
            }
            return sortAsc ? valA - valB : valB - valA;
        });
    }, [search, sortKey, sortAsc, currentData]);

    const topThreePlayers = useMemo(() => {
        return [...currentData].sort((a, b) => b.points - a.points).slice(0, 3);
    }, [currentData]);

    const handleSort = (key) => {
        if (sortKey === key) {
            setSortAsc(!sortAsc);
        } else {
            setSortKey(key);
            setSortAsc(true);
        }
    };

    const renderSortIndicator = (key) => {
        if (sortKey === key) {
            return sortAsc ? "↑" : "↓";
        }
        return "";
    };

    return (
        <div className="max-w-6xl mx-auto mt-6">
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
                <TopThreeCards players={topThreePlayers} />
                <table className="w-full text-sm text-left text-gray-300">
                    <thead className="text-xs uppercase bg-[#2a2a40] text-gray-400">
                        <tr>
                            <th className="px-4 py-2 text-left">#</th>
                            <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort("name")}>
                                Player {renderSortIndicator("name")}
                            </th>
                            <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort("points")}>
                                Points {renderSortIndicator("points")}
                            </th>
                            <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort("region")}>
                                Region {renderSortIndicator("region")}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((p) => {
                            const tier = getTier(p.points);
                            return (
                                <tr key={p.name} className="bg-[#26263d] border-b border-gray-700 hover:bg-[#2f2f48]">
                                    <td className="px-4 py-2 font-bold text-yellow-400">{sortedData.indexOf(p) + 1}.</td>
                                    <td className="px-4 py-2 font-semibold text-white flex items-center gap-2">
                                        <PlayerAvatar playerName={p.name} />
                                        {p.name}
                                    </td>
                                    <td className={`px-4 py-2 flex items-center gap-1 ${tier.color}`}>
                                        <tier.icon size={14} /> {tier.name}
                                    </td>
                                    <td className="px-4 py-2 text-green-400">{p.points}</td>
                                    <td className="px-4 py-2">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${getRegionColor(p.region)}`}>{p.region}</span>
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

function Navigation({ activeCategory, setActiveCategory }) {
    const tabs = [
        { name: "Overall", icon: "🏆" },
        { name: "LTMs", icon: "⚔️" },
        { name: "Vanilla", icon: "🔮" },
        { name: "UHC", icon: "❤️" },
        { name: "Pot", icon: "🧪" },
        { name: "NethOP", icon: "👾" },
        { name: "SMP", icon: "🌍" },
        { name: "Sword", icon: "🗡️" },
        { name: "Axe", icon: "🪓" },
        { name: "Mace", icon: "🔨" },
    ];

    return (
        <div className="flex overflow-x-auto hide-scrollbar gap-2 mt-4 px-4">
            {tabs.map((tab) => (
                <button 
                    key={tab.name} 
                    onClick={() => setActiveCategory(tab.name)}
                    className={`text-white whitespace-nowrap px-3 py-1 rounded-full cursor-pointer flex items-center gap-1 text-sm transition-colors ${
                        activeCategory === tab.name 
                            ? "bg-yellow-400 text-black font-bold" 
                            : "bg-[#2a2a40] hover:bg-[#3a3a50]"
                    }`}
                >
                    <span>{tab.icon}</span>
                    {tab.name}
                </button>
            ))}
        </div>
    );
}

function Header() {
    return (
        <header className="bg-[#161625] py-4 shadow-md">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                <NavLink to="/" className="text-yellow-400 font-bold text-xl hover:text-yellow-300 transition-colors">
                    MCTIERS
                </NavLink>
                <nav className="flex items-center gap-6 text-gray-300">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "text-white font-bold" : "")}>
                        Rankings
                    </NavLink>
                    <a 
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        Discord
                    </a>
                </nav>
            </div>
        </header>
    );
}

function Footer() {
    return (
        <footer className="bg-[#161625] py-6 mt-12 border-t border-gray-700">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-gray-400 text-sm">
                    © 2025 <span className="text-yellow-400 font-semibold">Zhuchokz</span>, <span className="text-yellow-400 font-semibold">Babahis Studios</span> & <span className="text-yellow-400 font-semibold">Strawberry Corporation</span>. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState("Overall");

    return (
        <Router basename={BASE_URL}>
            <div className="min-h-screen bg-[#10101a] text-white">
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Navigation activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                                <Table onInfoClick={() => setModalVisible(true)} activeCategory={activeCategory} />
                                <Modal visible={modalVisible} onClose={() => setModalVisible(false)} />
                            </>
                        }
                    />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
