import Login from './containers/Login';
import Home from './containers/Home';
import App from './App'

export default[{
    path:'/',
    component:App,
    loadData:App.loadData,
    routes: [
    {
        path:'/',
        component:Home,
        exact:true,
        loadData:Home.loadData,
        key:'home',
    },{
        path:'/login',
        component:Login,
        exact:true,
        key:'login'
    }

    ]    
}]

