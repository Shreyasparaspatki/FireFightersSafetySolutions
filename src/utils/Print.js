import React from "react";
import { Document, Page, Text, View, PDFViewer } from "@react-pdf/renderer";
const PrintUtility = ({ data }) => {
  console.log(data);
  return (
    <PDFViewer style={{ width: "100%", height: "80vh" }}>
      <Document>
        <Page size="A4">
          <View>
            {data &&
              Object.keys(data).map((key) => (
                <Text key={key}>
                  {key}:{data[key]}
                </Text>
              ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
export default PrintUtility;
