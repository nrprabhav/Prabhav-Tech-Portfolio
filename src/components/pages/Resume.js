import React from "react";
/*
function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <h1>Resume</h1>
      <Document file="resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
*/
function Resume() {
  return (
    <div>
      <h1 className="text-center display-1">Resume</h1>
      <p className="text-center">
        Please download my resume for your reference here: <a href="./resume.pdf">Resume.pdf</a>
      </p>
    </div>
  );
}

export default Resume;
