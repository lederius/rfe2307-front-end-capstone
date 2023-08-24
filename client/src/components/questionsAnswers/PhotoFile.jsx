import React, {useState, useEffect} from 'react';



const PhotoFile = () => {
  const [files, setFiles] = useState([]);
  const [previewing, setPreviewing] = useState(false);

  const handleChange = (e) => {
    if (e === undefined) {
      return;
    }
    let files = e.target.files;
    let filesArray = Object.entries(files).map(([key, value]) => value);
    console.log(filesArray);
    setFiles(filesArray);
    if (filesArray.length > 0) {
      setPreviewing(true);
    }
  };

  useEffect(()=> {
    handleChange();
  }, [previewing]);

  return (
    <div>
      <input multiple type="file" accept="image/*" onChange={(e)=>handleChange(e)}/>
      <div className="flex flex-row justify-center gap-1">
        {previewing && files.map((file)=> {
          let src = URL.createObjectURL(file);
          return <img className="max-h-20 w-40 object-scale-down" src={src}></img>;
        })}
      </div>
    </div>
  );


};

export default PhotoFile;