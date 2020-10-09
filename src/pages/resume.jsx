/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import DefaultLayout from '../components/layouts/DefaultLayout';
import { Document, Page, pdfjs } from 'react-pdf';
import resumepdf from '../../static/resume.pdf';
import constants from '../utils/config/constants';
import { navigate } from 'gatsby';

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
            @media (max-width: ${constants.smallLaptopBreakPoint}) {
              width: 110%;
              zoom: 0.65;
            }
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
