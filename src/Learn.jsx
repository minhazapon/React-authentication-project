



const Learn = () => {
    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

            <div>
            
             <h1 className=" mt-14 text-6xl">Thinking in <span className=" text-[#61DBFB]">React</span></h1>

             <p className=" h-[1px] w-[700px] bg-[#61DBFB] mt-10 "></p>

             <p className=" mt-10 text-xl">React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them. In this tutorial, we’ll guide you through the thought process of building a searchable product data table with React.</p>

            </div>

            <h1  className=" mt-10 text-6xl font-bold">Step 1: Break the UI into a component hierarchy</h1>

            <p className=" mt-10 text-xl">Start by drawing boxes around every component and subcomponent in the mockup and naming them. If you work with a designer, they may have already named these components in their design tool. Ask them!

Depending on your background, you can think about splitting up a design into components in different ways:

Programming—use the same techniques for deciding if you should create a new function or object. One such technique is the single responsibility principle, that is, a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.
CSS—consider what you would make class selectors for. (However, components are a bit less granular.)
Design—consider how you would organize the design’s layers.
If your JSON is well-structured, you’ll often find that it naturally maps to the component structure of your UI. That’s because UI and data models often have the same information architecture—that is, the same shape. Separate your UI into components, where each component matches one piece of your data model.</p>
            


             <div className=" flex items-center gap-5">

             <p className=" mt-10 text-2xl font-bold">Go to Official Site</p>

             <div className=" mt-10">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
             </svg>
             </div>

            
             <a href="https://react.dev/" className="link link-accent mt-10 text-2xl "> <span className=" text-[#61DBFB] ">React Dev</span></a>


             </div>










        </div>


        
    );
};

export default Learn;