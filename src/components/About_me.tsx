export default function About(){
    return(
        <div className=" mt-4 mb-4">
            <div className="flex items-center">
                <img src="../../my_image.png" alt="my_img" />
                <div className=" font-serif text-2xl ml-2">I am a dynamic person, who is currently a 
                    student. You can contact me through my <a className=" flex-none font-semibold" href="mailto:codexpawan@gmail.com">email</a>.
                </div>
            </div>
        </div>
    );
}