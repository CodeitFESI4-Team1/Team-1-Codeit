import FileInputContainer from '../components/common/input/file-input-container';

export default function Home() {
  return (
    <div className="container">
      CREW CREW
      <FileInputContainer value={{ image: null }} />
    </div>
  );
}
