import React, { useState } from 'react'



export default function TextArea(props) {

    const [text, setText] = useState("Enter Your Text!!!")

    //duplication function
    function findDuplicateWords(string) {
        // Create an object to store the frequency of each word
        const wordFrequency = {};
        // Split the string into an array of words
        const words = string.toLowerCase().split(/\W+/);
        // Iterate over each word
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            // Skip empty words
            if (word === '') {
                continue;
            }
            // Increase the frequency count for the word
            if (wordFrequency[word]) {
                wordFrequency[word]++;
            } else {
                wordFrequency[word] = 1;
            }
        }
        const duplicateWordCount = {};

        // Iterate over the wordFrequency object
        for (const word in wordFrequency) {
          const frequency = wordFrequency[word];
      
          // Check if the word is a duplicate
          if (frequency > 1) {
            duplicateWordCount[word] = frequency;
          }
        }
      
        return duplicateWordCount;
    }
    const result = findDuplicateWords(text);



    function handleOnchange(e) {
        setText(e.target.value)
    }

    function handleUpchange() {
        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase")
      
    }
    function handleLOchange() {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase")
    }
    function handleClear() {
        let newText = "";
        setText(newText);
    }
console.log(result);
    return (

        <>
            < div className='container'>
                <div className="mb-3">
                    <label htmlFor="textArea" className="form-label">{props.heading}</label>
                    <textarea className="form-control" id="textArea" onChange={handleOnchange} value={text} rows="6" />
                </div>
                <button type="button " onClick={handleUpchange} className="btn btn-primary mx-3">CAPITALIZE</button>
                <button type="button " onClick={handleLOchange} className="btn btn-primary mx-3">LOWER CASE</button>
                <button type="button " onClick={handleClear} className="btn btn-primary mx-3">Clear Screen</button>
            </div>
            <div className='container my-3'>
                <h1 className={` text-${props.mode==="light"?"black":"white"}`}>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h2 className={` text-${props.mode==="light"?"black":"white"}`}>Preview</h2>
                <p>{text.length>0?text:"Enter text pls"}</p>
                <h2 className={` text-${props.mode==="light"?"black":"white"}`}>Duplicated words</h2>
                <p >{JSON.stringify(result,null,2)}</p>
            </div>
        </>
    )
}

// JSON.stringify(result,null,2)