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
    props.callshowAlert('converted to lowercase','Success')
  }

  const clearText=()=>{
    setText("")
    props.callshowAlert('Text has been cleared','Success')
  }

  const handleOnChange=(e)=>{
    setText(e.target.value)
  }


  const handleExtraSpaces = ()=>{
    let words = text.split(' ');
    let joinedWords = '';
    // console.log(words);
    words.forEach((elem)=>{
        if(elem[0] != undefined){
            joinedWords += elem + " ";
            console.log(joinedWords);
        }
    })
    setText(joinedWords);
    props.callshowAlert('Extraspaces in the text has been removed','Success')
}

  
    const reversed = () => {
      let splitWord = text.split("");
  
      let reverseWord = splitWord.reverse("");
      let joinedWords = reverseWord.join("");
      let newText = joinedWords
      props.callshowAlert('Reversed the text','Success')
  
      setText(newText);
    };
  

  
  return (
    <div className="flex flex-col space-y-4 bg-white  dark:bg-[#131417]">
      <h1 className="lable ml-32 mt-8 text-2xl font-medium text-black dark:text-white">{props.heading}</h1>
      <textarea  id="Tbox" rows="8" value={text} placeholder="  Enter text here" onChange={handleOnChange} className="txtarea text-black border-2 border-black w-4/5 ml-32 rounded bg-white dark:bg-[#39393c] dark:text-white"></textarea>
      <div className="btn flex space-x-3">
      <button onClick={handleUC} className="btn bg-slate-300 text-black  p-2 ml-32 font-medium rounded transition-all hover:bg-[#133C55]  hover:text-white hover:-translate-y-0.5 ease duration-[600ms]  dark:bg-[#39393c] dark:text-white dark:hover:text-black dark:hover:bg-white">Convert to Uppercase</button>
      <button onClick={handleLC} className="btn bg-slate-300 text-black  p-2 ml-32 font-medium rounded transition-all hover:bg-[#133C55]  hover:text-white hover:-translate-y-0.5 ease duration-[600ms] dark:bg-[#39393c] dark:text-white dark:hover:text-black dark:hover:bg-white">Convert to Lowercase</button>
      <button onClick={reversed} className="btn bg-slate-300 text-black  p-2 ml-32 font-medium rounded transition-all hover:bg-[#133C55]  hover:text-white hover:-translate-y-0.5 ease duration-[600ms] dark:bg-[#39393c] dark:text-white dark:hover:text-black dark:hover:bg-white">Reverse text</button>
      <button onClick={handleExtraSpaces} className="btn bg-slate-300 text-black  p-2 ml-32 font-medium rounded transition-all hover:bg-[#133C55]  hover:text-white hover:-translate-y-0.5 ease duration-[600ms] dark:bg-[#39393c] dark:text-white dark:hover:text-black dark:hover:bg-white">Remove Extraspaces</button>
      <button onClick={clearText} className="btn bg-slate-300 text-black  p-2 ml-32 font-medium rounded transition-all hover:bg-[#FA7E61]  hover:text-white hover:-translate-y-0.5 ease duration-[600ms] dark:bg-[#39393c] dark:text-white dark:hover:text-black dark:hover:bg-white">Clear text</button>

      </div>
      <div className="otherinfo ml-32 space-y-2 text-black dark:text-white">
        <h1 className="text-3xl font-medium">Your text summary</h1>
        <p className="font-medium ml-[5px]">Your text contains <span className="text-[#D64933] font-bold italic text-lg">{text.split(" ").length-1}</span> Words and <span className="text-[#D64933] font-bold italic text-lg">{text.length}</span> Characters</p>
        <p className="font-medium ml-[5px]">It takes about <span className="text-[#D64933] font-bold italic text-lg">{0.008 * (text.split(" ").length-1)}</span> minutes to read this text</p>
        <h2 className="text-2xl font-medium">Preview</h2>
        <p className="font-medium ">{text}</p>
        
      </div>
    </div>
  );
}
