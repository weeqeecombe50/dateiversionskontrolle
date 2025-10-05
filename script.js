document.getElementById('upload-button').addEventListener('click', function() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (file) {
        // Logic to upload the file and track versions
        console.log(`Successfully uploaded: ${file.name}!`);
        addVersionToHistory(file.name);
    }
});

function addVersionToHistory(fileName) {
    const versionList = document.getElementById('version-list');
    const li = document.createElement('li');
    li.textContent = `Version of ${fileName} on ${new Date().toLocaleString()}`;
    versionList.appendChild(li);
}