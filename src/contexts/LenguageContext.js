import { createContext, useMemo, useState, useContext } from "react";

export const LenguageArr = {
    ge:{
        navbar:{main:"მთავარი",create:"შექმნა",about:"შესახებ"},
        title:"დავალებების სია",
        user:"მომხმარებელი:",
        date:"თარიღი:",
        priority:"პრიორიტეტი:",
        task:"დავალება:",
        placeHolders:{taskPH:"შეიყვანე დავალება",firstNamePH:"სახელი",lastNamePH:"გვარი"},
        priorityOptions:{low:"დაბალი",medium:"საშუალო",high:"მაღალი"},
        taskPriority:"პრიორიტეტი",
        addForm:"დავალების დამატება",
        addBtn:"დამატება",
        changeBtn:"შეცვლა",
        changeForm:"დავალების შეცვლა",
        aboutPageText:`დავალებების აპლიკაცია, სადაც სიმარტივე ხვდება პროდუქტიულობას. თანამედროვე ცხოვრების აურზაურში,
        ორგანიზებული და დავალებების შესრულება შეიძლება ნამდვილი გამოწვევა იყოს. სწორედ აქ 
        მოვდივართ - დაგეხმაროთ კონტროლის აღდგენაში და თქვენი ძვირფასი დროის მაქსიმალურად გამოყენებაში.

        ცხოვრება ხშირად ჟონგლირების მსგავსია, მრავალი პასუხისმგებლობითა და მიზნებით, რომლებიც იბრძვიან ჩვენი ყურადღებისთვის. სამუშაოების სია უფრო მეტია,
        ვიდრე უბრალოდ სია; ეს არის თქვენი საგზაო რუკა წარმატებისკენ. ეს არის ძლიერი ინსტრუმენტი, რომელსაც შეუძლია გარდაქმნას ქაოსი წესრიგად, შფოთვა სიცხადედ და გაჭიანურება მიღწევად`
    },
    en:{
        navbar:{main:"Main",create:"Create",about:"About"},
        title:"To Do List",
        user:"User:",
        date:"Due Date:",
        priority:"Priority:",
        task:"Task:",
        placeHolders:{taskPH:"Enter To-Do",firstNamePH:"First Name",lastNamePH:"Last Name"},
        priorityOptions:{low:"Low",medium:"Medium",high:"High"},
        taskPriority:"Priority",
        addForm:"Add To-Do Task",
        addBtn:"Add",
        changeBtn:"Change",
        changeForm:"Change To-Do Task",
        aboutPageText:`To-do app, where simplicity meets productivity. In the hustle and bustle of modern life, 
        staying organized and on top of tasks can be a real challenge. That's where we come in - to help you reclaim 
        control and make the most of your precious time.
        
        Life often feels like a juggling act, with numerous responsibilities and goals vying for our attention. A to-do list is more than just a list; 
        it's your roadmap to success. It's a powerful tool that can transform chaos into order, anxiety into clarity, and procrastination into accomplishment`
    }
}

const LenguageContext = createContext(null);

const LenguageContextProvider = ({children}) => {
    const [lenguageEn, setLenguageEn] = useState(true)

    const contextValue = useMemo(() =>({
        lenguage: lenguageEn ? "en" : "ge",
        changeLenguage:() => setLenguageEn((prev) => !prev)
    }),[lenguageEn])

    return <LenguageContext.Provider value={contextValue}>
        {children}
    </LenguageContext.Provider>
}

export const useLenguageContext = () => {
    const contextValue = useContext(LenguageContext)
    if(!contextValue) throw new Error("no context provided")

    return contextValue
}

export default LenguageContextProvider