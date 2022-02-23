import { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const allowedTypes = ['image/png', 'image/jpeg'];

  const changeHandler = (event) => {
    const selected = event.target.files[0];

    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };

  return (
    <form>
      <input type="file" onChange={changeHandler} />
      <div className="output">{error && <div className="error">{error}</div>}</div>
      {file && <div>{file.name}</div>}
    </form>
  );
};

export default UploadForm;
