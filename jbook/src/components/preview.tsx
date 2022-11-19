import { useRef, useEffect } from 'react';
import './preview.css'

interface PreviewProps {
    code: string;
}

const html = `
<html>
  <head></head>
  <body>
    <div id="root"></div>
    <script>
        window.addEventListener('message', (e) => {
          try {
            eval(e.data)
          } catch (err) {
            const root = document.querySelector('#root');
            root.innerHTML = '<div style="color: red"><h4>Runtime Error:</h4>' + err + '</div>'
            console.log(err)
          }
        }, false);
    </script>
  </body>
</html>
`;

const Preview: React.FC<PreviewProps> = ({ code }) => {
    const iframe = useRef<any>();

    useEffect(() => {
        iframe.current.srcdoc = html;
        iframe.current.contentWindow.postMessage(code, '*');
    }, [code]);

    return (
        <div className="preview-wrapper">
            <iframe 
                title="code preview" 
                ref={iframe} 
                sandbox="allow-scripts" 
                srcDoc={html}
            />
        </div>
    );
};

export default Preview;