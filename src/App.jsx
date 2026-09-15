import Layout from './pages/layout/Layout.jsx'
import Dashboard from './pages/childPages/Dashboard.jsx'

function App() {
  return <Layout>{(layoutProps) => <Dashboard {...layoutProps} />}</Layout>
}

export default App