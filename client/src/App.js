import Header from "./components/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client= new ApolloClient({
    uri:"http://localhost:5000/graphql",
    cache: new InMemoryCache()
})

function App() {
  return (
    <>
    <Header />
    <div className='container'>
      <h1>Hi</h1>
    </div>
    </>
  );
}

export default App;
