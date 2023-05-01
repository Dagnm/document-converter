function convert() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
  
    if (file.type !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      alert("Please select a Word document (.docx)");
      return;
    }
  
    const docx = new DocxToPdf();
    docx.convert(file)
      .then(result => {
        const pdfBlob = result.blob;
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl);
      })
      .catch(error => {
        console.error(error);
        alert("An error occurred during the conversion process");
      });
  }
  