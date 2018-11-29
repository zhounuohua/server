import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { actions } from './store/'

class Header extends Component {
	render(){
		const {
			login,
			handleLogin,
			handleLogout
		} = this.props;
		console.log(login)
		return(
			<div>
				<Link to='/'>首页</Link>
				<br />
				{
					login ? <Fragment>
						<Link to='/'>翻译</Link>
						<br />
						<div onClick = {handleLogout}>退出</div>
					</Fragment>:<div onClick={handleLogin}>登录</div>
				}
			</div>
		)
	}
}
const maostate = (state) =>({
	login:state.header.login
});

const mapDispath = (dispatch) =>({
	handleLogin() {
		dispatch(actions.login())
	},
	handleLogout() {
		dispatch(actions.logout())
	}
})

export default connect(maostate,mapDispath)(Header);