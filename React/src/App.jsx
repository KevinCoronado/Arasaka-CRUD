import {Routes,Route} from 'react-router-dom';
import {Login} from './Login';
import { Dashboard } from './Dashboard';
import { StudentNew } from './StudentNew';
import { StudentEdit } from './StudentEdit';
import { StudentCalifications } from './StudentCalifications';
export function App() {
  
  return(
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/student" element={<StudentNew />} />
      <Route path="/student/:studentId" element={<StudentEdit />} />
      <Route path="/student/califications/:matriculaId" element={<StudentCalifications />} />
    </Routes>
  )
}


