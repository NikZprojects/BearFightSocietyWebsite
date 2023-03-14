const Body = () => {
  return (
    <div className="body">
      <i>"Everyone fights the bear differently..."<br>bear-fight-society.square.site</i>
      <img
        style={{ maxWidth: 550, margin: 10 }}
        alt="Logo"
        src={process.env.PUBLIC_URL + "/assets/BFS_BW.png"}
      />
    </div>
  );
};

export default Body;
