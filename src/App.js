import './App.css';
import Header from "./components/header/header";
import Note from "./components/note";
import Calendar from "./components/calendar";
import Footer from "./components/footer";
import CourseMenu from './components/courses/courseMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <Note />
      <Calendar />
      <CourseMenu />
      <Footer />
    </div>
  );
}

export default App;
