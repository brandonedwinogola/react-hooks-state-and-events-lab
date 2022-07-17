import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";






  const darkMode = useDarkMode();
  const [theme, setTheme] = React.useState(darkTheme);
  React.useEffect(() => {
    setTheme(darkMode?.value ? darkTheme : lightTheme);
  }, [darkMode.value]);



function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = false ? "App dark" : "App light"

  
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button className="btn-theme" type="button" onClick={darkMode.toggle}> {theme === "dark-mode" ? "Light-mode" : "Dark-mode" }Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
