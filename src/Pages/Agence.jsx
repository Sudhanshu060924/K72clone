import React, { useRef } from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger);
  const imgDivRef = useRef(null);
  const imgRef = useRef(null);

  const imgArr = [
    "/img/Agencyimg1.jpg",
    "/img/Agencyimg2.jpg",
    "/img/Agencyimg3.jpg",
    "/img/Agencyimg4.jpg",
   " /img/Agencyimg5.jpg",
    "/img/Agencyimg6.jpg",
    "/img/Agencyimg7.jpg",
   " /img/Agencyimg8.jpg",
    
  ]

  useGSAP(function(){
    gsap.to(imgDivRef.current,{
      scrollTrigger:{
        trigger:imgDivRef.current,
       
        start:'top 29%',
        end:'top -80%',
        scrub:true,
        pin:true,
        onUpdate:(elem)=>{
            let imageIndex;

            if (elem.progress<1){
              imageIndex= Math.floor(elem.progress * imgArr.length)
            }
            else{
              imageIndex = imgArr.length-1;
            }

            imgRef.current.src = imgArr[imageIndex]

        }
      }
    })
  })

  return (
    <div>
      <div className="section1">
        <div ref={imgDivRef} className=" absolute rounded-3xl overflow-hidden top-50 left-[30vw] h-[16vw] w-[12vw] ">
          <img ref={imgRef}
            src=".\img\Agencyimg1.jpg"
            alt="Banner Agence"
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" relative font-[f2]  ">
          <div className="   mt-[55vh] text-center">
            <h1 className="text-[20vw] leading-[16vw] uppercase">
              Soixan7e <br /> Douze
            </h1>
          </div>
          <div className=" font-[f2] pl-[36%]">
            <p className="text-5xl mt-10">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen">

      </div>
    </div>
  );
};

export default Agence;
