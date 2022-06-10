import React, { useState } from 'react';
import resume from '../PhotoList/utils/FullStackDeveloperResume.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    const [resumeState, setResumeState] = useState({ link: '', proficiencies: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { link, proficiencies } = resumeState;

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!errorMessage) {
    //         console.log('Show Resume', resumeState);
    //     }
    // };

    // const handleChange = (e) => {
    //     if (e.target.link === 'Link') {
    //         const isValid = validateLink(e.target.value);
    //         if (!isValid) {
    //             setErrorMessage('Your link is invalid.');
    //         } else {
    //             setErrorMessage('');
    //         }
    //     } else {
    //         if (!e.target.value.length) {
    //             setErrorMessage(`${e.target.link} is required.`);
    //         } else {
    //             setErrorMessage('');
    //         }
    //     }
    //     if (!errorMessage) {
    //         setFormState({ ...resumeState, [e.target.link]: e.target.value });
    //         console.log('Handle Resume', resumeState);
    //     }
    // };
    return (
        // <div className='res'>
        //     <h2 className='heading'>Resume</h2>
        //     <Document
        //         file={"https://docs.google.com/document/d/1q-rfzvEeXitwWYX-SgBZXtDlo11dVKrIrlfZDlzJMM8/edit?usp=sharing"}
        //         onLoadError={console.error}
        //         style={{ width: '100vw', height: 'auto' }}
        //     >
        //         <Page pageIndex={0}/>
        //     </Document>
        // </div>
        <div className='res'>
            <h2 className='heading'>Resume</h2>
            <a href="https://docs.google.com/document/d/1q-rfzvEeXitwWYX-SgBZXtDlo11dVKrIrlfZDlzJMM8/edit?usp=sharing" rel="noreferrer" target='_blank'>
                <Document
                    file={resume}
                    onLoadError={console.error}
                    style={{ width: '100vw', height: 'auto' }}
                >
                    <Page pageIndex={0} />
                </Document>
            </a>
        </div>
    )
};



export default Resume;

