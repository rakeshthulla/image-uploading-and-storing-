document.getElementById('uploadForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select an image to upload.");
    return;
  }

 
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

   
    alert(`Image uploaded successfully`);

    
    const uploadedImage = document.createElement('img');
    uploadedImage.src = result.filePath; 
    document.body.appendChild(uploadedImage);
  } catch (error) {
    console.error('Error uploading file:', error);
    alert('Failed to upload image.');
  }
});
