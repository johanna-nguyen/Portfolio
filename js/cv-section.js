function initCVSection(){
    const viewBtn = document.getElementById("view-cv");
    const downloadBtn = document.getElementById("download-cv");

    const cvFile = "assets/documents/cv.pdf";

    viewBtn.addEventListener("click", () => {
        window.open(cvFile, "_blank");
    });

    downloadBtn.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = cvFile;
        link.download = "cv.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}
