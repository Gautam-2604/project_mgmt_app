import Header from "./components/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Clients from "./components/Clients";

const client= new ApolloClient({
    uri:"http://localhost:5000/graphql",
    cache: new InMemoryCache()
})

function App() {
  return (
    <>
    <Header />
    <div className='container'>
     <Clients />
    </div>
    </>
  );
}

export default App;
