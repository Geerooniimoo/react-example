import './Work.css';
import apps from './apps.json';

const Work = () => 
    <div className='apps'>
        {apps.map(app => 
            <div key={app.key} className='app'>
                <img src={app.image} alt="app" />
                <div>
                    <h2>{app.title}</h2>
                    <h3>{app.desc}</h3>
                </div>
            </div>
        )}
    </div>

export default Work;