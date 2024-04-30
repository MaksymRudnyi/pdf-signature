import './App.css'
import Form from './Form'
import { PDFViewer, PDFDownloadLink, BlobProvider } from '@react-pdf/renderer';
import Document from './Document'
import { useState } from 'react'

function App() {
  const [data, setData] = useState({})

  return (
    <>
      <Form onData={setData}/>

      <PDFViewer>
        <Document data={data} />
      </PDFViewer>
      <PDFDownloadLink document={<Document data={data} />} fileName="document.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
    </>
  )
}

export default App
