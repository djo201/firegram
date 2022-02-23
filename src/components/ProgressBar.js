import useStorage from '../hooks/useStorage';

const ProgressBar = (props) => {
  const { file, setFile } = props;
  const { url, progress } = useStorage(file);

  console.log(progress, url);

  return <div className="progress-bar" style={{ width: progress + '%' }}></div>;
};

export default ProgressBar;
