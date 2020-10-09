/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import DefaultLayout from '../components/layouts/DefaultLayout';
import { Document, Page, pdfjs } from 'react-pdf';
import resumepdf from '../../static/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function Resume() {
  function onSuccess() {}

  function onError(error) {}

  return (
    <DefaultLayout>
      <span
        css={css`
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          .resume-pdf {
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: auto;
          }
        `}
      >
        <Document
          className="resume-pdf"
          file={resumepdf}
          onLoadError={onError}
          onLoadSuccess={onSuccess}
        >
          <Page pageNumber={1} />
        </Document>
      </span>
    </DefaultLayout>
  );
}
