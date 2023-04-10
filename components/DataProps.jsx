const DataProps = [
    {
      rank: 1,
      team: 'Sydney Sirens',
      pointsFromLastRound: 30,
      nextGameVs: 'Melbourne Dodgers',
      totalPoints: 110
    },
    {
      rank: 2,
      team: 'Melbourne Dodgers',
      pointsFromLastRound: 20,
      nextGameVs: 'Sydney Sirens',
      totalPoints: 98
    },

];
  
  function App() {
    return (
      <div>
        <Leaderboard data={DataProps} />
      </div>
    );
  }
  