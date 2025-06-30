import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LeagueTable = ({ leagueName, apiUrl }) => {
    const apiKey = import.meta.env.VITE_FOOTBALL_API_KEY;
    const [loading, setLoading] = useState(true);
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // استفاده از پراکسی برای رفع مشکل CORS
                const response = await axios.get(`https://thingproxy.freeboard.io/fetch/${apiUrl}`, {
                    headers: { 'X-Auth-Token': apiKey },
                });

                const standings = response.data.standings[0].table;
                const formattedClubs = standings.map((team) => ({
                    name: team.team.name,
                    logo: team.team.crest,
                    played: team.playedGames,
                    won: team.won,
                    drawn: team.draw,
                    lost: team.lost,
                    goalsFor: team.goalsFor,
                    goalsAgainst: team.goalsAgainst,
                    points: team.points,
                    goalDifference: team.goalDifference,
                }));

                setClubs(formattedClubs);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [apiUrl]);

    return (
        <div className="bg-[#262626]/10 p-2 sm:p-3 md:p-4 rounded-lg h-full overflow-y-auto w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-xl sm:text-2xl md:text-3xl text-[#262626] leading-tight sm:leading-normal md:leading-[38px] mb-2 sm:mb-3 md:mb-4">
                {leagueName}
            </h4>

            {loading ? (
                <div className="flex justify-center items-center h-[200px]">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#262626]"></div>
                </div>
            ) : (
                <table className="w-full">
                    <thead>
                        <tr className="text-left border-b border-[#262626]/20">
                            <th className="py-1 sm:py-2 text-xs sm:text-sm">#</th>
                            <th className="py-1 sm:py-2 text-xs sm:text-sm">Club</th>
                            <th className="py-1 sm:py-2 text-center text-xs sm:text-sm">Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clubs.map((club, index) => (
                            <tr key={index} className="border-b border-[#262626]/10">
                                <td className="py-1 sm:py-2 text-center text-xs sm:text-sm">{index + 1}</td>
                                <td className="py-1 sm:py-2 text-xs sm:text-sm flex items-center gap-1 sm:gap-2 truncate">
                                    {club.logo && (
                                        <img
                                            src={club.logo}
                                            alt={club.name}
                                            className="w-4 h-4 sm:w-6 sm:h-6 rounded-lg"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    )}
                                    <span className="truncate">{club.name}</span>
                                </td>
                                <td className="py-1 sm:py-2 text-center text-xs sm:text-sm font-semibold">{club.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

const NewsAndRankingSection = () => {
    return (
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 my-8 sm:my-12 md:my-16 lg:my-20 xl:my-32">
            <h4 className="text-2xl sm:text-3xl md:text-4xl text-[#262626] mb-3 sm:mb-4 md:mb-5">
                Club Ranking
            </h4>

            <div className="flex flex-col md:flex-row justify-between gap-3 sm:gap-4 h-auto md:h-[300px]">
                <LeagueTable
                    leagueName="Premier League"
                    apiUrl="https://api.football-data.org/v4/competitions/PL/standings"
                />
                <LeagueTable
                    leagueName="Serie A"
                    apiUrl="https://api.football-data.org/v4/competitions/SA/standings"
                />
                <LeagueTable
                    leagueName="La Liga"
                    apiUrl="https://api.football-data.org/v4/competitions/PD/standings"
                />
            </div>
        </div>
    );
};

export default NewsAndRankingSection;
