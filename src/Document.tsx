import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';
import img  from './assets/react.png'
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 30,
  },
  section: {
    flexGrow: 1,
    fontSize: 12,
  },
  signature: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  signatureImage: {
    width: 100,
    height: 50,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 3,
  },
  contractText: {
    marginBottom: 30,
    fontSize: 12,
  },
  image: {
    marginVertical: 15,
    width: 100,
    alignSelf: 'center',
  }
});

// Create Document Component
const PDFDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>SERVICE CONTRACT</Text>
      <Image
        style={styles.image}
        src={img}
      />
      <Text style={styles.contractText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
      <View style={styles.section}>
        <Text>First Name: {data.firstName}</Text>
        <Text>Last Name: {data.lastName}</Text>
        <Text>Email: {data.email}</Text>
        <Text>Phone: {data.phone}</Text>
        <Text>Address: {data.address}</Text>
      </View>
      <View style={styles.signature}>
        <Text>Date: {new Date().toLocaleDateString()}</Text>
        {data.signature && <Image src={data.signature} style={styles.signatureImage} />}
      </View>
    </Page>
  </Document>
);

export default PDFDocument;