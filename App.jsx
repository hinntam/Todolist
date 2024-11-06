/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView
} from 'react-native';
import TodoList from './ToDoList';
import ToDoForm from './ToDoForm';
function App() {
  const[tasks,setTasks]= useState(['Do laundry','Go to gym','Walk dog']);
  const addTask=(taskText)=>{
     // Implement the logic to add a new task
    let flag=false;
    tasks.map((task)=>{
      if(task==taskText){
        flag=true;
      }
    });
    if(flag==true){
      Alert.alert('The task exists in the list!');
    }
    else{
      setTasks([...tasks, taskText]);
    }
    
  }
  return (
    <SafeAreaView>
      <TodoList tasks={tasks}/>
      <ToDoForm addTask={addTask}/>
      
    </SafeAreaView>
  );
}



export default App;
