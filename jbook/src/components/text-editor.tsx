import MDEditor from '@uiw/react-md-editor';
import { useState, useEffect, useRef } from 'react';
import './text-editor.css';

const TextEditor: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState('# Header')

    useEffect(() => {
        const lisener = (event: MouseEvent) => {
            if (ref.current && event.target && ref.current.contains(event.target as Node)) {
                console.log('Element clicked on is inside editor')
                return;
            };

            console.log('Element clicked on is not inside editor.')
            setEditing(false);
        };

        document.addEventListener('click', lisener, { capture: true });

        return () => {
            document.removeEventListener('click', lisener, { capture: true });
        }
    }, []);

    if (editing) {
        return (
            <div className="text-editor" ref={ref}>
                <MDEditor value={value} onChange={(v) => setValue(v || '')}/>
            </div>
        )
    }
    return (
        <div className="text-editor card" onClick={() => setEditing(true)}>
            <div className="card-content">
                <MDEditor.Markdown source={value}/>
            </div>
        </div>
    );
};

export default TextEditor;