import {useState, useEffect} from "react";
import Typewriter from 'typewriter-effect';
import '../styles/home.scss';

export default function Home() {

    const [words, setWords] = useState('websites');
    const skills = ['websites','algorithm','robots','circuits']

    useEffect(() =>{
         setTimeout(() => {
            const index = skills.findIndex((word) => word === words);
            console.log(index, skills.length);
            
            setWords(skills[(index + 1) % skills.length]);
        }, 3000);
        // return () => clearInterval(interval);
    })

    return (
        <div className="flex flex-col"><div className="home flex justify-between">
            <div className="text-left">
                <p className=" font-Kalam text-[143px] text-[#453B3B] drop-shadow-[4px_5px_1px_rgba(0,0,0,0.25)] mt-[10%]">Hello!</p>
                <div className="text-7xl font-serif">I<span className="font-Kalam"> design</span> and <br/><span className="flex">develop {words}</span> </div>
            </div>
            <img src="../../computer.png" alt="computer" className="w-[499px] h-[304px] self-center" />
        </div>
        <div className="font-Sora text-left text-4xl mt-[10%]"><Typewriter
        options={{
            autoStart: true,
        }}
                onInit={(typewriter) => {
                    typewriter.typeString('Error<....................................../>')
                    .callFunction(() => {
                        console.log('String typed out!');
                    })
                    .start();
                }}
                />
        </div>
        <div className="box self-center">
            <div className="ml-1">
            <div className="text-left text-red-500 font-JetBrainsMono">Class <span className="text-green-500">Pawan_Shah </span><span className="text-white">&#123;</span></div> 
            <ul className="text-left ml-4 font-JetBrainsMono">
                <li className="text-white">//Yes I Can !</li>
                <li className="text-white">//Yes I Will !</li>
                <li className="text-white"><span className="text-red-500">this</span>.<span className="text-yellow-500">name</span> = “<span className="text-green-500">Pawan Shah</span>”</li>
                <li className="text-white"><span className="text-red-500">this</span>.<span className="text-yellow-500">email</span> = “<span className="text-green-500">codexpawan@gmail.com</span>”</li>
                <li className="text-white"><span className="text-red-500">this</span>.<span className="text-yellow-500">country</span> = “<span className="text-green-500">Nepal</span>”</li>
            </ul>
            <div className="text-white text-left font-JetBrainsMon">&#125;</div>
            <div className="text-left text-green-500 font-JetBrainsMono"><span className="text-red-500">def </span>load_skill() <span className="text-white">&#123;</span></div>
            <ul className="text-left font-JetBrainsMono text-white">
                <li className="ml-4"><span className="text-yellow-500">Return</span> [‘<span className="text-green-500">Robotics</span>’,‘<span className="text-green-500">HTML/CSS</span>’,‘<span className="text-green-500">JavaScript</span>’,‘<span className="text-green-500">Python</span>’,‘<span className="text-green-500">Machine_Learning</span>’,‘<span className="text-green-500">Micro_Controllers</span>’,‘<span className="text-green-500">IOT</span>’,‘<span className="text-green-500">C/C++</span>’,‘<span className="text-green-500">DBMS</span>’]</li>
            </ul>
            <div className="text-white text-left font-JetBrainsMon">&#125;</div>
            </div>
        </div>
        
        </div>
    );
}
