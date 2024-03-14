import Card from './Card';

function App() {
  return (

    <div className="App min-w-96 px-1 ml-auto mr-auto text-center  text-3xl font-bold ">
      <div >
        <h1 className=" md:text-9xl font-extrabold text-center bg-slate-300 text-transparent  bg-[url('Images/new.jpg')] bg-center bg-clip-text sm:text-3xl ">ASTRONOMY</h1>
       </div>
        
    <div className = "px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
      
    <Card subname ={'Observation Astronomy'}     imgsrc = {require('./Images/1.png')} staff={'Devakumar'} times = {'1hr45min'} />
    <Card subname ={'Theoreitcal Astrophysics'}  imgsrc = {require('./Images/2.jpg')} staff = {'Raj'} times={'1hr'} />
    <Card subname ={'Essential Astrophysics'}    imgsrc = {require('./Images/3.jpg')} staff= {'Shiva'} times={'45min'}  />
    <Card subname ={'Stellar Evolution'}         imgsrc = {require('./Images/4.jpg')} staff={'Pradeep'}  times={'30min'} />
    <Card subname ={'Spherical Astronomy'}       imgsrc = {require('./Images/5.jpg')} staff={'Karthik'} times={'50min'}/>
    
    </div>
    </div>
  );
}
export default App;