import { useEffect, useState } from "react";
import { getFiles } from '../../api/files.api';

export function FileList() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        async function LoadFiles() {
            try {
                const res = await getFiles();
                console.log("Response from API:", res);  

                const data = Array.isArray(res.data) ? res.data : [res.data];
                setFiles(data);
            } catch (error) {
                console.error("Error fetching files:", error);
            }
        }
        LoadFiles();
    }, []);

    return (
        <div>
            {files.length > 0 ? (
                files.map(file => (
                    <div key={file.id}>
                        <h1>{file.title}</h1>
                        
                    </div>
                ))
            ) : (
                <p>No files available</p>
            )}
        </div>
    );
}
