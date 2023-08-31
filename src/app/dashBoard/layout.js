
import SideBar from './SideBar';



export const metadata= {
    title: "DashBoard | NextJs",
    description  : "DashBoard Next layout"
}

const DashBoardLayout = ({children}) => {
    return (
        <div className='flex justify-between w-full'>
      <SideBar/>


          {children}
   
        </div>
    );
};

export default DashBoardLayout;