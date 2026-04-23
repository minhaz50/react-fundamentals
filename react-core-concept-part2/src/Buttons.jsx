export default function Buttons() {
  return (
    <Toolbar
      onPlayMovie={() => alert("playing")}
      onUploadImage={() => alert("Uploading")}
    ></Toolbar>
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movies</Button>
      <Button onClick={onUploadImage}>Upload Images</Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
