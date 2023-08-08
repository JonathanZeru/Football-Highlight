import './App.css';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Content from './component/Content';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
    <div>
      <NavBar/>
      <Content/>
      <Footer/>
    </div>
    </QueryClientProvider>
  );
}

export default App;
