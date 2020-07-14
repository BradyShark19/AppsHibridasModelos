import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

class Number1 extends Component
{
	login()
	{
      Alert.alert('Login de Usuario')
	}

	render()
	{
		return(
			<View style = {Styles.container}>
					<View style = {Styles.header}>
						<View style = {Styles.headerLeft}>
							<Image source = (require('./assets/BaseDatos.png'))
								style = {Styles.logo}> 
							</Image>
						</View>	

						<View style = {Styles.headerRight}>
							<Buttom title = 'Login' onPress=(this.login)> </Buttom>
						</View>
					
					<View style = {Styles.body}>
			   			<Text style = {styles.textColor} onPress=(this.login)>Esta es mi primera App en ReactNative</Text>
				    </View>

					<View style = {Styles.footer}>
						<View style = {Styles.flex, Styles.footerLeft}>
							<Text style = {styles.textColor}> Number1 </Text>
						</View>	

						<View style = {Styles.footerCenter}>
							<Text style = {styles.textColor}> Hello Number1 </Text>
						</View>	

						<View style = {Styles.footerRight}>
							<Image source = (require('./assets/BaseDatos.png')) style = {Styles.logo}> </Image>
						</View>
					</View>						

			</View>	
			   )
	}
}

const Styles = StyleSheet.create({
	container :{
		flex: 1,
		flexDirection: 'colum'
		//justifyContent: 'center',
		//alignItems: 'center',
		backgroundColor: 'green'
	},

	header: {
		flex: 0.5,
		flexDirection: 'row',
		marginTop: 30
	},

	headerLeft: {
		flex: 1,
	},

	headerRight: {
		flex: 0.3,
	},

	body: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'		
	},

	logo: {
		width: 100,
		height: 60,
		resizeMode: 'contain',
		borderRadius: 30		
	},

	footer: {
		flex: 1,
		flexDirection: 'row'	
	},


	flex: {
		flex: 1,	
	},

	footerLeft: {
		alignItems: 'center',
		justifyContent: 'center'
	},

	footerCenter: {
		alignItems: 'center',
		justifyContent: 'center'		
	},

    footerRight: {
		alignItems: 'flex-end',
		justifyContent: 'center'
	},

	textColor: {
		color: 'white'	
	}

}) 

export default Number1
 