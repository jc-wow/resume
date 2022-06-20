import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const useParse = (editResult: string) => {
  return JSON.parse(editResult);
};

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontSize: 15,
  },
});

export const PdfDoc = (props: { editResult: string }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <Text>{useParse(props.editResult).name}</Text>
        <View>
          <Text>{useParse(props.editResult).phone}</Text>
          <Text>{useParse(props.editResult).email}</Text>
        </View>
      </Page>
    </Document>
  );
};
