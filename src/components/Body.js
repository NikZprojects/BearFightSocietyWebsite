const Body = () => {
  return (
    <div className="body">
      <i>"Everyone fights the bear differently..."</i>
      <p>
        <a href="https://bear-fight-society.square.site/">bear-fight-society.square.site</a>
      </p>
      <img
        style={{ maxWidth: 550, margin: 10 }}
        alt="Logo"
        src={process.env.PUBLIC_URL + "/assets/BFS_BW.png"}
      />
    </div>
  );
};

export default Body;
