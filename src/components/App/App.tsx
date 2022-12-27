import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { HomePage } from '../HomePage/HomePage';
import { WrongPage } from '../WrongPage/WrongPage';
import { PeoplePage } from '../PeoplePage';

export const App = () => (
  <div data-cy="app">
    <NavBar />

    <main className="section">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="home"
            element={<Navigate to="/" replace />}
          />

          <Route
            path="*"
            element={<WrongPage />}
          />

          <Route
            path="people/:slug"
            element={<PeoplePage />}
          />

          <Route
            path="people"
            element={<PeoplePage />}
          />
        </Routes>
      </div>
    </main>
  </div>
);
