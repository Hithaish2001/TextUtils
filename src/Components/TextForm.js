import React,{useState} from "react";

export default function TextForm(props) {
  const [text,setText] = useState('');

  const handleUC=()=>{

    let newText=text.toUpperCase()
    props.callshowAlert('converted to uppercase','Success')
    setText(newText)
    
  }
 
  const handleLC=()=>{
    let newText = text.toLocaleLowerCase()
    setText(newText)
  }

  const clearText=()=>{
    setText("")
  }

  const handleOnChange=(e)=>{
    setText(e.target.value)
  }

  
    const reversed = () => {
      let splitWord = text.split("");
  
      let reverseWord = splitWord.reverse("");
      let joinedWords = reverseWord.join("");
      let newText = joinedWords
  
      setText(newText);
    };
  

  
  return (
    <div className="flex flex-col space-y-4 ">
      <h1 className="lable ml-32 mt-8 text-2xl font-medium">{props.heading}</h1>
      <textarea  id="Tbox" rows="8" value={text} placeholder="  Enter text here" onChange={handleOnChange} className="txtarea border-2 border-black w-4/5 ml-32 rounded"></textarea>
      <div className="btn flex space-x-3">
      <button onClick={handleUC} className="btn bg-slate-300 text-black  p-2 ml-32 font-medium rounded transition-all hover:bg-[#133C55]  hover:text-white hover:-translate-y-0.5 ease duration-700 ">Convert to Uppercase</button>
      <button onClick={handleLC} className="btn bg-slate-300 text-black  p-2 ml-32 font-medium rounded transition-all hover:bg-[#133C55]  hover:text-white hover:-translate-y-0.5 ease duration-700">Convert to Lowercase</button>
      <button onClick={reversed} className="btn bg-slate-300 text-black  p-2 ml-32 font-medium rounded transition-all hover:bg-[#133C55]  hover:text-white hover:-translate-y-0.5 ease duration-700">Reverse text</button>
      <button onClick={clearText} className="btn bg-slate-300 text-black  p-2 ml-32 font-medium rounded transition-all hover:bg-[#FA7E61]  hover:text-white hover:-translate-y-0.5 ease duration-700">Clear text</button>
      </div>
      <div className="otherinfo ml-32 space-y-2">
        <h1 className="text-3xl font-medium">Your text summary</h1>
        <p className="font-medium ml-[5px]">Your text contains <span className="text-[#D64933] font-bold italic text-lg">{text.split(" ").length-1}</span> Words and <span className="text-[#D64933] font-bold italic text-lg">{text.length}</span> Characters</p>
        <p className="font-medium ml-[5px]">It takes about <span className="text-[#D64933] font-bold italic text-lg">{0.008 * (text.split(" ").length-1)}</span> minutes to read this text</p>
        <h2 className="text-2xl font-medium">Preview</h2>
        <p className="font-medium">{text}</p>
      </div>
    </div>
  );
}
