import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { getHomeListData } from './store/actions'

class Home  extends Component {

	getList(){
		const { list } = this.props;
		return list.map((item)=><div key={item.id}> {item.id} : {item.title}.</div>)
	};
	render(){
		return (
			<div>
				<Header/>
				{this.getList()}
				<button onClick={()=>{alert("click")}}>
					click
				</button>
			</div>
		)
	};
	componentDidMount(){
		if(!this.props.list.length){
			this.props.getHomeList();
		}
	};
};

Home.loadData = (store) =>{
	return store.dispatch(getHomeListData())
}

const mapStateToProps = (state)=>({
	list:state.home.newsList
});
const mapDispatchToProps = (dispatch) =>({
	getHomeList(){
		dispatch(getHomeListData(dispatch))
	},
})

export default connect( mapStateToProps, mapDispatchToProps )(Home);