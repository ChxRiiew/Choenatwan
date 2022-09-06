import React,{ Component } from 'react'

class Form extends Component{
constructor(props){
	super(props)
	this.state = { email:'',name:'', age:null, address:'',phoneNo:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const { email, name, age, address, phoneNo, สีที่ชอบ, วันเกิด, ชอบเลขอะไร, เดินทางมาเรียนยังไง, เวลาที่ส่ง, } = this.state
	event.preventDefault()
	alert(`
	กรอกข้อมูล\n
	อีเมล : ${email}
	ชื่อ : ${name}
	อายุ : ${age}
	ที่อยู่ : ${address}
	เบอร์โทร : ${phoneNo}
	สีที่ชอบ : ${สีที่ชอบ}
	วันเกิด : ${วันเกิด}
	ชอบเลขอะไร : ${ชอบเลขอะไร}
	เดินทางมาเรียนยังไง : ${เดินทางมาเรียนยังไง}
	เวลาที่ส่ง : ${เวลาที่ส่ง}
	`)
}

// Method causes to store all the values of the
// input field in react state single method handle
// input changes of all the input field using ES6
// javascript feature computed property names
handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}

// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
	return(
	<form onSubmit={this.handleSubmit}>
		<div>
		<label htmlFor='email'>อีเมล</label>
		<input
			name='email'
			placeholder='กรอกข้อมูล'
			value = {this.state.email}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='name'>ชื่อ</label>
		<input
			name='name'
			placeholder='กรอกข้อมูล'
			value={this.state.name}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='age'>อายุ</label>
		<input
			name='age'
			placeholder='กรอกข้อมูล'
			value={this.state.age}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='address'>ที่อยู่</label>
		<input
			name='address'
			placeholder='กรอกข้อมูล'
			value={this.state.address}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='phoneNo'>เบอร์โทร</label>
		<input
			name='phoneNo'
			placeholder='กรอกข้อมูล'
			value={this.state.phoneNo}
			onChange={this.handleChange}
		/>
		<div>
		<label for="favcolor">สีที่ชอบ:</label>
        <input type="color" id="favcolor" name="favcolor" />
		</div>
		</div>
		<div>
		<label for="birthday">วันเกิด:</label>
		<input type="date" id="birthday" name="birthday"></input>
		</div>
		<div>
		<label for="quantity">ชอบเลขอะไร (between 1 and 10):</label>
		<input type="number" id="quantity" name="quantity" min="1" max="10"></input>
		</div>
		<p> <strong></strong> เดินทางมาเรียนยังไง:</p>
		<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
		<label for="vehicle1"> รถจักรยานยนต์</label><br></br>
		<input type="checkbox" id="vehicle2" name="vehicle2" value="Car"></input>
		<label for="vehicle2"> รถยนต์</label><br></br>
		<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"></input>
		<label for="vehicle3"> รถโดยสาร</label><br></br>
		<div>
		<label>เวลาที่ส่ง</label>
		<input type='time' placeholder='day' value={this.timeDay}></input>
		</div>
		<div>
		<button>Create Account</button>
		</div>
		<div></div>
	</form>
	)
}
}

export default Form
