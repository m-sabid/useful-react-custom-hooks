import { useLocalStorage } from "../hooks/useLocalStorage";

const style = {
  padding: "10px",
  letterSpacing: "0.05em",
  width: "80%",
};
const LocalStoragePage = () => {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <>
      <h1 style={{ marginTop: "10px", textDecoration: "underline" }}>
        useLocalStorage()
      </h1>{" "}
      <br />
      <input
        style={style}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <br />
      <br />
      <h5 style={{ color: "green" }}>
        Write something inside the input field and reload the page. Wow! The
        writings still remain, right?
      </h5>
      <p>
        for this functionality just use
        <span style={{ backgroundColor: "#F3F4F4", color: "gray" }}>
          useLocalStorage()
        </span>
      </p>
      <br />
      <a href="https://github.com/m-sabid/useful-react-custom-hooks">Source Code</a>
    </>
  );
};

export default LocalStoragePage;
