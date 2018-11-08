import express from 'express';
import { matchRoutes} from 'react-router-config';
import { render } from './utils';
import { getStote } from '../store'
import routes from '../Routes';

const app = express();
app.use(express.static('public'));

app.get('*', function(req, res){
    const store = getStote();
const matchchedRoutes = matchRoutes(routes, req.path);
const promises=[];
	matchchedRoutes.forEach(item=>{
		if(item.route.loadData){
			promises.push(item.route.loadData(store))
		}
    });
    Promise.all(promises).then(() =>{
        res.send(render(store,routes, req))
    })
});

app.listen(3000)