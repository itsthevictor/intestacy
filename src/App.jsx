import StepsContextProvider from "./contexts/StepsContext";
import Form from "./components/Form";

const App = () => {
  return (
    <StepsContextProvider>
      <Form />
    </StepsContextProvider>
  );
};

export default App;
