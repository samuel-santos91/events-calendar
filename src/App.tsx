import "./App.css";
import Calendar from "./containers/Calendar";
import CalendarContextProvider from "./context/CalendarContextProvider";

function App() {
  return (
    <>
      <CalendarContextProvider>
        <Calendar />
      </CalendarContextProvider>
    </>
  );
}

export default App;
