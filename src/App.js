import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component.js";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import HomeComponent from "./components/home.component";

function App() {
  return (
    <Router>
    <div >
    <Navbar />
    <Route path="/" exact component={HomeComponent} />
    <Route path="/exerciselist"  component={ExercisesList} />
    <Route path="/edit/:id" component={EditExercise} />
    <Route path="/create" component={CreateExercise} />
    <Route path="/user" component={CreateUser} />
    </div>
  </Router>
  );
}

export default App;
