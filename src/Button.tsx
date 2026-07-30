function Button() {
  const myFunction = () => {
    alert("Button clicked!");
  };

  return (
    <button onClick={myFunction}>
      Click Here
    </button>
  );
}

export default Button;