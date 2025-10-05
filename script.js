document.getElementById('upload-button').addEventListener('click', function() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (file) {
        // Logik zum Hochladen der Datei und Verfolgen der Versionen
        console.log(`Datei ${file.name} hochgeladen!`);
        addVersionToHistory(file.name);
    }
});

function addVersionToHistory(fileName) {
    const versionList = document.getElementById('version-list');
    const li = document.createElement('li');
    li.textContent = `Version von ${fileName} am ${new Date().toLocaleString()}`;
    versionList.appendChild(li);
}