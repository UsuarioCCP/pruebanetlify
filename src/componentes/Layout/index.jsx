import './styles.css'
// import { Snowfall } from '../Snowfall/Snowfall';

const Layout = ({ children }) => {
    return(
        <div className="flex flex-col">
            {/* <Snowfall snowflakeCount={200} fallSpeed={20}/> */}
            { children }
        </div>
    )
};

export default Layout