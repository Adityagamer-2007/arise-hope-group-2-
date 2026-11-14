import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components'
import * as P from './pages'
export default function App() {
  return <><a href="#main" className="skip">Skip to content</a><Header /><main id="main"><Routes>
    <Route path="/" element={<P.Home />} /><Route path="/about" element={<P.About />} />
    <Route path="/industries" element={<P.Industries />} /><Route path="/industries/:slug" element={<P.Industry />} />
    <Route path="/business-model" element={<P.Model />} /><Route path="/sustainability" element={<P.Sustainability />} />
    <Route path="/roadmap" element={<P.Roadmap />} /><Route path="/governance" element={<P.Governance />} />
    <Route path="/contact" element={<P.Contact />} /><Route path="*" element={<P.NotFound />} /></Routes></main><Footer /></>
}
