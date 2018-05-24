import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import List from './pages/list'


class Student extends Component {
    render() {
        // const list = [
        //     <List name="Vikram" job="SFD" like="games" onClick={() => {window.confirm('Are you sure you wish to delete this item?')} }/>,
        //     <List name="Husi" job="SFD" like="games" />,
        //     <List name="Vikram" job="SFD" like="games" />,
        //     <List name="Vikram" job="SFD" like="games" no={2}/>
        // ]
        return (
            <div className='student-list'>
                {this.props.children}
            </div>
        );
    }
}

export default Student;

ReactDOM.render(
<Student>
    <List job="SFD" like="games" no={1} > Vikram </List>
    <List job="SFD" like="games" no={1} > Vikram 1 </List>
    <List job="SFD" like="games" no={1} > Vikram 2 </List>
</Student>, 
document.getElementById('root'));
registerServiceWorker();
