import { createRoot } from "react-dom/client";
// import GuestList from "./state/GuestList";
import UserSearch from "./refs/UserSearch";
// import EventComponent from "./events/EventComponent";

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};
const container = document.querySelector("#root");
const root = createRoot(container!);
root.render(<App />);
