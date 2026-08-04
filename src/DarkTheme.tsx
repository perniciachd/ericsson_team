function DarkTheme(){
  const darkClick = () => {
    console.log("dark theme called");
  };

  return (
    <button onClick={darkClick}>Dark</button>
  );
};

export default DarkTheme;