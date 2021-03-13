/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Document, Page, pdfjs } from 'react-pdf';
import resumepdf from '../../static/resume.pdf';
import DefaultLayout from '../components/layouts/DefaultLayout';
import constants from '../utils/config/constants';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function Resume() {
  function onSuccess() {}

  function onError(error) {}

  return (
    <DefaultLayout pageTitle="Resume`">
      <span
        css={css`
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          .resume-pdf {
            margin-top: 2em;
            width: fit-content;
            height: fit-content;
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
